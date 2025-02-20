/**
 * Initialization of COUNTERFEITS.
 *
 * Initialization of the array of inputs that have been spotted on counterfeits of COMME des GARÇONS.
 *
 * @author Etienne Bolduc
 */

import { deepFreeze } from "../../../utils/index.js";
import InputCDG from "../utils/classes/InputCDG.js";

/**
 * Array of inputs that have been spotted on counterfeits of COMME des GARÇONS.
 * @constant
 * @readonly
 * @type {InputCDG[]}
 * @default
 */
const COUNTERFEITS = deepFreeze([
    new InputCDG({productCode: "AZT026", yearPrint: InputCDG.NoYearPrint.UNSPECIFIED}), // 2005, 2007
    new InputCDG({productCode: "AZT095", yearPrint: InputCDG.NoYearPrint.UNSPECIFIED}), // 2009
]);

export default COUNTERFEITS;
