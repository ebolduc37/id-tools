/**
 * COMME des GARÇONS COMME des GARÇONS framework identification.
 *
 * Evaluation of the occurrence of a possible collection by following
 * the COMME des GARÇONS COMME des GARÇONS identification framework.
 *
 * @author Etienne Bolduc
 */

import { Collection, Identification, isNumeric } from "../../../utils/index.js";
import { InputCDG } from "../utils/index.js";

// Constants
import { GARMENT_TYPE_ID, LINE } from "../constants/index.js";
const REGEX_CDGCDG = /^[SW]\d\d?[A-Z](\d|[A-Z])\d{2}$/;
const YEAR_ID_CDGCDG = { BOUNDS: [1, 20], OFFSET: 1998 };

/**
 * Evaluate if the input data corresponds to the COMME des GARÇONS COMME des GARÇONS framework.
 * @return {boolean} True if the input data corresponds to the COMME des GARÇONS COMME des GARÇONS framework; false otherwise.
 */
InputCDG.prototype.isCdgcdg = function() {

    // Returning false if the input data is not valid
    if (!this.isValid()) return false;

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Returning false if the product code does not fit the regular expression of the framework
    if (!REGEX_CDGCDG.test(productCode)) return false;

    // Returning false if there is a year print
    if (this.isYearPrintNumeric()) return false;

    // Returning false if the year ID is out of bounds
    //const yearID = (!isNumeric(productCode[2])) ? parseInt(productCode[1]) : parseInt(productCode.slice(1, 3));
    let yearID_index = 1;
    let garmentTypeID_index = 2;
    let yearID = parseInt(productCode[yearID_index]);
    if (isNumeric(productCode[yearID_index+1])) {
        yearID = parseInt(productCode.slice(yearID_index, yearID_index+2));
        ++garmentTypeID_index;
    }
    if (!(YEAR_ID_CDGCDG.BOUNDS[0] <= yearID && yearID <= YEAR_ID_CDGCDG.BOUNDS[1])) return false;

    // Returning false if the garment ID is not valid
    //const garmentTypeID = (!isNumeric(productCode[2])) ? productCode[2] : productCode[3];
    let garmentTypeID = productCode[garmentTypeID_index];
    if (!isNumeric(productCode[garmentTypeID_index+1])) {
        garmentTypeID = productCode.slice(garmentTypeID_index, garmentTypeID_index+2);
    }

    if (!(garmentTypeID in GARMENT_TYPE_ID)) return false;

    // Returning true otherwise
    return true
};

/**
 * Identification of the occurrence of a possible collection from the input data
 * by following the COMME des GARÇONS COMME des GARÇONS framework.
 * @return {Identification[]} Identification of the occurrence of a possible collection.
 */
InputCDG.prototype.extract_Cdgcdg = function() {

    // Returning empty array if the input data is not a valid COMME des GARÇONS COMME des GARÇONS input
    if (!this.isCdgcdg()) return [];

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Initializing the identification object
    let identification = new Identification({
        label: Identification.Label.CDG,
        input: this.copy(),
        framework: LINE.CDGCDG.name,
    });

    // Initializing useful parameters
    const season = Collection.Season[productCode[0]];
    let yearID_index = 1;
    let garmentTypeID_index = 2;
    let yearID = parseInt(productCode[yearID_index]);
    if (isNumeric(productCode[yearID_index+1])) {
        yearID = parseInt(productCode.slice(yearID_index, yearID_index+2));
        ++garmentTypeID_index;
    }
    const col = new Collection(yearID + YEAR_ID_CDGCDG.OFFSET, season);
    let garmentTypeID = productCode[garmentTypeID_index];
    if (!isNumeric(productCode[garmentTypeID_index+1])) {
        garmentTypeID = productCode.slice(garmentTypeID_index, garmentTypeID_index+2);
    }

    // Initializing and assigning the occurrence
    identification.lineList = [LINE.CDGCDG.forIdentification([col])];

    // Assigning the standardized code as the stylized code
    identification.stylizedCode = productCode;
    // Assigning the garment type
    identification.garmentType = GARMENT_TYPE_ID[garmentTypeID];

    return [identification];
};
