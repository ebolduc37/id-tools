/**
 * Yohji Yamamoto regular framework identification.
 *
 * Evaluation of the occurrences of possible collections by following
 * the Yohji Yamamoto regular identification framework.
 *
 * @author Etienne Bolduc
 */

// Imports
import { standardize, Labels, Collection, Occurrence, Identification, Seasons } from "../../../utils/index.js";
import { CodePrintTypes, FontTypes, SignatureStyles, SizingSystems, isValid } from "../utils/index.js";

// Constants
import { ALL_COLLECTIONS, GARMENT_ID, LINE_ID, SEASON_ID, LINES } from "../constants/index.js";
const REGEX_REGULAR = /^[A-Z]{3}\d{5}$/;
const FRAMEWORK_REGULAR = "regular";

/**
 * Evaluate if a product code correspond to the Yohji Yamamoto regular framework.
 * @param {string} codeInput - Product code.
 * @return {boolean} True if it corresponds to the Yohji Yamamoto regular framework; false otherwise.
 */
function isRegular(codeInput) {

    // Returning false if the product code is not a valid input
    if (!isValid(codeInput)) return false;

    // Standardizing the product code
    codeInput = standardize(codeInput);

    if (codeInput === CodePrintTypes.BLANK || codeInput === CodePrintTypes.ERASED) return true;

    // Returning false if the product code does not fit the regular expression of the framework
    // or is not the empty string
    if (!REGEX_REGULAR.test(codeInput)) return false;

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
 * Identification of the occurrences of possible collections from the product code
 * by following the Yohji Yamamoto regular framework.
 * @param {string} codeInput - Product code.
 * @param {SizingSystems} sizingSystem - Sizing system.
 * @return {Identification} Identification of the occurrences of possible collections.
 */
function identifyRegular({codeInput, sizingSystem, signatureStyle, fontType}) {

    // Returning null if the product code is not a
    // valid Yohji Yamamoto regular framework input
    if (!isRegular(codeInput)) return null;

    // Standardizing the product code
    codeInput = standardize(codeInput);

    // Initializing the identification object
    let identification = new Identification({
        label: Labels.YY,
        framework: FRAMEWORK_REGULAR,
    });

    // Initializing useful parameters
    const lineID = codeInput[0];
    const seasonID = codeInput[1];
    const garmentID = codeInput[2];

    // Declaring the array of occurences by line
    let byLine = [];

    let selection = Object.values(LINES);
    if (codeInput !== CodePrintTypes.BLANK && codeInput !== CodePrintTypes.ERASED)
        selection = LINE_ID[lineID];

    // Looping through each line of the line ID
    for (let line of selection) {

        // Initializing useful parameters
        const name = line.name;
        const opPeriod = line.opPeriod;

        // Initialize the set of candidates
        let candidates = ALL_COLLECTIONS.map(col => col.copy());

        // Limiting the set of candidates to the collections with the right sizing system
        if (sizingSystem === SizingSystems.ALPHABETICAL) {
            candidates = candidates.filter(col => col.isBeforeOrIn(new Collection(1999, Seasons.W)));
        }
        else if (sizingSystem === SizingSystems.NUMERICAL) {
            candidates = candidates.filter(col => col.isAfterOrIn(new Collection(2000, Seasons.S)));
        }

        // Limiting the set of candidates to the collections with the right signature style
        if (signatureStyle === SignatureStyles.MAIN_I) {
            candidates = candidates.filter(col => col.isBeforeOrIn(new Collection(1985, Seasons.S)));
        }
        else if (signatureStyle === SignatureStyles.MAIN_II) {
            candidates = candidates.filter(col => col.isBetween(new Collection(1984, Seasons.S), new Collection(1991, Seasons.W)));
        }
        else if (signatureStyle === SignatureStyles.MAIN_III) {
            candidates = candidates.filter(col => col.isAfterOrIn(new Collection(1991, Seasons.W)));
        }

        // Limiting the set of candidates to the collections with the right font type
        if (fontType === FontTypes.SERIF) {
            candidates = candidates.filter(col => col.isBeforeOrIn(new Collection(2009, Seasons.W)));
        }
        else if (fontType === FontTypes.SANS_SERIF) {
            candidates = candidates.filter(col => col.isAfterOrIn(new Collection(2010, Seasons.S)));
        }

        if (codeInput !== CodePrintTypes.BLANK && codeInput !== CodePrintTypes.ERASED) {
            // Initializing the season ID filter
            let seasonIDFilter = SEASON_ID[seasonID];
            // Limiting the set of candidates to the collections of the season ID and extra
            candidates = candidates.filter(col => seasonIDFilter(col));
        }

        // Limiting the set of candidates to the collections with a season
        else candidates = candidates.filter(col => !col.isProductionYear());

        // Limiting the set of candidates to the collections within the operation period
        candidates = candidates.filter(col => opPeriod.includes(col));

        // Adding the occurrence to the array of occurences if non-empty
        if (candidates.length !== 0) byLine.push(new Occurrence(name, candidates));
    }

    // Returning null if there is no occurence
    if (byLine.length === 0) return null;

    // Assigning the array of occurences
    identification.byLine = byLine;
    // Assigning the stylized code
    if (codeInput !== CodePrintTypes.BLANK && codeInput !== CodePrintTypes.ERASED) {
        let codeStylized = codeInput.slice(0, 2) + "-" + codeInput.slice(2,5) + "-" + codeInput.slice(5);
        identification.codeStylized = codeStylized;
    }
    // Assigning the item type
    identification.garmentType = GARMENT_ID[garmentID];

    return identification;
};

export { identifyRegular };
