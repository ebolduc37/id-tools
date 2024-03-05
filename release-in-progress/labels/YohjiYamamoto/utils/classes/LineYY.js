/**
 * Initialization of class LineYY.
 *
 * Initialization of a class for Yohji Yamamoto lines with a name,
 * an operation period, and optionally a logo list.
 *
 * @author Etienne Bolduc
 */

import { Line, OperationPeriod } from "../../../../utils/index.js";

/**
 * Class representing a Yohji Yamamoto line with a name,
 * an operation period, and optionally a logo list.
 */
class LineYY extends Line {

    /**
     * Create a Yohji Yamamoto line from a name, an operation period,
     * optionally a logo list, and an empty collection list.
     * @param {string} name - Line name.
     * @param {OperationPeriod} operationPeriod - Operation period.
     * @param {Object} logoList - Logo list.
     */
    constructor(name, operationPeriod = new OperationPeriod(), logoList = {}) {
        super(name, operationPeriod, logoList);
    };

    /**
     * Return a copy of the instance as a new object.
     * @return {LineYY} Copy of the instance.
     */
    copy() {
        let line = new LineYY(this.name, this.operationPeriod, this.logoList);
        line.collectionList = this.collectionList;
        return line;
    }

};

export default LineYY;
