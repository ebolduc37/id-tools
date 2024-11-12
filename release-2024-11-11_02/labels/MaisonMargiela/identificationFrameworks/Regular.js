/**
 * Maison Margiela regular framework identification.
 *
 * Evaluation of the occurrences of possible collections by following
 * the Maison Margiela regular identification framework.
 *
 * @author Etienne Bolduc
 */

// Imports
import { Collection, Identification, isNumeric } from "../../../utils/index.js";
import { InputMM } from "../utils/index.js";

// Constants
import { ALL_COLLECTIONS, COUNTERFEITS, LABEL_NOTATION, LINE } from "../constants/index.js";
const Season = Collection.Season;
const REGEX_REGULAR = /^\d{8}|\d{9}|\d{13}|(\d{2}[A-Z]{2}\d{4}\d{2}\d*)$/;
const FRAMEWORK_REGULAR = "regular";
const COL_REGULAR_START = new Collection(1998, Season.W);



/**
 * Evaluate if the input data corresponds to the Maison Margiela regular framework.
 * @return {boolean} True if the input data corresponds to the Maison Margiela regular framework;
 * false otherwise.
 */
InputMM.prototype.isRegular = function() {

    // Returning false if the product code is not a valid input
    if (!this.isValid()) return false;

    // Returning true if there is no product code
    if (!this.isProductCodeString()) return true;

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Returning true if the product code corresponds to a counterfeit
    if (productCode in COUNTERFEITS) return true;

    // Returning false if the product code does not fit the regular expression of the framework
    // or is not the empty string
    if (!REGEX_REGULAR.test(productCode)) return false;

    // Initializing useful parameters
    let year = 0;
    let seasonID = 0;

    if (isNumeric(productCode.slice(2,4))) {
        if (productCode.length === 8) {
            year = parseInt(productCode.slice(-3,-1));
            if (productCode.at(-3) === '9') year += 1900;
            else if (productCode.at(-3) === '0') year += 2000;
            else return false;
        }
        else year = 2000 + parseInt(productCode.slice(-4,-1));
        seasonID = productCode.slice(-1);
    }
    else {
        year = parseInt(productCode.slice(4,8));
        seasonID = productCode[1];
    }

    // Returning false if the corresponding year is not valid
    if (!(COL_REGULAR_START.year <= year && year <= new Date().getFullYear())) return false;

    // Returning false if the season ID is not valid
    if (!(['1','2'].includes(seasonID))) return false;

    // Returning true otherwise
    return true
};

/**
 * Identification of the occurrences of possible collections from the input data
 * by following the Maison Margiela regular framework.
 * @return {Identification[]} Identification of the occurrences of possible collections.
 */
InputMM.prototype.extract_Regular = function() {

    // Returning empty array if the product code is not a
    // valid Maison Margiela regular framework input
    if (!this.isRegular()) return [];

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Initializing the identification object
    let identification = new Identification({
        label: Identification.Label.MM,
        framework: FRAMEWORK_REGULAR,
        input: this.copy()
    });

    // Initializing useful parameters
    const labelNotation = this.getLabelNotation();
    let collection = null;

    if (this.isProductCodeString()) {
        let year = 0;
        let seasonID = 0;
        if (isNumeric(productCode.slice(2,4))) {
            if (productCode.length === 8) {
                year = parseInt(productCode.slice(-3,-1));
                if (productCode.at(-3) === '9') year += 1900;
                else year += 2000;
            }
            else year = 2000 + parseInt(productCode.slice(-4,-1));
            seasonID = productCode.slice(-1);
        }
        else {
            year = parseInt(productCode.slice(4,8));
            seasonID = productCode[1];
        }
        if (seasonID === '1') collection = new Collection(year, Season.S);
        else collection = new Collection(year, Season.W);
    }

    // Declaring the array of occurences by line
    let lineList = [];

    // Looping through each line
    for (let line of LABEL_NOTATION[labelNotation]) {

        // Initializing useful parameters
        const operationPeriod = line.operationPeriod;

        // Initialize the set of candidates
        let candidates = ALL_COLLECTIONS.map(col => col.copy());

        // Limiting the set of candidates to the collections with a season
        candidates = candidates.filter(col => !col.hasNoSeason());

        // Limiting the set of candidates to the collections within the operation period
        candidates = candidates.filter(col => operationPeriod.includes(col));

        // Limiting the set of candidates to the right collections
        if (this.isProductCodeString())
            candidates = candidates.filter(col => col.isEqualTo(collection));

        // Limiting the set of candidates to the collections with a product code
        else if (this.isProductCodeUnreadable())
        candidates = candidates.filter(col => col.isAfterOrIn(COL_REGULAR_START));

        // Adding the occurrence to the array of occurences if non-empty
        if (candidates.length !== 0) lineList.push(line.forIdentification(candidates));

    }

    // Assign possibility of being a counterfeit
    if (productCode in COUNTERFEITS) {
        identification.counterfeit = true;
        if (lineList.length === 0) {
            let newIdentification = COUNTERFEITS[productCode].copy();
            newIdentification.framework = identification.framework;
            newIdentification.input = identification.input;
            newIdentification.lineList[0].name = "Counterfeit of " + newIdentification.lineList[0].name;
            return [newIdentification];
        }
    }

    // Returning empty array if there is no occurence
    if (lineList.length === 0) return [];

    // Assigning the array of occurences
    identification.lineList = lineList;

    // Assigning the stylized code
    if (this.isProductCodeString()) {
        let stylizedCode = productCode;
        identification.stylizedCode = stylizedCode;
    }

    return [identification];
};
