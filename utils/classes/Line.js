/**
 * Initialization of class Line.
 *
 * Initialization of a class for lines with a name and an operation period.
 *
 * @author Etienne Bolduc
 */

import OperationPeriod from "./OperationPeriod.js";

/**
 * Class representing a line with a name and an operation period.
 */
class Line {
    /**
     * Create a line from a name and an operation period.
     * @param {string} name - Name.
     * @param {OperationPeriod} [opPeriod] - Operation period.
     */
    constructor(name, opPeriod = new OperationPeriod()) {
        /** @type {string} */
        this.name = name;
        /** @type {OperationPeriod} */
        this.opPeriod = opPeriod.copy();
    };

    /**
     * Return a copy of the instance as a new object.
     * @return {Line} Copy of the instance.
     */
    copy() {
        return new Line(this.name, this.opPeriod);
    }

    /**
     * Return a new line with the lower bound of the instance changed to another collection.
     * @param {Collection} col - New lower bound.
     * @return {Line} New line with the new lower bound on the instance.
     */
    changeLowerBound(col) {
        let newLine = this.copy();
        newLine.opPeriod.lowerBound = col;
        return newLine;
    };

    /**
     * Return a new line with the upper bound of the instance changed to another collection.
     * @param {Collection} col - New upper bound collection.
     * @return {Line} New line with the new upper bound on the instance.
     */
    changeUpperBound(col) {
        let newLine = this.copy();
        newLine.opPeriod.upperBound = col;
        return newLine;
    };

    /**
     * Return a new line with the bounds of the instance changed to other collections.
     * @param {Collection} lowerBound - New lower bound collection.
     * @param {Collection} upperBound - New upper bound collection.
     * @return {Line} New line with the new upper bound on the instance.
     */
    changeBounds(lowerBound, upperBound) {
        return this.changeLowerBound(lowerBound).changeUpperBound(upperBound);
    };
};

export default Line;
