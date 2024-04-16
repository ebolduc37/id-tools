/**
 * Yohji Yamamoto regular framework identification.
 *
 * Evaluation of the occurrences of possible collections by following
 * the Yohji Yamamoto regular identification framework.
 *
 * @author Etienne Bolduc
 */

// Imports
import { Collection, Identification } from "../../../utils/index.js";
import { InputYY } from "../utils/index.js";

// Constants
import { ALL_COLLECTIONS, GARMENT_TYPE_ID, LINE_ID, LINE, SEASON_ID } from "../constants/index.js";
const Season = Collection.Season;
const REGEX_REGULAR = /^[A-Z]{3}\d{5}\d*$/;
const FRAMEWORK_REGULAR = "regular";

const PRODUCT_CODE_BLANK_EXCEPTIONS = [
    LINE.YYFI.name,
    LINE.YYPHFI.name,
];
const SIZING_ALPHABETICAL_EXCEPTIONS = [
    LINE.WILD.name
];



/**
 * Evaluate if the input data corresponds to the Yohji Yamamoto regular framework.
 * @return {boolean} True if the input data corresponds to the Yohji Yamamoto regular framework; false otherwise.
 */
InputYY.prototype.isRegular = function() {

    // Returning false if the product code is not a valid input
    if (!this.isValid()) return false;

    // Returning true if there is no product code
    if (!this.isProductCodeString()) return true;

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Returning false if the product code does not fit the regular expression of the framework
    // or is not the empty string
    if (!REGEX_REGULAR.test(productCode)) return false;

    // Returning false if the line ID is not valid
    const lineID = productCode[0];
    if (!(lineID in LINE_ID)) return false;

    // Returning false if the season ID is not valid
    const seasonID = productCode[1];
    if (!(seasonID in SEASON_ID)) return false;

    // Returning false if the garment ID is not valid
    const garmentTypeID = productCode[2];
    if (!(garmentTypeID in GARMENT_TYPE_ID)) return false;

    // Returning true otherwise
    return true
};

/**
 * Identification of the occurrences of possible collections from the input data
 * by following the Yohji Yamamoto regular framework.
 * @return {Identification[]} Identification of the occurrences of possible collections.
 */
InputYY.prototype.extract_Regular = function() {

    // Returning empty array if the product code is not a
    // valid Yohji Yamamoto regular framework input
    if (!this.isRegular()) return [];

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Initializing the identification object
    let identification = new Identification({
        label: Identification.Label.YY,
        framework: FRAMEWORK_REGULAR,
        input: this.copy()
    });

    // Initializing useful parameters
    const lineID = productCode[0];
    const seasonID = productCode[1];
    const garmentTypeID = productCode[2];

    // Declaring the array of occurences by line
    let lineList = [];

    let selection = Object.values(LINE_ID).flat();
    if (lineID != null) selection = LINE_ID[lineID];

    // Looping through each line of the line ID
    for (let line of selection) {

        // Initializing useful parameters
        const operationPeriod = line.operationPeriod;

        // Initialize the set of candidates
        let candidates = ALL_COLLECTIONS.map(col => col.copy());

        if (this.isProductCodeBlank() && !PRODUCT_CODE_BLANK_EXCEPTIONS.includes(line.name))
            candidates = candidates.filter(col => col.isBeforeOrIn(new Collection(1992, Season.S)));
        if (!this.isProductCodeBlank() && PRODUCT_CODE_BLANK_EXCEPTIONS.includes(line.name))
            continue;

        // Limiting the set of candidates to the collections with the right logo style if specified
        if (!this.isLogoUnspecified()) {
            if (!line.includes(this.logoStyle)) continue;
            else candidates = candidates.filter(col => line.logoList[this.logoStyle].includes(col));
        }

        // Limiting the set of candidates to the collections with the right sizing system
        if (SIZING_ALPHABETICAL_EXCEPTIONS.includes(line.name)) {
            if (this.isSizingNumerical()) continue;
        }
        else {
            if (this.isSizingAlphabetical())
                candidates = candidates.filter(col => col.isBeforeOrIn(new Collection(1999, Season.W)));
            else if (this.isSizingNumerical())
                candidates = candidates.filter(col => col.isAfterOrIn(new Collection(2000, Season.S)));
        };

        // Limiting the set of candidates to the collections with the right font type
        if (this.isFontSerif())
            candidates = candidates.filter(col => col.isBeforeOrIn(new Collection(2009, Season.W)));
        else if (this.isFontSansSerif())
            candidates = candidates.filter(col => col.isAfterOrIn(new Collection(2010, Season.S)));

        if (this.isLaundryBelow())
            candidates = candidates.filter(col => col.isBeforeOrIn(new Collection(2016, Season.W)));
        else if (this.isLaundryAbove())
            candidates = candidates.filter(col => col.isAfterOrIn(new Collection(2017, Season.S)));

        if (seasonID != null) {
            // Initializing the season ID filter
            let seasonIDFilter = SEASON_ID[seasonID];
            // Limiting the set of candidates to the collections of the season ID and extra
            candidates = candidates.filter(col => seasonIDFilter(col));
        }

        // Limiting the set of candidates to the collections with a season
        else candidates = candidates.filter(col => !col.hasNoSeason());

        // Limiting the set of candidates to the collections within the operation period
        candidates = candidates.filter(col => operationPeriod.includes(col));

        // Adding the occurrence to the array of occurences if non-empty
        if (candidates.length !== 0) lineList.push(line.forIdentification(candidates));
    }

    // Returning empty array if there is no occurence
    if (lineList.length === 0) return [];

    // Assigning the array of occurences
    identification.lineList = lineList;
    // Assigning the stylized code
    if (this.isProductCodeString()) {
        let stylizedCode = productCode.slice(0, 2) + "-" + productCode.slice(2,5) + "-" + productCode.slice(5);
        identification.stylizedCode = stylizedCode;
    }
    // Assigning the garment type
    if (garmentTypeID != null) identification.garmentType = GARMENT_TYPE_ID[garmentTypeID];

    return [identification];
};
