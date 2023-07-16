/**
 * COMME des GARÇONS SHIRT (FOREVER) framework exceptions identification.
 *
 * Evaluation of the occurrence of possible collections by following
 * the COMME des GARÇONS SHIRT (FOREVER) identification framework exceptions.
 *
 * @author Etienne Bolduc
 */

// Imports
import { standardize, Seasons, Collection, Occurrence, Labels } from "../../utils/index.js";
import { IdentificationCDG, YearPrint, isValid } from "../utils/index.js";

// Constants
import { GARMENT_ID, LINES } from "../constants/index.js";
const REGEX_FOREVER_20W = /^[F][O]\d{2}[A-Z]\d{3}[0-9A-Z]*$/;

/**
 * Evaluate if a product code and year print data correspond to the COMME des GARÇONS SHIRT (FOREVER) A/W '20 framework.
 * @param {string} codeInput - Product code.
 * @param {(string|YearPrint)} yearInput - Year print data.
 * @return {boolean} True if the pair corresponds to the COMME des GARÇONS SHIRT (FOREVER) A/W '20 framework; false otherwise.
 */
function isForever20W(codeInput, yearInput) {

    // Returning false if the product code and year print data are not valid inputs
    if (!isValid(codeInput, yearInput)) return false;

    // Standardizing the product code and year print data
    codeInput = standardize(codeInput);
    yearInput = new YearPrint(yearInput);

    // Returning false if the product code does not fit the regular expression of the framework
    if (!REGEX_FOREVER_20W.test(codeInput)) return false;

    // Returning false if there is a year print
    if (yearInput.isNumeric()) return false;

    // Returning false if the garment ID is not valid
    const garmentID = codeInput[4];
    if (!(garmentID in GARMENT_ID)) return false;

    // Returning true otherwise
    return true;
};

/**
 * Identification of the occurrence of a possible collection from the product code and year print data
 * by following the COMME des GARÇONS SHIRT (FOREVER) A/W '20 framework.
 * @param {string} codeInput - Product code.
 * @param {(string|YearPrint)} yearInput - Year print data.
 * @return {IdentificationCDG} Identification of the occurrence of a possible collection.
 */
function identifyForever20W(codeInput, yearInput) {

    // Returning null if the product code and year print data are not
    // valid COMME des GARÇONS SHIRT (FOREVER) A/W '20 inputs
    if (!isForever20W(codeInput, yearInput)) return null;

    // Standardizing the product code and year print
    codeInput = standardize(codeInput);
    yearInput = new YearPrint(yearInput);

    // Initializing the identification object
    let identification = new IdentificationCDG({
        label: Labels.CDG,
        framework: LINES.FOREVER.name,
        yearPrint: yearInput,
        exception: true,
    });

    // Initializing and assigning the occurrence
    identification.byLine = [new Occurrence(LINES.FOREVER.name, [new Collection(2020, Seasons.W)])];
    // Assigning the standardized code as the stylized code
    identification.codeStylized = codeInput;

    return identification;
};

/**
 * Identification of the occurrence of a possible collection from the product code and year print data
 * by following the COMME des GARÇONS SHIRT (FOREVER) framework exceptions.
 * @param {string} codeInput - Product code.
 * @param {(string|YearPrint)} yearInput - Year print data.
 * @return {IdentificationCDG} Identification of the occurrence of possible collections.
 */
function identifyForeverExceptions(codeInput, yearInput) {
    if (isForever20W(codeInput, yearInput)) return identifyForever20W(codeInput, yearInput);
    else return null;
};

export { identifyForeverExceptions };
