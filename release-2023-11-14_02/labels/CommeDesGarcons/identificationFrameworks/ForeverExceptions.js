/**
 * COMME des GARÇONS SHIRT (FOREVER) framework exceptions identification.
 *
 * Evaluation of the occurrence of possible collections by following
 * the COMME des GARÇONS SHIRT (FOREVER) identification framework exceptions.
 *
 * @author Etienne Bolduc
 */

import { Collection, Identification, Labels } from "../../../utils/index.js";
import { InputCDG } from "../utils/index.js";

// Constants
import { GARMENT_ID, LINES } from "../constants/index.js";
const REGEX_FOREVER_20W = /^[F][O]\d{2}[A-Z]\d{3}[0-9A-Z]*$/;

/**
 * Evaluate if the input data corresponds to the COMME des GARÇONS SHIRT (FOREVER) A/W '20 framework.
 * @return {boolean} True if the input data corresponds to the COMME des GARÇONS SHIRT (FOREVER) A/W '20 framework; false otherwise.
 */
InputCDG.prototype.isForever20W = function() {

    // Returning false if the input data is not valid
    if (!this.isValid()) return false;

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Returning false if the product code does not fit the regular expression of the framework
    if (!REGEX_FOREVER_20W.test(productCode)) return false;

    // Returning false if there is a year print
    if (this.isYearPrintNumeric()) return false;

    // Returning false if the garment ID is not valid
    const garmentID = productCode[4];
    if (!(garmentID in GARMENT_ID)) return false;

    // Returning true otherwise
    return true;
};

/**
 * Identification of the occurrence of a possible collection from the input data
 * by following the COMME des GARÇONS SHIRT (FOREVER) A/W '20 framework.
 * @return {Identification} Identification of the occurrence of a possible collection.
 */
InputCDG.prototype.identifyForever20W = function() {

    // Returning null if the input data is not a valid COMME des GARÇONS SHIRT (FOREVER) A/W '20 input
    if (!this.isForever20W()) return null;

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Initializing the identification object
    let identification = new Identification({
        label: Labels.CDG,
        input: this.copy(),
        framework: LINES.FOREVER.name,
        exception: true,
    });

    // Initializing and assigning the occurrence
    identification.lineList = [LINES.FOREVER.newCollectionList([new Collection(2020, Collection.SEASONS.W)])];
    // Assigning the standardized code as the stylized code
    identification.codeStylized = productCode;

    return identification;
};

/**
 * Identification of the occurrence of a possible collection from the input data
 * by following the COMME des GARÇONS SHIRT (FOREVER) framework exceptions.
 * @return {Identification} Identification of the occurrence of possible collections.
 */
InputCDG.prototype.identifyForeverExceptions = function() {
    if (this.isForever20W()) return this.identifyForever20W();
    else return null;
};
