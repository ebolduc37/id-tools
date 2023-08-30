/**
 * Initialization of class LineCDG.
 *
 * Initialization of a class for COMME des GARÇONS lines with a name, an operation period,
 * and optionally a production schedule.
 *
 * @author Etienne Bolduc
 */

import { Line, OperationPeriod } from "../../../../utils/index.js";
import ProductionSchedules from "../enums/ProductionSchedules.js";

/**
 * Class representing an line, which has a name, an operation period,
 * and possibly a known production schedule.
 */
class LineCDG extends Line {
    /**
     * Create a line from a name, an operation period, and possibly a production schedule.
     * @param   {string}    name - Name.
     * @param   {OperationPeriod}  opPeriod - Operation period.
     * @param   {ProductionSchedules} [prodSched] - Production schedule.
     */
    constructor(name, opPeriod, prodSched) {
        super(name, opPeriod)
        /** @type {ProductionSchedules} */
        this.prodSched = prodSched;
    };

    copy() {
        return new LineCDG(this.name, this.opPeriod, this.prodSched);
    }

    /**
     * Return a new line with the production schedule modified.
     * @return {boolean} True if the production schedule is early; false otherwise.
     */
    isEarly() {
        return this.prodSched === ProductionSchedules.EARLY;
    };

    /**
     * Return a new line with the production schedule modified.
     * @return {boolean} True if the production schedule is late; false otherwise.
     */
    isLate() {
        return this.prodSched === ProductionSchedules.LATE;
    };

    /**
     * Return a new line with the production schedule modified.
     * @return {boolean} True if the production schedule is early; false otherwise.
     */
    hasProdSched() {
        return this.prodSched != null;
    };

    /**
     * Return a new line with the production schedule modified.
     * @param   {ProductionSchedules} prodSched - New production schedule.
     * @return  {Line} Line with the modified production schedule.
     */
    changeProdSched(prodSched) {
        return new LineCDG(this.name, this.opPeriod, prodSched);
    };
};


export default LineCDG;