/**
 * COMME des GARÇONS SHIRT (FOREVER) framework identification.
 *
 * Evaluation of the occurrence of possible collections by following
 * the COMME des GARÇONS SHIRT (FOREVER) identification framework.
 *
 * @author Etienne Bolduc
 */

import { Collection, Identification, OperationPeriod } from "../../../utils/index.js";
import { InputCDG } from "../utils/index.js";

// Constants
import { ALL_COLLECTIONS, LINE } from "../constants/index.js";
const REGEX_FOREVER = /^[C][D][G][A-Z]\d[A-Z]{2}[0-9A-Z]*$/;
const OPERATION_PERIOD_FOREVER = new OperationPeriod(new Collection(2010), new Collection(2020));

/**
 * Evaluate if the input data corresponds to the COMME des GARÇONS SHIRT (FOREVER) framework.
 * @return {boolean} True if the input data corresponds to the COMME des GARÇONS SHIRT framework; false otherwise.
 */
InputCDG.prototype.isForever = function() {

    // Returning false if the input data is not valid
    if (!this.isValid()) return false;

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Returning false if the product code does not fit the regular expression of the framework
    if (!REGEX_FOREVER.test(productCode)) return false;

    // Returning false if there is a year print
    if (this.isYearPrintNumeric()) return false;

    // Returning true otherwise
    return true;
};

/**
 * Identification of the occurrence of possible collections from the input data
 * by following the COMME des GARÇONS SHIRT (FOREVER) framework.
 * @return {Identification[]} Identification of the occurrence of possible collections.
 */
InputCDG.prototype.idList_Forever = function() {

    // Returning empty array if the input data is not a valid COMME des GARÇONS SHIRT (FOREVER) framework input
    if (!this.isForever()) return [];

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Initializing the identification object
    let identification = new Identification({
        label: Identification.Label.CDG,
        input: this.copy(),
        framework: LINE.FOREVER.name,
    });

    // Initializing the set of candidates as production years
    let candidates = ALL_COLLECTIONS.map(col => col.copy()).filter(col => col.hasNoSeason());
    // Limiting the candidates to the regular period of COMME des GARÇONS SHIRT (FOREVER)
    candidates = candidates.filter(col => OPERATION_PERIOD_FOREVER.includes(col));

    // Assigning the occurrence
    identification.lineList = [LINE.FOREVER.forIdentification(candidates)];
    // Assigning the standardized code as the stylized code
    identification.codeStylized = productCode;

    return [identification];
};
