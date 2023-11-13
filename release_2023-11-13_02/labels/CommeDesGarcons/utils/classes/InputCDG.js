/**
 * Initialization of class InputCDG.
 *
 * Initialization of a class for the input data to identify COMME des GARÇONS.
 *
 * @author Etienne Bolduc
 */

import { Input, Labels, isNumeric } from "../../../../utils/index.js";
import COUNTERFEITS from "../../constants/COUNTERFEITS.js";
import FROM_BLANK_TO_PRINT from "../../constants/FROM_BLANK_TO_PRINT.js";
import WRONG_CODE from "../../constants/WRONG_CODE.js";

/**
 * Enum for COMME des GARÇONS year print types.
 * @readonly
 * @enum {string}
 */
const NO_YEAR_PRINT_TYPES = Object.freeze({
    BLANK: "BLANK",
    UNREADABLE: "UNREADABLE",
    UNKNOWN: "UNKNOWN",
});

/**
 * Class representing the input data to identify COMME des GARÇONS
 * consisting of a product code and a year or type of year print.
 */
class InputCDG extends Input {

    static NO_YEAR_PRINT_TYPES = NO_YEAR_PRINT_TYPES;

    /**
     * Create an object containing the input data to identify COMME des GARÇONS.
     * @param {string} [productCode] - String to extract the product code print from.
     * @param {(string|InputCDG.NO_YEAR_PRINT_TYPES)} [yearPrint] - Object to extract the year print from.
     */
    constructor({ productCode, yearPrint = InputCDG.NO_YEAR_PRINT_TYPES.BLANK }) {
        super({ label: Labels.CDG, productCode: productCode });
        /** @type {(string|InputCDG.NO_YEAR_PRINT_TYPES)} */
        this.yearPrint = yearPrint;
    }

    /**
     * Return a copy of the instance as a new object.
     * @return {InputCDG} Copy of the instance.
     */
    copy() {
        return new InputCDG({ productCode: this.productCode, yearPrint: this.yearPrint });
    }

    /**
     * Return an upcasted copy of the instance as a new object.
     * @return {Input} Upcasted copy of the instance.
     */
    toInput() {
        return new Input({ label: Labels.CDG, productCode: this.productCode });
    }

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
        return this.yearPrint === InputCDG.NO_YEAR_PRINT_TYPES.BLANK;
    }

    /**
     * Evaluate if the year print is unreadable.
     * @return {boolean} True if it is; false otherwise.
     */
    isYearPrintUnreadable() {
        return this.yearPrint === InputCDG.NO_YEAR_PRINT_TYPES.UNREADABLE;
    }

    /**
     * Evaluate if the year print is unknown.
     * @return {boolean} True if it is; false otherwise.
     */
    isYearPrintUnknown() {
        return this.yearPrint === InputCDG.NO_YEAR_PRINT_TYPES.UNKNOWN;
    }

    /**
     * Evaluate if the year print is valid.
     * @return {boolean} True if it is; false otherwise.
     */
    isYearPrintValid() {
        return this.isYearPrintNumeric() || Object.values(InputCDG.NO_YEAR_PRINT_TYPES).includes(this.yearPrint);
    }

    /**
    * Evaluate if the instance is valid input data.
    * @return {boolean} True if it is valid; false otherwise.
    */
    isValid() {
        if (!this.toInput().isValid()) return false;
        if (!this.isProductCodeString()) return false;
        if (this.getProductCodeStandardized() === WRONG_CODE) return false;
        if (!this.isYearPrintValid()) return false;
        return this.isYearBetween(FROM_BLANK_TO_PRINT.year, new Date().getFullYear());
    }

    /**
     * Return the parsed year.
     * @return {number} Parsed year.
     */
    getYearPrintParsed() {
        if (this.isYearPrintNumeric()) return parseInt(this.yearPrint);
        else if (this.isYearPrintValid()) return 0
        else return -1;
    }

    /**
     * Evaluate if the instance's year print is equal to another year print.
     * @param {(string|InputCDG.NO_YEAR_PRINT_TYPES)} yearPrint - Year print to compare with.
     * @return {boolean} True if the instance's year print is equal to the other; false otherwise.
     */
    isYearPrintEqualTo(yearPrint) {
        const input = new InputCDG({ yearPrint: yearPrint });
        if (!input.isYearPrintValid()) return false;
        if (this.isYearPrintUnknown() || input.isYearPrintUnknown()) return true;
        if (this.isYearPrintBlank() || input.isYearPrintBlank())
            return this.isYearPrintBlank() && input.isYearPrintBlank();
        if (this.isYearPrintUnreadable() || input.isYearPrintUnreadable()) return true;
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
     * Return a string confirming the input data.
     * @return {string} Confirmation string.
     */
    confirmation() {

        // Product code print confirmation
        let str = this.toInput().confirmation();

        // Year print confirmation
        if (this.isYearPrintNumeric())
            str += `\n- the year print AD${this.getYearPrintParsed()}`;
        else if (this.isYearPrintBlank())
            str += "\n- no year print";
        else if (this.isYearPrintUnreadable())
            str += "\n- the year print is unreadable";
        else if (this.isYearPrintUnknown())
            str += "\n- whether there was a year print originally is unknown";
        else
            str += "\n- an unknown form of year print"
    
        // Counterfeit alert
        if (this.getProductCodeStandardized() in COUNTERFEITS &&
            COUNTERFEITS[this.getProductCodeStandardized()].includes(this.yearPrint)) {
            if (typeof window !== 'undefined') alert("The item might be a counterfeit!");
            str += "\n\nBEWARE! This information has been found on counterfeited items before.";
        }

        return str;
    }

    /**
     * Return a string validating the input data.
     * @return {string} Validation string.
     */
    validation() {

        // Product code print validation
        let str = `Unfortunately, the information you have entered is not valid for ${Labels.CDG}:`;

        // Product code validation
        if (this.isProductCodeString()) {
            if (this.getProductCodeStandardized() === WRONG_CODE) 
                str += "\n- this is not the product code, but another code also found on the care label";
            else str += "\n- the form of the product code is valid";
        }
        else if (this.isProductCodeValid())
            str += "\n- the product code is not valid because it is empty";
        else
            str += "\n- the form of the product code is not valid";

        // Year print validation
        if (this.isYearPrintNumeric()) {
            if (!this.isYearBetween(FROM_BLANK_TO_PRINT.year, new Date().getFullYear())) {
                str += "\n- the value of the year is not valid because it should be between ";
                str += `${FROM_BLANK_TO_PRINT.year} and ${new Date().getFullYear()}`;
            }
            else
                str += "\n- the value of the year is valid";
        }
        else if (this.isYearPrintValid())
            str += "\n- the form of the year is valid";
        else
            str += "\n- the year is not valid"

        return str;
    }
}

export default InputCDG;
