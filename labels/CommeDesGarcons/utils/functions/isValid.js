/**
 * Initialization of function isValid.
 *
 * Initialization of a function to validate a product code and year print as acceptable inputs.
 *
 * @author Etienne Bolduc
 */

import { standardize } from "../../../../utils/index.js";
import FROM_BLANK_TO_PRINT from "../../constants/FROM_BLANK_TO_PRINT.js";
import YearPrint from "../classes/YearPrint.js";

/**
 * Evaluate if a product code and year print are valid inputs.
 * @param {string} codeInput Product code.
 * @param {YearPrint} yearInput - Year print information.
 * @return {boolean} True if the two are valid; false otherwise.
 */
function isValid(codeInput, yearInput) {

    // Returning false if the code is not a string
    if (typeof codeInput !== "string") return false;

    // Standardizing the product code and year print
    codeInput = standardize(codeInput);
    yearInput = new YearPrint(yearInput);

    // Returning false if the code is empty
    if (codeInput === "") return false;

    // Returning false if the year input is wrong
    else if (yearInput.isWrong()) return false;

    // Returning true if the year input falls between the bounds; false otherwise.
    else return yearInput.isBetween(FROM_BLANK_TO_PRINT.year, new Date().getFullYear());
}

export default isValid;
