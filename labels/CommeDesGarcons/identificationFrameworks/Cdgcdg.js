/**
 * COMME des GARÇONS COMME des GARÇONS framework identification.
 *
 * Evaluation of the occurrence of a possible collection by following
 * the COMME des GARÇONS COMME des GARÇONS identification framework.
 *
 * @author Etienne Bolduc
 */

import { Collection, Identification, Labels, isNumeric } from "../../../utils/index.js";
import { InputCDG } from "../utils/index.js";

// Constants
import { GARMENT_ID, LINES } from "../constants/index.js";
const REGEX_CDGCDG = /^[SW]\d\d?[A-Z]\d{3}$/;
const CDGCDG_YEARID = { BOUNDS: [1, 20], OFFSET: 1998 };

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
    const yearID = (!isNumeric(productCode[2])) ? parseInt(productCode[1]) : parseInt(productCode.slice(1, 3));
    if (!(CDGCDG_YEARID.BOUNDS[0] <= yearID && yearID <= CDGCDG_YEARID.BOUNDS[1])) return false;

    // Returning false if the garment ID is not valid
    const garment_ID = (!isNumeric(productCode[2])) ? productCode[2] : productCode[3];
    if (!(garment_ID in GARMENT_ID)) return false;

    // Returning true otherwise
    return true
};

/**
 * Identification of the occurrence of a possible collection from the input data
 * by following the COMME des GARÇONS COMME des GARÇONS framework.
 * @return {Identification} Identification of the occurrence of a possible collection.
 */
InputCDG.prototype.identifyCdgcdg = function() {

    // Returning null if the input data is not a valid COMME des GARÇONS COMME des GARÇONS input
    if (!this.isCdgcdg()) return null;

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Initializing the identification object
    let identification = new Identification({
        label: Labels.CDG,
        input: this.copy(),
        framework: LINES.CDGCDG.name,
    });

    // Initializing useful parameters
    const garment_ID = (productCode.length === 6) ? productCode[2] : productCode[3];
    const yearID = (productCode.length === 6) ? parseInt(productCode[1]) : parseInt(productCode.slice(1, 3));
    const season = Collection.SEASONS[productCode[0]];
    const col = new Collection(yearID + CDGCDG_YEARID.OFFSET, season);

    // Initializing and assigning the occurrence
    identification.lineList = [LINES.CDGCDG.newCollectionList([col])];

    // Assigning the standardized code as the stylized code
    identification.codeStylized = productCode;
    // Assigning the item type
    identification.garmentType = GARMENT_ID[garment_ID];

    return identification;
};
