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
 * Class representing a line with a name, an operation period, a logo list, and a collection list.
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
    toString_old() {

        let str = `${this.name}`;
        
        if (this.collectionList.length > 2
            && this.collectionList.reduce(function (a, b) {return (a != null
            && a.year + 1 === b.year && a.season === b.season) ? b : null;})) {
            if (!this.collectionList[0].hasNoSeason()) {
                str += `\n> any ${this.collectionList[0].season} collection between `;
                str += `${this.collectionList[0].season} ${this.collectionList[0].year}`;
                if (this.collectionList[0].isW())
                    str += `-` + `${this.collectionList[0].year + 1}`.slice(-2);
                str += ` and `;
                str += `${this.collectionList.slice(-1)[0].season} ${this.collectionList.slice(-1)[0].year}`;
                if (this.collectionList.slice(-1)[0].isW())
                    str += `-` + `${this.collectionList.slice(-1)[0].year + 1}`.slice(-2);
            }
            else {
                str += `\n> any year between `;
                str += `${this.collectionList[0]} and `;
                str += `${this.collectionList.slice(-1)[0]}`;
            }
        }
        else if (this.collectionList.length > 2
            && this.collectionList.reduce(function (a, b) {return (a != null && (
                // Main seasons
                (a.year === b.year &&
                    a.season === Collection.Season.S &&
                    b.season === Collection.Season.W) ||
                (a.year + 1 === b.year &&
                    a.season === Collection.Season.W &&
                    b.season === Collection.Season.S) ||
                // Inter seasons
                (a.year === b.year &&
                    a.season === Collection.Season.R &&
                    b.season === Collection.Season.S) ||
                (a.year === b.year &&
                    a.season === Collection.Season.S &&
                    b.season === Collection.Season.P) ||
                (a.year === b.year &&
                    a.season === Collection.Season.P &&
                    b.season === Collection.Season.W) ||
                (a.year + 1 === b.year &&
                    a.season === Collection.Season.W &&
                    b.season === Collection.Season.R)
                )) ? b : null;})) {
            str += `\n> any collection between `;
            str += `${this.collectionList[0].season} ${this.collectionList[0].year}`;
            if (this.collectionList[0].isW())
                str += `-` + `${this.collectionList[0].year + 1}`.slice(-2);
            str += ` and `;
            str += `${this.collectionList.slice(-1)[0].season} ${this.collectionList.slice(-1)[0].year}`;
            if (this.collectionList.slice(-1)[0].isW())
                str += `-` + `${this.collectionList.slice(-1)[0].year + 1}`.slice(-2);
        }
        else if (this.collectionList.length > 0) for (let col of this.collectionList) str += `\n> ${col}`;
        else str += "\n> an unspecified collection";

        return str;
    }

    /**
     * Return a string representation of the instance.
     * @return {string} String representation of the instance.
     */
    toString() {

        let str = `${this.name}`;

        const n_col = this.collectionList.length;
        let ind_start = 0;

        if (n_col == 0) {
            str += "\n> an unspecified collection";
            return str;
        }

        while (ind_start < n_col) {
            
            if (n_col - ind_start < 3) {
                for (let i = ind_start; i < n_col; i++) str += `\n> ${this.collectionList[i]}`;
                return str;
            }

            else {
                let ind_end = ind_start;
                let col_a = this.collectionList[ind_end];
                let col_b = this.collectionList[ind_end+1];

                if (col_a.isYearBefore(col_b)) {

                    while (ind_end < n_col - 1) {
                        if (col_a.isYearBefore(col_b)) {
                            ind_end++;
                            col_a = this.collectionList[ind_end];
                            col_b = this.collectionList[ind_end+1];
                        }
                        else break;
                    }

                    if (ind_end - ind_start < 2) {
                        str += `\n> ${this.collectionList[ind_start]}`;
                        ind_end = ind_start;
                    }

                    else {
                        if (this.collectionList[ind_start].hasNoSeason()) {
                            str += `\n> any year between ${this.collectionList[ind_start].year} `;
                            str += `and ${this.collectionList[ind_end].year}`;
                        }
                        else {
                            str += `\n> any ${this.collectionList[ind_start].season} collection between `;
                            str += `${this.collectionList[ind_start].season} ${this.collectionList[ind_start].year}`;
                            if (this.collectionList[ind_start].isW())
                                str += `-` + `${this.collectionList[ind_start].year + 1}`.slice(-2);
                            str += ` and `;
                            str += `${this.collectionList[ind_end].season} ${this.collectionList[ind_end].year}`;
                            if (this.collectionList[ind_end].isW())
                                str += `-` + `${this.collectionList[ind_end].year + 1}`.slice(-2);
                        }
                    }
                }
                else if (col_a.isHalfYearBefore(col_b)) {

                    while (ind_end < n_col - 1) {
                        if (col_a.isHalfYearBefore(col_b)) {
                            ind_end++;
                            col_a = this.collectionList[ind_end];
                            col_b = this.collectionList[ind_end+1];
                        }
                        else break;
                    }

                    if (ind_end - ind_start < 2) {
                        str += `\n> ${this.collectionList[ind_start]}`;
                        ind_end = ind_start;
                    }

                    else {
                        str += `\n> any collection between `;
                        str += `${this.collectionList[ind_start].season} ${this.collectionList[ind_start].year}`;
                        if (this.collectionList[ind_start].isW())
                            str += `-` + `${this.collectionList[ind_start].year + 1}`.slice(-2);
                        str += ` and `;
                        str += `${this.collectionList[ind_end].season} ${this.collectionList[ind_end].year}`;
                        if (this.collectionList[ind_end].isW())
                            str += `-` + `${this.collectionList[ind_end].year + 1}`.slice(-2);
                    }
                }
                else str += `\n> ${this.collectionList[ind_end]}`;

                ind_start = ind_end+1;
            }
        }

        return str;
    }
};

export default Line;
