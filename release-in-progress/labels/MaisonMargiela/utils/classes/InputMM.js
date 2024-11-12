/**
 * Initialization of class InputMM.
 *
 * Initialization of a class for the input data to identify Maison Margiela.
 *
 * @author Etienne Bolduc
 */

import { Input } from "../../../../utils/index.js";

/**
 * Enum for Maison Margiela label notation.
 * @readonly
 * @enum {string}
 */
const LabelNotation = Object.freeze({
    "BLANK": "BLANK",
    '0': '0',
    '0-10': '0-10',
    '1': '1',
    '3': '3',
    '4': '4',
    '6': '6',
    "MM6": "MM6",
    '8': '8',
    '10': '10',
    '11': '11',
    '12': '12',
    '13': '13',
    '14': '14',
    '15': '15',
    '22': '22',
    "UNSPECIFIED": "UNSPECIFIED"
});

/**
 * Maison Margiela label notation stylized message.
 * @readonly
 * @enum {string}
 */
const LabelNotationStylized = Object.freeze({
    "BLANK": "blank",
    '0': "⓪",
    '0-10': "⓪⑩",
    '1': "①",
    '3': "③",
    '4': "④",
    '6': "⑥",
    'MM6': "MM⑥",
    '8': "⑧",
    '10': "⑩",
    '11': "⑪",
    '12': "⑫",
    '13': "⑬",
    '14': "⑭",
    '15': "⑮",
    '22': "㉒",
    "UNSPECIFIED": "unspecified"
});



/**
 * Class representing the input data to identify Maison Margiela
 * consisting of a label notation and a product code.
 */
class InputMM extends Input {

    ////////////////////////////////
    // CONSTRUCTOR & COPY
    ////////////////////////////////

    static LabelNotation = LabelNotation;

    /**
     * Create an object containing the input data to identify Maison Margiela.
     * @param {InputMM.LabelNotation} labelNotation - Object to extract the label notation from.
     * @param {string} productCode - Object to extract the product code print from.
     */
    constructor({ labelNotation, productCode }) {
        super({ label: Input.Label.MM, productCode: productCode });
        /** @type {InputMM.LabelNotation} */
        this.labelNotation = labelNotation;
    }

    /**
     * Return a copy of the instance as a new object.
     * @return {InputMM} Copy of the instance.
     */
    copy() {
        return new InputMM({ labelNotation: this.labelNotation, productCode: this.productCode });
    }



    ////////////////////////////////
    // LABEL
    ////////////////////////////////

    /**
     * Evaluate if the label is valid.
     * @return {boolean} True if it is; false otherwise.
     */
    isLabelValid() {
        return this.label === Input.Label.MM;
    }



    ////////////////////////////////
    // LABEL NOTATION
    ////////////////////////////////

    /**
     * Evaluate if a label notation is unspecified.
     * @return {boolean} True if it is; false otherwise.
     */
    isLabelNotationUnspecified() {
        return this.labelNotation === InputMM.LabelNotation.UNSPECIFIED;
    }

    /**
     * Evaluate if the label notation is valid.
     * @return {boolean} True if it is; false otherwise.
     */
    isLabelNotationValid() {
        return this.labelNotation in InputMM.LabelNotation;
    }

    /**
     * Return the label notation.
     * @return {InputMM.LabelNotation} Label notation.
     */
    getLabelNotation() {
        return this.labelNotation;
    }

   /**
     * Evaluate if the instance's label notation is equal to another label notation.
     * @param {InputMM.LabelNotation} labelNotation - Label notation to compare with.
     * @return {boolean} True if the instance's label notation is equal to the other; false otherwise.
     */
    isLabelNotationEqualTo(labelNotation) {
        return this.labelNotation === labelNotation;
    }

    /**
     * Return a string confirming the label notation.
     * @return {string} Confirmation string.
     */
    confirmLabelNotation() {
        let message = "invalid entry";
        if (this.isLabelNotationValid()) message = LabelNotationStylized[this.labelNotation];
        return "> Main label notation: " + message;
    }



    ////////////////////////////////
    // GENERAL
    ////////////////////////////////

    /**
     * Evaluate if the instance is equal to another InputMM.
     * @return {boolean} True if it is; false otherwise.
     */
    isInputMMEqualTo(input) {
        let sameProductCode = this.isProductCodeEqualTo(input.productCode);
        let sameLabelNotation = this.isLabelNotationEqualTo(input.labelNotation);
        return sameProductCode && sameLabelNotation;
    }

    /**
     * Return a string confirming the input data.
     * @return {string} Confirmation string.
     */
    confirm() {
        let str = `${this.confirmLabel()}`;
        str += `\n${this.confirmLabelNotation()}`;
        str += `\n${this.confirmProductCode()}`;
        return str;
    }

    /**
     * Evaluate if it is a valid input.
     * @return {boolean} True if the two are valid; false otherwise.
     */
    isValid() {
        if (!this.isLabelValid()) return false;
        if (!this.isLabelNotationValid()) return false;
        if (!this.isProductCodeValid()) return false;
        return true;
    }
}

export default InputMM;
