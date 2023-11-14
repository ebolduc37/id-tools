/**
 * Initialization of class InputYY.
 *
 * Initialization of a class for the input data to identify Yohji Yamamoto.
 *
 * @author Etienne Bolduc
 */

import { Input, Labels } from "../../../../utils/index.js";

/**
 * Enum for Yohji Yamamoto signature label styles.
 * @readonly
 * @enum {string}
 */
const SIGNATURE_STYLES = Object.freeze({
    MAIN_I: "MAIN_I", // A/W '81 -> S/S '85
    MAIN_II: "MAIN_II", // S/S '84 -> A/W '91
    MAIN_III: "MAIN_III", // A/W '91 -> NOW

    OTHER: "OTHER"
});

/**
 * Enum for Yohji Yamamoto sizing systems.
 * @readonly
 * @enum {string}
 */
const SIZING_SYSTEMS = Object.freeze({
    ALPHABETICAL: "ALPHABETICAL",
    NUMERICAL: "NUMERICAL",
    UNKNOWN: "UNKNOWN",
});

/**
 * Enum for Yohji Yamamoto care label font types.
 * @readonly
 * @enum {string}
 */
const FONT_TYPES = Object.freeze({
    SERIF: "SERIF",
    SANS_SERIF: "SANS_SERIF",
    UNKNOWN: "UNKNOWN",
});

/**
 * Enum for Yohji Yamamoto laundry symbols locations.
 * @readonly
 * @enum {string}
 */
const LAUNDRY_SYMBOLS_LOCATIONS = Object.freeze({
    BELOW: "BELOW",
    ABOVE: "ABOVE",
    UNKNOWN: "UNKNOWN"
});

/**
 * Class representing the input data to identify Yohji Yamamoto
 * consisting of a product code.
 */
class InputYY extends Input {

    static SIGNATURE_STYLES = SIGNATURE_STYLES;
    static SIZING_SYSTEMS = SIZING_SYSTEMS;
    static FONT_TYPES = FONT_TYPES;
    static LAUNDRY_SYMBOLS_LOCATIONS = LAUNDRY_SYMBOLS_LOCATIONS;

    /**
     * Create an object containing the input data to identify Yohji Yamamoto.
     * @param {string} productCode - Object to extract the product code print from.
     */
    constructor({ productCode, signatureStyle, sizingSystem, fontType, laundrySymbolsLocation }) {
        super({ label: Labels.YY, productCode: productCode });
        /** @type {InputYY.SIGNATURE_STYLES} */
        this.signatureStyle = signatureStyle;
        /** @type {InputYY.SIZING_SYSTEMS} */
        this.sizingSystem = sizingSystem;
        /** @type {InputYY.FONT_TYPES} */
        this.fontType = fontType;
        /** @type {InputYY.LAUNDRY_SYMBOLS_LOCATIONS} */
        this.laundrySymbolsLocation = laundrySymbolsLocation;
    }

    /**
     * Return a copy of the instance as a new object.
     * @return {InputYY} Copy of the instance.
     */
    copy() {
        return new InputYY({ productCode: this.productCode, signatureStyle: this.signatureStyle,
            sizingSystem: this.sizingSystem, fontType: this.fontType,
            laundrySymbolsLocation: this.laundrySymbolsLocation });
    }

    /**
     * Return an upcasted copy of the instance as a new object.
     * @return {Input} Upcasted copy of the instance.
     */
    toInput() {
        return new Input({ label: Labels.YY, productCode: this.productCode });
    }

    /**
     * Evaluate if the signature is MAIN_I.
     * @return {boolean} True if it is; false otherwise.
     */
    isSignatureI() {
        return this.signatureStyle === InputYY.SIGNATURE_STYLES.MAIN_I;
    }

    /**
     * Evaluate if the signature is MAIN_II.
     * @return {boolean} True if it is; false otherwise.
     */
    isSignatureII() {
        return this.signatureStyle === InputYY.SIGNATURE_STYLES.MAIN_II;
    }

    /**
     * Evaluate if the signature is MAIN_III.
     * @return {boolean} True if it is; false otherwise.
     */
    isSignatureIII() {
        return this.signatureStyle === InputYY.SIGNATURE_STYLES.MAIN_III;
    }

    /**
     * Evaluate if it is something else other than the signature.
     * @return {boolean} True if it is; false otherwise.
     */
    isSignatureOther() {
        return this.signatureStyle === InputYY.SIGNATURE_STYLES.OTHER;
    }

    /**
     * Evaluate if the sizing notation is alphabetical.
     * @return {boolean} True if it is; false otherwise.
     */
    isSizingAlphabetical() {
        return this.sizingSystem === InputYY.SIZING_SYSTEMS.ALPHABETICAL;
    }

    /**
     * Evaluate if the sizing notation is numerical.
     * @return {boolean} True if it is; false otherwise.
     */
    isSizingNumerical() {
        return this.sizingSystem === InputYY.SIZING_SYSTEMS.NUMERICAL;
    }

    /**
     * Evaluate if there is no sizing notation.
     * @return {boolean} True if it is; false otherwise.
     */
    isSizingUnknown() {
        return this.sizingSystem === InputYY.SIZING_SYSTEMS.UNKNOWN;
    }

    /**
     * Evaluate if the font type is serif.
     * @return {boolean} True if it is; false otherwise.
     */
    isFontSerif() {
        return this.fontType === InputYY.FONT_TYPES.SERIF;
    }

    /**
     * Evaluate if the font type is sans serif.
     * @return {boolean} True if it is; false otherwise.
     */
    isFontSansSerif() {
        return this.fontType === InputYY.FONT_TYPES.SANS_SERIF;
    }

    /**
     * Evaluate if the font type is unknown.
     * @return {boolean} True if it is; false otherwise.
     */
    isFontUnknown() {
        return this.fontType === InputYY.FONT_TYPES.UNKNOWN;
    }

    /**
     * Evaluate if the group of laundry symbols is located below the composition.
     * @return {boolean} True if it is; false otherwise.
     */
    isLaundryBelow() {
        return this.laundrySymbolsLocation === InputYY.LAUNDRY_SYMBOLS_LOCATIONS.BELOW;
    }

    /**
     * Evaluate if the group of laundry symbols is located above the composition.
     * @return {boolean} True if it is; false otherwise.
     */
    isLaundryAbove() {
        return this.laundrySymbolsLocation === InputYY.LAUNDRY_SYMBOLS_LOCATIONS.ABOVE;
    }

    /**
     * Evaluate if the group of laundry symbols is at an unknown location.
     * @return {boolean} True if it is; false otherwise.
     */
    isLaundryUnknown() {
        return this.laundrySymbolsLocation === InputYY.LAUNDRY_SYMBOLS_LOCATIONS.UNKNOWN;
    }

    /**
     * Evaluate if it is a valid inputs.
     * @return {boolean} True if the two are valid; false otherwise.
     */
    isValid() {
        if (!this.toInput().isValid()) return false;
        if (!Object.values(InputYY.SIGNATURE_STYLES).includes(this.signatureStyle)) return false;
        if (!Object.values(InputYY.SIZING_SYSTEMS).includes(this.sizingSystem)) return false;
        if (!Object.values(InputYY.FONT_TYPES).includes(this.fontType)) return false;
        if (!Object.values(InputYY.LAUNDRY_SYMBOLS_LOCATIONS).includes(this.laundrySymbolsLocation)) return false;

        if (this.isSignatureI() || this.isSignatureII())
            return !this.isSizingNumerical() && !this.isFontSansSerif() && !this.isLaundryAbove();
        if (this.isSizingAlphabetical())
            return !this.isFontSansSerif() && !this.isLaundryAbove();
        if (this.isFontSerif())
            return !this.isLaundryAbove();

        return true;
    }

    /**
     * Return a string confirming the input data.
     * @return {string} Confirmation string.
     */
    confirmation() {

        // Product code print confirmation
        let str = this.toInput().confirmation();

        // Signature style confirmation
        if (this.isSignatureI())
            str += "\n- the early, rounded signature style";
        else if (this.isSignatureII())
            str += "\n- the previous, rounder signature style";
        else if (this.isSignatureIII())
            str += "\n- the current, sharp signature style";
        else if (this.isSignatureOther())
            str += "\n- another style of label";
        else str += "\n- an invalid signature style"

        if (!this.isSignatureI() || !this.isSignatureII()) {

            // Sizing system confirmation
            if (this.isSizingAlphabetical())
                str += "\n- an alphabetical sizing notation system";
            else if (this.isSizingNumerical())
                str += "\n- a numerical sizing notation system";
            else if (this.isSizingUnknown())
                str += "\n- no sizing notation";
            else str += "\n- an invalid sizing notation system"

            if (!this.isSizingAlphabetical()) {

                // Font type confirmation
                if (this.isFontSerif())
                    str += "\n- a serif typeface on the care label";
                else if (this.isFontSansSerif())
                    str += "\n- a sans-serif typeface on the care label";
                else if (this.isFontUnknown()) {
                    str += "\n- whether the typeface was originally serif or sans-serif ";
                    str += "on the care label is unknown";
                }
                else str += "\n- an invalid typeface"

                if (!this.isFontSerif()) {

                    // Laundry symbols location confirmation
                    if (this.isLaundryBelow())
                        str += "\n- the laundry symbols are located below the composition on the care label";
                    else if (this.isLaundryAbove())
                        str += "\n- the laundry symbols are located above the composition on the care label";
                    else if (this.isLaundryUnknown()) {
                        str += "\n- whether the laundry symbols are originally located above or below ";
                        str += "the composition on the care label is unknown";
                    }
                    else str += "\n- an invalid laundry symbols location"

                }
            }

        }

        return str;
    }

    /**
     * Return a string validating the input data.
     * @return {string} Validation string.
     */
    validation() {
        
        // Product code print validation
        let str = this.toInput().validation();

        // Signature style confirmation
        if (this.signatureStyle == null
            || !Object.values(InputYY.SIGNATURE_STYLES).includes(this.signatureStyle))
            str += "\n- the signature style is not valid";
        else str += "\n- the signature style is valid";

        if (this.isSignatureI() || this.isSignatureII()) {
            let arr = [];
            if (this.isSizingNumerical()) arr.push("the sizing notation system should not be numerical");
            if (this.isFontSansSerif()) arr.push("there should not be a sans-serif typefont on the care label");
            if (this.isLaundryAbove()) arr.push("the laundry symbols should not be located above the composition on the care label");
            for (let i = 0; i < arr.length; i++) {
                if (i == 0) str += ", but in such case ";
                else if (i == 1) {
                    if (arr.length == 2) str += " and ";
                    else str += ", ";
                }
                else str += ", and "
                str += arr[i];
            }
            return str;
        }

        // Sizing system confirmation
        if (this.sizingSystem == null
            || !Object.values(InputYY.SIZING_SYSTEMS).includes(this.sizingSystem))
            str += "\n- the sizing notation system is not valid";
        else str += "\n- the sizing notation system is valid"

        if (this.isSizingAlphabetical()) {
            let arr = [];
            if (this.isFontSansSerif()) arr.push("there should not be a sans-serif typefont on the care label");
            if (this.isLaundryAbove()) arr.push("the laundry symbols should not be located above the composition on the care label");
            for (let i = 0; i < arr.length; i++) {
                if (i == 0) str += ", but in such case ";
                else if (i == 1 && arr.length == 2) str += " and ";
                str += arr[i];
            }
            return str;
        }

        // Font type confirmation
        if (this.fontType == null
            || !Object.values(InputYY.FONT_TYPES).includes(this.fontType))
            str += "\n- the typeface is invalid";
        else str += "\n- the typeface is valid"

        if (this.isFontSerif()) {
            if (this.isLaundryAbove())
                str += ", but in such case the laundry symbols should not be located above the composition on the care label";
            return str;
        }

        // Laundry symbols location confirmation
        if (this.laundrySymbolsLocation == null
            || !Object.values(InputYY.LAUNDRY_SYMBOLS_LOCATIONS).includes(this.laundrySymbolsLocation))
            str += "\n- the laundry symbols location is invalid";
        else str += "\n- the laundry symbols location is valid"

        return str;

    }
}

export default InputYY;
