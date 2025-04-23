/**
 * Initialization of class InputYY.
 *
 * Initialization of a class for the input data to identify Yohji Yamamoto.
 *
 * @author Etienne Bolduc
 */

import { Input } from "../../../../utils/index.js";
import { default as MANUFACTURER } from "../../constants/MANUFACTURER.js";

/**
 * Enum for Yohji Yamamoto logo style.
 * @readonly
 * @enum {string}
 */
const LogoStyle = Object.freeze({
    YOHJI_YAMAMOTO: {
        ROUND: "YOHJI_YAMAMOTO_ROUND", // A/W '81 -> S/S '85
        ROUGH: "YOHJI_YAMAMOTO_ROUGH", // A/W '83 -> A/W '91
        SKEWED: "YOHJI_YAMAMOTO_SKEWED", // A/W '91 -> A/W '20
        EVEN: "YOHJI_YAMAMOTO_EVEN", // A/W '20 -> NOW
    },
    YS: {
        SANS_SERIF: "YS_SANS_SERIF", // 1972 -> A/W '87
        SERIF: "YS_SERIF", // S/S '88 -> NOW
        BRUSH: "YS_BRUSH",
    },
    NOIR_SANS_SERIF: "NOIR_SANS_SERIF",
    UNSPECIFIED: "UNSPECIFIED",
});

/**
 * Enum for Yohji Yamamoto sizing.
 * @readonly
 * @enum {string}
 */
const Sizing = Object.freeze({
    ALPHABETICAL: "ALPHABETICAL",
    NUMERICAL: "NUMERICAL",
    UNSPECIFIED: "UNSPECIFIED",
});

/**
 * Enum for Yohji Yamamoto care label typeface.
 * @readonly
 * @enum {string}
 */
const Typeface = Object.freeze({
    PROPORTIONAL: "PROPORTIONAL",
    MONOSPACED: "MONOSPACED",
    SLAB_SERIF: "SLAB_SERIF",
    UNSPECIFIED: "UNSPECIFIED",
});

/**
 * Enum for Yohji Yamamoto fabric content language on the care label.
 * @readonly
 * @enum {string}
 */
const Language = Object.freeze({
    JP: "JP",
    FR_EN_JP: "FR_EN_JP",
    UNSPECIFIED: "UNSPECIFIED"
});

/**
 * Enum for Yohji Yamamoto laundry symbols position.
 * @readonly
 * @enum {string}
 */
const LaundryPosition = Object.freeze({
    BOTTOM: "BOTTOM",
    TOP: "TOP",
    UNSPECIFIED: "UNSPECIFIED"
});

/**
 * Enum for Yohji Yamamoto manufacturer.
 * @readonly
 * @enum {string}
 */
const Manufacturer = Object.freeze({
    BLANK: "BLANK",
    YS_CO_LTD: "YS_CO_LTD",
    YOHJI_YAMAMOTO_INC: "YOHJI_YAMAMOTO_INC",
    UNSPECIFIED: "UNSPECIFIED"
});

/**
 * Enum for Yohji Yamamoto no tumbling instruction.
 * @readonly
 * @enum {string}
 */
const DoNotTumbleDry = Object.freeze({
    BLANK: "BLANK",
    SHORT: "SHORT",
    LONG: "LONG",
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
    static Sizing = Sizing;
    static Typeface = Typeface;
    static Language = Language;
    static LaundryPosition = LaundryPosition;
    static Manufacturer = Manufacturer;
    static DoNotTumbleDry = DoNotTumbleDry;

    /**
     * Create an object containing the input data to identify Yohji Yamamoto.
     * @param {string} productCode - Object to extract the product code print from.
     * @param {InputYY.LogoStyle} logoStyle - Object to extract the logo style from.
     * @param {InputYY.Sizing} sizing - Object to extract the sizing from.
     * @param {InputYY.Typeface} typeface - Object to extract the typeface from.
     * @param {InputYY.Language} language - Object to extract the fabric content language from.
     * @param {InputYY.LaundryPosition} laundryPosition - Object to extract the laundry symbols position from.
     * @param {InputYY.Manufacturer} manufacturer - Object to extract the manufacturer from.
     * @param {InputYY.DoNotTumbleDry} doNotTumbleDry - Object to extract the "do not tumble dry" length from.
     */
    constructor({ productCode, logoStyle, sizing, typeface, language,
        laundryPosition, manufacturer, doNotTumbleDry }) {
        super({ label: Input.Label.YY, productCode: productCode, logoStyle: logoStyle });
        /** @type {InputYY.Sizing} */
        this.sizing = (sizing == null || sizing === 'undefined')? InputYY.Sizing.UNSPECIFIED : sizing;
        /** @type {InputYY.Typeface} */
        this.typeface = (typeface == null || typeface === 'undefined')? InputYY.Typeface.UNSPECIFIED : typeface;
        /** @type {InputYY.Language} */
        this.language = (language == null || language === 'undefined')? InputYY.Language.UNSPECIFIED : language;
        /** @type {InputYY.LaundryPosition} */
        this.laundryPosition = (laundryPosition == null || laundryPosition === 'undefined')? InputYY.LaundryPosition.UNSPECIFIED : laundryPosition;
        /** @type {InputYY.Manufacturer} */
        this.manufacturer = (manufacturer == null || manufacturer === 'undefined')? InputYY.Manufacturer.UNSPECIFIED : manufacturer;
        /** @type {InputYY.DoNotTumbleDry} */
        this.doNotTumbleDry = (doNotTumbleDry == null || doNotTumbleDry === 'undefined')? InputYY.DoNotTumbleDry.UNSPECIFIED : doNotTumbleDry;
    }

    /**
     * Return a copy of the instance as a new object.
     * @return {InputYY} Copy of the instance.
     */
    copy() {
        return new InputYY({ productCode: this.productCode, logoStyle: this.logoStyle,
            sizing: this.sizing, typeface: this.typeface, language: this.language,
            laundryPosition: this.laundryPosition, doNotTumbleDry: this.doNotTumbleDry,
            manufacturer: this.manufacturer});
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
    // PRODUCT CODE
    ////////////////////////////////

    /**
     * Evaluate if the product code print is valid.
     * @return {boolean} True if it is; false otherwise.
     */
    isProductCodeValid() {
        return this.isProductCodeString() || this.isProductCodeBlank();
    }

    /**
     * Return a string confirming the product code print.
     * @return {string} Confirmation string.
     */
    confirmProductCode() {
        let str = super.confirmProductCode();
        if (!(this.isProductCodeString() || this.isProductCodeBlank())) str += " [invalid code format]";
        return str;
    }



    ////////////////////////////////
    // LOGO STYLE
    ////////////////////////////////

    /**
     * Evaluate if the logo is YOHJI_YAMAMOTO_ROUND.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoYOHJI_YAMAMOTO_ROUND() {
        return this.isLogo(InputYY.LogoStyle.YOHJI_YAMAMOTO.ROUND);
    }

    /**
     * Evaluate if the logo is YOHJI_YAMAMOTO_ROUGH.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoYOHJI_YAMAMOTO_ROUGH() {
        return this.isLogo(InputYY.LogoStyle.YOHJI_YAMAMOTO.ROUGH);
    }

    /**
     * Evaluate if the logo is YOHJI_YAMAMOTO_SKEWED.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoYOHJI_YAMAMOTO_SKEWED() {
        return this.isLogo(InputYY.LogoStyle.YOHJI_YAMAMOTO.SKEWED);
    }

    /**
     * Evaluate if the logo is YOHJI_YAMAMOTO_EVEN.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoYOHJI_YAMAMOTO_EVEN() {
        return this.isLogo(InputYY.LogoStyle.YOHJI_YAMAMOTO.EVEN);
    }

    /**
     * Evaluate if the logo is YY.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoYY() {
        return this.isLogoYOHJI_YAMAMOTO_ROUND() || this.isLogoYOHJI_YAMAMOTO_ROUGH()
            || this.isLogoYOHJI_YAMAMOTO_SKEWED() || this.isLogoYOHJI_YAMAMOTO_EVEN();
    }

    /**
     * Evaluate if the logo is YS_SANS_SERIF.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoYS_SANS_SERIF() {
        return this.isLogo(InputYY.LogoStyle.YS.SANS_SERIF);
    }

    /**
     * Evaluate if the logo is YS_SERIF.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoYS_SERIF() {
        return this.isLogo(InputYY.LogoStyle.YS.SERIF);
    }

    /**
     * Evaluate if the logo is YS_BRUSH.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoYS_BRUSH() {
        return this.isLogo(InputYY.LogoStyle.YS.BRUSH);
    }

    /**
     * Evaluate if the logo is YS.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoYS() {
        return this.isLogoYS_SANS_SERIF() || this.isLogoYS_SERIF() || this.isLogoYS_BRUSH();
    }

    /**
     * Evaluate if the logo is NOIR_SANS_SERIF.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoNOIR_SANS_SERIF() {
        return this.isLogo(InputYY.LogoStyle.NOIR_SANS_SERIF);
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
     * Evaluate if the instance's logo style is equal to another logo style.
     * @param {InputYY.LogoStyle} logoStyle - Logo style to compare with.
     * @return {boolean} True if the instance's logo style is equal to the other; false otherwise.
     */
    isLogoStyleEqualTo(logoStyle) {
        const input = new InputYY({ logoStyle: logoStyle });
        if (!input.isLogoStyleValid()) return false;
        if (this.isLogoUnspecified() || input.isLogoUnspecified()) return true;
        return this.logoStyle === input.logoStyle;
    }

    /**
     * Return a string confirming the logo style.
     * @return {string} Confirmation string.
     */
    confirmLogoStyle() {
        let message = "invalid entry";
        if (this.isLogoUnspecified()) message = "unspecified";
        else if (this.isLogoYOHJI_YAMAMOTO_ROUND()) message = "Yohji Yamamoto round signature logo";
        else if (this.isLogoYOHJI_YAMAMOTO_ROUGH()) message = "Yohji Yamamoto rough signature logo";
        else if (this.isLogoYOHJI_YAMAMOTO_SKEWED()) message = "Yohji Yamamoto sharp signature logo with the second Y skewed";
        else if (this.isLogoYOHJI_YAMAMOTO_EVEN()) message = "Yohji Yamamoto sharp signature logo with even Ys";
        else if (this.isLogoYS_SANS_SERIF()) message = "Y's sans-serif logo";
        else if (this.isLogoYS_SERIF()) message = "Y's serif logo";
        else if (this.isLogoYS_BRUSH()) message = "Y's brush logo";
        else if (this.isLogoNOIR_SANS_SERIF()) message = "YOHJI YAMAMOTO + NOIR sans-serif logo";
        return "> Logo style: " + message;
    }



    ////////////////////////////////
    // SIZING
    ////////////////////////////////

    /**
     * Evaluate if the sizing is alphabetical.
     * @return {boolean} True if it is; false otherwise.
     */
    isSizingAlphabetical() {
        return this.sizing === InputYY.Sizing.ALPHABETICAL;
    }

    /**
     * Evaluate if the sizing is numerical.
     * @return {boolean} True if it is; false otherwise.
     */
    isSizingNumerical() {
        return this.sizing === InputYY.Sizing.NUMERICAL;
    }

    /**
     * Evaluate if there is the sizing is unspecified.
     * @return {boolean} True if it is; false otherwise.
     */
    isSizingUnspecified() {
        return this.sizing === InputYY.Sizing.UNSPECIFIED;
    }

    /**
     * Evaluate if the sizing is valid.
     * @return {boolean} True if it is; false otherwise.
     */
    isSizingValid() {
        return this.isSizingAlphabetical() || this.isSizingNumerical() || this.isSizingUnspecified();
    }

    /**
     * Evaluate if the instance's sizing is equal to another sizing.
     * @param {InputYY.Sizing} sizing - Sizing to compare with.
     * @return {boolean} True if the instance's sizing is equal to the other; false otherwise.
     */
    isSizingEqualTo(sizing) {
        const input = new InputYY({ sizing: sizing });
        if (!input.isSizingValid()) return false;
        if (this.isSizingUnspecified() || input.isSizingUnspecified()) return true;
        return this.sizing === input.sizing;
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
     * Evaluate if the typeface is proportional.
     * @return {boolean} True if it is; false otherwise.
     */
    isTypefaceProportional() {
        return this.typeface === InputYY.Typeface.PROPORTIONAL;
    }

    /**
     * Evaluate if the typeface is monospaced.
     * @return {boolean} True if it is; false otherwise.
     */
    isTypefaceMonospaced() {
        return this.typeface === InputYY.Typeface.MONOSPACED;
    }

    /**
     * Evaluate if the typeface is slab serif.
     * @return {boolean} True if it is; false otherwise.
     */
    isTypefaceSlabSerif() {
        return this.typeface === InputYY.Typeface.SLAB_SERIF;
    }

    /**
     * Evaluate if the typeface is unspecified.
     * @return {boolean} True if it is; false otherwise.
     */
    isTypefaceUnspecified() {
        return this.typeface === InputYY.Typeface.UNSPECIFIED;
    }

    /**
     * Evaluate if the typeface is valid.
     * @return {boolean} True if it is; false otherwise.
     */
    isTypefaceValid() {
        if (this.isTypefaceMonospaced() || this.isTypefaceSlabSerif()) {
            return !this.isProductCodeBlank(); //!this.isLogoYOHJI_YAMAMOTO_ROUND() && !this.isLogoYOHJI_YAMAMOTO_ROUGH()
        }
        else return this.isTypefaceProportional() || this.isTypefaceUnspecified();
    }

    /**
     * Evaluate if the instance's typeface is equal to another typeface.
     * @param {InputYY.Typeface} typeface - Typeface to compare with.
     * @return {boolean} True if the instance's typeface is equal to the other; false otherwise.
     */
    isTypefaceEqualTo(typeface) {
        const input = new InputYY({ typeface: typeface });
        if (!input.isTypefaceValid()) return false;
        if (this.isTypefaceUnspecified() || input.isTypefaceUnspecified()) return true;
        return this.typeface === input.typeface;
    }

    /**
     * Return a string confirming the typeface.
     * @return {string} Confirmation string.
     */
    confirmTypeface() {
        let message = "invalid entry";
        if (this.isTypefaceMonospaced()) {
            message = "monospaced";
            //if (this.isProductCodeBlank()) //this.isLogoYOHJI_YAMAMOTO_ROUND() || this.isLogoYOHJI_YAMAMOTO_ROUGH()
            //    message += " [mismatch with previous information]";
        }
        if (this.isTypefaceSlabSerif()) {
            message = "slab serif";
            //if (this.isProductCodeBlank()) //this.isLogoYOHJI_YAMAMOTO_ROUND() || this.isLogoYOHJI_YAMAMOTO_ROUGH()
            //    message += " [mismatch with previous information]";
        }
        else if (this.isTypefaceProportional()) message = "proportional";
        else if (this.isTypefaceUnspecified()) message = "unspecified";
        return "> Fabric content typeface: " + message;
    }



    ////////////////////////////////
    // LANGUAGE
    ////////////////////////////////

    /**
     * Evaluate if the fabric content language on the care label is in Japanese only.
     * @return {boolean} True if it is; false otherwise.
     */
    isLanguageJP() {
        return this.language === InputYY.Language.JP;
    }

    /**
     * Evaluate if the fabric content language is in French, English, and Japanese.
     * @return {boolean} True if it is; false otherwise.
     */
    isLanguageJP_FR_EN() {
        return this.language === InputYY.Language.FR_EN_JP;
    }

    /**
     * Evaluate if the fabric content language on the care label is unspecified.
     * @return {boolean} True if it is; false otherwise.
     */
    isLanguageUnspecified() {
        return this.language === InputYY.Language.UNSPECIFIED;
    }

    /**
     * Evaluate if the fabric content language is valid.
     * @return {boolean} True if it is; false otherwise.
     */
    isLanguageValid() {
        return this.isLanguageJP() || this.isLanguageJP_FR_EN()
            || this.isLanguageUnspecified();
    }

    /**
     * Evaluate if the instance's fabric content language is equal to another.
     * @param {InputYY.Language} language - Fabric content language to compare with.
     * @return {boolean} True if the instance's fabric content language is equal to the other; false otherwise.
     */
    isLanguageEqualTo(language) {
        const input = new InputYY({ language: language });
        if (!input.isLanguageValid()) return false;
        if (this.isLanguageUnspecified() || input.isLanguageUnspecified()) return true;
        return this.language === input.language;
    }

    /**
     * Return a string confirming the fabric content language.
     * @return {string} Confirmation string.
     */
    confirmLanguage() {
        let message = "invalid entry";
        if (this.isLanguageJP()) message = "日本語";
        else if (this.isLanguageJP_FR_EN()) message = "FR/EN/JP";
        else if (this.isLanguageUnspecified()) message = "unspecified";
        return "> Fabric content language: " + message;
    }
    
    
    
    ////////////////////////////////
    // LAUNDRY SYMBOLS POSITION
    ////////////////////////////////

    /**
     * Evaluate if the laundry symbols are positioned at the bottom of the fabric content.
     * @return {boolean} True if it is; false otherwise.
     */
    isLaundryBottom() {
        return this.laundryPosition === InputYY.LaundryPosition.BOTTOM;
    }

    /**
     * Evaluate if the laundry symbols are positioned at the top of the care label.
     * @return {boolean} True if it is; false otherwise.
     */
    isLaundryTop() {
        return this.laundryPosition === InputYY.LaundryPosition.TOP;
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
        if (this.isLaundryTop())
            return !this.isProductCodeBlank() && !this.isTypefaceProportional(); //!this.isLogoYOHJI_YAMAMOTO_ROUND() && !this.isLogoYOHJI_YAMAMOTO_ROUGH()
        else return this.isLaundryBottom() || this.isLaundryUnspecified();
    }

    /**
     * Evaluate if the instance's position of the laundry symbols is equal to another.
     * @param {InputYY.LaundryPosition} laundryPosition - Position of the laundry symbols to compare with.
     * @return {boolean} True if the instance's position of the laundry symbols is equal to the other; false otherwise.
     */
    isLaundryPositionEqualTo(laundryPosition) {
        const input = new InputYY({ laundryPosition: laundryPosition });
        if (!input.isLaundryPositionValid()) return false;
        if (this.isLaundryUnspecified() || input.isLaundryUnspecified()) return true;
        return this.laundryPosition === input.laundryPosition;
    }

    /**
     * Return a string confirming the laundry symbols position.
     * @return {string} Confirmation string.
     */
    confirmLaundryPosition() {
        let message = "invalid entry";
        if (this.isLaundryTop()) {
            message = "top";
            //if (this.isProductCodeBlank() || this.isTypefaceProportional()) //this.isLogoYOHJI_YAMAMOTO_ROUND() || this.isLogoYOHJI_YAMAMOTO_ROUGH()
            //    message += " [mismatch with previous information]";
        }
        else if (this.isLaundryBottom()) message = "bottom";
        else if (this.isLaundryUnspecified()) message = "unspecified";
        return "> Laundry symbols position: " + message;
    }


    ////////////////////////////////
    // DO NOT TUMBLE DRY
    ////////////////////////////////

    /**
     * Evaluate if "do not tumble dry" in Japanese is BLANK.
     * @return {boolean} True if it is; false otherwise.
     */
    isDoNotTumbleDryBLANK() {
        return this.doNotTumbleDry === InputYY.DoNotTumbleDry.BLANK;
    }

    /**
     * Evaluate if the length of "do not tumble dry" in Japanese is long.
     * @return {boolean} True if it is; false otherwise.
     */
    isDoNotTumbleDryLong() {
        return this.doNotTumbleDry === InputYY.DoNotTumbleDry.LONG;
    }

    /**
     * Evaluate if the length of "do not tumble dry" in Japanese is short.
     * @return {boolean} True if it is; false otherwise.
     */
    isDoNotTumbleDryShort() {
        return this.doNotTumbleDry === InputYY.DoNotTumbleDry.SHORT;
    }

    /**
     * Evaluate if the state of "do not tumble dry" in Japanese is unspecified.
     * @return {boolean} True if it is; false otherwise.
     */
    isDoNotTumbleDryUnspecified() {
        return this.doNotTumbleDry === InputYY.DoNotTumbleDry.UNSPECIFIED;
    }

    /**
     * Evaluate if the state of "do not tumble dry" in Japanese is valid.
     * @return {boolean} True if it is; false otherwise.
     */
    isDoNotTumbleDryValid() {
        return this.doNotTumbleDry in InputYY.DoNotTumbleDry;
    }

    /**
     * Evaluate if the instance's "do not tumble dry" in Japanese is equal to another.
     * @param {InputYY.DoNotTumbleDry} doNotTumbleDry - "Do not tumble dry" in Japanese to compare with.
     * @return {boolean} True if the instance's "do not tumble dry" in Japanese is equal to the other; false otherwise.
     */
    isDoNotTumbleDryEqualTo(doNotTumbleDry) {
        const input = new InputYY({ doNotTumbleDry: doNotTumbleDry });
        if (!input.isDoNotTumbleDryValid()) return false;
        if (this.isDoNotTumbleDryUnspecified() || input.isDoNotTumbleDryUnspecified()) return true;
        if (this.isDoNotTumbleDryBLANK() || input.isDoNotTumbleDryBLANK()) return true;
        return this.doNotTumbleDry === input.doNotTumbleDry;
    }

    /**
     * Return a string confirming the state of "do not tumble dry" in Japanese.
     * @return {string} Confirmation string.
     */
    confirmDoNotTumbleDry() {
        let message = "invalid entry";
        if (this.isDoNotTumbleDryLong()) message = "long";
        else if (this.isDoNotTumbleDryShort()) message = "short";
        else if (this.isDoNotTumbleDryBLANK()) message = "blank";
        else if (this.isDoNotTumbleDryUnspecified()) message = "unspecified";
        return "> タンブラー[...] length: " + message;
    }



    ////////////////////////////////
    // MANUFACTURER
    ////////////////////////////////

    /**
     * Evaluate if the manufacturer is unspecified.
     * @return {boolean} True if it is; false otherwise.
     */
    isManufacturerUnspecified() {
        return this.manufacturer === InputYY.Manufacturer.UNSPECIFIED;
    }

    /**
     * Evaluate if the manufacturer is BLANK.
     * @return {boolean} True if it is; false otherwise.
     */
    isManufacturerBLANK() {
        return this.manufacturer === InputYY.Manufacturer.BLANK;
    }

    /**
     * Evaluate if the manufacturer is YS_CO_LTD.
     * @return {boolean} True if it is; false otherwise.
     */
    isManufacturerYS_CO_LTD() {
        return this.manufacturer === InputYY.Manufacturer.YS_CO_LTD;
    }

    /**
     * Evaluate if the manufacturer is YSBIS.
     * @return {boolean} True if it is; false otherwise.
     */
    //isManufacturerYSBIS() {
    //    return this.manufacturer === InputYY.Manufacturer.YSBIS;
    //}

    /**
     * Evaluate if the manufacturer is YOHJI_YAMAMOTO_INC.
     * @return {boolean} True if it is; false otherwise.
     */
    isManufacturerYOHJI_YAMAMOTO_INC() {
        return this.manufacturer === InputYY.Manufacturer.YOHJI_YAMAMOTO_INC;
    }

    /**
     * Evaluate if the manufacturer is valid.
     * @return {boolean} True if it is; false otherwise.
     */
    isManufacturerValid() {
        return this.manufacturer in InputYY.Manufacturer;
    }

    /**
     * Return the manufacturer.
     * @return {InputYY.Manufacturer} Manufacturer.
     */
    getManufacturer() {
        return this.manufacturer;
    }

   /**
     * Evaluate if the instance's manufacturer is equal to another manufacturer.
     * @param {InputYY.Manufacturer} manufacturer - Manufacturer to compare with.
     * @return {boolean} True if the instance's manufacturer is equal to the other; false otherwise.
     */
    isManufacturerEqualTo(manufacturer) {
        const input = new InputYY({ manufacturer: manufacturer });
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
        if (this.isManufacturerValid()) message = MANUFACTURER[this.getManufacturer()].stylized;
        return "> Manufacturer: " + message;
    }
    
    
    
    ////////////////////////////////
    // GENERAL
    ////////////////////////////////

    /**
     * Evaluate if the instance is equal to another InputYY.
     * @return {boolean} True if it is; false otherwise.
     */
    isInputYYEqualTo(input) {
        let sameProductCode = this.isProductCodeEqualTo(input.productCode);
        let sameLogoStyle = this.isLogoStyleEqualTo(input.logoStyle);
        let sameSizing = this.isSizingEqualTo(input.sizing);
        let sameTypeface = this.isTypefaceEqualTo(input.typeface);
        let sameLanguage = this.isLanguageEqualTo(input.language);
        let sameLaundryPosition = this.isLaundryPositionEqualTo(input.laundryPosition);
        let sameDoNotTumbleDry = this.isLaundryPositionEqualTo(input.doNotTumbleDry);
        let sameManufacturer = this.isLaundryPositionEqualTo(input.manufacturer);
        return sameProductCode && sameLogoStyle && sameSizing && sameTypeface
            && sameLanguage && sameLaundryPosition  && sameDoNotTumbleDry && sameManufacturer;
    }

    /**
     * Return a string confirming the input data.
     * @return {string} Confirmation string.
     */
    confirm() {
        let str = `${this.confirmLabel()}`;
        str += `\n${this.confirmLogoStyle()}`;
        str += `\n${this.confirmProductCode()}`;
        str += `\n${this.confirmSizing()}`;
        str += `\n${this.confirmLanguage()}`;
        str += `\n${this.confirmTypeface()}`;
        str += `\n${this.confirmLaundryPosition()}`;
        str += `\n${this.confirmDoNotTumbleDry()}`;
        str += `\n${this.confirmManufacturer()}`;
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
        if (!this.isSizingValid()) return false;
        if (!this.isTypefaceValid()) return false;
        if (!this.isLanguageValid()) return false;
        if (!this.isLaundryPositionValid()) return false;
        if (!this.isDoNotTumbleDryValid()) return false;
        if (!this.isManufacturerValid()) return false;
        return true;
    }
}

export default InputYY;
