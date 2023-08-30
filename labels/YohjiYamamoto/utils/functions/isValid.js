/**
 * Initialization of function isValid.
 *
 * Initialization of a function to validate a product code as an acceptable input.
 *
 * @author Etienne Bolduc
 */

import { standardize } from "../../../../utils/index.js";

/**
 * Evaluate if a product code is a valid input.
 * @param {string} codeInput Product code.
 * @return {boolean} True if it is valid; false otherwise.
 */
function isValid(codeInput) {

    // Returning false if the code is not a string
    if (typeof codeInput !== "string") return false;

    // Standardizing the product code and year print
    codeInput = standardize(codeInput);
    
    // Returning false if the code is empty
    if (codeInput === "") return false;

    // Returning true otherwise.
    return true;
}

export default isValid;
