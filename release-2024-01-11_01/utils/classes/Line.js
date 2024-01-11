/**
 * Initialization of class Line.
 *
 * Initialization of a class for lines with a name, an operation period,
 * and optionally a production schedule and a collection list.
 *
 * @author Etienne Bolduc
 */

import OperationPeriod from "./OperationPeriod.js";
import Collection from "./Collection.js";

/**
 * Enum for production schedule types.
 * @readonly
 * @enum {string}
 */
const PRODUCTION_SCHEDULE_TYPES = Object.freeze({
    EARLY: "EARLY",
    LATE: "LATE",
})

/**
 * Enum for signature types.
 * @readonly
 * @enum {string}
 */
const SIGNATURE_TYPES = Object.freeze({
    MAIN: "MAIN",
    OTHER: "OTHER",
})

/**
 * Class representing a line with a name, an operation period,
 * and optionally a production schedule and a collection list.
 */
class Line {

    static PRODUCTION_SCHEDULE_TYPES = PRODUCTION_SCHEDULE_TYPES;
    static SIGNATURE_TYPES = SIGNATURE_TYPES;

    /**
     * Create a line from a name, an operation period,
     * optionally a production schedule, and an empty collection list.
     * @param {string} name - Line name.
     * @param {OperationPeriod} operationPeriod - Operation period.
     * @param {(Line.PRODUCTION_SCHEDULE_TYPES|Line.SIGNATURE_TYPES)} flag - Production schedule type or signature type.
     */
    constructor(name, operationPeriod = new OperationPeriod(), flag) {
        /** @type {string} */
        this.name = name;
        /** @type {OperationPeriod} */
        this.operationPeriod = operationPeriod.copy();
        /** @type {Line.PRODUCTION_SCHEDULE_TYPES} */
        this.flag = flag;
        /** @type {Collection[]} */
        this.collectionList = [];
    };

    /**
     * Return a copy of the instance as a new object.
     * @return {Line} Copy of the instance.
     */
    copy() {
        let line = new Line(this.name, this.operationPeriod, this.flag);
        line.collectionList = this.collectionList;
        return line;
    }

    /**
     * Return a new line with a collection list.
     * @param {Collection[]} collectionList - New collection list.
     * @return {Line} New line with the collection list.
     */
    newCollectionList(collectionList) {
        let line = this.copy();
        line.collectionList = collectionList;
        return line;
    }

    /**
     * Return a new line with the lower bound of the instance changed to another collection.
     * @param {Collection} lowerBound - New lower bound.
     * @return {Line} New line with the new lower bound on the instance.
     */
    newLowerBound(lowerBound) {
        let line = this.copy();
        line.operationPeriod.lowerBound = lowerBound;
        return line;
    };

    /**
     * Return a new line with the upper bound of the instance changed to another collection.
     * @param {Collection} upperBound - New upper bound collection.
     * @return {Line} New line with the new upper bound on the instance.
     */
    newUpperBound(upperBound) {
        let line = this.copy();
        line.operationPeriod.upperBound = upperBound;
        return line;
    };

    /**
     * Return a new line with the bounds of the instance changed to other collections.
     * @param {Collection} lowerBound - New lower bound collection.
     * @param {Collection} upperBound - New upper bound collection.
     * @return {Line} New line with the new upper bound on the instance.
     */
    newBounds(lowerBound, upperBound) {
        return this.newLowerBound(lowerBound).newUpperBound(upperBound);
    };

    /**
     * Evaluate if the production schedule is early.
     * @return {boolean} True if it is; false otherwise.
     */
    isEarly() {
        return this.flag === Line.PRODUCTION_SCHEDULE_TYPES.EARLY;
    };

    /**
     * Evaluate if the production schedule is late.
     * @return {boolean} True if it is; false otherwise.
     */
    isLate() {
        return this.flag === Line.PRODUCTION_SCHEDULE_TYPES.LATE;
    };

    /**
     * Evaluate if there is a production schedule.
     * @return {boolean} True if there is; false otherwise.
     */
    hasProductionSchedule() {
        return Object.values(Line.PRODUCTION_SCHEDULE_TYPES).includes(this.flag);
    };

    /**
     * Return a new line with the production schedule modified.
     * @param {Line.PRODUCTION_SCHEDULE_TYPES} productionSchedule - New production schedule.
     * @return  {Line} Line with the modified production schedule.
     */
    newProductionSchedule(productionSchedule) {
        return new Line(this.name, this.operationPeriod, productionSchedule);
    };

    /**
     * Evaluate if it is the main signature type.
     * @return {boolean} True if it is; false otherwise.
     */
    isSignatureTypeMain() {
        return this.flag === Line.SIGNATURE_TYPES.MAIN;
    };

    /**
     * Evaluate if it is another signature type.
     * @return {boolean} True if it is; false otherwise.
     */
    isSignatureTypeOther() {
        return this.flag === Line.SIGNATURE_TYPES.OTHER;
    };

    /**
     * Return a new line with the signature type modified.
     * @param {Line.SIGNATURE_TYPES} signatureType - New signature type.
     * @return  {Line} Line with the modified signature type.
     */
    newSignatureType(signatureType) {
        return new Line(this.name, this.operationPeriod, signatureType);
    };

    /**
     * Return a string representation of the instance.
     * @return {string} String representation of the instance.
     */
    toString() {

        let str = `${this.name}`;
        
        if (this.collectionList.length > 2
            && this.collectionList.reduce(function (a, b) {return (a != null
            && a.year + 1 === b.year && a.season === b.season) ? b : null;})) {
            if (!this.collectionList[0].isProductionYear()) {
                str += `\n- any ${this.collectionList[0].season} collection between `;
                str += `${this.collectionList[0].season} ${this.collectionList[0].year}`;
                if (this.collectionList[0].isW())
                    str += `-${this.collectionList[0].year + 1}`;
                str += ` and `;
                str += `${this.collectionList.slice(-1)[0].season} ${this.collectionList.slice(-1)[0].year}`;
                if (this.collectionList.slice(-1)[0].isW())
                    str += `-${this.collectionList.slice(-1)[0].year + 1}`;
            }
            else {
                str += `\n- any production year between `;
                str += `${this.collectionList[0]} and `;
                str += `${this.collectionList.slice(-1)[0]}`;
            }
        }
        else if (this.collectionList.length > 2
            && this.collectionList.reduce(function (a, b) {return (a != null && (
                    (a.year === b.year &&
                        a.season === Collection.SEASONS.S &&
                        b.season === Collection.SEASONS.W) ||
                    (a.year + 1 === b.year &&
                        a.season === Collection.SEASONS.W &&
                        b.season === Collection.SEASONS.S)
                    )) ? b : null;})) {
            str += `\n- any collection between `;
            str += `${this.collectionList[0].season} ${this.collectionList[0].year}`;
            if (this.collectionList[0].isW())
                str += `-${this.collectionList[0].year + 1}`;
            str += ` and `;
            str += `${this.collectionList.slice(-1)[0].season} ${this.collectionList.slice(-1)[0].year}`;
            if (this.collectionList.slice(-1)[0].isW())
                str += `-${this.collectionList.slice(-1)[0].year + 1}`;
        }
        else if (this.collectionList.length > 0) for (let col of this.collectionList) str += `\n- ${col}`;
        else str += "\n- no collection";

        return str;
    }
};

export default Line;
