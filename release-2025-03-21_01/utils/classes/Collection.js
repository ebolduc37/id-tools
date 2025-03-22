/**
 * Initialization of class Collection.
 *
 * Initialization of a class for a collection consisting of either a year of production
 * or a year and a season, optionally with a title and textual information.
 *
 * @author Etienne Bolduc
 */

/**
 * Enum for semiannual seasons.
 * @readonly
 * @enum {string}
 */
const Season = Object.freeze({
    R: "Resort",
    S: "Spring/Summer",
    P: "Pre-fall",
    W: "Autumn/Winter",
})

/**
 * Class for a collection consisting of either a year of production
 * or a year and a season, optionally with a title and textual information.
 */
class Collection {

    static Season = Season;

    /**
     * Create a collection from a year and optionally a season, a title, and a text.
     * @param {number} year - Year of the collection.
     * @param {Collection.Season} [season] - Semiannual season of the collection.
     * @param {string} [title] - Title of the collection.
     * @param {string} [text] - Text to be added at the end of the collection's string representation.
     * @param {boolean} [capsule] - If the collection is a capsule collection.
     */
    constructor(year, season, title, text, capsule = false) {
        /** @type {number} */
        this.year = year;
        /** @type {Collection.Season} */
        this.season = season;
        /** @type {string} */
        this.title = title;
        /** @type {string} */
        this.text = text;
        /** @type {boolean} */
        this.capsule = capsule;
    };

    /**
     * Return a copy of the instance.
     * @return {Collection} Copy of the instance.
     */
    copy() {
        return new Collection(this.year, this.season, this.title, this.text, this.capsule);
    }

    /**
     * Return a copy of the instance without title or text.
     * @return {Collection} Copy of the instance without title or text.
     */
    raw() {
        return new Collection(this.year, this.season);
    }

    /**
     * Return a string representation of the instance.
     * @param {boolean} titleList - Whether or not the list of titles is printed.
     * @return {str} String representation of the instance.
     */
    toString(titleList) {
        if (titleList == undefined) titleList = false;
        let str = "";
        if (titleList == true) str += "-------------------------\n> ";
        if (this.season == null) str += `${this.year}`;
        else if (this.season != null) {
            str += `${this.season} ${this.year}`;
            if (this.isW()) str += `-` + `${this.year + 1}`.slice(-2);
            if (this.capsule) str += " [capsule]";
        }
        if (titleList == true) {
            if (this.title != null && this.title != "") str += `\n> ${this.title}`
            else str += `\n> *Untitled*`;
        }
        else if (this.title != null && this.title != "") str += ` · ${this.title}`;
        if (this.text != null && this.text != "") str += ` ${this.text}`;
        return str;
    }

    /**
     * Evaluate if the instance's season is Season.R.
     * @return {boolean} True if the instance's season is Season.R; false otherwise.
     */
    isR() {
        return this.season === Collection.Season.R;
    }

    /**
     * Evaluate if the instance's season is Season.S.
     * @return {boolean} True if the instance's season is Season.S; false otherwise.
     */
    isS() {
        return this.season === Collection.Season.S;
    }

    /**
     * Evaluate if the instance's season is Season.P.
     * @return {boolean} True if the instance's season is Season.P; false otherwise.
     */
    isP() {
        return this.season === Collection.Season.P;
    }

    /**
     * Evaluate if the instance's season is Season.W.
     * @return {boolean} True if the instance's season is Season.W; false otherwise.
     */
    isW() {
        return this.season === Collection.Season.W;
    }

    /**
     * Evaluate if the instance's season is a semiannual collection.
     * @return {boolean} True if the instance's season is a semiannual collection; false otherwise.
     */
    isCollection() {
        return (this.isS() || this.isW()) && !this.isCapsule();
    }

    /**
     * Evaluate if the instance's season is a pre-collection.
     * @return {boolean} True if the instance's season is a pre-collection; false otherwise.
     */
    isPreCollection() {
        return this.isR() || this.isP();
    }

    /**
     * Evaluate if the instance has no season.
     * @return {boolean} True if the instance has no season; false otherwise.
     */
    hasNoSeason() {
        return this.season == null;
    }

    /**
     * Evaluate if the instance's season is a capsule collection.
     * @return {boolean} True if the instance's season is a capsule collection; false otherwise.
     */
    isCapsule() {
        return this.capsule;
    }

    /** 
     * Evaluate if the instance's year is equal to a specific year.
     * @param {number} - Year to compare to.
     * @return {boolean} True if the instance's year is equal to that year; false otherwise.
     */
    isReleasedIn(year) {
        return this.year === year;
    }

    /**
     * Evaluate if the instance could have been produced in a specific year.
     * @param {number} - Year to compare to.
     * @return {boolean} True if the instance could have been produced in that year; false otherwise.
     */
    isProducedIn(year) {
        //return this.year === year || this.isEqualTo(new Collection(year + 1, Collection.Season.S));
        return  this.year === year || (this.year === year + 1 && !this.hasNoSeason());
    }

    /**
     * Evaluate if the instance could have been produced before or in a specific year.
     * @param {number} year - Year to compare to.
     * @return {boolean} True if the instance could have been produced before or in that year; false otherwise.
     */
    isProducedBeforeOrIn(year) {
        //return this.year <= year || this.isEqualTo(new Collection(year + 1, Collection.Season.S));
        return this.year < year || this.isProducedIn(year);
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
        return this.year === col.year && this.season === col.season && this.capsule === col.capsule;
    }

    /**
     * Evaluate if the instance occured before another among collections, pre-collections, and capsule collections.
     * @param {Collection} col - Collection to compare the instance to.
     * @return {boolean} True if the instance occured before the other; false otherwise.
     */
    isFollowedBy_full(col) {
        if (col == null) return false;
        return (this.isR() && col.isS() && !col.isCapsule() && col.year === this.year)
            || (this.isS() && !this.isCapsule() && col.isS() && col.isCapsule() && col.year === this.year)
            || (this.isS() && this.isCapsule() && col.isP() && col.year === this.year)
            || (this.isP() && col.isW() && !col.isCapsule() && col.year === this.year)
            || (this.isW() && !this.isCapsule() && col.isW() && col.isCapsule() && col.year === this.year)
            || (this.isW() && this.isCapsule() && col.isR() && col.year === this.year + 1);
    }

    /**
     * Evaluate if the instance occured a quarter of a year before another.
     * @param {Collection} col - Collection to compare the instance to.
     * @return {boolean} True if the instance occured a quarter of a year before the other; false otherwise.
     */
    isFollowedBy_quarterly(col) {
        if (col == null) return false;
        return (this.isR() && col.isS() && !col.isCapsule() && col.year === this.year)
            || (this.isS() && !this.isCapsule() && col.isP() && col.year === this.year)
            || (this.isP() && col.isW() && !col.isCapsule() && col.year === this.year)
            || (this.isW() && !this.isCapsule() && col.isR() && col.year === this.year + 1);
    }

    /**
     * Evaluate if the instance is a collection that occured before a capsule collection or vice versa.
     * @param {Collection} col - Collection to compare the instance to.
     * @return {boolean} True if the instance occured before the other; false otherwise.
     */
    isFollowedBy_capsule(col) {
        if (col == null) return false;
        return (this.isS() && !this.isCapsule() && col.isS() && col.isCapsule() && col.year === this.year)
            || (this.isS() && this.isCapsule() && col.isW() && !col.isCapsule() && col.year === this.year)
            || (this.isW() && !this.isCapsule() && col.isW() && col.isCapsule() && col.year === this.year)
            || (this.isW() && this.isCapsule() && col.isS() && !col.isCapsule() && col.year === this.year + 1);
    }

    /**
     * Evaluate if the instance occured half a year before another.
     * @param {Collection} col - Collection to compare the instance to.
     * @return {boolean} True if the instance occured half a year before the other; false otherwise.
     */
    isFollowedBy_semiannual(col) {
        if (col == null) return false;
        return (this.isR() && col.isP() && col.year === this.year)
            || (this.isS() && !this.isCapsule() && col.isW() && !col.isCapsule() && col.year === this.year)
            || (this.isS() && this.isCapsule() && col.isW() && col.isCapsule() && col.year === this.year)
            || (this.isP() && col.isR() && col.year === this.year + 1)
            || (this.isW() && !this.isCapsule() && col.isS() && !col.isCapsule() && col.year === this.year + 1)
            || (this.isW() && this.isCapsule() && col.isS() && col.isCapsule() && col.year === this.year + 1);
    }

    /**
     * Evaluate if the instance occured a year before another.
     * @param {Collection} col - Collection to compare the instance to.
     * @return {boolean} True if the instance occured a year before the other; false otherwise.
     */
    isFollowedBy_annual(col) {
        if (col == null) return false;
        return (col.season === this.season && col.year === this.year + 1);
    }

    /**
     * Evaluate if the instance occured before or at the same time as another.
     * @param {Collection} col - Collection to compare the instance to.
     * @return {boolean} True if the instance occured before or at the same time as the other; false otherwise.
     */
    isBeforeOrIn(col) {
        if (this.year < col.year) return true;
        else if (this.year === col.year + 1) return (this.isR() || this.isS()) && col.hasNoSeason();
        else if (this.year > col.year) return false;
        else if (this.hasNoSeason() || col.hasNoSeason()) return true;
        // else return this.isS() || col.isW();
        else return this.isR() || (this.isS() && !col.isR()) || (!this.isW() && col.isP()) || col.isW();
    };

    /**
     * Evaluate if the instance occured after or at the same time as another.
     * @param {Collection} col - Collection to compare the instance to.
     * @return {boolean} True if the instance occured after or at the same time as the other; false otherwise.
     */
    isAfterOrIn(col) {
        //if (this.year > col.year) return true;
        //if (this.year === col.year) {
        //if (this.year >= col.year) {
            //if (this.isS()) return !col.isW();
            //else return true;
        //}
        //else return false;
        return col.isBeforeOrIn(this);
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
