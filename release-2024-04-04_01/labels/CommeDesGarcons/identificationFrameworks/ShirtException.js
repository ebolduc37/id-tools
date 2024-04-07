/**
 * COMME des GARÇONS SHIRT framework exceptions identification.
 *
 * Evaluation of the occurrences of possible collections by following
 * the COMME des GARÇONS SHIRT identification framework exceptions.
 *
 * @author Etienne Bolduc
 */

import { Collection, Identification } from "../../../utils/index.js";
import { InputCDG } from "../utils/index.js";

// Constants
import { LINE, GARMENT_SIZE_ID } from "../constants/index.js";
const REGEX_SHIRT_94W = /^[F][W][0][1]\d{3}[0-9A-Z]?$/;
const REGEX_SHIRT_01S = /^[S][0][8]\d{3}$/;
const REGEX_SHIRT_01W = /^[F][W][0][9]\d{3}$/;

/**
 * Evaluate if the input data corresponds to the COMME des GARÇONS SHIRT A/W '94 framework.
 * @return {boolean} True if the input data corresponds to the COMME des GARÇONS SHIRT A/W '94 framework; false otherwise.
 */
InputCDG.prototype.isShirt94W = function() {

    // Returning false if the input data is not valid
    if (!this.isValid()) return false;

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Returning false if the product code does not fit the regular expression of the framework
    if (!REGEX_SHIRT_94W.test(productCode)) return false;

    // Returning false if the year print data is not valid for 1994
    if (!this.isYearPrintEqualTo("1994")) return false;

    // Returning false if the garment size ID is not valid
    if (productCode.length === 8) {
        const garmentSizeID = productCode[7];
        if (!(garmentSizeID in GARMENT_SIZE_ID)) return false;
    }

    // Returning true otherwise
    return true;
};

/**
 * Identification of the occurrence of a possible collection from the input data
 * by following the COMME des GARÇONS SHIRT A/W '94 framework.
 * @return {Identification[]} Identification of the occurrence of a possible collection.
 */
InputCDG.prototype.idList_Shirt94W = function() {

    // Returning empty array if the input data is not a valid COMME des GARÇONS SHIRT A/W '94 input
    if (!this.isShirt94W()) return [];

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Initializing the identification object
    let identification = new Identification({
        label: Identification.Label.CDG,
        input: this.copy(),
        framework: LINE.SHIRT.name,
        exception: true,
    });

    // Initializing useful parameters
    const garmentSizeID = (productCode.length === 8) ? productCode[7] : "X";

    // Initializing and assigning the occurrence
    identification.lineList = [LINE.SHIRT.forIdentification([new Collection(1994, Collection.Season.W)])];
    // Assigning the stylized code
    identification.codeStylized = productCode.slice(0, 2) + "-" + productCode.slice(2);
    // Assigning the size
    identification.garmentSize = GARMENT_SIZE_ID[garmentSizeID];

    return [identification];
};

/**
 * Evaluate if the input data corresponds to the COMME des GARÇONS SHIRT S/S '01 framework.
 * @return {boolean} True if the input data corresponds to the COMME des GARÇONS SHIRT S/S '01 framework; false otherwise.
 */
InputCDG.prototype.isShirt01S = function() {

    // Returning false if the input data is not valid
    if (!this.isValid()) return false;

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Returning false if the product code does not fit the regular expression of the framework
    if (!REGEX_SHIRT_01S.test(productCode)) return false;

    // Returning false if there is a year print
    if (this.isYearPrintNumeric()) return false;

    // Returning true otherwise
    return true;
};

/**
 * Identification of the occurrence of a possible collection from the input data
 * by following the COMME des GARÇONS SHIRT S/S '01 framework.
 * @return {Identification[]} Identification of the occurrence of a possible collection.
 */
InputCDG.prototype.idList_Shirt01S = function() {

    // Returning empty array if the input data is not a valid COMME des GARÇONS SHIRT S/S '01 input
    if (!this.isShirt01S()) return [];

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Initializing the identification object
    let identification = new Identification({
        label: Identification.Label.CDG,
        input: this.copy(),
        framework: LINE.SHIRT.name,
        exception: true,
    });

    // Initializing and assigning the occurrence
    identification.lineList = [LINE.SHIRT.forIdentification([new Collection(2001, Collection.Season.S)])];
    // Assigning the stylized code
    identification.codeStylized = productCode;

    return [identification];
};

/**
 * Evaluate if the input data corresponds to the COMME des GARÇONS SHIRT A/W '01 framework.
 * @return {boolean} True if the input data corresponds to the COMME des GARÇONS SHIRT A/W '01 framework; false otherwise.
 */
InputCDG.prototype.isShirt01W = function() {

    // Returning false if the input data is not a valid input
    if (!this.isValid()) return false;

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Returning false if the product code does not fit the regular expression of the framework
    if (!REGEX_SHIRT_01W.test(productCode)) return false;

    // Returning false if there is a year print
    if (this.isYearPrintNumeric()) return false;

    // Returning true otherwise
    return true;
};

/**
 * Identification of the occurrence of a possible collection from the input data
 * by following the COMME des GARÇONS SHIRT A/W '01 framework.
 * @return {Identification[]} Identification of the occurrence of a possible collection.
 */
InputCDG.prototype.idList_Shirt01W = function() {

    // Returning empty array if the input data is not a valid COMME des GARÇONS SHIRT A/W '01 input
    if (!this.isShirt01W()) return [];

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Initializing the identification object
    let identification = new Identification({
        label: Identification.Label.CDG,
        input: this.copy(),
        framework: LINE.SHIRT.name,
        exception: true,
    });

    // Initializing and assigning the occurrence
    identification.lineList = [LINE.SHIRT.forIdentification([new Collection(2001, Collection.Season.W)])];
    // Assigning the stylized code
    identification.codeStylized = productCode;

    return [identification];
};

/**
 * Identification of the occurrences of possible collections from the input data
 * by following the COMME des GARÇONS SHIRT framework exceptions.
 * @return {Identification[]} Identification of the occurrences of possible collections.
 */
InputCDG.prototype.idList_ShirtException = function() {
    if (this.isShirt94W()) return this.idList_Shirt94W();
    else if (this.isShirt01S()) return this.idList_Shirt01S();
    else if (this.isShirt01W()) return this.idList_Shirt01W();
    else return [];
};
