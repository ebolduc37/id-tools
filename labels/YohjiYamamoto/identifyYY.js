/**
 * Yohji Yamamoto identification center.
 *
 * Evaluation of the occurrences of possible collections by following
 * the Yohji Yamamoto framework.
 *
 * @author Etienne Bolduc
 */

// Imports
import { Identification } from "../../utils/index.js";
import { CodePrintTypes, FontTypes, isValid, SignatureStyles, SizingSystems } from "./utils/index.js";
import * as identify from "./identificationFrameworks/index.js";

/**
* Identification of the occurrences of possible collections from the product code
* by following the Yohji Yamamoto framework.
* @param {string} codeInput - Product code.
* @param {SizingSystems} sizingSystem - Sizing system.
* @return {Identification[]} Identification of the occurrences of possible collections.
*/
function identifyYY({codeInput, sizingSystem, signatureStyle, fontType}) {

    // Returning false if the product code and year print data are not valid inputs
    if (!isValid(codeInput)) return null;

    // Building the array of identifications of possible collections
    let identification = [];
    identification.push(identify.Regular({codeInput, sizingSystem, signatureStyle, fontType}));

    // Removing null and empty elements from the array of identifications
    identification = identification.filter(id => id != null && Object.keys(id).length !== 0);

    // Returning null if the array of identifications is empty
    if (identification.length === 0) return null;

    // Return the array of identifications otherwise
    else return identification;
};

export default identifyYY;
