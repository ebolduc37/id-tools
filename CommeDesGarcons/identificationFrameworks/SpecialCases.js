/**
 * COMME des GARÇONS exceptions identification.
 *
 * Evaluation of the occurrence of a possible collection by looking at
 * the COMME des GARÇONS exceptions.
 *
 * @author Etienne Bolduc
 */

// Imports
import { standardize, Labels } from "../../utils/index.js";
import { YearPrint, IdentificationCDG, isValid } from "../utils/index.js";

// Constants
import { SPECIAL_CASES } from "../constants/index.js";

/**
 * Evaluate if a product code and year print data correspond to a COMME des GARÇONS exception.
 * @param {string} codeInput - Product code.
 * @param {(string|YearPrint)} yearInput - Year print data.
 * @return {boolean} True if the pair corresponds to a COMME des GARÇONS exception; false otherwise.
 */
function isSpecialCase(codeInput, yearInput) {

    // Returning false if the product code and year print data are not valid inputs
    if (!isValid(codeInput, yearInput)) return false;

    // Standardizing the product code and year print data
    codeInput = standardize(codeInput);
    yearInput = new YearPrint(yearInput);

    // Returning true if the product code and year print data correspond to a COMME des GARÇONS exception
    if (codeInput in SPECIAL_CASES)
        return yearInput.isEqualTo(SPECIAL_CASES[codeInput].yearPrint) || yearInput.isErased();

    return false;
};

/**
 * Identification of the occurrence of a possible collection from the product code and year print data
 * by looking at the COMME des GARÇONS exceptions.
 * @param {string} codeInput - Product code.
 * @param {(string|YearPrint)} yearInput - Year print data.
 * @return {IdentificationCDG} Identification of the occurrence of a possible collection.
 */
function identifySpecialCases(codeInput, yearInput) {

    // Returning null if the product code and year print data are not
    // valid for any COMME des GARÇONS exceptions
    if (!isSpecialCase(codeInput, yearInput)) return null;

    // Standardizing the product code and year print data
    codeInput = standardize(codeInput);
    yearInput = new YearPrint(yearInput);

    // Initializing the identification object
    let identification = SPECIAL_CASES[codeInput].identification.copy();

    // Assigning values to the identification
    identification.label = Labels.CDG,
        identification.yearPrint = yearInput;
    identification.exception = true;

    return identification;
}

export { identifySpecialCases };