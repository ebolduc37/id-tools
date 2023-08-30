/**
 * COMME des GARÇONS seasonal framework identification.
 *
 * Evaluation of the occurrences of possible collections by following
 * the COMME des GARÇONS seasonal identification framework.
 *
 * @author Etienne Bolduc
 */

// Imports
import { standardize, Labels, Seasons, Collection, Occurrence } from "../../../utils/index.js";
import { YearPrint, IdentificationCDG, isValid } from "../utils/index.js";

// Constants
import { ALL_COLLECTIONS, GARMENT_ID, LINES, LINE_ID, SEASON_ID, TITLES } from "../constants/index.js";
const REGEX_SEASONAL = /^[0-9A-Z][A-UZ][A-Z]\d{3}[0-9A-Z]*$/;
const FRAMEWORK_SEASONAL = "seasonal";
const SEASON_ID_EXCEPTIONS = {
    2: {
        name: LINES.POCKET.name,
        filter: {
            G: col => col.isProductionYear() && col.isProducedBetween(2011, 2015),
            J: col => col.isProductionYear() && col.isProducedBetween(2012, 2015),
            Z: col => col.isProductionYear() && col.isProducedBetween(2016, 2017)
        }
    },
    Z: {
        name: LINES.CDGCHG.name,
        filter: {
            B: col => col.isProductionYear() && col.isProducedBetween(2018, 2019),
            I: col => col.isProductionYear() && col.isProducedBetween(2012, 2017)
        }
    }
};
const SEASON_ID_PAIRINGS = { F: { seasonID: "Z", name: LINES.FOREVER.name } };
const SEASON_ID_EXCLUSIVES = { U: LINES.CDGCDG.name };
const SEASON_ID_EXTRAS = {
    C: {
        name: LINES.PPOH.name,
        extraCol: new Collection(2019, Seasons.W)
    },
    P: {
        name: LINES.HP.name,
        extraCol: new Collection(2006, Seasons.S),
        extraText: " [if in collaboration with the Rolling Stones]"
    }
};

/**
 * Evaluate if a product code and year print data correspond to the COMME des GARÇONS seasonal framework.
 * @param {string} codeInput - Product code.
 * @param {(string|YearPrint)} yearInput - Year print data
 * @return {boolean} True if the pair corresponds to the COMME des GARÇONS seasonal framework; false otherwise.
 */
function isSeasonal(codeInput, yearInput) {

    // Returning false if the product code and year print data are not valid inputs
    if (!isValid(codeInput, yearInput)) return false;

    // Standardizing the product code and year print data
    codeInput = standardize(codeInput);
    yearInput = new YearPrint(yearInput);

    // Returning false if the product code does not fit the regular expression of the framework
    if (!REGEX_SEASONAL.test(codeInput)) return false;

    // Returning false if the line ID is not valid
    const lineID = codeInput[0];
    if (!(lineID in LINE_ID)) return false;

    // Returning false if the season ID is not valid
    const seasonID = codeInput[1];
    if (!(seasonID in SEASON_ID)) return false;

    // Returning false if the garment ID is not valid
    const garmentID = codeInput[2];
    if (!(garmentID in GARMENT_ID)) return false;

    // Returning true otherwise
    return true
};

/**
 * Identification of the occurrences of possible collections from the product code and year print data
 * by following the COMME des GARÇONS seasonal framework.
 * @param {string} codeInput - Product code.
 * @param {(string|YearPrint)} yearInput - Year print data.
 * @return {IdentificationCDG} Identification of the occurrences of possible collections.
 */
function identifySeasonal(codeInput, yearInput) {

    // Returning null if the product code and year print data are not
    // valid COMME des GARÇONS seasonal framework inputs
    if (!isSeasonal(codeInput, yearInput)) return null;

    // Standardizing the product code and year print
    codeInput = standardize(codeInput);
    yearInput = new YearPrint(yearInput);

    // Initializing the identification object
    let identification = new IdentificationCDG({
        label: Labels.CDG,
        framework: FRAMEWORK_SEASONAL,
        yearPrint: yearInput,
    });

    // Initializing useful parameters
    const lineID = codeInput[0];
    const seasonID = codeInput[1];
    const garmentID = codeInput[2];

    // Declaring the array of occurences by line
    let byLine = [];

    // Looping through each line of the line ID
    for (let line of LINE_ID[lineID]) {

        // Initializing useful parameters
        const name = line.name;
        const opPeriod = line.opPeriod;

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
            if (yearInput.isNumeric()) candidates = candidates.filter(col => col.isProducedIn(yearInput.year));

            // Adding the occurrence to the array of occurences if non-empty
            if (candidates.length !== 0) byLine.push(new Occurrence(name, candidates));

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
        candidates = candidates.filter(col => opPeriod.includes(col));
        // Limiting the set of candidates to the collections produced in the year of the year print if known
        if (yearInput.isNumeric()) candidates = candidates.filter(col => col.isProducedIn(yearInput.year));

        // Setting titles to collections whenever possible
        if (name in TITLES) candidates.map(function (col) {
            let namedCol = TITLES[name].find(el => el.isEqualTo(col));
            if (namedCol != null) col.title = namedCol.title;
        });

        // Adding the occurrence to the array of occurences if non-empty
        if (candidates.length !== 0) byLine.push(new Occurrence(name, candidates));
    }

    // Returning null if there is no occurence
    if (byLine.length === 0) return null;

    // Assigning the array of occurences
    identification.byLine = byLine;
    // Assigning the stylized code
    let codeStylized = codeInput.slice(0, 2) + "-" + codeInput.slice(2, 6);
    for (let i = 6; i < codeInput.length; i = i + 3) codeStylized += "-" + codeInput.slice(i, i + 3);
    identification.codeStylized = codeStylized;
    // Assigning the item type
    identification.garmentType = GARMENT_ID[garmentID];

    return identification;
};

export { isSeasonal, identifySeasonal };
