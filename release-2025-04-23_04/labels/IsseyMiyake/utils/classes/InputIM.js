/**
 * Initialization of class InputIM.
 *
 * Initialization of a class for the input data to identify ISSEY MIYAKE.
 *
 * @author Etienne Bolduc
 */

import { Input, deepFreeze } from "../../../../utils/index.js";

/**
 * Enum for ISSEY MIYAKE logo style.
 * @readonly
 * @enum {string}
 */
const LogoStyle = Object.freeze({
    ROUND: "ROUND",
    BRUSH: "BRUSH",
    IM: {
        BLACK_ON_WHITE: "IM_BLACK_ON_WHITE",
        WHITE_ON_BLACK: "IM_WHITE_ON_BLACK",
    },
    ME: {
        BLACK_ON_WHITE: "ME_BLACK_ON_WHITE",
        WHITE_ON_BLACK: "ME_WHITE_ON_BLACK",
    },
    UNSPECIFIED: "UNSPECIFIED",
});

/**
 * Enum for ISSEY MIYAKE manufacturer.
 * @readonly
 * @enum {string}
 */
const Manufacturer = Object.freeze({
    IM_INC: "IM_INC", // ISSEY MIYAKE INC. //\\ 株式会社 イッセイ ミヤケ \\
    IM_INTL_INC: "IM_INTL_INC", // ISSEY MIYAKE INT'L. INC. //\\ ㈱ イッセイ ミヤケ インターナショナル \\
    ON_LIMITS: "ON_LIMITS", // ISSEY MIYAKE ON LIMITS INC. //\\  ㈱ イッセイ ミヤケ オンリミット \\
    ANET: "ANET", // A-NET INC. //\\ 株式会社 エイ・ネット \\
    UNSPECIFIED: "UNSPECIFIED"
});

/**
 * Enum for ISSEY MIYAKE sizing.
 * @readonly
 * @enum {string}
 */
const Sizing = Object.freeze({
    ALPHABETICAL: "ALPHABETICAL",
    NUMERICAL: "NUMERICAL",
    UNSPECIFIED: "UNSPECIFIED",
});

/**
 * Enum for ISSEY MIYAKE care label typeface.
 * @readonly
 * @enum {string}
 */
const Typeface = Object.freeze({
    SLAB_SERIF: "SLAB_SERIF",
    SANS_SERIF: "SANS_SERIF",
    UNSPECIFIED: "UNSPECIFIED",
});



/**
 * Class representing the input data to identify ISSEY MIYAKE
 * consisting of a product code.
 */
class InputIM extends Input {

    ////////////////////////////////
    // CONSTRUCTOR & COPY
    ////////////////////////////////

    static LogoStyle = LogoStyle;
    static Manufacturer = Manufacturer;
    static Sizing = Sizing;
    static Typeface = Typeface;

    /**
     * Create an object containing the input data to identify ISSEY MIYAKE.
     * @param {string} productCode - Object to extract the product code print from.
     * @param {InputIM.LogoStyle} logoStyle - Object to extract the logo style from.
     * @param {InputIM.Manufacturer} manufacturer - Object to extract the manufacturer from.
     * @param {InputIM.Sizing} sizing - Object to extract the sizing from.
     * @param {InputIM.Typeface} typeface - Object to extract the typeface from.
     */
    constructor({ productCode, logoStyle, manufacturer, sizing, typeface }) {
        super({ label: Input.Label.IM, productCode: productCode, logoStyle: logoStyle });
        /** @type {InputIM.Manufacturer} */
        this.manufacturer = (manufacturer == null)? InputIM.Manufacturer.UNSPECIFIED : manufacturer;
        /** @type {InputIM.Sizing} */
        this.sizing = (sizing == null)? InputIM.Sizing.UNSPECIFIED : sizing;
        /** @type {InputIM.Typeface} */
        this.typeface = (typeface == null)? InputIM.Typeface.UNSPECIFIED : typeface;
    }

    /**
     * Return a copy of the instance as a new object.
     * @return {InputIM} Copy of the instance.
     */
    copy() {
        return new InputIM({ productCode: this.productCode, logoStyle: this.logoStyle,
            manufacturer: this.manufacturer, sizing: this.sizing,
            typeface: this.typeface });
    }



    ////////////////////////////////
    // LABEL
    ////////////////////////////////

    /**
     * Evaluate if the label is valid.
     * @return {boolean} True if it is; false otherwise.
     */
    isLabelValid() {
        return this.label === Input.Label.IM;
    }


    ////////////////////////////////
    // PRODUCT CODE
    ////////////////////////////////

    /**
     * Evaluate if the product code print is valid.
     * @return {boolean} True if it is; false otherwise.
     */
    isProductCodeValid() {
        return this.isProductCodeString();
    }

    /**
     * Return a string confirming the product code.
     * @return {string} Confirmation string.
     */
    confirmProductCode() {
        let str = super.confirmProductCode();
        if (!this.isProductCodeString()) str += " [invalid code format]";
        return str;
    }



    ////////////////////////////////
    // LOGO STYLE
    ////////////////////////////////

    /**
     * Evaluate if the logo is ROUND.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoROUND() {
        return this.isLogo(InputIM.LogoStyle.ROUND);
    }

    /**
     * Evaluate if the logo is BRUSH.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoBRUSH() {
        return this.isLogo(InputIM.LogoStyle.BRUSH);
    }

    /**
     * Evaluate if the logo is old.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoOld() {
        return this.isLogoBRUSH() || this.isLogoROUND();
    }

    /**
     * Evaluate if the logo is IM_BLACK_ON_WHITE.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoIM_BLACK_ON_WHITE() {
        return this.isLogo(InputIM.LogoStyle.IM.BLACK_ON_WHITE);
    }

    /**
     * Evaluate if the logo is IM_WHITE_ON_BLACK.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoIM_WHITE_ON_BLACK() {
        return this.isLogo(InputIM.LogoStyle.IM.WHITE_ON_BLACK);
    }

    /**
     * Evaluate if the logo is ME_BLACK_ON_WHITE.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoME_BLACK_ON_WHITE() {
        return this.isLogo(InputIM.LogoStyle.ME.BLACK_ON_WHITE);
    }

    /**
     * Evaluate if the logo is ME_WHITE_ON_BLACK.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoME_WHITE_ON_BLACK() {
        return this.isLogo(InputIM.LogoStyle.ME.WHITE_ON_BLACK);
    }

    /**
     * Evaluate if the logo is Helvetica.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoHelvetica() {
        return this.isLogoIM_BLACK_ON_WHITE() || this.isLogoIM_WHITE_ON_BLACK()
                || this.isLogoME_BLACK_ON_WHITE || this.isLogoME_WHITE_ON_BLACK();
    }

    /**
     * Evaluate if a logo style is unspecified.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoUnspecified() {
        return this.logoStyle == null || this.logoStyle === InputIM.LogoStyle.UNSPECIFIED;
    }

    /**
     * Evaluate if the logo style is valid.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoStyleValid() {
        return this.isLogoUnspecified() || this.isLogo(InputIM.LogoStyle);
    }

    /**
     * Return a string confirming the logo style.
     * @return {string} Confirmation string.
     */
    confirmLogoStyle() {
        let message = "invalid entry";
        if (this.isLogoUnspecified()) message = "unspecified";
        else if (this.isLogoROUND()) message = "ISSEY MIYAKE round logo over uniform background";
        else if (this.isLogoBRUSH()) message = "ISSEY MIYAKE round logo over brushstroke";
        else if (this.isLogoIM_BLACK_ON_WHITE()) message = "ISSEY MIYAKE sans-serif logo in black over white background";
        else if (this.isLogoIM_WHITE_ON_BLACK()) message = "ISSEY MIYAKE sans-serif logo in white over black background";
        else if (this.isLogoME_BLACK_ON_WHITE()) message = "ISSEY MIYAKE MEN sans-serif logo in black over white background";
        else if (this.isLogoME_WHITE_ON_BLACK()) message = "ISSEY MIYAKE MEN sans-serif logo in white over black background";
        return "> Logo style: " + message;
    }



    ////////////////////////////////
    // MANUFACTURER
    ////////////////////////////////

    /**
     * Evaluate if the manufacturer is IM_INC.
     * @return {boolean} True if it is; false otherwise.
     */
    isManufacturerIM_INC() {
        return this.manufacturer === InputIM.Manufacturer.IM_INC;
    }

    /**
     * Evaluate if the manufacturer is IM_INTL_INC.
     * @return {boolean} True if it is; false otherwise.
     */
    isManufacturerIM_INTL_INC() {
        return this.manufacturer === InputIM.Manufacturer.IM_INTL_INC;
    }

    /**
     * Evaluate if the manufacturer is ON_LIMITS.
     * @return {boolean} True if it is; false otherwise.
     */
    isManufacturerON_LIMITS() {
        return this.manufacturer === InputIM.Manufacturer.ON_LIMITS;
    }

    /**
     * Evaluate if the manufacturer is ANET.
     * @return {boolean} True if it is; false otherwise.
     */
    isManufacturerANET() {
        return this.manufacturer === InputIM.Manufacturer.ANET;
    }

    /**
     * Evaluate if the manufacturer is unspecified.
     * @return {boolean} True if it is; false otherwise.
     */
    isManufacturerUnspecified() {
        return this.manufacturer === InputIM.Manufacturer.UNSPECIFIED;
    }

    /**
     * Evaluate if the manufacturer is valid.
     * @return {boolean} True if it is; false otherwise.
     */
    isManufacturerValid() {
        return this.isManufacturerUnspecified()
                || Object.values(InputIM.Manufacturer).includes(this.manufacturer);
    }

    /**
     * Return a string confirming the manufacturer.
     * @return {string} Confirmation string.
     */
    confirmManufacturer() {
        let message = "invalid entry";
        if (this.isManufacturerIM_INC()) message = "ISSEY MIYAKE INC.";
        else if (this.isManufacturerIM_INTL_INC()) message = "ISSEY MIYAKE INT'L. INC.";
        else if (this.isManufacturerON_LIMITS()) message = "ISSEY MIYAKE ON LIMITS INC.";
        else if (this.isManufacturerANET()) message = "A-NET INC.";
        else if (this.isManufacturerUnspecified()) message = "unspecified";
        return "> Manufacturer: " + message;
    }
    
    
    
    ////////////////////////////////
    // SIZING
    ////////////////////////////////

    /**
     * Evaluate if the sizing is alphabetical.
     * @return {boolean} True if it is; false otherwise.
     */
    isSizingAlphabetical() {
        return this.sizing === InputIM.Sizing.ALPHABETICAL;
    }

    /**
     * Evaluate if the sizing is numerical.
     * @return {boolean} True if it is; false otherwise.
     */
    isSizingNumerical() {
        return this.sizing === InputIM.Sizing.NUMERICAL;
    }

    /**
     * Evaluate if the sizing is unspecified.
     * @return {boolean} True if it is; false otherwise.
     */
    isSizingUnspecified() {
        return this.sizing === InputIM.Sizing.UNSPECIFIED;
    }

    /**
     * Evaluate if the sizing is valid.
     * @return {boolean} True if it is; false otherwise.
     */
    isSizingValid() {
        return this.isSizingAlphabetical() || this.isSizingNumerical() || this.isSizingUnspecified();
    }

    /**
     * Return a string confirming the sizing.
     * @return {string} Confirmation string.
     */
    confirmSizing() {
        let message = "invalid entry";
        if (this.isSizingAlphabetical()) message = "alphabetical";
        else if (this.isSizingNumerical()) message = "numerical";
        else if (this.isSizingUnspecified()) message = "unspecified";
        return "> Sizing: " + message;
    }



    ////////////////////////////////
    // TYPEFACE
    ////////////////////////////////

    /**
     * Evaluate if the typeface is slab serif.
     * @return {boolean} True if it is; false otherwise.
     */
    isTypefaceSlabSerif() {
        return this.typeface === InputIM.Typeface.SLAB_SERIF;
    }

    /**
     * Evaluate if the typeface is sans serif.
     * @return {boolean} True if it is; false otherwise.
     */
    isTypefaceSansSerif() {
        return this.typeface === InputIM.Typeface.SANS_SERIF;
    }

    /**
     * Evaluate if the typeface is unspecified.
     * @return {boolean} True if it is; false otherwise.
     */
    isTypefaceUnspecified() {
        return this.typeface === InputIM.Typeface.UNSPECIFIED;
    }

    /**
     * Evaluate if the typeface is valid.
     * @return {boolean} True if it is; false otherwise.
     */
    isTypefaceValid() {
        return this.isTypefaceSlabSerif() || this.isTypefaceSansSerif() || this.isTypefaceUnspecified();
    }

    /**
     * Return a string confirming the typeface.
     * @return {string} Confirmation string.
     */
    confirmTypeface() {
        let message = "invalid entry";
        if (this.isTypefaceSlabSerif()) message = "slab serif";
        else if (this.isTypefaceSansSerif()) message = "sans-serif";
        else if (this.isTypefaceUnspecified()) message = "unspecified";
        return "> Typeface: " + message;
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
        str += `\n${this.confirmLogoStyle()}`;
        str += `\n${this.confirmManufacturer()}`;
        str += `\n${this.confirmProductCode()}`;
        str += `\n${this.confirmSizing()}`;
        str += `\n${this.confirmTypeface()}`;
        return str;
    }

    /**
     * Evaluate if it is a valid input.
     * @return {boolean} True if the two are valid; false otherwise.
     */
    isValid() {
        if (!this.isLabelValid()) return false;
        if (!this.isLogoStyleValid()) return false;
        if (!this.isManufacturerValid()) return false;
        if (!this.isProductCodeValid()) return false;
        if (!this.isSizingValid()) return false;
        if (!this.isTypefaceValid()) return false;
        return true;
    }
}

export default InputIM;
