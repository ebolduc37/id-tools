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

    static NO_PRODUCT_CODE_TYPES = NO_PRODUCT_CODE_TYPES;

    /**
     * Create an object containing the input data.
     * @param {Labels} [label] - Object to extract the label from.
     * @param {(string|Input.NO_PRODUCT_CODE_TYPES)} [productCode] - Object to extract the product code from.
     */
    constructor({ label, productCode = Input.NO_PRODUCT_CODE_TYPES.BLANK}) {
        /** @type {Labels} */
        this.label = label;
        /** @type {(string|Input.PRODUCT_CODE_PRINT_TYPES)} */
        this.productCode = productCode;
    }

    /**
     * Return a copy of the instance as a new object.
     * @return {Input} Copy of the instance.
     */
    copy() {
        return new Input({ label: this.label, productCode: this.productCode });
    }

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
     * Evaluate if the instance is valid input data.
     * @return {boolean} True if it is valid; false otherwise.
     */
    isValid() {
        if (this.label == null) return false;
        return this.isProductCodeValid();
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
     * Identify of the occurrences of possible collections from the input data.
     * @return {null} Abstract method for initialization purpose only.
     */
    identify() {
        return null;
    }

    /**
     * Return a string confirming the input data.
     * @return {string} Confirmation string.
     */
    confirmation() {

        // Label confirmation
        let str = "You have entered the following information"
        if (this.label != null) str += ` for ${this.label}`;
        str += ":";

        // Product code print confirmation
        if (this.isProductCodeString())
            str += `\n- the product code ${this.productCode}`;
        else if (this.isProductCodeBlank())
            str += "\n- no product code print";
        else if (this.isProductCodeUnreadable())
            str += "\n- the product code print is unreadable";
        else if (this.isProductCodeUnknown())
            str += "\n- whether there was a product code print originally is unknown";
        else
            str += "\n- an unknown form of product code print"

        return str;
    }

    /**
     * Return a string validating the input data.
     * @return {string} Validation string.
     */
    validation() {

        // Label validation
        let str = "Unfortunately, the information you have entered is not valid"
        if (this.label != null) str += ` for ${this.label}:`;
        else str += ":\n- the label is not specified";

        // Product code print validation
        if (this.isProductCodeValid())
            str += "\n- the form of the product code print is valid"
        else
            str += "\n- the form of the product code print is not valid";

        return str;
    }

    /**
     * Return a string identifying the input data.
     * @return {string} Identification string.
     */
    identification() {

        // Confirmation of input data
        let str = this.confirmation();

        // Validation of input data if invalid
        if (!this.isValid()) return str + "\n\n" + this.validation();

        // List of all identification frameworks
        const results = this.identify();

        // If there is no match
        if (results == null) {
            str += "\n\n";
            str += "We could not find any match. Please try again.\n"
            str += "If the problem persists, please contact us at 'contact@myclothingarchive.com'.";
            return str;
        }

        // Individual identification frameworks
        for (let res of results) str += "\n\n" + res.toString();

        return str;
    }
}

export default Input;
