/**
 * Initialization of class InputCDG.
 *
 * Initialization of a class for the input data to identify COMME des GARÇONS.
 *
 * @author Etienne Bolduc
 */

import { Input, isNumeric, standardize } from "../../../../utils/index.js";
import FROM_BLANK_TO_PRINT from "../../constants/FROM_BLANK_TO_PRINT.js";
import LINE from "../../constants/LINE.js";
import TITLES from "../../constants/TITLES.js";
import WRONG_CODE from "../../constants/WRONG_CODE.js";

/**
 * Enum for COMME des GARÇONS year print types.
 * @readonly
 * @enum {string}
 */
const NoYearPrint = Object.freeze({
    BLANK: "BLANK",
    UNCLEAR: "UNCLEAR",
    UNKNOWN: "UNKNOWN",
});



/**
 * Class representing the input data to identify COMME des GARÇONS
 * consisting of a product code and a year or type of year print.
 */
class InputCDG extends Input {

    ////////////////////////////////
    // CONSTRUCTOR & COPY
    ////////////////////////////////

    static NoYearPrint = NoYearPrint;

    /**
     * Create an object containing the input data to identify COMME des GARÇONS.
     * @param {string} [productCode] - String to extract the product code print from.
     * @param {(string|InputCDG.NoYearPrint)} [yearPrint] - Object to extract the year print from.
     */
    constructor({ productCode, yearPrint = InputCDG.NoYearPrint.BLANK }) {
        super({ label: Input.Label.CDG, productCode: productCode });
        delete this.logoStyle;
        /** @type {(string|InputCDG.NoYearPrint)} */
        this.yearPrint = yearPrint;
        if (!standardize(yearPrint)) this.yearPrint = InputCDG.NoYearPrint.BLANK;
    }

    /**
     * Return a copy of the instance as a new object.
     * @return {InputCDG} Copy of the instance.
     */
    copy() {
        return new InputCDG({ productCode: this.productCode, yearPrint: this.yearPrint });
    }


    ////////////////////////////////
    // LABEL
    ////////////////////////////////

    /**
     * Evaluate if the label is valid.
     * @return {boolean} True if it is; false otherwise.
     */
    isLabelValid() {
        return this.label === Input.Label.CDG;
    }



    ////////////////////////////////
    // PRODUCT CODE PRINT
    ////////////////////////////////

    /**
     * Evaluate if the product code print is valid.
     * @return {boolean} True if it is; false otherwise.
     */
    isProductCodeValid() {
        if (this.isProductCodeString()) return this.getProductCodeStandardized() !== WRONG_CODE;
        else return super.isProductCodeValid() && !this.isProductCodeBlank();
    }

    /**
     * Return a string confirming the product code print.
     * @return {string} Confirmation string.
     */
    confirmProductCode() {
        let str = super.confirmProductCode();
        if (this.getProductCodeStandardized() === WRONG_CODE)
            str += " [invalid code]";
        else if (this.isProductCodeBlank() || this.isProductCodeUnclear() || this.isProductCodeUnknown())
            str += " [invalid code format]";
        return str;
    }



    ////////////////////////////////
    // YEAR PRINT
    ////////////////////////////////

    /**
     * Evaluate if the year print has numerical value.
     * @return {boolean} True if it is; false otherwise.
     */
    isYearPrintNumeric() {
        return isNumeric(this.yearPrint);
    }

    /**
     * Evaluate if the year print is blank.
     * @return {boolean} True if it is; false otherwise.
     */
    isYearPrintBlank() {
        return this.yearPrint === InputCDG.NoYearPrint.BLANK;
    }

    /**
     * Evaluate if the year print is unclear.
     * @return {boolean} True if it is; false otherwise.
     */
    isYearPrintUnclear() {
        return this.yearPrint === InputCDG.NoYearPrint.UNCLEAR;
    }

    /**
     * Evaluate if the year print is unknown.
     * @return {boolean} True if it is; false otherwise.
     */
    isYearPrintUnknown() {
        return this.yearPrint === InputCDG.NoYearPrint.UNKNOWN;
    }

    /**
     * Evaluate if the year print is valid.
     * @return {boolean} True if it is; false otherwise.
     */
    isYearPrintValid() {
        return (this.isYearPrintNumeric() && this.isYearBetween(FROM_BLANK_TO_PRINT.year, new Date().getFullYear()))
                || Object.values(InputCDG.NoYearPrint).includes(this.yearPrint);
    }

    /**
     * Return the parsed year.
     * @return {number} Parsed year.
     */
    getYearPrintParsed() {
        if (this.isYearPrintNumeric()) return parseInt(this.yearPrint);
        else if (this.isYearPrintValid()) return 0;
        else return -1;
    }

    /**
     * Evaluate if the instance's year print is equal to another year print.
     * @param {(string|InputCDG.NoYearPrint)} yearPrint - Year print to compare with.
     * @return {boolean} True if the instance's year print is equal to the other; false otherwise.
     */
    isYearPrintEqualTo(yearPrint) {
        const input = new InputCDG({ yearPrint: yearPrint });
        if (!input.isYearPrintValid()) return false;
        if (this.isYearPrintUnknown() || input.isYearPrintUnknown()) return true;
        if (this.isYearPrintBlank() || input.isYearPrintBlank())
            return this.isYearPrintBlank() && input.isYearPrintBlank();
        if (this.isYearPrintUnclear() || input.isYearPrintUnclear()) return true;
        return this.getYearPrintParsed() === input.getYearPrintParsed();
    }

    /**
     * Evaluate if the instance's year may lie between two numbers, inclusively.
     * @param {number} lowerBound - Lower bound number to compare the instance to.
     * @param {number} upperBound - Upper bound number to compare the instance to.
     * @return {boolean} True if the instance year may lie between the two numbers; false otherwise.
     */
    isYearBetween(lowerBound, upperBound) {
        if (this.isYearPrintNumeric()) {
            const year = this.getYearPrintParsed();
            return lowerBound <= year && year <= upperBound;
        }
        return this.isYearPrintValid();
    }

    /**
     * Return a string confirming the year print.
     * @return {string} Confirmation string.
     */
    confirmYearPrint() {
        let message = "invalid entry";
        if (this.isYearPrintNumeric()) {
            message = `AD${this.getYearPrintParsed()}`;
            if (!this.isYearBetween(FROM_BLANK_TO_PRINT.year, new Date().getFullYear())) {
                message += " [invalid number, please enter a value between ";
                message += `${FROM_BLANK_TO_PRINT.year} and ${new Date().getFullYear()}]`;
            }
        }
        else if (this.isYearPrintBlank()) message = "blank";
        else if (this.isYearPrintUnclear()) message = "unclear";
        else if (this.isYearPrintUnknown()) message = "unknown";
        return "> Year print: " + message;
    }



    ////////////////////////////////
    // GENERAL
    ////////////////////////////////

    /**
     * Return a string confirming the input data.
     * @return {string} Confirmation string.
     */
    confirm() {
        let str = `${this.confirmLabel()}`;
        str += `\n${this.confirmProductCode()}`;
        str += `\n${this.confirmYearPrint()}`;
        return str;
    }

    /**
    * Evaluate if it is a valid input.
    * @return {boolean} True if it is valid; false otherwise.
    */
    isValid() {
        if (!this.isLabelValid()) return false;
        if (!this.isProductCodeValid()) return false;
        if (!this.isYearPrintValid()) return false;
        return true;
    }

    /**
     * Return a string confirming the input data and identifying the possible collections.
     * @return {string} Identification string.
     */
    identify() {
        if (this.productCode === "CDG_TITLES") {
            let str = "> " + LINE["CDG"].name;
            for (const col of TITLES["CDG"]) { str += `\n${col.toString(true)}`; }
            return str;
        }
        else if (this.productCode === "CDGHP_TITLES") {
            let str = "> " + LINE["HP"].name;
            for (const col of TITLES["HP"]) { str += `\n${col.toString(true)}`; }
            return str;
        }
        else return super.identify();
    }
}

export default InputCDG;
