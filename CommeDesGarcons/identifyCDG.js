/**
 * COMME des GARÇONS identification center.
 *
 * Evaluation of the occurrences of possible collections by following
 * the different COMME des GARÇONS frameworks and their exceptions.
 *
 * @author Etienne Bolduc
 */

// Imports
import { IdentificationCDG, YearPrint, isValid } from "./utils/index.js";
import * as identify from "./identificationFrameworks/index.js";

/**
* Identification of the occurrences of possible collections from the product code and year print data
* by following the different COMME des GARÇONS frameworks and their exceptions.
* @param {string} codeInput - Product code.
* @param {(string|YearPrint)} yearInput - Year print data.
* @return {IdentificationCDG[]} Identification of the occurrences of possible collections.
*/
function identifyCDG(codeInput, yearInput) {

    // Returning false if the product code and year print data are not valid inputs
    if (!isValid(codeInput, yearInput)) return null;

    // Building the array of identifications of possible collections
    let identification = [];
    identification.push(identify.Monthly(codeInput, yearInput));
    identification.push(identify.Seasonal(codeInput, yearInput));
    identification.push(identify.Shirt(codeInput, yearInput));
    identification.push(identify.ShirtExceptions(codeInput, yearInput));
    identification.push(identify.Forever(codeInput, yearInput));
    identification.push(identify.ForeverExceptions(codeInput, yearInput));
    identification.push(identify.Cdgcdg(codeInput, yearInput));
    identification.push(identify.SpecialCases(codeInput, yearInput));

    // Removing null and empty elements from the array of identifications
    identification = identification.filter(id => id != null && Object.keys(id).length !== 0);

    // Returning null if the array of identifications is empty
    if (identification.length === 0) return null;

    // Return the array of identifications otherwise
    else return identification;
};

export default identifyCDG;
