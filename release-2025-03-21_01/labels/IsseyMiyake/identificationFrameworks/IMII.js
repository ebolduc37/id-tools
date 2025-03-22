/**
 * ISSEY MIYAKE INT'L. INC. framework identification.
 *
 * Evaluation of the occurrences of possible collections by following
 * the ISSEY MIYAKE INT'L. INC. identification framework.
 *
 * @author Etienne Bolduc
 */

// Imports
import { Collection, Identification } from "../../../utils/index.js";
import { InputIM } from "../utils/index.js";

// Constants
import { ALL_COLLECTIONS, IMII_COUNTERFEITS as COUNTERFEITS, 
    IMII_FABRIC_TYPE_ID as FABRIC_TYPE_ID,
    IMII_GARMENT_TYPE_ID as GARMENT_TYPE_ID, IMII_LINE_ID as LINE_ID,
    IMII_SEASON_ID as SEASON_ID } from "../constants/index.js";
const Season = Collection.Season;
const REGEX_IMII = /^[A-Z]{2}\d{5}$/;
const FRAMEWORK_IMII = "ISSEY MIYAKE INT'L. INC.";
const FRAMEWORK_ON_LIMITS = "ISSEY MIYAKE ON LIMITS INC. as INT'L. INC.";
const MANUFACTURER_IMII = "ISSEY MIYAKE INT'L. INC. [Japanese: ㈱ イッセイ ミヤケ インターナショナル]";
const MANUFACTURER_ON_LIMITS = "ISSEY MIYAKE ON LIMITS INC. [Japanese: ㈱ イッセイ ミヤケ オンリミット]";
const MANUFACTURER_IMI = "ISSEY MIYAKE INC. [Japanese: ㈱ イッセイ ミヤケ]";



/**
 * Evaluate if the input data corresponds to the ISSEY MIYAKE INT'L. INC. framework.
 * @return {boolean} True if the input data corresponds to the ISSEY MIYAKE INT'L. INC. framework; false otherwise.
 */
InputIM.prototype.isIMII = function() {

    // Returning false if the product code is not a valid input
    if (!this.isValid()) return false;

    // Returning false if the manufacturer is not a ISSEY MIYAKE INT'L. INC.
    //if (!this.isManufacturerIMII() && !this.isManufacturerUnspecified()) return false;
    if (!(this.isManufacturerIMII() || this.isManufacturerON_LIMITS() || this.isManufacturerIMI())
        && !this.isManufacturerUnspecified()) return false;

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Returning true if the product code corresponds to a counterfeit
    if (productCode in COUNTERFEITS) return true;

    // Returning false if the product code does not fit the regular expression of the framework
    // or is not the empty string
    if (!REGEX_IMII.test(productCode)) return false;

    // Returning false if the line ID is not valid
    const lineID = productCode[0];
    if (!(lineID in LINE_ID)) return false;

    // Returning false if the fabric type ID is not valid
    const fabricTypeID = productCode[1];
    if (!(fabricTypeID in FABRIC_TYPE_ID)) return false;

    // Returning false if the garment type ID is not valid
    const garmentTypeID = productCode[2];
    if (!(garmentTypeID in GARMENT_TYPE_ID)) return false;

    // Returning false if the season ID is not valid
    const seasonID = productCode[3];
    if (!(seasonID in SEASON_ID)) return false;

    // Exception OL as IMII
    if (this.isManufacturerON_LIMITS())
        if (lineID != 'E') return false;

    // Exception transitional season
    const yearLastDigit = productCode[6];
    if (this.isManufacturerIMI())
        if (yearLastDigit != '0' || !['3','4','8','9'].includes(seasonID))
            if (!this.isLogoHelvetica() || !this.isLogoUnspecified()) return false;

    // Returning true otherwise
    return true
};

/**
 * Identification of the occurrences of possible collections from the input data
 * by following the ISSEY MIYAKE INT'L. INC. framework.
 * @return {Identification[]} Identification of the occurrences of possible collections.
 */
InputIM.prototype.extract_IMII = function() {

    // Returning empty array if the product code is not a
    // valid ISSEY MIYAKE INT'L. INC. framework input
    if (!this.isIMII()) return [];

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Initializing the identification object
    let identification = new Identification({
        label: Identification.Label.IM,
        framework: FRAMEWORK_IMII,
        manufacturer: MANUFACTURER_IMII,
        input: this.copy()
    });

    // Initializing useful parameters
    const lineID = productCode[0];
    const fabricTypeID = productCode[1];
    const garmentTypeID = productCode[2];
    const seasonID = productCode[3];
    const yearLastDigit = productCode[6];

    // Exceptions
    if (this.isManufacturerON_LIMITS())
        identification.manufacturer = MANUFACTURER_ON_LIMITS;
    else if (this.isManufacturerIMI())
        identification.manufacturer = MANUFACTURER_IMI;
    else if (this.isManufacturerUnspecified()) {
        if (yearLastDigit == '0' && ['3','4','8','9'].includes(seasonID)
                && (this.isLogoHelvetica() || this.isLogoUnspecified())) {
            if (lineID == 'E') identification.manufacturer += ", " + MANUFACTURER_ON_LIMITS + ",";
            identification.manufacturer += " or " + MANUFACTURER_IMI;
        }
        else if (lineID == 'E') identification.manufacturer += " or " + MANUFACTURER_ON_LIMITS;
    }

    // Declaring the array of occurences by line
    let lineList = [];

    // Declaring the array of possible lines
    //let selection = Object.values(LINE_ID).flat();
    //if (lineID != null) selection = LINE_ID[lineID];
    //if (typeof selection === "undefined") selection = [];

    // Looping through each line of the line ID
    for (let line of LINE_ID[lineID]) {

        // Initializing useful parameters
        const operationPeriod = line.operationPeriod;

        // Initialize the set of candidates
        let candidates = ALL_COLLECTIONS.map(col => col.copy());

        // Limiting the set of candidates to the collections of ISSEY MIYAKE INT'L. INC.
        candidates = candidates.filter(col => col.isBeforeOrIn(new Collection(1990, Season.W)));

        // Limiting the set of candidates to the collections with the right last digit of the year
        candidates = candidates.filter(col => col.year%10 == yearLastDigit);

        // Limiting the set of candidates to the collections with the right logo style if specified
        if (!this.isLogoUnspecified()) {
            if (!line.includes(this.logoStyle)) continue;
            else candidates = candidates.filter(col => line.logoList[this.logoStyle].includes(col));
        }

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
    let stylizedCode = productCode;
    //if (this.isFontSlabSerif()) stylizedCode = productCode.slice(0, 4) + "-" + productCode.slice(4);
    identification.stylizedCode = stylizedCode;
    // Assigning the fabric type
    identification.fabricType =  FABRIC_TYPE_ID[fabricTypeID];
    // Assigning the garment type
    identification.garmentType = GARMENT_TYPE_ID[garmentTypeID];

    return [identification];
};
