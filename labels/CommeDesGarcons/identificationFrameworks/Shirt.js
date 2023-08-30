/**
 * COMME des GARÇONS SHIRT framework identification.
 *
 * Evaluation of the occurrences of possible collections by following
 * the COMME des GARÇONS SHIRT identification framework.
 *
 * @author Etienne Bolduc
 */

// Imports
import { standardize, Seasons, Collection, Occurrence, Labels } from "../../../utils/index.js";
import { YearPrint, IdentificationCDG, isValid } from "../utils/index.js";

// Constants
import { LINES } from "../constants/index.js";
const REGEX_SHIRT = /^[SW]\d{5}$/;
const SHIRT_YEARID = { BOUNDS: [10, 28], OFFSET: 1992 };
const SHIRT_SUBLINES = [LINES.SHIRTGIRL, LINES.SHIRTBOY, LINES.SHIRTBOYS];

/**
 * Evaluate if a product code and year print data correspond to the COMME des GARÇONS SHIRT framework.
 * @param {string} codeInput - Product code.
 * @param {(string|YearPrint)} yearInput - Year print data.
 * @return {boolean} True if the pair corresponds to the COMME des GARÇONS SHIRT framework; false otherwise.
 */
function isShirt(codeInput, yearInput) {

    // Returning false if the product code and year print data are not valid inputs
    if (!isValid(codeInput, yearInput)) return false;

    // Standardizing the product code and year print data
    codeInput = standardize(codeInput);
    yearInput = new YearPrint(yearInput);

    // Returning false if the product code does not fit the regular expression of the framework
    if (!REGEX_SHIRT.test(codeInput)) return false;

    // Returning false if there is a year print
    if (yearInput.isNumeric()) return false;

    // Returning false if the year ID is out of bounds
    const yearID = parseInt(codeInput.slice(1, 3));
    if (!(SHIRT_YEARID.BOUNDS[0] <= yearID && yearID <= SHIRT_YEARID.BOUNDS[1])) return false;

    // Returning true otherwise
    return true
};

/**
 * Identification of the occurrences of a possible collection from the product code and year print data
 * by following the COMME des GARÇONS SHIRT framework.
 * @param {string} codeInput - Product code.
 * @param {(string|YearPrint)} yearInput - Year print data.
 * @return {IdentificationCDG} Identification of the occurrences of a possible collection.
 */
function identifyShirt(codeInput, yearInput) {

    // Returning null if the product code and year print data are not
    // valid for the COMME des GARÇONS SHIRT framework
    if (!isShirt(codeInput, yearInput)) return null;

    // Standardizing the product code and year print data
    codeInput = standardize(codeInput);
    yearInput = new YearPrint(yearInput);

    // Initializing the identification object
    let identification = new IdentificationCDG({
        label: Labels.CDG,
        framework: LINES.SHIRT.name,
        yearPrint: yearInput,
    });

    // Initializing useful parameters
    const yearID = parseInt(codeInput.slice(1, 3));
    const season = Seasons[codeInput[0]];
    const col = new Collection(yearID + SHIRT_YEARID.OFFSET, season);

    // Initializing and assigning the firstoccurrence
    let byLine = [new Occurrence(LINES.SHIRT.name, [col])];
    // Looping through sublines 
    for (let line of SHIRT_SUBLINES) {
        const name = line.name;
        const opPeriod = line.opPeriod;
        if (opPeriod.includes(col)) byLine.push(new Occurrence(name, [col]));
    }

    // Assigning the array of occurences
    identification.byLine = byLine;
    // Assigning the stylized code
    identification.codeStylized = codeInput;

    return identification;
};

export { identifyShirt };
