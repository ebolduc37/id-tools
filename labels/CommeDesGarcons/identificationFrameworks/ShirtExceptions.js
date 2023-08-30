/**
 * COMME des GARÇONS SHIRT framework exceptions identification.
 *
 * Evaluation of the occurrences of possible collections by following
 * the COMME des GARÇONS SHIRT identification framework exceptions.
 *
 * @author Etienne Bolduc
 */

// Imports
import { standardize, Seasons, Collection, Occurrence, Labels } from "../../../utils/index.js";
import { YearPrint, IdentificationCDG, isValid } from "../utils/index.js";

// Constants
import { LINES, SIZES } from "../constants/index.js";
const REGEX_SHIRT_94W = /^[F][W][0][1]\d{3}[0-9A-Z]?$/;
const REGEX_SHIRT_01S = /^[S][0][8]\d{3}$/;
const REGEX_SHIRT_01W = /^[F][W][0][9]\d{3}$/;

/**
 * Evaluate if a product code and year print data correspond to the COMME des GARÇONS SHIRT A/W '94 framework.
 * @param {string} codeInput - Product code.
 * @param {(string|YearPrint)} yearInput - Year print data.
 * @return {boolean} True if the pair corresponds to the COMME des GARÇONS SHIRT A/W '94 framework; false otherwise.
 */
function isShirt94W(codeInput, yearInput) {

    // Returning false if the product code and year print data are not valid inputs
    if (!isValid(codeInput, yearInput)) return false;

    // Standardizing the product code and year print data
    codeInput = standardize(codeInput);
    yearInput = new YearPrint(yearInput);

    // Returning false if the product code does not fit the regular expression of the framework
    if (!REGEX_SHIRT_94W.test(codeInput)) return false;

    // Returning false if the year print data is not valid for 1994
    if (!yearInput.isValidFor(1994)) return false;

    // Returning false if the size notation is not valid
    if (codeInput.length === 8) {
        const size = codeInput[7];
        if (!(size in SIZES)) return false;
    }

    // Returning true otherwise
    return true;
};

/**
 * Identification of the occurrence of a possible collection from the product code and year print data
 * by following the COMME des GARÇONS SHIRT A/W '94 framework.
 * @param {string} codeInput - Product code.
 * @param {(string|YearPrint)} yearInput - Year print data.
 * @return {IdentificationCDG} Identification of the occurrence of a possible collection.
 */
function identifyShirt94W(codeInput, yearInput) {

    // Returning null if the product code and year print data are not
    // valid COMME des GARÇONS SHIRT A/W '94 inputs
    if (!isShirt94W(codeInput, yearInput)) return null;

    // Standardizing the product code and year print data
    codeInput = standardize(codeInput);
    yearInput = new YearPrint(yearInput);

    // Initializing the identification object
    let identification = new IdentificationCDG({
        label: Labels.CDG,
        framework: LINES.SHIRT.name,
        yearPrint: yearInput,
        exception: true,
    });

    // Initializing useful parameters
    const size = (codeInput.length === 8) ? SIZES[codeInput[7]] : SIZES.X;

    // Initializing and assigning the occurrence
    identification.byLine = [new Occurrence(LINES.SHIRT.name, [new Collection(1994, Seasons.W)])];
    // Assigning the stylized code
    identification.codeStylized = codeInput.slice(0, 2) + "-" + codeInput.slice(2);
    // Assigning the size
    identification.size = size;

    return identification;
};

/**
 * Evaluate if a product code and year print data correspond to the COMME des GARÇONS SHIRT S/S '01 framework.
 * @param {string} codeInput - Product code.
 * @param {(string|YearPrint)} yearInput - Year print data.
 * @return {boolean} True if the pair corresponds to the COMME des GARÇONS SHIRT S/S '01 framework; false otherwise.
 */
function isShirt01S(codeInput, yearInput) {

    // Returning false if the product code and year print data are not valid inputs
    if (!isValid(codeInput, yearInput)) return false;

    // Standardizing the product code and year print data
    codeInput = standardize(codeInput);
    yearInput = new YearPrint(yearInput);

    // Returning false if the product code does not fit the regular expression of the framework
    if (!REGEX_SHIRT_01S.test(codeInput)) return false;

    // Returning false if there is a year print
    if (yearInput.isNumeric()) return false;

    // Returning true otherwise
    return true;
};

/**
 * Identification of the occurrence of a possible collection from the product code and year print data
 * by following the COMME des GARÇONS SHIRT S/S '01 framework.
 * @param {string} codeInput - Product code.
 * @param {(string|YearPrint)} yearInput - Year print data.
 * @return {IdentificationCDG} Identification of the occurrence of a possible collection.
 */
function identifyShirt01S(codeInput, yearInput) {

    // Returning null if the product code and year print data are not
    // valid COMME des GARÇONS SHIRT S/S '01 inputs
    if (!isShirt01S(codeInput, yearInput)) return null;

    // Standardizing the product code and year print data
    codeInput = standardize(codeInput);
    yearInput = new YearPrint(yearInput);

    // Initializing the identification object
    let identification = new IdentificationCDG({
        label: Labels.CDG,
        framework: LINES.SHIRT.name,
        codeInput: codeInput,
        yearPrint: yearInput,
        exception: true,
    });

    // Initializing and assigning the occurrence
    identification.byLine = [new Occurrence(LINES.SHIRT.name, [new Collection(2001, Seasons.S)])];
    // Assigning the stylized code
    identification.codeStylized = codeInput;

    return identification;
};

/**
 * Evaluate if a product code and year print data correspond to the COMME des GARÇONS SHIRT A/W '01 framework.
 * @param {string} codeInput - Product code.
 * @param {(string|YearPrint)} yearInput - Year print data.
 * @return {boolean} True if the pair corresponds to the COMME des GARÇONS SHIRT A/W '01 framework; false otherwise.
 */
function isShirt01W(codeInput, yearInput) {

    // Returning false if the product code and year print data are not valid inputs
    if (!isValid(codeInput, yearInput)) return false;

    // Standardizing the product code and year print data
    codeInput = standardize(codeInput);
    yearInput = new YearPrint(yearInput);

    // Returning false if the product code does not fit the regular expression of the framework
    if (!REGEX_SHIRT_01W.test(codeInput)) return false;

    // Returning false if there is a year print
    if (yearInput.isNumeric()) return false;

    // Returning true otherwise
    return true;
};

/**
 * Identification of the occurrence of a possible collection from the product code and year print data
 * by following the COMME des GARÇONS SHIRT A/W '01 framework.
 * @param {string} codeInput - Product code.
 * @param {(string|YearPrint)} yearInput - Year print data.
 * @return {IdentificationCDG} Identification of the occurrence of a possible collection.
 */
function identifyShirt01W(codeInput, yearInput) {

    // Returning null if the product code and year print data are not
    // valid COMME des GARÇONS SHIRT A/W '01 inputs
    if (!isShirt01W(codeInput, yearInput)) return null;

    // Standardizing the product code and year print data
    codeInput = standardize(codeInput);
    yearInput = new YearPrint(yearInput);

    // Initializing the identification object
    let identification = new IdentificationCDG({
        label: Labels.CDG,
        framework: LINES.SHIRT.name,
        codeInput: codeInput,
        yearPrint: yearInput,
        exception: true,
    });

    // Initializing and assigning the occurrence
    identification.byLine = [new Occurrence(LINES.SHIRT.name, [new Collection(2001, Seasons.W)])];
    // Assigning the stylized code
    identification.codeStylized = codeInput;

    return identification;
};

/**
 * Identification of the occurrences of possible collections from the product code and year print data
 * by following the COMME des GARÇONS SHIRT framework exceptions.
 * @param {string} codeInput - Product code.
 * @param {(string|YearPrint)} yearInput - Year print data.
 * @return {IdentificationCDG} Identification of the occurrences of possible collections.
 */
function identifyShirtExceptions(codeInput, yearInput) {
    if (isShirt94W(codeInput, yearInput)) return identifyShirt94W(codeInput, yearInput);
    else if (isShirt01S(codeInput, yearInput)) return identifyShirt01S(codeInput, yearInput);
    else if (isShirt01W(codeInput, yearInput)) return identifyShirt01W(codeInput, yearInput);
    else return null;
};

export { identifyShirtExceptions };
