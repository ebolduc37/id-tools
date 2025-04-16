/**
 * Initialization of class LineYY.
 *
 * Initialization of a class for Yohji Yamamoto lines with a name, an operation period,
 * a logo list, and optionally a list of production cycles.
 *
 * @author Etienne Bolduc
 */

import { Line, OperationPeriod } from "../../../../utils/index.js";

/**
 * Enum for cycle types.
 * @readonly
 * @enum {string}
 */
const Cycle = Object.freeze({
    MAIN: "MAIN",
    AUX: "AUX",
    PRE: "PRE",
    CAPSULE: "CAPSULE"
})

/**
 * Class representing a Yohji Yamamoto line with a name, an operation period,
 * a logo list, and optionally a list of production cycles.
 */
class LineYY extends Line {

    static Cycle = Cycle;

    /**
     * Create a COMME des GARÇONS line from a name, an operation period,
     * optionally a production schedule, and an empty collection list.
     * @param {string} name - Line name.
     * @param {OperationPeriod} operationPeriod - Operation period.
     * @param {Object} logoList - Logo list.
     * @param {Object} productionCycle - Production cycle list.
     */
    constructor(name, operationPeriod = new OperationPeriod(), logoList = null, productionCycle = null) {
        super(name, operationPeriod, logoList)
        /** @type {Object} */
        this.productionCycle = {};
        if (productionCycle != null && typeof productionCycle == "object") {
            this.productionCycle = productionCycle.constructor();
            for (let cycle in productionCycle) {
                if (productionCycle.hasOwnProperty(cycle))
                    this.productionCycle[cycle] = productionCycle[cycle].copy();
            }
        }
        else {
            this.productionCycle = {
                "MAIN": new OperationPeriod(),
            }
        }
    };

    /**
     * Return a copy of the instance as a new object.
     * @return {LineYY} Copy of the instance.
     */
    copy() {
        let line = new LineYY(this.name, this.operationPeriod, this.logoList, this.productionCycle);
        line.collectionList = this.collectionList;
        return line;
    }

    /**
     * Return a new line with a collection list for identification.
     * @param {Collection[]} collectionList - Collection list.
     * @return {LineYY} New line with the collection list for identification.
     */
    forIdentification(collectionList) {
        let line = super.forIdentification(collectionList);
        delete line.productionCycle;
        return line;
    }

    /**
     * Evaluate if a collection is in the main production cycle.
     * @return {boolean} True if it is; false otherwise.
     */
    hasInMainCycle(col) {
        if (this.productionCycle[Cycle.MAIN] == null || typeof this.productionCycle != "object")
            return false;
        else return this.productionCycle[Cycle.MAIN].includes(col) && (col.isCollection() || col.hasNoSeason());
    };

    /**
     * Evaluate if a collection is in the auxiliary production cycle.
     * @return {boolean} True if it is; false otherwise.
     */
    hasInAuxCycle(col) {
        if (this.productionCycle[Cycle.AUX] == null || typeof this.productionCycle != "object")
            return false;
        else return this.productionCycle[Cycle.AUX].includes(col) && (col.isCollection() || col.hasNoSeason());
    };

    /**
     * Evaluate if a collection is in the precollection production cycle.
     * @return {boolean} True if it is; false otherwise.
     */
    hasInPreCycle(col) {
        if (this.productionCycle[Cycle.PRE] == null || typeof this.productionCycle != "object")
            return false;
        else return this.productionCycle[Cycle.PRE].includes(col) && (col.isPreCollection() || col.hasNoSeason());
    };

    /**
     * Evaluate if a collection is in the auxiliary production cycle.
     * @return {boolean} True if it is; false otherwise.
     */
    hasInCapsuleCycle(col) {
        if (this.productionCycle[Cycle.CAPSULE] == null || typeof this.productionCycle != "object")
            return false;
        else return this.productionCycle[Cycle.CAPSULE].includes(col) && col.isCapsule();
    };

};

export default LineYY;
