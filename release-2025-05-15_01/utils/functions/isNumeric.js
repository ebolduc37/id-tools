/**
 * Initialization of function isNumeric.
 *
 * Initialization of a function to evalute if a string is only composed of digits.
 *
 * @author Etienne Bolduc
 */

/**
 * Evaluate if a string is only composed of digits.
 * @param {string} str String to evaluate the composition.
 * @return {boolean} True if the string is only composed of digits; false otherwise.
 */
function isNumeric(str) {
    return /^[0-9]+$/.test(str);
};

export default isNumeric;
