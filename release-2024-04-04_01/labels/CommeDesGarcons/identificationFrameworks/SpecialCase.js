/**
 * COMME des GARÇONS special case identification.
 *
 * Evaluation of the occurrence of a possible collection by looking at
 * the COMME des GARÇONS special cases.
 *
 * @author Etienne Bolduc
 */

import { Identification } from "../../../utils/index.js";
import { InputCDG } from "../utils/index.js";

// Constants
import { SPECIAL_CASE } from "../constants/index.js";

/**
 * Evaluate if the input data corresponds to a COMME des GARÇONS special case.
 * @return {boolean} True if the input data corresponds to a COMME des GARÇONS special case; false otherwise.
 */
InputCDG.prototype.isSpecialCase = function() {

    // Returning false if the input data is not valid
    if (!this.isValid()) return false;

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Returning true if the input data corresponds to a COMME des GARÇONS special case
    if (productCode in SPECIAL_CASE)
        return this.isYearPrintEqualTo(SPECIAL_CASE[productCode].yearPrint);

    return false;
};

/**
 * Identification of the occurrence of a possible collection from the input data
 * by looking at the COMME des GARÇONS special cases.
 * @return {Identification[]} Identification of the occurrence of a possible collection.
 */
InputCDG.prototype.idList_SpecialCase = function() {

    // Returning empty array if the input data is not a valid COMME des GARÇONS special case
    if (!this.isSpecialCase()) return [];

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Initializing the identification object
    let identification = SPECIAL_CASE[productCode].identification.copy();

    // Assigning values to the identification
    identification.input = this.copy();

    return [identification];
}
