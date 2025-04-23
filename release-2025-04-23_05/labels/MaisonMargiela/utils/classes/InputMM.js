/**
 * Initialization of class InputMM.
 *
 * Initialization of a class for the input data to identify Maison (Martin) Margiela.
 *
 * @author Etienne Bolduc
 */

import { Input } from "../../../../utils/index.js";
import { default as LABEL_NOTATION } from "../../constants/LABEL_NOTATION.js";
import { default as MANUFACTURER } from "../../constants/MANUFACTURER.js";

/**
 * Enum for Maison (Martin) Margiela label notation.
 * @readonly
 * @enum {string}
 */
const LabelNotation = Object.freeze({
    "BLANK": "BLANK",
    '0': '0',
    '0_10': '0_10',
    '1': '1',
    '1_10': '1_10',
    '3': '3',
    '4': '4',
    '4_14': '4_14',
    '6_BLANK': '6_BLANK',
    '6': '6',
    '6_BIG': '6_BIG',
    'MM6_MMM': 'MM6_MMM',
    'MM6_MM': 'MM6_MM',
    '8': '8',
    '10': '10',
    '11': '11',
    '12': '12',
    '13': '13',
    '14': '14',
    '15': '15',
    '20': '20',
    '22': '22',
    'REPRODUCTION': 'REPRODUCTION',
    'H_M': 'H_M',
    'THE_NORTH_FACE': 'THE_NORTH_FACE',
    'SUPREME': 'SUPREME',
    "UNSPECIFIED": "UNSPECIFIED",
});

/**
 * Enum for Maison (Martin) Margiela manufacturer.
 * @readonly
 * @enum {string}
 */
const Manufacturer = Object.freeze({
    MADE_IN_ITALY: "MADE_IN_ITALY",
    MADE_IN_FRANCE: "MADE_IN_FRANCE",
    FUZZI: "FUZZI",
    DENI_CLER: "DENI_CLER",
    MISS_DEANNA: "MISS_DEANNA",
    MISS_DEANNA_SEPARATED: "MISS_DEANNA_SEPARATED",
    MISS_DEANNA_TOGETHER: "MISS_DEANNA_TOGETHER",
    DEANNA_SPA: "DEANNA_SPA",
    STAFF_INTERNATIONAL: "STAFF_INTERNATIONAL",
    MARGIELA_GROUP: "MARGIELA_GROUP",
    MARGIELA_SAS: "MARGIELA_SAS",
    MACKINTOSH: "MACKINTOSH",
    UNSPECIFIED: "UNSPECIFIED",
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
    static Manufacturer = Manufacturer;

    /**
     * Create an object containing the input data to identify Maison Margiela.
     * @param {InputMM.LabelNotation} labelNotation - Object to extract the label notation from.
     * @param {string} productCode - Object to extract the product code print from.
     */
    constructor({ labelNotation, productCode, manufacturer }) {
        super({ label: Input.Label.MM, productCode: productCode });
        delete this.logoStyle;
        /** @type {InputMM.LabelNotation} */
        this.labelNotation = (labelNotation == null || labelNotation === 'undefined')? LabelNotation.UNSPECIFIED : labelNotation;
        /** @type {InputMM.Manufacturer} */
        this.manufacturer = (manufacturer == null || manufacturer === 'undefined')? Manufacturer.UNSPECIFIED : manufacturer;
    }

    /**
     * Return a copy of the instance as a new object.
     * @return {InputMM} Copy of the instance.
     */
    copy() {
        return new InputMM({ labelNotation: this.labelNotation, productCode: this.productCode,
            manufacturer: this.manufacturer
         });
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
     * Evaluate if a label notation is blank.
     * @return {boolean} True if it is; false otherwise.
     */
    isLabelNotationBLANK() {
        return this.labelNotation === InputMM.LabelNotation['BLANK'];
    }

    /**
     * Evaluate if a label notation is for the artisanal line.
     * @return {boolean} True if it is; false otherwise.
     */
    isLabelNotationArtisanal() {
        return this.labelNotation === InputMM.LabelNotation['BLANK']
            || this.labelNotation === InputMM.LabelNotation['0']
            || this.labelNotation === InputMM.LabelNotation['0_10'];
    }

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
        return this.labelNotation in InputMM.LabelNotation; //&& !this.isLabelNotationUnspecified();
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
        const input = new InputMM({ labelNotation: labelNotation });
        if (!input.isLabelNotationValid()) return false;
        if (this.isLabelNotationUnspecified() || input.isLabelNotationUnspecified()) return true;
        return this.labelNotation === input.labelNotation;
    }

    /**
     * Return a string confirming the label notation.
     * @return {string} Confirmation string.
     */
    confirmLabelNotation() {
        let message = "invalid entry";
        if (this.isLabelNotationValid()) message = LABEL_NOTATION[this.labelNotation].stylized;
        if (this.isLabelNotationUnspecified()) message += " [invalid notation]";
        return "> Main label notation: " + message;
    }



    ////////////////////////////////
    // MANUFACTURER
    ////////////////////////////////

    /**
     * Evaluate if the manufacturer is unspecified.
     * @return {boolean} True if it is; false otherwise.
     */
    isManufacturerUnspecified() {
        return this.manufacturer === InputMM.Manufacturer.UNSPECIFIED;
    }

    /**
     * Evaluate if the manufacturer is MADE_IN_FRANCE.
     * @return {boolean} True if it is; false otherwise.
     */
    isManufacturerMADE_IN_FRANCE() {
        return this.manufacturer === InputMM.Manufacturer.MADE_IN_FRANCE;
    }

    /**
     * Evaluate if the manufacturer is Miss Deanna.
     * @return {boolean} True if it is; false otherwise.
     */
    isManufacturerMISS_DEANNA() {
        return this.manufacturer === InputMM.Manufacturer.MISS_DEANNA
            || this.manufacturer === InputMM.Manufacturer.MISS_DEANNA_SEPARATED
            || this.manufacturer === InputMM.Manufacturer.MISS_DEANNA_TOGETHER
            || this.manufacturer === InputMM.Manufacturer.DEANNA_SPA;
    }

    /**
     * Evaluate if the manufacturer is MACKINTOSH.
     * @return {boolean} True if it is; false otherwise.
     */
    isManufacturerMACKINTOSH() {
        return this.manufacturer === InputMM.Manufacturer.MACKINTOSH;
    }

    /**
     * Evaluate if the manufacturer is valid.
     * @return {boolean} True if it is; false otherwise.
     */
    isManufacturerValid() {
        return this.isManufacturerMISS_DEANNA() || this.manufacturer in InputMM.Manufacturer;
    }

    /**
     * Return the manufacturer.
     * @return {InputMM.Manufacturer} Manufacturer.
     */
    getManufacturer() {
        return this.manufacturer;
    }

   /**
     * Evaluate if the instance's manufacturer is equal to another manufacturer.
     * @param {InputMM.Manufacturer} manufacturer - Manufacturer to compare with.
     * @return {boolean} True if the instance's manufacturer is equal to the other; false otherwise.
     */
    isManufacturerEqualTo(manufacturer) {
        const input = new InputMM({ manufacturer: manufacturer });
        if (!input.isManufacturerValid()) return false;
        if (this.isManufacturerUnspecified() || input.isManufacturerUnspecified()) return true;
        return this.manufacturer === input.manufacturer;
    }

    /**
     * Return a string confirming the manufacturer.
     * @return {string} Confirmation string.
     */
    confirmManufacturer() {
        let message = "invalid entry";
        if (this.isManufacturerValid()) message = MANUFACTURER[this.manufacturer].stylized;
        return "> Manufacturer: " + message;
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
        let sameManufacturer = this.isManufacturerEqualTo(input.manufacturer);
        return sameProductCode && sameLabelNotation && sameManufacturer;
    }

    /**
     * Return a string confirming the input data.
     * @return {string} Confirmation string.
     */
    confirm() {
        let str = `${this.confirmLabel()}`;
        str += `\n${this.confirmLabelNotation()}`;
        str += `\n${this.confirmProductCode()}`;
        str += `\n${this.confirmManufacturer()}`;
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
        if (!this.isManufacturerValid()) return false;
        return true;
    }
}

export default InputMM;
