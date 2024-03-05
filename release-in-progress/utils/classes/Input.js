/**
 * Initialization of abstract class Input.
 *
 * Initialization of an abstract class for the input data.
 *
 * @author Etienne Bolduc
 */

import Labels from "../enums/Labels.js";
import standardize from "../functions/standardize.js";

/**
 * Enum for empty product code types.
 * @readonly
 * @enum {string}
 */
const NO_PRODUCT_CODE_TYPES = Object.freeze({
    BLANK: "BLANK",
    UNREADABLE: "UNREADABLE",
    UNKNOWN: "UNKNOWN",
});



/**
 * Abstract class representing the input data for any label
 * starting with a product code.
 */
class Input {

    ////////////////////////////////
    // CONSTRUCTOR & COPY
    ////////////////////////////////

    static NO_PRODUCT_CODE_TYPES = NO_PRODUCT_CODE_TYPES;

    /**
     * Create an object containing the input data.
     * @param {Labels} [label] - Object to extract the label from.
     * @param {(string|Input.NO_PRODUCT_CODE_TYPES)} [productCode] - Object to extract the product code from.
     */
    constructor({ label, productCode = Input.NO_PRODUCT_CODE_TYPES.BLANK }) {
        /** @type {Labels} */
        this.label = label;
        /** @type {(string|Input.PRODUCT_CODE_PRINT_TYPES)} */
        this.productCode = productCode;
        if (!standardize(productCode)) this.productCode = Input.NO_PRODUCT_CODE_TYPES.BLANK;
    }

    /**
     * Return a copy of the instance as a new object.
     * @return {Input} Copy of the instance.
     */
    copy() {
        return new Input({ label: this.label, productCode: this.productCode });
    }



    ////////////////////////////////
    // LABEL
    ////////////////////////////////

    /**
     * Evaluate if the label is valid.
     * @return {boolean} True if it is; false otherwise.
     */
    isLabelValid() {
        return Object.values(Labels).includes(this.label);
    }



    ////////////////////////////////
    // PRODUCT CODE PRINT
    ////////////////////////////////

    /**
     * Evaluate if the product code print is a string.
     * @return {boolean} True if it is; false otherwise.
     */
    isProductCodeString() {
        return typeof this.productCode === "string"
                && !Object.values(Input.NO_PRODUCT_CODE_TYPES).includes(this.productCode);
    }

    /**
     * Evaluate if the product code print is blank.
     * @return {boolean} True if it is; false otherwise.
     */
    isProductCodeBlank() {
        return this.productCode === Input.NO_PRODUCT_CODE_TYPES.BLANK;
    }

    /**
     * Evaluate if the product code print is unreadable.
     * @return {boolean} True if it is; false otherwise.
     */
    isProductCodeUnreadable() {
        return this.productCode === Input.NO_PRODUCT_CODE_TYPES.UNREADABLE;
    }

    /**
     * Evaluate if the product code print is unknown.
     * @return {boolean} True if it is; false otherwise.
     */
    isProductCodeUnknown() {
        return this.productCode === Input.NO_PRODUCT_CODE_TYPES.UNKNOWN;
    }

    /**
     * Evaluate if the product code print is valid.
     * @return {boolean} True if it is; false otherwise.
     */
    isProductCodeValid() {
        return this.isProductCodeString()
                || Object.values(Input.NO_PRODUCT_CODE_TYPES).includes(this.productCode);
    }

    /**
     * Return the standardized product code.
     * @return {string} Standardized product code.
     */
    getProductCodeStandardized() {
        if (this.isProductCodeString()) return standardize(this.productCode);
        else if (this.isProductCodeValid()) return "";
        else return this.productCode;
    }

    /**
     * Evaluate if the instance's product code is equal to another product code.
     * @param {(string|Input.NO_PRODUCT_CODE_TYPES)} productCode - Product code to compare with.
     * @return {boolean} True if the instance's product code is equal to the other; false otherwise.
     */
    isProductCodeEqualTo(productCode) {
        const input = new Input({ productCode: productCode });
        if (!input.isProductCodeValid()) return false;
        if (this.isProductCodeUnknown() || input.isProductCodeUnknown()) return true;
        if (this.isProductCodeBlank() || input.isProductCodeBlank())
            return this.isProductCodeBlank() && input.isProductCodeBlank();
        if (this.isProductCodeUnreadable() || input.isProductCodeUnreadable()) return true;
        return this.getProductCodeStandardized() === input.getProductCodeStandardized();
    }

    /**
     * Return a string confirming the product code print.
     * @return {string} Confirmation string.
     */
    confirmProductCode() {
        let message = "invalid form [invalid entry, please enter a valid form]";
        if (this.isProductCodeString()) message = this.productCode;
        else if (this.isProductCodeBlank()) message = "blank";
        else if (this.isProductCodeUnreadable()) message = "unreadable";
        else if (this.isProductCodeUnknown()) message = "unknown";
        return "Product code: " + message;
    }



    ////////////////////////////////
    // GENERAL
    ////////////////////////////////

    /**
     * Return a string confirming the input data.
     * @return {string} Confirmation string.
     */
    confirm() {
        return this.confirmProductCode();
    }

    /**
     * Evaluate if it is a valid input.
     * @return {boolean} True if it is valid; false otherwise.
     */
    isValid() {
        return this.isLabelValid() && this.isProductCodeValid();
    }

    /**
     * Identify of the occurrences of possible collections from the input data.
     * @return {null} Abstract method for initialization purpose only.
     */
    identify() {
        return null;
    }

    /**
     * Return a string identifying the input data.
     * @return {string} Identification string.
     */
    identification() {

        // Confirmation of input data
        let str = "You have entered the following input information"
        if (this.isLabelValid()) str += ` for ${this.label}`;
        str += `.\n\n${this.confirm()}`;

        let results = null;

        // Attempt to find results if valid
        if (this.isValid()) results = this.identify();

        // If there is no match
        if (!results) {
            str += "\n\nWe could not find any match. Please verify the input information.\n"
            str += "This information may not be part of our system yet.\n"
            str += "If the problem persists, please contact us at 'contact@myclothingarchive.com'.";
        }

        // Individual identification frameworks
        else for (let res of results) str += `\n\n${res}`;

        return str;
    }
}

export default Input;
