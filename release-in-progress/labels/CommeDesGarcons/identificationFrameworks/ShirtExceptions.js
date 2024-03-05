/**
 * COMME des GARÇONS SHIRT framework exceptions identification.
 *
 * Evaluation of the occurrences of possible collections by following
 * the COMME des GARÇONS SHIRT identification framework exceptions.
 *
 * @author Etienne Bolduc
 */

import { Collection, Identification, Labels } from "../../../utils/index.js";
import { InputCDG } from "../utils/index.js";

// Constants
import { LINES, SIZES } from "../constants/index.js";
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

    // Returning false if the size notation is not valid
    if (productCode.length === 8) {
        const size = productCode[7];
        if (!(size in SIZES)) return false;
    }

    // Returning true otherwise
    return true;
};

/**
 * Identification of the occurrence of a possible collection from the input data
 * by following the COMME des GARÇONS SHIRT A/W '94 framework.
 * @return {Identification} Identification of the occurrence of a possible collection.
 */
InputCDG.prototype.identifyShirt94W = function() {

    // Returning null if the input data is not a valid COMME des GARÇONS SHIRT A/W '94 input
    if (!this.isShirt94W()) return null;

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Initializing the identification object
    let identification = new Identification({
        label: Labels.CDG,
        input: this.copy(),
        framework: LINES.SHIRT.name,
        exception: true,
    });

    // Initializing useful parameters
    const size = (productCode.length === 8) ? SIZES[productCode[7]] : SIZES.X;

    // Initializing and assigning the occurrence
    identification.lineList = [LINES.SHIRT.newCollectionList([new Collection(1994, Collection.SEASONS.W)])];
    // Assigning the stylized code
    identification.codeStylized = productCode.slice(0, 2) + "-" + productCode.slice(2);
    // Assigning the size
    identification.size = size;

    return identification;
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
 * @return {Identification} Identification of the occurrence of a possible collection.
 */
InputCDG.prototype.identifyShirt01S = function() {

    // Returning null if the input data is not a valid COMME des GARÇONS SHIRT S/S '01 input
    if (!this.isShirt01S()) return null;

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Initializing the identification object
    let identification = new Identification({
        label: Labels.CDG,
        input: this.copy(),
        framework: LINES.SHIRT.name,
        exception: true,
    });

    // Initializing and assigning the occurrence
    identification.lineList = [LINES.SHIRT.newCollectionList([new Collection(2001, Collection.SEASONS.S)])];
    // Assigning the stylized code
    identification.codeStylized = productCode;

    return identification;
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
 * @return {Identification} Identification of the occurrence of a possible collection.
 */
InputCDG.prototype.identifyShirt01W = function() {

    // Returning null if the input data is not a valid COMME des GARÇONS SHIRT A/W '01 input
    if (!this.isShirt01W()) return null;

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Initializing the identification object
    let identification = new Identification({
        label: Labels.CDG,
        input: this.copy(),
        framework: LINES.SHIRT.name,
        exception: true,
    });

    // Initializing and assigning the occurrence
    identification.lineList = [LINES.SHIRT.newCollectionList([new Collection(2001, Collection.SEASONS.W)])];
    // Assigning the stylized code
    identification.codeStylized = productCode;

    return identification;
};

/**
 * Identification of the occurrences of possible collections from the input data
 * by following the COMME des GARÇONS SHIRT framework exceptions.
 * @return {Identification} Identification of the occurrences of possible collections.
 */
InputCDG.prototype.identifyShirtExceptions = function() {
    if (this.isShirt94W()) return this.identifyShirt94W();
    else if (this.isShirt01S()) return this.identifyShirt01S();
    else if (this.isShirt01W()) return this.identifyShirt01W();
    else return null;
};
