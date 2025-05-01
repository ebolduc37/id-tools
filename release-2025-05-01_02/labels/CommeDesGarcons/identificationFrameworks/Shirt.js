/**
 * COMME des GARÇONS SHIRT framework identification.
 *
 * Evaluation of the occurrences of possible collections by following
 * the COMME des GARÇONS SHIRT identification framework.
 *
 * @author Etienne Bolduc
 */

import { Collection, Identification } from "../../../utils/index.js";
import { InputCDG } from "../utils/index.js";

// Constants
import { LINE } from "../constants/index.js";
const REGEX_SHIRT = /^[SW]\d{5}$/;
const SHIRT_YEARID = { BOUNDS: [10, 28], OFFSET: 1992 };
const SHIRT_SUBLINES = [LINE.SHIRTGIRL, LINE.SHIRTBOY, LINE.SHIRTBOYS];

/**
 * Evaluate if the input data corresponds to the COMME des GARÇONS SHIRT framework.
 * @return {boolean} True if the input data corresponds to the COMME des GARÇONS SHIRT framework; false otherwise.
 */
InputCDG.prototype.isShirt = function() {

    // Returning false if the input data is not valid
    if (!this.isValid()) return false;

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Returning false if the product code does not fit the regular expression of the framework
    if (!REGEX_SHIRT.test(productCode)) return false;

    // Returning false if there is a year print
    if (this.isYearPrintNumeric()) return false;

    // Returning false if the year ID is out of bounds
    const yearID = parseInt(productCode.slice(1, 3));
    if (!(SHIRT_YEARID.BOUNDS[0] <= yearID && yearID <= SHIRT_YEARID.BOUNDS[1])) return false;

    // Returning true otherwise
    return true
};

/**
 * Identification of the occurrences of a possible collection from the input data
 * by following the COMME des GARÇONS SHIRT framework.
 * @return {Identification[]} Identification of the occurrences of a possible collection.
 */
InputCDG.prototype.extract_Shirt = function() {

    // Returning empty array if the input data is not a valid COMME des GARÇONS SHIRT input
    if (!this.isShirt()) return [];

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Initializing the identification object
    let identification = new Identification({
        label: Identification.Label.CDG,
        input: this.copy(),
        framework: LINE.SHIRT.name,
    });

    // Initializing useful parameters
    const yearID = parseInt(productCode.slice(1, 3));
    const season = Collection.Season[productCode[0]];
    const col = new Collection(yearID + SHIRT_YEARID.OFFSET, season);

    // Initializing and assigning the firstoccurrence
    let lineList = [LINE.SHIRT.forIdentification([col])];
    // Looping through sublines 
    for (let line of SHIRT_SUBLINES) {
        const name = line.name;
        const operationPeriod = line.operationPeriod;
        if (operationPeriod.includes(col)) lineList.push(line.forIdentification([col]));
    }

    // Assigning the array of occurences
    identification.lineList = lineList;
    // Assigning the stylized code
    identification.stylizedCode = productCode;

    return [identification];
};
