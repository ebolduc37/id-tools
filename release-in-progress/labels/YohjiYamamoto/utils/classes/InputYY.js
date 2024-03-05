/**
 * Initialization of class InputYY.
 *
 * Initialization of a class for the input data to identify Yohji Yamamoto.
 *
 * @author Etienne Bolduc
 */

import { Input, Labels } from "../../../../utils/index.js";

/**
 * Enum for Yohji Yamamoto logo styles.
 * @readonly
 * @enum {string}
 */
const LOGO_STYLES = Object.freeze({
    YY_I:   "YY_I", // A/W '81 -> S/S '85
    YY_II:  "YY_II", // S/S '84 -> A/W '91
    YY_III: "YY_III", // A/W '91 -> NOW
    YS_I:   "YS_I",
    YS_II:  "YS_II",
    ELSE:   "ELSE",
    ANY:    "ANY",
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

    ////////////////////////////////
    // CONSTRUCTOR & COPY
    ////////////////////////////////

    static LOGO_STYLES = LOGO_STYLES;
    static SIZING_SYSTEMS = SIZING_SYSTEMS;
    static FONT_TYPES = FONT_TYPES;
    static LAUNDRY_SYMBOLS_LOCATIONS = LAUNDRY_SYMBOLS_LOCATIONS;

    /**
     * Create an object containing the input data to identify Yohji Yamamoto.
     * @param {string} productCode - Object to extract the product code print from.
     * @param {InputYY.LOGO_STYLES} logoStyle - Object to extract the logo style from.
     * @param {InputYY.SIZING_SYSTEMS} sizingSystem - Object to extract the sizing system from.
     * @param {InputYY.FONT_TYPES} fontType - Object to extract the font type from.
     * @param {InputYY.LAUNDRY_SYMBOLS_LOCATIONS} laundrySymbolsLocation - Object to extract the laundry symbols location from.
     */
    constructor({ productCode, logoStyle, sizingSystem, fontType, laundrySymbolsLocation }) {
        super({ label: Labels.YY, productCode: productCode });
        /** @type {InputYY.LOGO_STYLES} */
        this.logoStyle = logoStyle;
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
        return new InputYY({ productCode: this.productCode, logoStyle: this.logoStyle,
            sizingSystem: this.sizingSystem, fontType: this.fontType,
            laundrySymbolsLocation: this.laundrySymbolsLocation });
    }



    ////////////////////////////////
    // LOGO STYLE
    ////////////////////////////////

    /**
     * Evaluate if the logo is YY_I.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoYY_I() {
        return this.logoStyle === InputYY.LOGO_STYLES.YY_I;
    }

    /**
     * Evaluate if the logo is YY_II.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoYY_II() {
        return this.logoStyle === InputYY.LOGO_STYLES.YY_II;
    }

    /**
     * Evaluate if the logo is YY_III.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoYY_III() {
        return this.logoStyle === InputYY.LOGO_STYLES.YY_III;
    }

    /**
     * Evaluate if the logo is YY.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoYY() {
        return this.isLogoYY_I() || this.isLogoYY_II() || this.isLogoYY_III();
    }

    /**
     * Evaluate if the logo is YS_I.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoYS_I() {
        return this.logoStyle === InputYY.LOGO_STYLES.YS_I;
    }

    /**
     * Evaluate if the logo is YS_II.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoYS_II() {
        return this.logoStyle === InputYY.LOGO_STYLES.YS_II;
    }

    /**
     * Evaluate if the logo is YS.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoYS() {
        return this.isLogoYS_I() || this.isLogoYS_II();
    }

    /**
     * Evaluate if the logo style is something else.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoElse() {
        return this.logoStyle === InputYY.LOGO_STYLES.ELSE;
    }

    /**
     * Evaluate if the logo is any of the valid logo styles.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoAny() {
        return Object.values(InputYY.LOGO_STYLES).includes(this.logoStyle);
    }

    /**
     * Evaluate if the logo style is valid.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoStyleValid() {
        return this.isLogoAny();
    }

    /**
     * Return a string confirming the logo style.
     * @return {string} Confirmation string.
     */
    confirmLogoStyle() {
        let message = "invalid form [invalid entry, please enter a valid style]";
        if (this.isLogoYY_I()) message = "earliest, roundest Yohji Yamamoto signature";
        else if (this.isLogoYY_II()) message = "earlier, rounder Yohji Yamamoto signature";
        else if (this.isLogoYY_III()) message = "current, sharp Yohji Yamamoto signature";
        else if (this.isLogoYS_I()) message = "early Y's logo";
        else if (this.isLogoYS_II()) message = "modern Y's logo";
        else if (this.isLogoElse()) message = "other";
        return "Logo style: " + message;
    }



    ////////////////////////////////
    // SIZING SYSTEM
    ////////////////////////////////

    /**
     * Evaluate if the sizing system is alphabetical.
     * @return {boolean} True if it is; false otherwise.
     */
    isSizingAlphabetical() {
        return this.sizingSystem === InputYY.SIZING_SYSTEMS.ALPHABETICAL;
    }

    /**
     * Evaluate if the sizing system is numerical.
     * @return {boolean} True if it is; false otherwise.
     */
    isSizingNumerical() {
        return this.sizingSystem === InputYY.SIZING_SYSTEMS.NUMERICAL;
    }

    /**
     * Evaluate if there is no sizing notation to infer the sizing system.
     * @return {boolean} True if it is; false otherwise.
     */
    isSizingUnknown() {
        return this.sizingSystem === InputYY.SIZING_SYSTEMS.UNKNOWN;
    }

    /**
     * Evaluate if the sizing system is valid.
     * @return {boolean} True if it is; false otherwise.
     */
    isSizingSystemValid() {
        return this.isSizingAlphabetical() || this.isSizingNumerical() || this.isSizingUnknown();
    }

    /**
     * Return a string confirming the sizing system.
     * @return {string} Confirmation string.
     */
    confirmSizingSystem() {
        let message = "invalid form [invalid entry, please enter a valid form]";
        if (this.isSizingAlphabetical()) message = "alphabetical";
        else if (this.isSizingNumerical()) message = "numerical";
        else if (this.isSizingUnknown()) message = "unknown";
        return "Sizing system: " + message;
    }



    ////////////////////////////////
    // FONT TYPE
    ////////////////////////////////

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
     * Evaluate if the font type is valid.
     * @return {boolean} True if it is; false otherwise.
     */
    isFontTypeValid() {
        if (this.isFontSansSerif()) {
            return !(this.isLogoYY_I() || this.isLogoYY_II() || this.isProductCodeBlank());
        }
        else return this.isFontSerif() || this.isFontUnknown();
    }

    /**
     * Return a string confirming the font type.
     * @return {string} Confirmation string.
     */
    confirmFontType() {
        let message = "invalid form [invalid entry, please enter a valid form]";
        if (this.isFontSansSerif()) {
            message = "sans-serif";
            if (this.isLogoYY_I() || this.isLogoYY_II() || this.isProductCodeBlank())
            message += " [era mismatch with previous information]";
        }
        else if (this.isFontSerif()) message = "serif";
        else if (this.isFontUnknown()) message = "unknown";
        return "Font type: " + message;
    }



    ////////////////////////////////
    // LAUNDRY SYMBOLS LOCATION
    ////////////////////////////////

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
     * Evaluate if the group of laundry symbols is at a valid location.
     * @return {boolean} True if it is; false otherwise.
     */
    isLaundrySymbolsLocationValid() {
        if (this.isLaundryAbove())
            return !(this.isLogoYY_I() || this.isLogoYY_II() || this.isProductCodeBlank() || this.isFontSerif());
        else return this.isLaundryBelow() || this.isLaundryUnknown();
    }

    /**
     * Return a string confirming the laundry symbols location.
     * @return {string} Confirmation string.
     */
    confirmLaundrySymbolsLocation() {
        let message = "invalid form [invalid entry, please enter a valid form]";
        if (this.isLaundryAbove()) {
            message = "above";
            if (this.isLogoYY_I() || this.isLogoYY_II() || this.isProductCodeBlank() || this.isFontSerif())
                message += " [era mismatch with previous information]";
        }
        else if (this.isLaundryBelow()) message = "below";
        else if (this.isLaundryUnknown()) message = "unknown";
        return "Laundry symbols location: " + message;
    }



    ////////////////////////////////
    // GENERAL
    ////////////////////////////////

    /**
     * Return a string confirming the input data.
     * @return {string} Confirmation string.
     */
    confirm() {
        let str = `${this.confirmLogoStyle()}`;
        str += `\n${super.confirm()}`;
        str += `\n${this.confirmSizingSystem()}`;
        str += `\n${this.confirmFontType()}`;
        str += `\n${this.confirmLaundrySymbolsLocation()}`;
        return str;
    }

    /**
     * Evaluate if it is a valid input.
     * @return {boolean} True if the two are valid; false otherwise.
     */
    isValid() {
        if (!this.isLogoStyleValid()) return false;
        if (!super.isValid()) return false;
        if (!this.isSizingSystemValid()) return false;
        if (!this.isFontTypeValid()) return false;
        if (!this.isLaundrySymbolsLocationValid()) return false;
        return true;
    }
}

export default InputYY;
