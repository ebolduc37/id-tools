/**
 * COMME des GARÇONS SHIRT (FOREVER) framework identification.
 *
 * Evaluation of the occurrence of possible collections by following
 * the COMME des GARÇONS SHIRT (FOREVER) identification framework.
 *
 * @author Etienne Bolduc
 */

// Imports
import { standardize, Collection, OperationPeriod, Occurrence, Labels } from "../../../utils/index.js";
import { IdentificationCDG, YearPrint, isValid } from "../utils/index.js";

// Constants
import { ALL_COLLECTIONS, LINES } from "../constants/index.js";
const REGEX_FOREVER = /^[C][D][G][A-Z]\d[A-Z]{2}[0-9A-Z]*$/;
const OPERATION_PERIOD_FOREVER = new OperationPeriod(new Collection(2010), new Collection(2020));

/**
 * Evaluate if a product code and year print data correspond to the COMME des GARÇONS SHIRT (FOREVER) framework.
 * @param {string} codeInput - Product code.
 * @param {(string|YearPrint)} yearInput - Year print data.
 * @return {boolean} True if the pair corresponds to the COMME des GARÇONS SHIRT framework; false otherwise.
 */
function isForever(codeInput, yearInput) {

    // Returning false if the product code and year print data are not valid inputs
    if (!isValid(codeInput, yearInput)) return false;

    // Standardizing the product code and year print data
    codeInput = standardize(codeInput);
    yearInput = new YearPrint(yearInput);

    // Returning false if the product code does not fit the regular expression of the framework
    if (!REGEX_FOREVER.test(codeInput)) return false;

    // Returning false if there is a year print
    if (yearInput.isNumeric()) return false;

    // Returning true otherwise
    return true;
};

/**
 * Identification of the occurrence of possible collections from the product code and year print data
 * by following the COMME des GARÇONS SHIRT (FOREVER) framework.
 * @param {string} codeInput - Product code.
 * @param {(string|YearPrint)} yearInput - Year print data.
 * @return {IdentificationCDG} Identification of the occurrence of possible collections.
 */
function identifyForever(codeInput, yearInput) {

    // Returning null if the product code and year print data are not
    // valid COMME des GARÇONS SHIRT (FOREVER) framework inputs
    if (!isForever(codeInput, yearInput)) return null;

    // Standardizing the product code and year print data
    codeInput = standardize(codeInput);
    yearInput = new YearPrint(yearInput);

    // Initializing the identification object
    let identification = new IdentificationCDG({
        label: Labels.CDG,
        framework: LINES.FOREVER.name,
        yearPrint: yearInput,
    });

    // Initializing the set of candidates as production years
    let candidates = ALL_COLLECTIONS.map(col => col.copy()).filter(col => col.isProductionYear());
    // Limiting the candidates to the regular period of COMME des GARÇONS SHIRT (FOREVER)
    candidates = candidates.filter(col => OPERATION_PERIOD_FOREVER.includes(col));

    // Assigning the occurrence
    identification.byLine = [new Occurrence(LINES.FOREVER.name, candidates)];
    // Assigning the standardized code as the stylized code
    identification.codeStylized = codeInput;

    return identification;
};

export { identifyForever };
