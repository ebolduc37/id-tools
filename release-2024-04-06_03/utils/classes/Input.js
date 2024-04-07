/**
 * Initialization of abstract class Input.
 *
 * Initialization of an abstract class for the input data.
 *
 * @author Etienne Bolduc
 */

import standardize from "../functions/standardize.js";

/**
 * Enum for the labels that can be identified.
 * @readonly
 * @enum {string}
 */
const Label = Object.freeze({
    CDG: "COMME des GARÇONS",
    YY: "Yohji Yamamoto",
});

/**
 * Enum for no product code types.
 * @readonly
 * @enum {string}
 */
const NoProductCode = Object.freeze({
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

    static Label = Label;
    static NoProductCode = NoProductCode;

    /**
     * Create an object containing the input data.
     * @param {Input.Label} [label] - Object to extract the label from.
     * @param {(string|Input.NoProductCode)} [productCode] - Object to extract the product code from.
     * @param {string} logoStyle - Object to extract the logo style from.
     */
    constructor({ label, productCode = Input.NoProductCode.BLANK, logoStyle = null }) {
        /** @type {Input.Label} */
        this.label = label;
        /** @type {(string|Input.PRODUCT_CODE_PRINT_TYPES)} */
        this.productCode = productCode;
        if (!standardize(productCode)) this.productCode = Input.NoProductCode.BLANK;
        /** @type {string} */
        this.logoStyle = logoStyle;
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
        return Object.values(Input.Label).includes(this.label);
    }

    /**
     * Return a string confirming the label.
     * @return {string} Confirmation string.
     */
    confirmLabel() {
        let message = "invalid entry";
        if (this.isLabelValid()) message = this.label;
        else if (!this.label) message = "no entry";
        return "> Label: " + message;
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
                && !Object.values(Input.NoProductCode).includes(this.productCode);
    }

    /**
     * Evaluate if the product code print is blank.
     * @return {boolean} True if it is; false otherwise.
     */
    isProductCodeBlank() {
        return this.productCode === Input.NoProductCode.BLANK;
    }

    /**
     * Evaluate if the product code is unreadable.
     * @return {boolean} True if it is; false otherwise.
     */
    isProductCodeUnreadable() {
        return this.productCode === Input.NoProductCode.UNREADABLE;
    }

    /**
     * Evaluate if the product code print is unknown.
     * @return {boolean} True if it is; false otherwise.
     */
    isProductCodeUnknown() {
        return this.productCode === Input.NoProductCode.UNKNOWN;
    }

    /**
     * Evaluate if the product code print is valid.
     * @return {boolean} True if it is; false otherwise.
     */
    isProductCodeValid() {
        return this.isProductCodeString()
                || Object.values(Input.NoProductCode).includes(this.productCode);
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
     * @param {(string|Input.NoProductCode)} productCode - Product code to compare with.
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
        let message = "invalid entry";
        if (this.isProductCodeString()) message = this.productCode;
        else if (this.isProductCodeBlank()) message = "blank";
        else if (this.isProductCodeUnreadable()) message = "unreadable";
        else if (this.isProductCodeUnknown()) message = "unknown";
        return "> Product code: " + message;
    }



    ////////////////////////////////
    // LOGO STYLE
    ////////////////////////////////

    /**
     * Evaluate if the logo style is a certain style.
     * @param {(string|Object)} logoStyleObject Logo style.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogo(logoStyleObject) {
        if (!logoStyleObject) return true;
        if (typeof logoStyleObject === 'string') return this.logoStyle === logoStyleObject;
        //return Object.values(logoStyle).includes(this.logoStyle);
        for (const [key, value] of Object.entries(logoStyleObject)) {
            if (this.isLogo(value)) return true;
        }
        return false;
    }

    /**
     * Evaluate if a logo style is entered.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoEntered() {
        return this.logoStyle !== null;
    }

    /**
     * Evaluate if the logo style is valid.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoStyleValid() {
        return true;
    }

    /**
     * Return a string confirming the logo style.
     * @return {string} Confirmation string.
     */
    confirmLogoStyle() {
        let message = `${this.logoStyle}`;
        if (!this.isLogoEntered) message = "no entry";
        return "> Logo style: " + message;
    }



    ////////////////////////////////
    // GENERAL
    ////////////////////////////////

    /**
     * Return a string confirming the input data.
     * @return {string} Confirmation string.
     */
    confirm() {
        return this.confirmLabel();
    }

    /**
     * Evaluate if it is a valid input.
     * @return {boolean} True if it is valid; false otherwise.
     */
    isValid() {
        if (!this.isLabelValid()) return false;
        if (!this.isLogoStyleValid()) return false;
        if (!this.isProductCodeValid()) return false;
        return true;
    }

    /**
     * Identify of the occurrences of possible collections from the input data.
     * @return {Object[]} Abstract method for initialization purpose only.
     */
    extract() {
        return [];
    }

    /**
     * Return a string confirming the input data and identifying the possible collections.
     * @return {string} Identification string.
     */
    identify() {

        // Confirmation of input data
        let str = `${this.confirm()}`

        let results = [];

        // Attempt to find results if valid
        if (this.isValid()) results = this.extract();

        // If there is no match
        if (results.length === 0) {
            str += "\n\nWe could not find any match. Please verify the input information.\n"
            str += "This information may not be part of our system yet.\n"
            str += "If the problem persists, please contact us at 'contact@myclothingarchive.com'.";
        }

        // Individual identification frameworks
        else for (let id of results) str += `\n\n${id.result()}`;

        return str;
    }

    toString() {
        return JSON.stringify(this);
    }
}

export default Input;
