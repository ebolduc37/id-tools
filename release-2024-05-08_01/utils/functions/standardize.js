/**
 * Initialization of function standardize.
 *
 * Initialization of a function to standardize a string to eliminate non-alphanumerical
 * character and turn all alphabetical characters to upper case.
 *
 * @author Etienne Bolduc
 */

/**
 * Standardize a string by eliminating non-alphanumerical character and
 * turn all alphabetical characters to upper case.
 * @param {string} str String to standardize.
 * @return {string} Standardized string.
 */
function standardize(str) {
    if (!str || typeof str !== "string") return str;
    else return str.replace(/[^0-9A-Za-z]/g, "").toUpperCase();
};

export default standardize;
