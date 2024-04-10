/**
 * A-NET INC. framework identification.
 *
 * Evaluation of the occurrences of possible collections by following
 * the A-NET INC. identification framework.
 *
 * @author Etienne Bolduc
 */

// Imports
import { Collection, Identification } from "../../../utils/index.js";
import { InputIM } from "../utils/index.js";

// Constants
import { ALL_COLLECTIONS, IMI_FABRIC_TYPE_ID as FABRIC_TYPE_ID,
    IMI_GARMENT_TYPE_ID as GARMENT_TYPE_ID, ANET_LINE_ID as LINE_ID,
    IMI_SEASON_ID as SEASON_ID, LINE } from "../constants/index.js";
const Season = Collection.Season;
const REGEX_ANET = /^[A-Z]{2}\d{2}[A-Z]{2}\d{3}$/;
const FRAMEWORK_ANET = "A-NET INC.";
const MANUFACTURER_ANET = "A-NET INC., which may also appear as "
                            + "株式会社 エイ・ネット on the care label,";

const SIZING_NUMERICAL_END_EXCEPTIONS = {
    FH: new Collection(2000, Season.S),
    KT: new Collection(2000, Season.S),
};
const SIZING_ALPHABETICAL_START_EXCEPTIONS = {
    FH: new Collection(2000, Season.S),
    KT: new Collection(2000, Season.S),
};
const FONT_SLAB_END = new Collection(2003, Season.S);
const FONT_SANS_DEBUT = new Collection(2000, Season.W);


/**
 * Evaluate if the input data corresponds to the A-NET INC. framework.
 * @return {boolean} True if the input data corresponds to the A-NET INC. framework; false otherwise.
 */
InputIM.prototype.isANET = function() {

    // Returning false if the product code is not a valid input
    if (!this.isValid()) return false;

    // Returning false if the font style is not sans serif
    if (!this.isLogoUnspecified()) return false;

    // Returning false if the manufacturer is not a A-NET INC.
    if (!this.isManufacturerANET() && !this.isManufacturerUnspecified()) return false;

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Returning false if the product code does not fit the regular expression of the framework
    // or is not the empty string
    if (!REGEX_ANET.test(productCode)) return false;

    // Returning false if the line ID is not valid
    const lineID = productCode.slice(0, 2);
    if (!(lineID in LINE_ID)) return false;

    // Returning false if the season ID is not valid
    const seasonID = productCode[3];
    if (!(seasonID in SEASON_ID)) return false;

    // Returning false if the garment ID is not valid
    const fabricTypeID = productCode[4];
    if (!(fabricTypeID in FABRIC_TYPE_ID)) return false;

    // Returning false if the garment ID is not valid
    const garmentTypeID = productCode[5];
    if (!(garmentTypeID in GARMENT_TYPE_ID)) return false;

    // Exception for FINAL HOME where no numerical sizing and sans serif font type can occur
    if (lineID === "FH" && this.isSizingNumerical() && this.isFontSansSerif()) return false;

    // Returning true otherwise
    return true
};

/**
 * Identification of the occurrences of possible collections from the input data
 * by following the A-NET INC. framework.
 * @return {Identification[]} Identification of the occurrences of possible collections.
 */
InputIM.prototype.extract_ANET = function() {

    // Returning empty array if the product code is not a
    // valid A-NET INC. framework input
    if (!this.isANET()) return [];

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Initializing the identification object
    let identification = new Identification({
        label: Identification.Label.IM,
        framework: FRAMEWORK_ANET,
        manufacturer: MANUFACTURER_ANET,
        input: this.copy()
    });

    // Initializing useful parameters
    const lineID = productCode.slice(0, 2);
    const yearLastDigit = productCode[2];
    const seasonID = productCode[3];
    const fabricTypeID = productCode[4];
    const garmentTypeID = productCode[5];

    // Declaring the array of occurences by line
    let lineList = [];

    // Looping through each line of the line ID
    for (let line of LINE_ID[lineID]) {

        // Initializing useful parameters
        const operationPeriod = line.operationPeriod;

        // Initialize the set of candidates
        let candidates = ALL_COLLECTIONS.map(col => col.copy());

        // Limiting the set of candidates to the collections of A-NET INC.
        candidates = candidates.filter(col => col.isAfterOrIn(new Collection(1997, Season.S)));

        // Limiting the set of candidates to the collections with the right last digit of the year
        let yearLastDigitException = col => false;
        if (productCode.slice(0,4) === "FH55") yearLastDigitException = col => true;
        candidates = candidates.filter(col => col.year%10 == yearLastDigit || yearLastDigitException(col));

        // Limiting the set of candidates to the collections with the right logo style if specified
        if (!this.isLogoUnspecified()) {
            if (!line.includes(this.logoStyle)) continue;
            else candidates = candidates.filter(col => line.logoList[this.logoStyle].includes(col));
        }

        // Limiting the set of candidates to the collections with the right sizing system
        if (this.isSizingNumerical()) {
            if (lineID in SIZING_NUMERICAL_END_EXCEPTIONS)
                candidates = candidates.filter(col => col.isBeforeOrIn(SIZING_NUMERICAL_END_EXCEPTIONS[lineID]));
            else continue;
        }
        else if (this.isSizingAlphabetical() && lineID in SIZING_ALPHABETICAL_START_EXCEPTIONS)
            candidates = candidates.filter(col => col.isAfterOrIn(SIZING_ALPHABETICAL_START_EXCEPTIONS[lineID]));

        // Limiting the set of candidates to the collections with the right font type
        if (this.isFontSlabSerif() || productCode.slice(0,4) === "FH55")
            candidates = candidates.filter(col => col.isBeforeOrIn(FONT_SLAB_END));
        else if (this.isFontSansSerif())
            candidates = candidates.filter(col => col.isAfterOrIn(FONT_SANS_DEBUT));

        // Initializing the season ID filter
        let filterSeasonID = SEASON_ID[seasonID];
        // Limiting the set of candidates to the collections of the season ID and extra
        candidates = candidates.filter(col => filterSeasonID(col));

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
    let stylizedCode = productCode;
    if (this.isFontSlabSerif()) stylizedCode = productCode.slice(0, 4) + "-" + productCode.slice(4);
    //identification.stylizedCode = stylizedCode;
    // Assigning the garment type
    identification.garmentType = GARMENT_TYPE_ID[garmentTypeID];
    // Assigning the fabric type
    identification.fabricType = FABRIC_TYPE_ID[fabricTypeID];

    return [identification];
};
