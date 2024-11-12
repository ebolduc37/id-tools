/**
 * COMME des GARÇONS SHIRT (FOREVER) framework exceptions identification.
 *
 * Evaluation of the occurrence of possible collections by following
 * the COMME des GARÇONS SHIRT (FOREVER) identification framework exceptions.
 *
 * @author Etienne Bolduc
 */

import { Collection, Identification } from "../../../utils/index.js";
import { InputCDG } from "../utils/index.js";

// Constants
import { GARMENT_TYPE_ID, LINE } from "../constants/index.js";
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

    // Returning false if the garment type ID is not valid
    const garmentTypeID = productCode[4];
    if (!(garmentTypeID in GARMENT_TYPE_ID)) return false;

    // Returning true otherwise
    return true;
};

/**
 * Identification of the occurrence of a possible collection from the input data
 * by following the COMME des GARÇONS SHIRT (FOREVER) A/W '20 framework.
 * @return {Identification[]} Identification of the occurrence of a possible collection.
 */
InputCDG.prototype.extract_Forever20W = function() {

    // Returning empty array if the input data is not a valid COMME des GARÇONS SHIRT (FOREVER) A/W '20 input
    if (!this.isForever20W()) return [];

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Initializing the identification object
    let identification = new Identification({
        label: Identification.Label.CDG,
        input: this.copy(),
        framework: LINE.FOREVER.name,
        exception: true,
    });

    // Initializing and assigning the occurrence
    identification.lineList = [LINE.FOREVER.forIdentification([new Collection(2020, Collection.Season.W)])];
    // Assigning the standardized code as the stylized code
    identification.stylizedCode = productCode;

    return [identification];
};

/**
 * Identification of the occurrence of a possible collection from the input data
 * by following the COMME des GARÇONS SHIRT (FOREVER) framework exceptions.
 * @return {Identification[]} Identification of the occurrence of possible collections.
 */
InputCDG.prototype.extract_ForeverException = function() {
    if (this.isForever20W()) return this.extract_Forever20W();
    else return [];
};
