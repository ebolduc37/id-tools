/**
 * Initialization of class LineCDG.
 *
 * Initialization of a class for COMME des GARÇONS lines with a name,
 * an operation period, and optionally a production schedule.
 *
 * @author Etienne Bolduc
 */

import { Line, OperationPeriod } from "../../../../utils/index.js";

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
 * Class representing a COMME des GARÇONS line with a name,
 * an operation period, and optionally a production schedule.
 */
class LineCDG extends Line {

    static PRODUCTION_SCHEDULE_TYPES = PRODUCTION_SCHEDULE_TYPES;

    /**
     * Create a COMME des GARÇONS line from a name, an operation period,
     * optionally a production schedule, and an empty collection list.
     * @param {string} name - Line name.
     * @param {OperationPeriod} operationPeriod - Operation period.
     * @param {LineCDG.PRODUCTION_SCHEDULE_TYPES} productionSchedule - Production schedule type.
     */
    constructor(name, operationPeriod = new OperationPeriod(), productionSchedule) {
        super(name, operationPeriod)
        /** @type {LineCDG.PRODUCTION_SCHEDULE_TYPES} */
        this.productionSchedule = productionSchedule;
    };

    /**
     * Return a copy of the instance as a new object.
     * @return {LineCDG} Copy of the instance.
     */
    copy() {
        let line = new LineCDG(this.name, this.operationPeriod, this.productionSchedule);
        line.collectionList = this.collectionList;
        return line;
    }

    /**
     * Evaluate if the production schedule is early.
     * @return {boolean} True if it is; false otherwise.
     */
    isEarly() {
        return this.productionSchedule === LineCDG.PRODUCTION_SCHEDULE_TYPES.EARLY;
    };

    /**
     * Evaluate if the production schedule is late.
     * @return {boolean} True if it is; false otherwise.
     */
    isLate() {
        return this.productionSchedule === LineCDG.PRODUCTION_SCHEDULE_TYPES.LATE;
    };

    /**
     * Evaluate if there is a production schedule.
     * @return {boolean} True if there is; false otherwise.
     */
    hasProductionSchedule() {
        return Object.values(LineCDG.PRODUCTION_SCHEDULE_TYPES).includes(this.productionSchedule);
    };

    /**
     * Return a new line with the production schedule modified.
     * @param {LineCDG.PRODUCTION_SCHEDULE_TYPES} productionSchedule - New production schedule.
     * @return {LineCDG} Line with the modified production schedule.
     */
    newProductionSchedule(productionSchedule) {
        return new LineCDG(this.name, this.operationPeriod, productionSchedule);
    };

};

export default LineCDG;
