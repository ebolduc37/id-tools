/**
 * Initialization of class OperationPeriod.
 *
 * Initialization of a class for an operation period with a collection as lower bound,
 * another as an upper bound, and a condition on the elements.
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
     * and a condition on the elements.
     * @param {Collection} [lowerBound] - Lower bound collection.
     * @param {Collection} [upperBound] - Upper bound collection.
     * @param {function} [filter] - Condition on the elements.
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
     * @param {OperationPeriod} operationPeriod - Operation period to compare the range with.
     * @return {boolean} True if the operation periods overlap; false otherwise.
     */
    overlaps(operationPeriod) {
        if (this.lowerBound == null)
            return this.upperBound == null
                || operationPeriod.lowerBound == null
                || operationPeriod.lowerBound.isBeforeOrIn(this.upperBound);
        else if (this.upperBound == null)
            return operationPeriod.upperBound == null
                || this.lowerBound.isBeforeOrIn(operationPeriod.upperBound);
        else if (operationPeriod.lowerBound == null)
            return operationPeriod.upperBound == null
                || this.lowerBound.isBeforeOrIn(operationPeriod.upperBound);
        else
            return operationPeriod.lowerBound.isBeforeOrIn(this.upperBound)
                || this.lowerBound.isBeforeOrIn(operationPeriod.upperBound);
    }
};

export default OperationPeriod;
