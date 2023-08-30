/**
 * COMME des GARÇONS COMME des GARÇONS framework identification.
 *
 * Evaluation of the occurrence of a possible collection by following
 * the COMME des GARÇONS COMME des GARÇONS identification framework.
 *
 * @author Etienne Bolduc
 */

// Imports
import { isNumeric, standardize, Labels, Seasons, Collection, Occurrence } from "../../../utils/index.js";
import { isValid, YearPrint, IdentificationCDG } from "../utils/index.js";

// Constants
import { GARMENT_ID, LINES } from "../constants/index.js";
const REGEX_CDGCDG = /^[SW]\d\d?[A-Z]\d{3}$/;
const CDGCDG_YEARID = { BOUNDS: [1, 20], OFFSET: 1998 };

/**
 * Evaluate if a product code and year print data correspond to the COMME des GARÇONS COMME des GARÇONS framework.
 * @param {string} codeInput - Product code.
 * @param {(string|YearPrint)} yearInput - Year print data.
 * @return {boolean} True if the pair corresponds to the COMME des GARÇONS COMME des GARÇONS framework; false otherwise.
 */
function isCdgcdg(codeInput, yearInput) {

    // Returning false if the product code and year print data are not valid inputs
    if (!isValid(codeInput, yearInput)) return false;

    // Standardizing the product code and year print data
    codeInput = standardize(codeInput);
    yearInput = new YearPrint(yearInput);

    // Returning false if the product code does not fit the regular expression of the framework
    if (!REGEX_CDGCDG.test(codeInput)) return false;

    // Returning false if there is a year print
    if (yearInput.isNumeric()) return false;

    // Returning false if the year ID is out of bounds
    const yearID = (!isNumeric(codeInput[2])) ? parseInt(codeInput[1]) : parseInt(codeInput.slice(1, 3));
    if (!(CDGCDG_YEARID.BOUNDS[0] <= yearID && yearID <= CDGCDG_YEARID.BOUNDS[1])) return false;

    // Returning false if the garment ID is not valid
    const garment_ID = (!isNumeric(codeInput[2])) ? codeInput[2] : codeInput[3];
    if (!(garment_ID in GARMENT_ID)) return false;

    // Returning true otherwise
    return true
};

/**
 * Identification of the occurrence of a possible collection from the product code and year print data
 * by following the COMME des GARÇONS COMME des GARÇONS framework.
 * @param {string} codeInput - Product code.
 * @param {(string|YearPrint)} yearInput - Year print data.
 * @return {IdentificationCDG} Identification of the occurrence of a possible collection.
 */
function identifyCdgcdg(codeInput, yearInput) {

    // Returning null if the product code and year print data are not
    // valid for the COMME des GARÇONS COMME des GARÇONS framework
    if (!isCdgcdg(codeInput, yearInput)) return null;

    // Standardizing the product code and year print data
    codeInput = standardize(codeInput);
    yearInput = new YearPrint(yearInput);

    // Initializing the identification object
    let identification = new IdentificationCDG({
        label: Labels.CDG,
        framework: LINES.CDGCDG.name,
        yearPrint: yearInput,
    });

    // Initializing useful parameters
    const garment_ID = (codeInput.length === 6) ? codeInput[2] : codeInput[3];
    const yearID = (codeInput.length === 6) ? parseInt(codeInput[1]) : parseInt(codeInput.slice(1, 3));
    const season = Seasons[codeInput[0]];
    const col = new Collection(yearID + CDGCDG_YEARID.OFFSET, season);

    // Initializing and assigning the occurrence
    identification.byLine = [new Occurrence(LINES.CDGCDG.name, [col])];

    // Assigning the standardized code as the stylized code
    identification.codeStylized = codeInput;
    // Assigning the item type
    identification.garmentType = GARMENT_ID[garment_ID];

    return identification;
};

export { identifyCdgcdg };
