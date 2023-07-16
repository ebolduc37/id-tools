/**
 * Initialization of class OperationPeriod.
 *
 * Initialization of a class for an operation period with some collection as lower bound,
 * another as an upper bound, and a condition on the elements in-between.
 *
 * @author Etienne Bolduc
 */

import Collection from "./Collection.js";

/**
 * Class representing an operation period.
 */
class OperationPeriod {
    /**
     * Create a class for an operation period with a lower bound, an upper bound,
     * and a condition on the elements in-between.
     * @param {Collection} [lowerBound] - Lower bound collection.
     * @param {Collection} [upperBound] - Upper bound collection.
     * @param {function} [filter] - Condition on the elements in-between.
     */
    constructor(lowerBound, upperBound, filter = () => true) {
        /** @type {Collection} */
        this.lowerBound = lowerBound;
        /** @type {Collection} */
        this.upperBound = upperBound;
        /** @type {function} */
        this.filter = filter;
    };

    /**
     * Return a copy of the instance as a new object.
     * @return {OperationPeriod} Copy of the instance.
     */
    copy() {
        return new OperationPeriod(this.lowerBound, this.upperBound, this.filter);
    }

    /**
     * Evaluate if the instance includes a certain collection in its range.
     * @param {Collection} col - Collection to verify the inclusivity.
     * @return {boolean} True if the collection is included in the range; false otherwise.
     */
    includes(col) {
        return col.isBetween(this.lowerBound, this.upperBound) && this.filter(col);
    }

    /**
     * Evaluate if the instance overlaps another operation period.
     * @param {OperationPeriod} opPeriod - Operation period to compare the range with.
     * @return {boolean} True if the operation periods overlap; false otherwise.
     */
    overlaps(opPeriod) {
        if (this.lowerBound == null) return this.upperBound == null || opPeriod.lowerBound == null || opPeriod.lowerBound.isBeforeOrIn(this.upperBound);
        else if (this.upperBound == null) return opPeriod.upperBound == null || this.lowerBound.isBeforeOrIn(opPeriod.upperBound);
        else if (opPeriod.lowerBound == null) return opPeriod.upperBound == null || this.lowerBound.isBeforeOrIn(opPeriod.upperBound);
        else return opPeriod.lowerBound.isBeforeOrIn(this.upperBound) || this.lowerBound.isBeforeOrIn(opPeriod.upperBound);
    }
};

export default OperationPeriod;
