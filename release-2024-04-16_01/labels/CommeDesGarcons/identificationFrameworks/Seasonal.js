/**
 * COMME des GARÇONS seasonal framework identification.
 *
 * Evaluation of the occurrences of possible collections by following
 * the COMME des GARÇONS seasonal identification framework.
 *
 * @author Etienne Bolduc
 */

import { Collection, Identification } from "../../../utils/index.js";
import { InputCDG } from "../utils/index.js";

// Constants
import { ALL_COLLECTIONS, FROM_MONTHLY_TO_SEASONAL, GARMENT_TYPE_ID, LINE_ID, LINE, SEASON_ID, TITLES } from "../constants/index.js";
const REGEX_SEASONAL = /^[0-9A-Z][A-UZ][A-Z]\d{3}[0-9A-Z]*$/;
const FRAMEWORK_SEASONAL = "seasonal";
const SEASON_ID_EXCEPTIONS = {
    2: {
        name: LINE.POCKET.name,
        filter: {
            G: col => col.hasNoSeason() && col.isProducedBetween(2011, 2015),
            J: col => col.hasNoSeason() && col.isProducedBetween(2012, 2015),
            Z: col => col.hasNoSeason() && col.isProducedBetween(2016, 2017)
        }
    },
    Z: {
        name: LINE.CDGCHG.name,
        filter: {
            B: col => col.hasNoSeason() && col.isProducedBetween(2018, 2019),
            I: col => col.hasNoSeason() && col.isProducedBetween(2012, 2017)
        }
    }
};
const SEASON_ID_PAIRINGS = { F: { seasonID: "Z", name: LINE.FOREVER.name } };
const SEASON_ID_EXCLUSIVES = { U: LINE.CDGCDG.name };
const SEASON_ID_EXTRAS = {
    C: {
        name: LINE.PPOH.name,
        extraCol: new Collection(2019, Collection.Season.W)
    },
    P: {
        name: LINE.HP.name,
        extraCol: new Collection(2006, Collection.Season.S),
        extraText: "[only for collaborative pieces with the Rolling Stones]"
    }
};
const COUNTERFEITS = {
    "AZT026": ["2005", "2007"],
    "AZT095": ["2009"]
};

/**
 * Evaluate if the input data corresponds to the COMME des GARÇONS seasonal framework.
 * @return {boolean} True if the input data corresponds to the COMME des GARÇONS seasonal framework; false otherwise.
 */
InputCDG.prototype.isSeasonal = function() {

    // Returning false if the input data is not valid
    if (!this.isValid()) return false;

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Returning false if the product code does not fit the regular expression of the framework
    if (!REGEX_SEASONAL.test(productCode)) return false;

    // Returning false if the line ID is not valid
    const lineID = productCode[0];
    if (!(lineID in LINE_ID)) return false;

    // Returning false if the season ID is not valid
    const seasonID = productCode[1];
    if (!(seasonID in SEASON_ID)) return false;

    // Returning false if the garment ID is not valid
    const garmentTypeID = productCode[2];
    if (!(garmentTypeID in GARMENT_TYPE_ID)) return false;

    // Returning false if the year is in the wrong range
    if (!this.isYearBetween(FROM_MONTHLY_TO_SEASONAL.year, new Date().getFullYear()))
        return false;

    // Returning true otherwise
    return true
};

/**
 * Identification of the occurrences of possible collections from the input data
 * by following the COMME des GARÇONS seasonal framework.
 * @return {Identification[]} Identification of the occurrences of possible collections.
 */
InputCDG.prototype.extract_Seasonal = function() {

    // Returning empty array if the input data is not a valid COMME des GARÇONS seasonal input
    if (!this.isSeasonal()) return [];

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Initializing the identification object
    let identification = new Identification({
        label: Identification.Label.CDG,
        input: this.copy(),
        framework: FRAMEWORK_SEASONAL,
    });

    // Initializing useful parameters
    const lineID = productCode[0];
    const seasonID = productCode[1];
    const garmentTypeID = productCode[2];

    // Declaring the array of occurences by line
    let lineList = [];

    // Looping through each line of the line ID
    for (let line of LINE_ID[lineID]) {

        // Initializing useful parameters
        const name = line.name;
        const operationPeriod = line.operationPeriod;

        // Jumping over the loop if the line ID is an exception that requires a specific line
        // to be attached to a specific season ID
        if (lineID in SEASON_ID_PAIRINGS) {
            let temp = SEASON_ID_PAIRINGS[lineID];
            if (seasonID === temp.seasonID ^ name === temp.name) continue;
        }
        // Jumping over the loop if the season ID is attached to a specific line
        if (seasonID in SEASON_ID_EXCLUSIVES && name !== SEASON_ID_EXCLUSIVES[seasonID]) continue;

        // Initialize the set of candidates
        let candidates = ALL_COLLECTIONS.map(col => col.copy());

        // If the pair of line ID and season ID is an exception
        if (lineID in SEASON_ID_EXCEPTIONS && name === SEASON_ID_EXCEPTIONS[lineID].name &&
            seasonID in SEASON_ID_EXCEPTIONS[lineID].filter) {

            // Limiting the set of candidates in terms of the exception
            candidates = candidates.filter(SEASON_ID_EXCEPTIONS[lineID].filter[seasonID]);
            // Limiting the set of candidates to the collections produced in the year of the year print if known
            if (this.isYearPrintNumeric())
                candidates = candidates.filter(col => col.isProducedIn(this.getYearPrintParsed()));

            // Adding the occurrence to the array of occurences if non-empty
            if (candidates.length !== 0) lineList.push(line.forIdentification(candidates));

            // Assigning true to the exception indicator 
            identification.exception = true;

            // Jumping over the loop
            continue;
        }

        // Initializing the season ID filter
        let seasonIDFilter = SEASON_ID[seasonID];

        // Assigning a modified seasons ID filter to allow for extra collections in case of an exception
        let extra = () => false;
        if (seasonID in SEASON_ID_EXTRAS) {
            let exception = SEASON_ID_EXTRAS[seasonID];
            if (name === exception.name) {
                let extraCol = exception.extraCol;
                extra = col => col.isEqualTo(extraCol);
                candidates.find(el => el.isEqualTo(extraCol)).text = exception.extraText;
            }
        }

        // Limiting the set of candidates to the collections of the season ID and extra
        candidates = candidates.filter(col => seasonIDFilter(col) || extra(col));
        // Limiting the set of candidates to the collections within the operation period
        candidates = candidates.filter(col => operationPeriod.includes(col));
        // Limiting the set of candidates to the collections produced in the year of the year print if known
        if (this.isYearPrintNumeric())
            candidates = candidates.filter(col => col.isProducedIn(this.getYearPrintParsed()));

        // Setting titles to collections whenever possible
        for (const [key, value] of Object.entries(TITLES)) {
            if (name === LINE[key].name) candidates.map(function (col) {
                let namedCol = value.find(el => el.isEqualTo(col));
                if (namedCol != null) col.title = namedCol.title;
            });
        }

        // Adding the occurrence to the array of occurences if non-empty
        if (candidates.length !== 0) lineList.push(line.forIdentification(candidates));
    }

    // Returning empty array if there is no occurence
    if (lineList.length === 0) return [];

    // Assigning the array of occurences
    identification.lineList = lineList;
    // Assigning the stylized code
    let stylizedCode = productCode.slice(0, 2) + "-" + productCode.slice(2, 6);
    for (let i = 6; i < productCode.length; i = i + 3) stylizedCode += "-" + productCode.slice(i, i + 3);
    identification.stylizedCode = stylizedCode;
    // Assigning the garment type
    identification.garmentType = GARMENT_TYPE_ID[garmentTypeID];
    // Assign possibility of being a counterfeit
    if (productCode in COUNTERFEITS)
        identification.counterfeit = COUNTERFEITS[productCode].includes(this.yearPrint);

    return [identification];
};
