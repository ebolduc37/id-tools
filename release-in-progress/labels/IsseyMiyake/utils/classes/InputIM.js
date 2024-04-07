/**
 * Initialization of class InputIM.
 *
 * Initialization of a class for the input data to identify ISSEY MIYAKE.
 *
 * @author Etienne Bolduc
 */

import { Input } from "../../../../utils/index.js";

/**
 * Enum for ISSEY MIYAKE logo style.
 * @readonly
 * @enum {string}
 */
const LogoStyle = Object.freeze({
    ROUND: "ROUND",
    BRUSH: "BRUSH",
    IM: {
        BOW: "IM_BOW",
        WOB: "IM_WOB",
    },
    ME: {
        BOW: "ME_BOW",
        WOB: "ME_WOB",
    },
    IS: {
        1: "IS_1",
        2: "IS_2",
        3: "IS_3",
    },
    ELSE: "ELSE",
    UNKNOWN: "UNKNOWN",
});

/**
 * Enum for ISSEY MIYAKE manufacturer.
 * @readonly
 * @enum {string}
 */
const Manufacturer = Object.freeze({
    IMI: "IMI",
    IMII: "IMII",
    IMOLI: "IMOLI",
    ANI: "ANI",
    UNKNOWN: "UNKNOWN"
});

/**
 * Enum for ISSEY MIYAKE sizing system.
 * @readonly
 * @enum {string}
 */
const SizingSystem = Object.freeze({
    ALPHABETICAL: "ALPHABETICAL",
    NUMERICAL: "NUMERICAL",
    UNKNOWN: "UNKNOWN",
});

/**
 * Enum for ISSEY MIYAKE care label font type.
 * @readonly
 * @enum {string}
 */
const FontType = Object.freeze({
    SLAB_SERIF: "SLAB_SERIF",
    SANS_SERIF: "SANS_SERIF",
    UNKNOWN: "UNKNOWN",
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
    static SizingSystem = SizingSystem;
    static FontType = FontType;

    /**
     * Create an object containing the input data to identify ISSEY MIYAKE.
     * @param {string} productCode - Object to extract the product code print from.
     * @param {InputIM.LogoStyle} logoStyle - Object to extract the logo style from.
     * @param {InputIM.Manufacturer} manufacturer - Object to extract the manufacturer from.
     * @param {InputIM.SizingSystem} sizingSystem - Object to extract the sizing system from.
     * @param {InputIM.FontType} fontType - Object to extract the font type from.
     */
    constructor({ productCode, logoStyle, manufacturer, sizingSystem, fontType }) {
        super({ label: Input.Label.IM, productCode: productCode, logoStyle: logoStyle });
        /** @type {InputIM.Manufacturer} */
        this.manufacturer = manufacturer;
        /** @type {InputIM.SizingSystem} */
        this.sizingSystem = sizingSystem;
        /** @type {InputIM.FontType} */
        this.fontType = fontType;
    }

    /**
     * Return a copy of the instance as a new object.
     * @return {InputIM} Copy of the instance.
     */
    copy() {
        return new InputIM({ productCode: this.productCode, logoStyle: this.logoStyle,
            manufacturer: this.manufacturer, sizingSystem: this.sizingSystem,
            fontType: this.fontType });
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
     * Evaluate if the logo is IM_BOW.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoIM_BOW() {
        return this.isLogo(InputIM.LogoStyle.IM["BOW"]);
    }

    /**
     * Evaluate if the logo is IM_WOB.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoIM_WOB() {
        return this.isLogo(InputIM.LogoStyle.IM["WOB"]);
    }

    /**
     * Evaluate if the logo is ME_BOW.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoME_BOW() {
        return this.isLogo(InputIM.LogoStyle.ME["BOW"]);
    }

    /**
     * Evaluate if the logo is ME_WOB.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoME_WOB() {
        return this.isLogo(InputIM.LogoStyle.ME["WOB"]);
    }

    /**
     * Evaluate if the logo is IS_1.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoIS_1() {
        return this.isLogo(InputIM.LogoStyle.IS[1]);
    }

    /**
     * Evaluate if the logo is IS_2.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoIS_2() {
        return this.isLogo(InputIM.LogoStyle.IS[2]);
    }

    /**
     * Evaluate if the logo is IS_3.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoIS_3() {
        return this.isLogo(InputIM.LogoStyle.IS[3]);
    }

    /**
     * Evaluate if the logo style is something else.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoElse() {
        return this.isLogo(InputIM.LogoStyle.ELSE);
    }

    /**
     * Evaluate if a logo style is entered.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoEntered() {
        return this.logoStyle !== null && !this.isLogo(InputIM.LogoStyle.UNKNOWN);
    }

    /**
     * Evaluate if the logo style is valid.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoStyleValid() {
        return !this.isLogoEntered() || this.isLogo(InputIM.LogoStyle);
    }

    /**
     * Return a string confirming the logo style.
     * @return {string} Confirmation string.
     */
    confirmLogoStyle() {
        let message = "invalid entry";
        if (!this.isLogoEntered()) message = "no entry";
        else if (this.isLogoROUND()) message = "rounded ISSEY MIYAKE logo and its variants";
        else if (this.isLogoBRUSH()) message = "rounded ISSEY MIYAKE logo over a brushstroke and its variants";
        else if (this.isLogoIM_BOW()) message = "black ISSEY MIYAKE logo on white background";
        else if (this.isLogoIM_WOB()) message = "white ISSEY MIYAKE logo on black background";
        else if (this.isLogoME_BOW()) message = "black ISSEY MIYAKE MEN logo on white background";
        else if (this.isLogoME_WOB()) message = "white ISSEY MIYAKE MEN logo on black background";
        else if (this.isLogoIS_1()) message = "green and orange IS ISSEY SPORT";
        else if (this.isLogoIS_2()) message = "thin red ISSEY SPORT";
        else if (this.isLogoIS_3()) message = "black and red I.S. and its variants";
        else if (this.isLogoElse()) message = "other";
        return "> Logo style: " + message;
    }



    ////////////////////////////////
    // MANUFACTURER
    ////////////////////////////////

    /**
     * Evaluate if the manufacturer is IMI.
     * @return {boolean} True if it is; false otherwise.
     */
    isManufacturerIMI() {
        return this.manufacturer === InputIM.Manufacturer.IMI;
    }

    /**
     * Evaluate if the manufacturer is IMII.
     * @return {boolean} True if it is; false otherwise.
     */
    isManufacturerIMII() {
        return this.manufacturer === InputIM.Manufacturer.IMII;
    }

    /**
     * Evaluate if the manufacturer is IMOLI.
     * @return {boolean} True if it is; false otherwise.
     */
    isManufacturerIMOLI() {
        return this.manufacturer === InputIM.Manufacturer.IMOLI;
    }

    /**
     * Evaluate if the manufacturer is ANI.
     * @return {boolean} True if it is; false otherwise.
     */
    isManufacturerANI() {
        return this.manufacturer === InputIM.Manufacturer.ANI;
    }

    /**
     * Evaluate if there is no manufacturer.
     * @return {boolean} True if it is; false otherwise.
     */
    isManufacturerUnknown() {
        return this.manufacturer === InputIM.Manufacturer.UNKNOWN;
    }

    /**
     * Evaluate if the manufacturer is valid.
     * @return {boolean} True if it is; false otherwise.
     */
    isManufacturerValid() {
        return this.isManufacturerIMI() || this.isManufacturerIMII()
                || this.isManufacturerIMOLI() || this.isManufacturerANI()
                || this.isManufacturerUnknown();
    }

    /**
     * Return a string confirming the manufacturer.
     * @return {string} Confirmation string.
     */
    confirmManufacturer() {
        let message = "invalid entry";
        if (this.isManufacturerIMI()) message = "ISSEY MIYAKE INC.";
        else if (this.isManufacturerIMII()) message = "ISSEY MIYAKE INT'L. INC.";
        else if (this.isManufacturerIMOLI()) message = "ISSEY MIYAKE ON LIMITS INC.";
        else if (this.isManufacturerANI()) message = "A-NET INC.";
        else if (this.isManufacturerUnknown()) message = "unknown";
        return "> Manufacturer: " + message;
    }
    
    
    
    ////////////////////////////////
    // SIZING SYSTEM
    ////////////////////////////////

    /**
     * Evaluate if the sizing system is alphabetical.
     * @return {boolean} True if it is; false otherwise.
     */
    isSizingAlphabetical() {
        return this.sizingSystem === InputIM.SizingSystem.ALPHABETICAL;
    }

    /**
     * Evaluate if the sizing system is numerical.
     * @return {boolean} True if it is; false otherwise.
     */
    isSizingNumerical() {
        return this.sizingSystem === InputIM.SizingSystem.NUMERICAL;
    }

    /**
     * Evaluate if there is no sizing notation to infer the sizing system.
     * @return {boolean} True if it is; false otherwise.
     */
    isSizingUnknown() {
        return this.sizingSystem === InputIM.SizingSystem.UNKNOWN;
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
        let message = "invalid entry";
        if (this.isSizingAlphabetical()) message = "alphabetical";
        else if (this.isSizingNumerical()) message = "numerical";
        else if (this.isSizingUnknown()) message = "unknown";
        return "> Sizing system: " + message;
    }



    ////////////////////////////////
    // FONT TYPE
    ////////////////////////////////

    /**
     * Evaluate if the font type is slab serif.
     * @return {boolean} True if it is; false otherwise.
     */
    isFontSlabSerif() {
        return this.fontType === InputIM.FontType.SLAB_SERIF;
    }

    /**
     * Evaluate if the font type is sans serif.
     * @return {boolean} True if it is; false otherwise.
     */
    isFontSansSerif() {
        return this.fontType === InputIM.FontType.SANS_SERIF;
    }

    /**
     * Evaluate if the font type is unknown.
     * @return {boolean} True if it is; false otherwise.
     */
    isFontUnknown() {
        return this.fontType === InputIM.FontType.UNKNOWN;
    }

    /**
     * Evaluate if the font type is valid.
     * @return {boolean} True if it is; false otherwise.
     */
    isFontTypeValid() {
        return this.isFontSlabSerif() || this.isFontSansSerif() || this.isFontUnknown();
    }

    /**
     * Return a string confirming the font type.
     * @return {string} Confirmation string.
     */
    confirmFontType() {
        let message = "invalid entry";
        if (this.isFontSlabSerif()) message = "slab-serif";
        else if (this.isFontSansSerif()) message = "sans-serif";
        else if (this.isFontUnknown()) message = "unknown";
        return "> Font type: " + message;
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
        str += `\n${this.confirmSizingSystem()}`;
        str += `\n${this.confirmFontType()}`;
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
        if (!this.isSizingSystemValid()) return false;
        if (!this.isFontTypeValid()) return false;
        return true;
    }
}

export default InputIM;
