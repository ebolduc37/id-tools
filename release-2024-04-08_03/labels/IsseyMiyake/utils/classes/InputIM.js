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
const LogoStyle = deepFreeze({

    ROUND: "ROUND",
    BRUSH: "BRUSH",
    IM: {
        BW: "IM_BW",
        WB: "IM_WB",
    },
    ME: {
        BW: "ME_BW",
        WB: "ME_WB",
    },
    IS: {
        1: "IS_1",
        2: "IS_2",
        3: "IS_3",
    },
    UNSPECIFIED: "UNSPECIFIED",
});

/**
 * Enum for ISSEY MIYAKE manufacturer.
 * @readonly
 * @enum {string}
 */
const Manufacturer = Object.freeze({
    IMI: "IMI",
    IMII: "IMII",
    ON_LIMITS: "ON_LIMITS",
    ANI: "ANI",
    UNSPECIFIED: "UNSPECIFIED"
});

/**
 * Enum for ISSEY MIYAKE sizing system.
 * @readonly
 * @enum {string}
 */
const SizingSystem = Object.freeze({
    ALPHABETICAL: "ALPHABETICAL",
    NUMERICAL: "NUMERICAL",
    UNSPECIFIED: "UNSPECIFIED",
});

/**
 * Enum for ISSEY MIYAKE care label font type.
 * @readonly
 * @enum {string}
 */
const FontType = Object.freeze({
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
     * Evaluate if the logo is old.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoOld() {
        return this.isLogoBRUSH() || this.isLogoROUND();
    }

    /**
     * Evaluate if the logo is IM_BW.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoIM_BW() {
        return this.isLogo(InputIM.LogoStyle.IM["BW"]);
    }

    /**
     * Evaluate if the logo is IM_WB.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoIM_WB() {
        return this.isLogo(InputIM.LogoStyle.IM["WB"]);
    }

    /**
     * Evaluate if the logo is ME_BW.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoME_BW() {
        return this.isLogo(InputIM.LogoStyle.ME["BW"]);
    }

    /**
     * Evaluate if the logo is ME_WB.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoME_WB() {
        return this.isLogo(InputIM.LogoStyle.ME["WB"]);
    }

    /**
     * Evaluate if the logo is Helvetica.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoHelvetica() {
        return this.isLogoIM_BW() || this.isLogoIM_WB()
                || this.isLogoME_BW || this.isLogoME_WB();
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
        else if (this.isLogoROUND()) message = "rounded ISSEY MIYAKE and its variants";
        else if (this.isLogoBRUSH()) message = "rounded ISSEY MIYAKE over brushstroke and its variants";
        else if (this.isLogoIM_BW()) message = "black ISSEY MIYAKE over white background";
        else if (this.isLogoIM_WB()) message = "white ISSEY MIYAKE over black background";
        else if (this.isLogoME_BW()) message = "black ISSEY MIYAKE MEN over white background";
        else if (this.isLogoME_WB()) message = "white ISSEY MIYAKE MEN over black background";
        else if (this.isLogoIS_1()) message = "green & orange IS ISSEY SPORT";
        else if (this.isLogoIS_2()) message = "thin red ISSEY SPORT";
        else if (this.isLogoIS_3()) message = "I.S. and its variants";
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
     * Evaluate if the manufacturer is ON_LIMITS.
     * @return {boolean} True if it is; false otherwise.
     */
    isManufacturerON_LIMITS() {
        return this.manufacturer === InputIM.Manufacturer.ON_LIMITS;
    }

    /**
     * Evaluate if the manufacturer is ANI.
     * @return {boolean} True if it is; false otherwise.
     */
    isManufacturerANI() {
        return this.manufacturer === InputIM.Manufacturer.ANI;
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
        if (this.isManufacturerIMI()) message = "ISSEY MIYAKE INC.";
        else if (this.isManufacturerIMII()) message = "ISSEY MIYAKE INT'L. INC.";
        else if (this.isManufacturerON_LIMITS()) message = "ISSEY MIYAKE ON LIMITS INC.";
        else if (this.isManufacturerANI()) message = "A-NET INC.";
        else if (this.isManufacturerUnspecified()) message = "unspecified";
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
     * Evaluate if the sizing system is unspecified.
     * @return {boolean} True if it is; false otherwise.
     */
    isSizingUnspecified() {
        return this.sizingSystem === InputIM.SizingSystem.UNSPECIFIED;
    }

    /**
     * Evaluate if the sizing system is valid.
     * @return {boolean} True if it is; false otherwise.
     */
    isSizingSystemValid() {
        return this.isSizingAlphabetical() || this.isSizingNumerical() || this.isSizingUnspecified();
    }

    /**
     * Return a string confirming the sizing system.
     * @return {string} Confirmation string.
     */
    confirmSizingSystem() {
        let message = "invalid entry";
        if (this.isSizingAlphabetical()) message = "alphabetical";
        else if (this.isSizingNumerical()) message = "numerical";
        else if (this.isSizingUnspecified()) message = "unspecified";
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
     * Evaluate if the font type is unspecified.
     * @return {boolean} True if it is; false otherwise.
     */
    isFontUnspecified() {
        return this.fontType === InputIM.FontType.UNSPECIFIED;
    }

    /**
     * Evaluate if the font type is valid.
     * @return {boolean} True if it is; false otherwise.
     */
    isFontTypeValid() {
        return this.isFontSlabSerif() || this.isFontSansSerif() || this.isFontUnspecified();
    }

    /**
     * Return a string confirming the font type.
     * @return {string} Confirmation string.
     */
    confirmFontType() {
        let message = "invalid entry";
        if (this.isFontSlabSerif()) message = "slab serif";
        else if (this.isFontSansSerif()) message = "sans serif";
        else if (this.isFontUnspecified()) message = "unspecified";
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
