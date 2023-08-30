/**
 * Identification center.
 *
 * Evaluation of the occurrences of possible collections by following
 * the different labels' frameworks and their exceptions.
 *
 * @author Etienne Bolduc
 */

import { Labels } from "./utils/index.js";
import { YearPrint } from "./labels/CommeDesGarcons/utils/index.js";
import identifyCDG from "./labels/CommeDesGarcons/identifyCDG.js";
import identifyYY from "./labels/YohjiYamamoto/identifyYY.js";

/**
 * Identification of possible collections from a product code and other specifications on a garment.
 * @param {Labels} labelInput - Fashion label.
 * @param {string} codeInput - Product code.
 * @param {YearPrint} yearInput - Year print data.
 * @return {string} String representation of the identification.
 */
function identify({labelInput, codeInput,
    yearInput, // CDG
    sizingSystem, signatureStyle, fontType // YY
}) {
    if (labelInput === Labels.CDG) return identifyCDG(codeInput, yearInput);
    if (labelInput === Labels.YY) return identifyYY({codeInput, sizingSystem, signatureStyle, fontType});
    else return null;
};

export default identify;
