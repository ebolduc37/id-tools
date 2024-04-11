/**
 * ISSEY MIYAKE ON LIMITS INC. (1986) framework identification.
 *
 * Evaluation of the occurrences of possible collections by following
 * the ISSEY MIYAKE ON LIMITS INC. (1986) identification framework.
 *
 * @author Etienne Bolduc
 */

// Imports
import { Collection, Identification } from "../../../utils/index.js";
import { InputIM } from "../utils/index.js";

// Constants
import { ALL_COLLECTIONS, OL86_GARMENT_TYPE_ID as GARMENT_TYPE_ID, OL86_LINE_ID as LINE_ID,
    OL86_SEASON_ID as SEASON_ID, LINE } from "../constants/index.js";
const Season = Collection.Season;
const REGEX_OL86 = /^[A-Z]{2}\d{5}$/;
const FRAMEWORK_OL86 = "ISSEY MIYAKE ON LIMITS INC. (1986)";
const MANUFACTURER_ON_LIMITS = "ISSEY MIYAKE ON LIMITS INC. [Japanese: ㈱ イッセイ ミヤケ オンリミット]";



/**
 * Evaluate if the input data corresponds to the ISSEY MIYAKE ON LIMITS INC. (1986) framework.
 * @return {boolean} True if the input data corresponds to the ISSEY MIYAKE ON LIMITS INC. (1986) framework; false otherwise.
 */
InputIM.prototype.isOL86 = function() {

    // Returning false if the product code is not a valid input
    if (!this.isValid()) return false;

    // Returning false if the font style is not sans serif
    if (!this.isLogoBRUSH() && !this.isLogoUnspecified()) return false;

    // Returning false if the manufacturer is not a ISSEY MIYAKE ON LIMITS INC.
    if (!this.isManufacturerON_LIMITS() && !this.isManufacturerUnspecified()) return false;

    // Returning false if the font style is not sans serif
    if (!this.isFontSansSerif() && !this.isFontUnspecified()) return false;

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Returning false if the product code does not fit the regular expression of the framework
    // or is not the empty string
    if (!REGEX_OL86.test(productCode)) return false;

    // Returning false if the line ID is not valid
    const lineID = productCode[0];
    if (!(lineID in LINE_ID)) return false;

    // Returning false if the first character is not 6
    const yearLastDigit = productCode[2];
    if (!(yearLastDigit === '6')) return false;

    // Returning false if the season ID is not valid
    const seasonID = productCode[3];
    if (!(seasonID in SEASON_ID)) return false;

    // Returning true otherwise
    return true
};

/**
 * Identification of the occurrences of possible collections from the input data
 * by following the ISSEY MIYAKE ON LIMITS INC. (1986) framework.
 * @return {Identification[]} Identification of the occurrences of possible collections.
 */
InputIM.prototype.extract_OL86 = function() {

    // Returning empty array if the product code is not a
    // valid ISSEY MIYAKE ON LIMITS INC. (1986) framework input
    if (!this.isOL86()) return [];

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Initializing the identification object
    let identification = new Identification({
        label: Identification.Label.IM,
        framework: FRAMEWORK_OL86,
        manufacturer: MANUFACTURER_ON_LIMITS,
        input: this.copy()
    });

    // Initializing useful parameters
    const lineID = productCode[0];
    const yearLastDigit = productCode[2];
    const seasonID = productCode[3];

    // Declaring the array of occurences by line
    let lineList = [];

    // Looping through each line of the line ID
    for (let line of LINE_ID[lineID]) {

        // Initializing useful parameters
        const operationPeriod = line.operationPeriod;

        // Initialize the set of candidates
        let candidates = ALL_COLLECTIONS.map(col => col.copy());

        // Limiting the set of candidates to the collections from 1986
        candidates = candidates.filter(col => col.isReleasedIn(1986));

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

    // Returning empty array if there is no occurence
    if (lineList.length === 0) return [];

    // Assigning the array of occurences
    identification.lineList = lineList;
    // Assigning the stylized code
    identification.stylizedCode = productCode

    return [identification];
};
