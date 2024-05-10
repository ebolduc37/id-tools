/**
 * Initialization of class InputYY.
 *
 * Initialization of a class for the input data to identify Yohji Yamamoto.
 *
 * @author Etienne Bolduc
 */

import { Input } from "../../../../utils/index.js";

/**
 * Enum for Yohji Yamamoto logo style.
 * @readonly
 * @enum {string}
 */
const LogoStyle = Object.freeze({
    YY: {
        1: "YY_1", // A/W '81 -> S/S '85
        2: "YY_2", // S/S '84 -> A/W '91
        3: "YY_3" // A/W '91 -> NOW
    },
    YS: {
        1: "YS_1",
        2: "YS_2"
    },
    UNSPECIFIED: "UNSPECIFIED",
});

/**
 * Enum for Yohji Yamamoto sizing system.
 * @readonly
 * @enum {string}
 */
const SizingSystem = Object.freeze({
    ALPHABETICAL: "ALPHABETICAL",
    NUMERICAL: "NUMERICAL",
    UNSPECIFIED: "UNSPECIFIED",
});

/**
 * Enum for Yohji Yamamoto care label font type.
 * @readonly
 * @enum {string}
 */
const FontType = Object.freeze({
    SERIF: "SERIF",
    SANS_SERIF: "SANS_SERIF",
    UNSPECIFIED: "UNSPECIFIED",
});

/**
 * Enum for Yohji Yamamoto laundry symbols position.
 * @readonly
 * @enum {string}
 */
const LaundryPosition = Object.freeze({
    BELOW: "BELOW",
    ABOVE: "ABOVE",
    UNSPECIFIED: "UNSPECIFIED"
});



/**
 * Class representing the input data to identify Yohji Yamamoto
 * consisting of a product code.
 */
class InputYY extends Input {

    ////////////////////////////////
    // CONSTRUCTOR & COPY
    ////////////////////////////////

    static LogoStyle = LogoStyle;
    static SizingSystem = SizingSystem;
    static FontType = FontType;
    static LaundryPosition = LaundryPosition;

    /**
     * Create an object containing the input data to identify Yohji Yamamoto.
     * @param {string} productCode - Object to extract the product code print from.
     * @param {InputYY.LogoStyle} logoStyle - Object to extract the logo style from.
     * @param {InputYY.SizingSystem} sizingSystem - Object to extract the sizing system from.
     * @param {InputYY.FontType} fontType - Object to extract the font type from.
     * @param {InputYY.LaundryPosition} laundryPosition - Object to extract the laundry symbols position from.
     */
    constructor({ productCode, logoStyle, sizingSystem, fontType, laundryPosition }) {
        super({ label: Input.Label.YY, productCode: productCode, logoStyle: logoStyle });
        /** @type {InputYY.SizingSystem} */
        this.sizingSystem = sizingSystem;
        /** @type {InputYY.FontType} */
        this.fontType = fontType;
        /** @type {InputYY.LaundryPosition} */
        this.laundryPosition = laundryPosition;
    }

    /**
     * Return a copy of the instance as a new object.
     * @return {InputYY} Copy of the instance.
     */
    copy() {
        return new InputYY({ productCode: this.productCode, logoStyle: this.logoStyle,
            sizingSystem: this.sizingSystem, fontType: this.fontType,
            laundryPosition: this.laundryPosition });
    }



    ////////////////////////////////
    // LABEL
    ////////////////////////////////

    /**
     * Evaluate if the label is valid.
     * @return {boolean} True if it is; false otherwise.
     */
    isLabelValid() {
        return this.label === Input.Label.YY;
    }



    ////////////////////////////////
    // LOGO STYLE
    ////////////////////////////////

    /**
     * Evaluate if the logo is YY_1.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoYY_1() {
        return this.isLogo(InputYY.LogoStyle.YY[1]);
    }

    /**
     * Evaluate if the logo is YY_2.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoYY_2() {
        return this.isLogo(InputYY.LogoStyle.YY[2]);
    }

    /**
     * Evaluate if the logo is YY_3.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoYY_3() {
        return this.isLogo(InputYY.LogoStyle.YY[3]);
    }

    /**
     * Evaluate if the logo is YY.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoYY() {
        return this.isLogoYY_1() || this.isLogoYY_2() || this.isLogoYY_3();
    }

    /**
     * Evaluate if the logo is YS_1.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoYS_1() {
        return this.isLogo(InputYY.LogoStyle.YS[1]);
    }

    /**
     * Evaluate if the logo is YS_2.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoYS_2() {
        return this.isLogo(InputYY.LogoStyle.YS[2]);
    }

    /**
     * Evaluate if the logo is YS.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoYS() {
        return this.isLogoYS_1() || this.isLogoYS_2();
    }

    /**
     * Evaluate if a logo style is unspecified.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoUnspecified() {
        return this.logoStyle == null || this.logoStyle === InputYY.LogoStyle.UNSPECIFIED;
    }

    /**
     * Evaluate if the logo style is valid.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoStyleValid() {
        return this.isLogoUnspecified() || this.isLogo(InputYY.LogoStyle);
    }

    /**
     * Return a string confirming the logo style.
     * @return {string} Confirmation string.
     */
    confirmLogoStyle() {
        let message = "invalid entry";
        if (this.isLogoUnspecified()) message = "unspecified";
        else if (this.isLogoYY_1()) message = "earliest, roundest Yohji Yamamoto signature";
        else if (this.isLogoYY_2()) message = "early, round Yohji Yamamoto signature";
        else if (this.isLogoYY_3()) message = "current, sharp Yohji Yamamoto signature";
        else if (this.isLogoYS_1()) message = "early Y's logo";
        else if (this.isLogoYS_2()) message = "modern Y's logo";
        return "> Logo style: " + message;
    }



    ////////////////////////////////
    // SIZING SYSTEM
    ////////////////////////////////

    /**
     * Evaluate if the sizing system is alphabetical.
     * @return {boolean} True if it is; false otherwise.
     */
    isSizingAlphabetical() {
        return this.sizingSystem === InputYY.SizingSystem.ALPHABETICAL;
    }

    /**
     * Evaluate if the sizing system is numerical.
     * @return {boolean} True if it is; false otherwise.
     */
    isSizingNumerical() {
        return this.sizingSystem === InputYY.SizingSystem.NUMERICAL;
    }

    /**
     * Evaluate if there is the sizing system is unspecified.
     * @return {boolean} True if it is; false otherwise.
     */
    isSizingUnspecified() {
        return this.sizingSystem === InputYY.SizingSystem.UNSPECIFIED;
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
     * Evaluate if the font type is serif.
     * @return {boolean} True if it is; false otherwise.
     */
    isFontSerif() {
        return this.fontType === InputYY.FontType.SERIF;
    }

    /**
     * Evaluate if the font type is sans serif.
     * @return {boolean} True if it is; false otherwise.
     */
    isFontSansSerif() {
        return this.fontType === InputYY.FontType.SANS_SERIF;
    }

    /**
     * Evaluate if the font type is unspecified.
     * @return {boolean} True if it is; false otherwise.
     */
    isFontUnspecified() {
        return this.fontType === InputYY.FontType.UNSPECIFIED;
    }

    /**
     * Evaluate if the font type is valid.
     * @return {boolean} True if it is; false otherwise.
     */
    isFontTypeValid() {
        if (this.isFontSansSerif()) {
            return !(this.isLogoYY_1() || this.isLogoYY_2() || this.isProductCodeBlank());
        }
        else return this.isFontSerif() || this.isFontUnspecified();
    }

    /**
     * Return a string confirming the font type.
     * @return {string} Confirmation string.
     */
    confirmFontType() {
        let message = "invalid entry";
        if (this.isFontSansSerif()) {
            message = "sans serif";
            if (this.isLogoYY_1() || this.isLogoYY_2() || this.isProductCodeBlank())
            message += " [mismatch with previous information]";
        }
        else if (this.isFontSerif()) message = "serif";
        else if (this.isFontUnspecified()) message = "unspecified";
        return "> Font type: " + message;
    }



    ////////////////////////////////
    // LAUNDRY SYMBOLS POSITION
    ////////////////////////////////

    /**
     * Evaluate if the laundry symbols are positioned below the fabric composition.
     * @return {boolean} True if it is; false otherwise.
     */
    isLaundryBelow() {
        return this.laundryPosition === InputYY.LaundryPosition.BELOW;
    }

    /**
     * Evaluate if the laundry symbols are positioned above the fabric composition.
     * @return {boolean} True if it is; false otherwise.
     */
    isLaundryAbove() {
        return this.laundryPosition === InputYY.LaundryPosition.ABOVE;
    }

    /**
     * Evaluate if the position of laundry symbols is unspecified.
     * @return {boolean} True if it is; false otherwise.
     */
    isLaundryUnspecified() {
        return this.laundryPosition === InputYY.LaundryPosition.UNSPECIFIED;
    }

    /**
     * Evaluate if the position of the laundry symbols is valid.
     * @return {boolean} True if it is; false otherwise.
     */
    isLaundryPositionValid() {
        if (this.isLaundryAbove())
            return !(this.isLogoYY_1() || this.isLogoYY_2() || this.isProductCodeBlank() || this.isFontSerif());
        else return this.isLaundryBelow() || this.isLaundryUnspecified();
    }

    /**
     * Return a string confirming the laundry symbols position.
     * @return {string} Confirmation string.
     */
    confirmLaundryPosition() {
        let message = "invalid entry";
        if (this.isLaundryAbove()) {
            message = "above";
            if (this.isLogoYY_1() || this.isLogoYY_2() || this.isProductCodeBlank() || this.isFontSerif())
                message += " [mismatch with previous information]";
        }
        else if (this.isLaundryBelow()) message = "below";
        else if (this.isLaundryUnspecified()) message = "unspecified";
        return "> Laundry symbols position: " + message;
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
        str += `\n${this.confirmProductCode()}`;
        str += `\n${this.confirmSizingSystem()}`;
        str += `\n${this.confirmFontType()}`;
        str += `\n${this.confirmLaundryPosition()}`;
        return str;
    }

    /**
     * Evaluate if it is a valid input.
     * @return {boolean} True if the two are valid; false otherwise.
     */
    isValid() {
        if (!this.isLabelValid()) return false;
        if (!this.isLogoStyleValid()) return false;
        if (!this.isProductCodeValid()) return false;
        if (!this.isSizingSystemValid()) return false;
        if (!this.isFontTypeValid()) return false;
        if (!this.isLaundryPositionValid()) return false;
        return true;
    }
}

export default InputYY;
