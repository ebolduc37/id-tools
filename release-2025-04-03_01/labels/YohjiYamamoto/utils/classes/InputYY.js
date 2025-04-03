/**
 * Initialization of class InputYY.
 *
 * Initialization of a class for the input data to identify Yohji Yamamoto.
 *
 * @author Etienne Bolduc
 */

import { Input } from "../../../../utils/index.js";
//import { default as MANUFACTURER } from "../../constants/MANUFACTURER.js";

/**
 * Enum for Yohji Yamamoto logo style.
 * @readonly
 * @enum {string}
 */
const LogoStyle = Object.freeze({
    YY: {
        '1': "YY_1", // A/W '81 -> S/S '85
        '2': "YY_2", // A/W '83 -> A/W '91
        '3': "YY_3" // A/W '91 -> NOW
    },
    YS: {
        '1': "YS_1", // 1972 -> A/W '87
        '2': "YS_2", // S/S '88 -> NOW
        'B': "YS_B",
    },
    NOIR: {
        '1': "NOIR_1"
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
    YS: "YS",
    //YSBIS: "YSBIS",
    YY: "YY",
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
    static Typeface = Typeface;
    static Language = Language;
    static LaundryPosition = LaundryPosition;
    static Manufacturer = Manufacturer;

    /**
     * Create an object containing the input data to identify Yohji Yamamoto.
     * @param {string} productCode - Object to extract the product code print from.
     * @param {InputYY.LogoStyle} logoStyle - Object to extract the logo style from.
     * @param {InputYY.SizingSystem} sizingSystem - Object to extract the sizing system from.
     * @param {InputYY.Typeface} typeface - Object to extract the typeface from.
     * @param {InputYY.Language} language - Object to extract the fabric content language from.
     * @param {InputYY.LaundryPosition} laundryPosition - Object to extract the laundry symbols position from.
     * @param {InputYY.Manufacturer} Manufacturer - Object to extract the manufacturer from.
     */
    constructor({ productCode, logoStyle, sizingSystem, typeface, language,
        laundryPosition, manufacturer }) {
        super({ label: Input.Label.YY, productCode: productCode, logoStyle: logoStyle });
        /** @type {InputYY.SizingSystem} */
        this.sizingSystem = sizingSystem;
        /** @type {InputYY.Typeface} */
        this.typeface = typeface;
        /** @type {InputYY.Language} */
        this.language = language;
        /** @type {InputYY.LaundryPosition} */
        this.laundryPosition = laundryPosition;
        /** @type {InputYY.Manufacturer} */
        this.manufacturer = manufacturer;
    }

    /**
     * Return a copy of the instance as a new object.
     * @return {InputYY} Copy of the instance.
     */
    copy() {
        return new InputYY({ productCode: this.productCode, logoStyle: this.logoStyle,
            sizingSystem: this.sizingSystem, typeface: this.typeface, language: this.language,
            laundryPosition: this.laundryPosition, manufacturer: this.manufacturer});
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
        return this.isLogo(InputYY.LogoStyle.YY['1']);
    }

    /**
     * Evaluate if the logo is YY_2.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoYY_2() {
        return this.isLogo(InputYY.LogoStyle.YY['2']);
    }

    /**
     * Evaluate if the logo is YY_3.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoYY_3() {
        return this.isLogo(InputYY.LogoStyle.YY['3']);
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
        return this.isLogo(InputYY.LogoStyle.YS['1']);
    }

    /**
     * Evaluate if the logo is YS_2.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoYS_2() {
        return this.isLogo(InputYY.LogoStyle.YS['2']);
    }

    /**
     * Evaluate if the logo is YS_B.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoYS_B() {
        return this.isLogo(InputYY.LogoStyle.YS['B']);
    }

    /**
     * Evaluate if the logo is YS.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoYS() {
        return this.isLogoYS_1() || this.isLogoYS_2() || this.isLogoYS_B();
    }

    /**
     * Evaluate if the logo is NOIR_1.
     * @return {boolean} True if it is; false otherwise.
     */
    isLogoNOIR_1() {
        return this.isLogo(InputYY.LogoStyle.NOIR['1']);
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
        else if (this.isLogoYY_1()) message = "Yohji Yamamoto round signature logo";
        else if (this.isLogoYY_2()) message = "Yohji Yamamoto rough signature logo";
        else if (this.isLogoYY_3()) message = "Yohji Yamamoto sharp signature logo";
        else if (this.isLogoYS_1()) message = "Y's sans-serif logo";
        else if (this.isLogoYS_2()) message = "Y's serif logo";
        else if (this.isLogoYS_B()) message = "Y's brush logo";
        else if (this.isLogoNOIR_1()) message = "YOHJI YAMAMOTO + NOIR sans-serif logo";
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
     * Evaluate if the instance's sizing system is equal to another sizing system.
     * @param {InputYY.SizingSystem} sizingSystem - Sizing system to compare with.
     * @return {boolean} True if the instance's sizing system is equal to the other; false otherwise.
     */
    isSizingSystemEqualTo(sizingSystem) {
        const input = new InputYY({ sizingSystem: sizingSystem });
        if (!input.isSizingSystemValid()) return false;
        if (this.isSizingUnspecified() || input.isSizingUnspecified()) return true;
        return this.sizingSystem === input.sizingSystem;
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
            return !this.isProductCodeBlank(); //!this.isLogoYY_1() && !this.isLogoYY_2()
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
            //if (this.isProductCodeBlank()) //this.isLogoYY_1() || this.isLogoYY_2()
            //    message += " [mismatch with previous information]";
        }
        if (this.isTypefaceSlabSerif()) {
            message = "slab serif";
            //if (this.isProductCodeBlank()) //this.isLogoYY_1() || this.isLogoYY_2()
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
            return !this.isProductCodeBlank() && !this.isTypefaceProportional(); //!this.isLogoYY_1() && !this.isLogoYY_2()
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
            //if (this.isProductCodeBlank() || this.isTypefaceProportional()) //this.isLogoYY_1() || this.isLogoYY_2()
            //    message += " [mismatch with previous information]";
        }
        else if (this.isLaundryBottom()) message = "bottom";
        else if (this.isLaundryUnspecified()) message = "unspecified";
        return "> Laundry symbols position: " + message;
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
     * Evaluate if the manufacturer is YS.
     * @return {boolean} True if it is; false otherwise.
     */
    isManufacturerYS() {
        return this.manufacturer === InputYY.Manufacturer.YS;
    }

    /**
     * Evaluate if the manufacturer is YSBIS.
     * @return {boolean} True if it is; false otherwise.
     */
    //isManufacturerYSBIS() {
    //    return this.manufacturer === InputYY.Manufacturer.YSBIS;
    //}

    /**
     * Evaluate if the manufacturer is YY.
     * @return {boolean} True if it is; false otherwise.
     */
    isManufacturerYY() {
        return this.manufacturer === InputYY.Manufacturer.YY;
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
        if (this.isManufacturerYS()) message = "㈱ ワイズ [...]";
        //else if (this.isManufacturerYSBIS()) message = "Y's bis [ワイズビス]";
        else if (this.isManufacturerYY()) message = "㈱ ヨウジヤマモト";
        else if (this.isManufacturerUnspecified()) message = "unspecified";
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
        let sameSizingSystem = this.isSizingSystemEqualTo(input.sizingSystem);
        let sameTypeface = this.isTypefaceEqualTo(input.typeface);
        let sameLanguage = this.isLanguageEqualTo(input.language);
        let sameLaundryPosition = this.isLaundryPositionEqualTo(input.laundryPosition);
        let sameManufacturer = this.isLaundryPositionEqualTo(input.manufacturer);
        return sameProductCode && sameLogoStyle && sameSizingSystem && sameTypeface
            && sameLanguage && sameLaundryPosition && sameManufacturer;
    }

    /**
     * Return a string confirming the input data.
     * @return {string} Confirmation string.
     */
    confirm() {
        let str = `${this.confirmLabel()}`;
        str += `\n${this.confirmLogoStyle()}`;
        str += `\n${this.confirmProductCode()}`;
        str += `\n${this.confirmSizingSystem()}`;
        str += `\n${this.confirmLanguage()}`;
        str += `\n${this.confirmTypeface()}`;
        str += `\n${this.confirmLaundryPosition()}`;
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
        if (!this.isSizingSystemValid()) return false;
        if (!this.isTypefaceValid()) return false;
        if (!this.isLanguageValid()) return false;
        if (!this.isLaundryPositionValid()) return false;
        if (!this.isManufacturerValid()) return false;
        return true;
    }
}

export default InputYY;
