/**
 * Initialization of class Collection.
 *
 * Initialization of a class for a collection consisting of either a year of production
 * or a year with a season and optionally a title and textual information.
 *
 * @author Etienne Bolduc
 */

import Seasons from "../enums/Seasons.js";

/**
 * Class for a collection consisting of either a year of production
 * or a year with a season and optionally a title and textual information.
 */
class Collection {
    /**
     * Create a collection from a year and optionally a season, a title, and a text.
     * @param {number} year - Year of the collection.
     * @param {Seasons} [season] - Season of the collection.
     * @param {string} [title] - Title of the collection.
     * @param {string} [text] - Text about the collection added at the end of its string representation.
     */
    constructor(year, season, title, text) {
        /** @type {number} */
        this.year = year;
        /** @type {Seasons} */
        this.season = season;
        /** @type {string} */
        this.title = title;
        /** @type {string} */
        this.text = text;
    };

    /**
     * Return a copy of the instance.
     * @return {Collection} Copy of the instance.
     */
    copy() {
        return new Collection(this.year, this.season, this.title, this.text);
    }

    /**
     * Return a string representation of the instance.
     * @return {str} String representation of the instance.
     */
    toString() {
        let str = `${this.year}`;
        if (this.season != null) str = `${this.season} ` + str;
        if (this.title != null) str = str + ` • ${this.title}`;
        if (this.text != null) str = str + `${this.text}`;
        return str;
    }

    /**
     * Evaluate if the instance has season of type Seasons.S.
     * @return {boolean} True if the instance has season of type Seasons.S; false otherwise.
     */
    isS() {
        return this.season == Seasons.S;
    }

    /**
     * Evaluate if the instance has season of type Seasons.W.
     * @return {boolean} True if the instance has season of type Seasons.W; false otherwise.
     */
    isW() {
        return this.season == Seasons.W;
    }

    /**
     * Evaluate if the instance has no season.
     * @return {boolean} True if the instance has no season; false otherwise.
     */
    isProductionYear() {
        return this.season == null;
    }

    /** 
     * Evaluate if the instance's year is equal to a specific year.
     * @param {number} - Year to compare to.
     * @return {boolean} True if the instance's year is equal to that year; false otherwise.
     */
    isReleasedIn(year) {
        return this.year == year;
    }

    /**
     * Evaluate if the instance could have been produced in a specific year.
     * @param {number} - Year to compare to.
     * @return {boolean} True if the instance could have been produced in that year; false otherwise.
     */
    isProducedIn(year) {
        return this.year == year || this.isEqualTo(new Collection(year + 1, Seasons.S));
    }

    /**
     * Evaluate if the instance could have been produced before or in a specific year.
     * @param {number} year - Year to compare to.
     * @return {boolean} True if the instance could have been produced before or in that year; false otherwise.
     */
    isProducedBeforeOrIn(year) {
        return this.year <= year || this.isEqualTo(new Collection(year + 1, Seasons.S));
    };

    /**
     * Evaluate if the instance could have been produced after or in a specific year.
     * @param {number} year - Year to compare to.
     * @return {boolean} True if the instance could have been produced after or in that year; false otherwise.
     */
    isProducedAfterOrIn(year) {
        return this.year >= year;
    };

    /**
     * Evaluate if the instance could have been produced between two years.
     * @param {number} year1 - Lower bound year to compare to.
     * @param {number} year2 - Upper bound year to compare to.
     * @return {boolean} True if the instance could have been produced between these years; false otherwise.
     */
    isProducedBetween(year1, year2) {
        return this.isProducedAfterOrIn(year1) && this.isProducedBeforeOrIn(year2);
    };

    /**
     * Evaluate if the instance occured at the same time as another.
     * @param {Collection} col - Collection to compare the instance to.
     * @return {boolean} True if the instance occured at the same time as the other; false otherwise.
     */
    isEqualTo(col) {
        if (col == null) return false;
        return this.year == col.year && this.season == col.season;
    }

    /**
     * Evaluate if the instance occured before or at the same time as another.
     * @param {Collection} col - Collection to compare the instance to.
     * @return {boolean} True if the instance occured before or at the same time as the other; false otherwise.
     */
    isBeforeOrIn(col) {
        if (this.year < col.year) return true;
        else if (this.year === col.year + 1) return this.isS() && col.isProductionYear();
        else if (this.year > col.year) return false;
        else if (this.isProductionYear() || col.isProductionYear()) return true;
        else return !(this.isW() && col.isS());
    };

    /**
     * Evaluate if the instance occured after or at the same time as another.
     * @param {Collection} col - Collection to compare the instance to.
     * @return {boolean} True if the instance occured after or at the same time as the other; false otherwise.
     */
    isAfterOrIn(col) {
        if (this.year > col.year) return true;
        if (this.year === col.year) {
            if (this.isS()) return !col.isW();
            else return true;
        }
        else return false;
    };

    /**
     * Evaluate if the instance occured between two others.
     * @param {Collection} lowerBound - Lower bound collection to compare the instance to.
     * @param {Collection} upperBound - Upper bound collection to compare the instance to.
     * @return {boolean} True if the instance occured between the two others; false otherwise.
     */
    isBetween(lowerBound, upperBound) {
        if (lowerBound == null && upperBound == null) return true;
        else if (lowerBound == null) return this.isBeforeOrIn(upperBound);
        else if (upperBound == null) return lowerBound.isBeforeOrIn(this);
        //else if (upperBound.isBeforeOrIn(lowerBound) && !lowerBound.isEqualTo(upperBound)) return false;
        else return lowerBound.isBeforeOrIn(this) && this.isBeforeOrIn(upperBound);
    };
};

export default Collection;
