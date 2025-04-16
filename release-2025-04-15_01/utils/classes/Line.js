/**
 * Initialization of class Line.
 *
 * Initialization of a class for lines with a name, an operation period, a logo list, and a collection list.
 *
 * @author Etienne Bolduc
 */

import OperationPeriod from "./OperationPeriod.js";
import Collection from "./Collection.js";

/**
 * Class representing a line with a name, an operation period, a logo list, a collection list, and a text.
 */
class Line {

    /**
     * Create a line from a name, an operation period, a logo list, and an empty collection list.
     * @param {string} name - Line name.
     * @param {OperationPeriod} operationPeriod - Operation period.
     * @param {Object} logoList - Logo list.
     */
    constructor( name, operationPeriod = new OperationPeriod(), logoList = {} ) {
        /** @type {string} */
        this.name = name;
        /** @type {OperationPeriod} */
        this.operationPeriod = operationPeriod.copy();
        /** @type {Object} */
        this.logoList = {};
        if (logoList != null && typeof logoList == "object") {
            this.logoList = logoList.constructor();
            for (let logo in logoList) {
                if (logoList.hasOwnProperty(logo)) this.logoList[logo] = logoList[logo].copy();
            }
        }
    };

    /**
     * Return a copy of the instance as a new object.
     * @return {Line} Copy of the instance.
     */
    copy() {
        let line = new Line(this.name, this.operationPeriod, this.logoList);
        if (this.collectionList != null) line.collectionList = this.collectionList.map(col => col.copy());
        if (this.text != null) line.text = this.text;
        return line;
    }

    /**
     * Return a new line with a collection list for identification.
     * @param {Collection[]} collectionList - Collection list.
     * @return {Line} New line with the collection list for identification.
     */
    forIdentification(collectionList) {
        let line = this.copy();
        if (collectionList != null) line.collectionList = collectionList.map(col => col.copy());
        delete line.operationPeriod;
        delete line.logoList;
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
     * Return a new line with the filter of the instance's operation period changed to another filter.
     * @param {Collection} filter - New filter.
     * @return {Line} New line with the new filter on the instance's operation period.
     */
    newFilter(filter) {
        let line = this.copy();
        line.operationPeriod.filter = filter;
        return line;
    };

    /**
     * Evaluate if the logo list is empty.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoListEmpty() {
        return Object.keys(this.logoList).length === 0;
    }

    /**
     * Evaluate if the logo list includes a certain logo style.
     * @return {boolean} True if it does; false otherwise.
     */
    includes(logoStyle) {
        return Object.keys(this.logoList).includes(logoStyle);
    }

    /**
     * Return a string representation of the instance.
     * @return {string} String representation of the instance.
     */
    toString() {

        let str = `${this.name}`;

        const n_col = this.collectionList.length;
        const n_max = 2;
        let ind_start = 0;

        if (n_col == 0) {
            str += "\n> an unspecified collection";
            if (this.text != null) str += `${this.text}`;
            return str;
        }

        while (ind_start < n_col) {
            
            if (n_col <= ind_start + n_max ) {
                for (let i = ind_start; i < n_col; i++) str += `\n> ${this.collectionList[i]}`;
                if (this.text != null) str += `${this.text}`;
                return str;
            }

            else {
                let ind_end = ind_start;
                let col_a = this.collectionList[ind_end];
                let col_b = this.collectionList[ind_end+1];

                let flag_annual = col_a.isFollowedBy_annual(col_b);
                let flag_semiannual = col_a.isFollowedBy_semiannual(col_b);
                let flag_capsule = col_a.isFollowedBy_capsule(col_b);
                let flag_quarterly = col_a.isFollowedBy_quarterly(col_b);
                let flag_full = col_a.isFollowedBy_full(col_b);

                while (((flag_annual && col_a.isFollowedBy_annual(col_b))
                    || (flag_semiannual && col_a.isFollowedBy_semiannual(col_b))
                    || (flag_capsule && col_a.isFollowedBy_capsule(col_b))
                    || (flag_quarterly && col_a.isFollowedBy_quarterly(col_b))
                    || (flag_full && col_a.isFollowedBy_full(col_b)))
                    && ind_end < n_col - 1) {
                    flag_annual = flag_annual && col_a.isFollowedBy_annual(col_b);
                    flag_semiannual = flag_semiannual && col_a.isFollowedBy_semiannual(col_b);
                    flag_capsule = flag_capsule && col_a.isFollowedBy_capsule(col_b);
                    flag_quarterly = flag_quarterly && col_a.isFollowedBy_quarterly(col_b);
                    flag_full = flag_full && col_a.isFollowedBy_full(col_b);
                    ind_end++;
                    col_a = this.collectionList[ind_end];
                    col_b = this.collectionList[ind_end+1];
                }

                if (ind_end < ind_start + n_max) {
                    str += `\n> ${this.collectionList[ind_start]}`;
                    ind_end = ind_start;
                }

                else if (flag_annual || flag_semiannual || flag_capsule || flag_quarterly || flag_full) {
                    str += `\n> any `;
                    if (flag_annual) {
                        if (this.collectionList[ind_start].hasNoSeason()) str += `year `;
                        else str += `${this.collectionList[ind_start].season} collection `;
                    }
                    else if (flag_semiannual) {
                        if (this.collectionList[ind_start].isPreCollection()) str += `pre-collection `;
                        else if (this.collectionList[ind_start].isCapsule()) str += `capsule collection `;
                        else str += `collection `;
                    }
                    else if (flag_full) str += `collection, capsule collection, or pre-collection `;
                    else if (flag_capsule) str +=  `collection or capsule collection `;
                    else if (flag_quarterly) str += `collection or pre-collection `;
                    str += `between ${this.collectionList[ind_start].raw()} `
                    str += `and ${this.collectionList[ind_end].raw()}`;
                }

                else str += `\n> ${this.collectionList[ind_end]}`;

                ind_start = ind_end + 1;
            }
        }

        if (this.text != null) str += `${this.text}`;
        return str;
    }
};

export default Line;
