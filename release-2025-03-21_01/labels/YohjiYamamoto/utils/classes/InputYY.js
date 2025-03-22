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
        '2': "YY_2", // S/S '84 -> A/W '91
        '3': "YY_3" // A/W '91 -> NOW
    },
    YS: {
        '1': "YS_1", // 1972 -> A/W '87
        '2': "YS_2", // S/S '88 -> NOW
        'B': "YS_B",
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
    SLAB_SERIF: "SLAB_SERIF",
    UNSPECIFIED: "UNSPECIFIED",
});

/**
 * Enum for Yohji Yamamoto fabric content on the care label.
 * @readonly
 * @enum {string}
 */
const FabricContent = Object.freeze({
    JP: "JP",
    TRANSLATED: "TRANSLATED",
    UNSPECIFIED: "UNSPECIFIED"
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
 * Enum for Yohji Yamamoto manufacturer.
 * @readonly
 * @enum {string}
 */
const Manufacturer = Object.freeze({
    BLANK: "BLANK",
    YS: "YS",
    YSBIS: "YSBIS",
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
    static FontType = FontType;
    static FabricContent = FabricContent;
    static LaundryPosition = LaundryPosition;
    static Manufacturer = Manufacturer;

    /**
     * Create an object containing the input data to identify Yohji Yamamoto.
     * @param {string} productCode - Object to extract the product code print from.
     * @param {InputYY.LogoStyle} logoStyle - Object to extract the logo style from.
     * @param {InputYY.SizingSystem} sizingSystem - Object to extract the sizing system from.
     * @param {InputYY.FontType} fontType - Object to extract the font type from.
     * @param {InputYY.FabricContent} fabricContent - Object to extract the fabric content information from.
     * @param {InputYY.LaundryPosition} laundryPosition - Object to extract the laundry symbols position from.
     * @param {InputYY.Manufacturer} Manufacturer - Object to extract the manufacturer from.
     */
    constructor({ productCode, logoStyle, sizingSystem, fontType, fabricContent,
        laundryPosition, manufacturer }) {
        super({ label: Input.Label.YY, productCode: productCode, logoStyle: logoStyle });
        /** @type {InputYY.SizingSystem} */
        this.sizingSystem = sizingSystem;
        /** @type {InputYY.FontType} */
        this.fontType = fontType;
        /** @type {InputYY.FabricContent} */
        this.fabricContent = fabricContent;
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
            sizingSystem: this.sizingSystem, fontType: this.fontType, fabricContent: this.fabricContent,
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
        else if (this.isLogoYY_1()) message = "earliest, roundest Yohji Yamamoto signature";
        else if (this.isLogoYY_2()) message = "early, round Yohji Yamamoto signature";
        else if (this.isLogoYY_3()) message = "current, sharp Yohji Yamamoto signature";
        else if (this.isLogoYS_1()) message = "early Y's logo";
        else if (this.isLogoYS_2()) message = "modern Y's logo";
        else if (this.isLogoYS_B()) message = "brush Y's logo";
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
     * Evaluate if the font type is slab serif.
     * @return {boolean} True if it is; false otherwise.
     */
    isFontSlabSerif() {
        return this.fontType === InputYY.FontType.SLAB_SERIF;
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
        if (this.isFontSansSerif() || this.isFontSlabSerif()) {
            return !this.isProductCodeBlank(); //!this.isLogoYY_1() && !this.isLogoYY_2()
        }
        else return this.isFontSerif() || this.isFontUnspecified();
    }

    /**
     * Evaluate if the instance's font type is equal to another font type.
     * @param {InputYY.FontType} fontType - Font type to compare with.
     * @return {boolean} True if the instance's font type is equal to the other; false otherwise.
     */
    isFontTypeEqualTo(fontType) {
        const input = new InputYY({ fontType: fontType });
        if (!input.isFontTypeValid()) return false;
        if (this.isFontUnspecified() || input.isFontUnspecified()) return true;
        return this.fontType === input.fontType;
    }

    /**
     * Return a string confirming the font type.
     * @return {string} Confirmation string.
     */
    confirmFontType() {
        let message = "invalid entry";
        if (this.isFontSansSerif()) {
            message = "sans serif";
            //if (this.isProductCodeBlank()) //this.isLogoYY_1() || this.isLogoYY_2()
            //    message += " [mismatch with previous information]";
        }
        if (this.isFontSlabSerif()) {
            message = "slab serif";
            //if (this.isProductCodeBlank()) //this.isLogoYY_1() || this.isLogoYY_2()
            //    message += " [mismatch with previous information]";
        }
        else if (this.isFontSerif()) message = "serif";
        else if (this.isFontUnspecified()) message = "unspecified";
        return "> Font type: " + message;
    }



    ////////////////////////////////
    // FABRIC CONTENT
    ////////////////////////////////

    /**
     * Evaluate if the fabric content on the care label is in Japanese only.
     * @return {boolean} True if it is; false otherwise.
     */
    isFabricContentJapanese() {
        return this.fabricContent === InputYY.FabricContent.JP;
    }

    /**
     * Evaluate if the fabric content translated in French and English appears at the top of the care label.
     * @return {boolean} True if it is; false otherwise.
     */
    isFabricContentTranslated() {
        return this.fabricContent === InputYY.FabricContent.TRANSLATED;
    }

    /**
     * Evaluate if the language used for the fabric content on the care label is unspecified.
     * @return {boolean} True if it is; false otherwise.
     */
    isFabricContentUnspecified() {
        return this.fabricContent === InputYY.FabricContent.UNSPECIFIED;
    }

    /**
     * Evaluate if the fabric content is valid.
     * @return {boolean} True if it is; false otherwise.
     */
    isFabricContentValid() {
        return this.isFabricContentJapanese() || this.isFabricContentTranslated()
            || this.isFabricContentUnspecified();
    }

    /**
     * Evaluate if the instance's fabric content is equal to another.
     * @param {InputYY.FabricContent} fabricContent - Fabric content to compare with.
     * @return {boolean} True if the instance's fabric content is equal to the other; false otherwise.
     */
    isFabricContentEqualTo(fabricContent) {
        const input = new InputYY({ fabricContent: fabricContent });
        if (!input.isFabricContentValid()) return false;
        if (this.isFabricContentUnspecified() || input.isFabricContentUnspecified()) return true;
        return this.fabricContent === input.fabricContent;
    }

    /**
     * Return a string confirming the French/English fabric content.
     * @return {string} Confirmation string.
     */
    confirmFabricContent() {
        let message = "invalid entry";
        if (this.isFabricContentJapanese()) message = "Japanese only";
        else if (this.isFabricContentTranslated()) message = "translation available";
        else if (this.isFabricContentUnspecified()) message = "unspecified";
        return "> Fabric content: " + message;
    }
    
    
    
    ////////////////////////////////
    // LAUNDRY SYMBOLS POSITION
    ////////////////////////////////

    /**
     * Evaluate if the laundry symbols are positioned below the fabric content.
     * @return {boolean} True if it is; false otherwise.
     */
    isLaundryBelow() {
        return this.laundryPosition === InputYY.LaundryPosition.BELOW;
    }

    /**
     * Evaluate if the laundry symbols are positioned above the fabric content.
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
            return !this.isProductCodeBlank() && !this.isFontSerif(); //!this.isLogoYY_1() && !this.isLogoYY_2()
        else return this.isLaundryBelow() || this.isLaundryUnspecified();
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
        if (this.isLaundryAbove()) {
            message = "above";
            //if (this.isProductCodeBlank() || this.isFontSerif()) //this.isLogoYY_1() || this.isLogoYY_2()
            //    message += " [mismatch with previous information]";
        }
        else if (this.isLaundryBelow()) message = "below";
        else if (this.isLaundryUnspecified()) message = "unspecified";
        return "> Laundry symbols: " + message;
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
    isManufacturerYSBIS() {
        return this.manufacturer === InputYY.Manufacturer.YSBIS;
    }

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
        if (this.isManufacturerYS()) message = "Y's [ワイズ] / Y's for men [ワイズフォーメン]";
        else if (this.isManufacturerYSBIS()) message = "Y's bis [ワイズビス]";
        else if (this.isManufacturerYY()) message = "Yohji Yamamoto [ヨウジヤマモト]";
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
        let sameFontType = this.isFontTypeEqualTo(input.fontType);
        let sameFabricContent = this.isFabricContentEqualTo(input.FabricContent);
        let sameLaundryPosition = this.isLaundryPositionEqualTo(input.laundryPosition);
        let sameManufacturer = this.isLaundryPositionEqualTo(input.manufacturer);
        return sameProductCode && sameLogoStyle && sameSizingSystem && sameFontType
            && sameFabricContent && sameLaundryPosition && sameManufacturer;
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
        str += `\n${this.confirmFontType()}`;
        str += `\n${this.confirmFabricContent()}`;
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
        if (!this.isFontTypeValid()) return false;
        if (!this.isFabricContentValid()) return false;
        if (!this.isLaundryPositionValid()) return false;
        if (!this.isManufacturerValid()) return false;
        return true;
    }
}

export default InputYY;
