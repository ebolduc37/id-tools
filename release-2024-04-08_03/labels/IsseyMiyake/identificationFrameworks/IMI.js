/**
 * ISSEY MIYAKE INC. framework identification.
 *
 * Evaluation of the occurrences of possible collections by following
 * the ISSEY MIYAKE INC. identification framework.
 *
 * @author Etienne Bolduc
 */

// Imports
import { Collection, Identification } from "../../../utils/index.js";
import { InputIM } from "../utils/index.js";

// Constants
import { ALL_COLLECTIONS, IMI_FABRIC_TYPE_ID as FABRIC_TYPE_ID,
    IMI_GARMENT_TYPE_ID as GARMENT_TYPE_ID, IMI_LINE_ID as LINE_ID,
    IMI_SEASON_ID as SEASON_ID, LINE } from "../constants/index.js";
const Season = Collection.Season;
const REGEX_IMI = /^[A-Z]{2}\d{2}[A-Z]{2}\d{3}$/;
const FRAMEWORK_IMI = "ISSEY MIYAKE INC.";
const MANUFACTURER_IMI = "ISSEY MIYAKE INC., which may also appear as "
                            + "株式会社 イッセイ ミヤケ on the care label,";

const SIZING_NUMERICAL_EXCEPTIONS = [
    LINE.PP.name,
    LINE.CL.name
];



/**
 * Evaluate if the input data corresponds to the ISSEY MIYAKE INC. framework.
 * @return {boolean} True if the input data corresponds to the ISSEY MIYAKE INC. framework; false otherwise.
 */
InputIM.prototype.isIMI = function() {

    // Returning false if the product code is not a valid input
    if (!this.isValid()) return false;

    // Returning false if the font style is not sans serif
    if (!this.isLogoHelvetica() && !this.isLogoUnspecified()) return false;

    // Returning false if the manufacturer is not a ISSEY MIYAKE INC.
    if (!this.isManufacturerIMI() && !this.isManufacturerUnspecified()) return false;

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Returning false if the product code does not fit the regular expression of the framework
    // or is not the empty string
    if (!REGEX_IMI.test(productCode)) return false;

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

    // Returning true otherwise
    return true
};

/**
 * Identification of the occurrences of possible collections from the input data
 * by following the ISSEY MIYAKE INC. framework.
 * @return {Identification[]} Identification of the occurrences of possible collections.
 */
InputIM.prototype.extract_IMI = function() {

    // Returning empty array if the product code is not a
    // valid ISSEY MIYAKE INC. framework input
    if (!this.isIMI()) return [];

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Initializing the identification object
    let identification = new Identification({
        label: Identification.Label.IM,
        framework: FRAMEWORK_IMI,
        manufacturer: MANUFACTURER_IMI,
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

        // Limiting the set of candidates to the collections of ISSEY MIYAKE INC.
        candidates = candidates.filter(col => col.isAfterOrIn(new Collection(1991, Season.S)));

        // Limiting the set of candidates to the collections with the right last digit of the year
        candidates = candidates.filter(col => col.year%10 == yearLastDigit);

        // Limiting the set of candidates to the collections with the right logo style if specified
        if (!this.isLogoUnspecified()) {
            if (!line.includes(this.logoStyle)) continue;
            else candidates = candidates.filter(col => line.logoList[this.logoStyle].includes(col));
        }

        // Limiting the set of candidates to the collections with the right sizing system
        if (this.isSizingAlphabetical())
            candidates = candidates.filter(col => col.isBeforeOrIn(new Collection(2002, Season.S)));
        else if (this.isSizingNumerical() && !SIZING_NUMERICAL_EXCEPTIONS.includes(line.name))
            candidates = candidates.filter(col => col.isAfterOrIn(new Collection(2000, Season.W)));

        // Limiting the set of candidates to the collections with the right font type
        if (this.isFontSlabSerif())
            candidates = candidates.filter(col => col.isBeforeOrIn(new Collection(2000, Season.W)));
        else if (this.isFontSansSerif())
            candidates = candidates.filter(col => !col.isBetween(new Collection(1994, Season.W), new Collection(1999, Season.W)));

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
    let stylizedCode = productCode;
    //if (this.isFontSlabSerif()) stylizedCode = productCode.slice(0, 4) + "-" + productCode.slice(4);
    identification.stylizedCode = stylizedCode;
    // Assigning the garment type
    identification.garmentType = GARMENT_TYPE_ID[garmentTypeID];
    // Assigning the fabric type
    identification.fabricType = FABRIC_TYPE_ID[fabricTypeID];

    return [identification];
};
