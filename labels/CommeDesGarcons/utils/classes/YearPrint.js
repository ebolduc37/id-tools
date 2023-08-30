/**
 * Initialization of class YearPrint.
 *
 * Initialization of a class for the information on a year print.
 *
 * @author Etienne Bolduc
 */

import { isNumeric, standardize } from "../../../../utils/index.js";
import YearPrintTypes from "../enums/YearPrintTypes.js";

/**
 * Class representing a year print's data consisting of a type and a value if numerical.
 */
class YearPrint {
    /**
     * Create an object containing the year print data from a string or another YearPrint object.
     * @param {(string|YearPrint)} yearPrint - Object to extract the year print data from.
     */
    constructor(yearPrint) {
        yearPrint = standardize(yearPrint);
        /** @type {YearPrintTypes} */
        this.type = YearPrintTypes.WRONG;
        /** @type {number} */
        this.year = 0;
        if (yearPrint instanceof YearPrint) {
            this.type = yearPrint.type;
            this.year = yearPrint.year;
        }
        else if (Object.values(YearPrintTypes).includes(yearPrint)) this.type = yearPrint;
        else if (isNumeric(yearPrint)) {
            this.type = YearPrintTypes.NUMERIC;
            this.year = parseInt(yearPrint);
        }
        else this.type = YearPrintTypes.WRONG;
    }

    /**
     * Evaluate if the instance is a numerical year print.
     * @return {boolean} True if the instance is a numerical year print; false otherwise.
     */
    isNumeric() {
        return this.type === YearPrintTypes.NUMERIC;
    }

    /**
     * Evaluate if the instance is a blank year print.
     * @return {boolean} True if the instance is a blank year print; false otherwise.
     */
    isBlank() {
        return this.type === YearPrintTypes.BLANK;
    }

    /**
     * Evaluate if the instance is an erased year print.
     * @return {boolean} True if the instance is an erased year print; false otherwise.
     */
    isErased() {
        return this.type === YearPrintTypes.ERASED;
    }

    /**
     * Evaluate if the instance is a wrong year print.
     * @return {boolean} True if the instance is a wrong year print; false otherwise.
     */
    isWrong() {
        return this.type === YearPrintTypes.WRONG;
    }

    /**
     * Evaluate if the instance is equal to another year print.
     * @param {YearPrint} yearPrint - Year print to compare with.
     * @return {boolean} True if the instance is equal to the other; false otherwise.
     */
    isEqualTo(yearPrint) {
        if (!(yearPrint instanceof YearPrint)) return false;
        else if (this.type !== yearPrint.type) return false;
        else return !this.isNumeric() || this.year === yearPrint.year;
    }

    /**
     * Evaluate if the instance is valid for a particular year, meaning that it is
     * either non-numeric or it is numeric with the two years equal.
     * @param {number} year - Year to compare to. 
     * @return {boolean} True if the instance is valid for the year; false otherwise.
     */
    isValidFor(year) {
        return !this.isNumeric() || this.year == year;
    }

    /**
     * Evaluate if the instance is between two numbers, inclusively.
     * @param {number} lowerBound - Lower bound number to compare the instance to.
     * @param {number} upperBound - Upper bound number to compare the instance to.
     * @return {boolean} True if the value is between the two numbers; false otherwise.
     */
    isBetween(lowerBound, upperBound) {
        return !this.isNumeric() || (lowerBound <= this.year && this.year <= upperBound);
    }
}

export default YearPrint;
