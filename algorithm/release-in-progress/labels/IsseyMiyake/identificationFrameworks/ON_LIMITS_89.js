/**
 * ISSEY MIYAKE ON LIMITS INC. (1989-1990) framework identification.
 *
 * Evaluation of the occurrences of possible collections by following
 * the ISSEY MIYAKE ON LIMITS INC. (1989-1990) identification framework.
 *
 * @author Etienne Bolduc
 */

// Imports
import { Collection, Identification } from "../../../utils/index.js";
import { InputIM } from "../utils/index.js";

// Constants
import { ALL_COLLECTIONS, ON_LIMITS_89_GARMENT_TYPE_ID as GARMENT_TYPE_ID, ON_LIMITS_89_LINE_ID as LINE_ID,
    ON_LIMITS_89_SEASON_ID as SEASON_ID, LINE } from "../constants/index.js";
const Season = Collection.Season;
const REGEX_ON_LIMITS_89 = /^[9|0|O][A-Z]{2}\d{5}$/;
const FRAMEWORK_ON_LIMITS_89 = "ISSEY MIYAKE ON LIMITS INC. (1989-1990)";
const MANUFACTURER_ON_LIMITS = "ISSEY MIYAKE ON LIMITS INC. [Japanese: ㈱ イッセイ ミヤケ オンリミット]";
const MANUFACTURER_IM_INC = "ISSEY MIYAKE INC. [Japanese: ㈱ イッセイ ミヤケ]";



/**
 * Evaluate if the input data corresponds to the ISSEY MIYAKE ON LIMITS INC. (1989-1990) framework.
 * @return {boolean} True if the input data corresponds to the ISSEY MIYAKE ON LIMITS INC. (1989-1990) framework; false otherwise.
 */
InputIM.prototype.isON_LIMITS_89 = function() {

    // Returning false if the product code is not a valid input
    if (!this.isValid()) return false;

    // Returning false if the font style is not sans serif
    if (!(this.isLogoBRUSH() || this.isLogoHelvetica()) && !this.isLogoUnspecified()) return false;

    // Returning false if the manufacturer is not a ISSEY MIYAKE ON LIMITS INC.
    if (!(this.isManufacturerON_LIMITS() || this.isManufacturerIM_INC())
        && !this.isManufacturerUnspecified()) return false;

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Returning false if the product code does not fit the regular expression of the framework
    // or is not the empty string
    if (!REGEX_ON_LIMITS_89.test(productCode)) return false;

    // Returning false if the first character is not 9 or 0
    const yearLastDigit = productCode[0];
    if (!['9','0','O'].includes(yearLastDigit)) return false;

    // Returning false if the season ID is not valid
    const seasonID = productCode[1];
    if (!(seasonID in SEASON_ID)) return false;

    // Returning false if the line ID is not valid
    const lineID = productCode[2];
    if (!(lineID in LINE_ID)) return false;

    // Exception transitional season
    if (this.isManufacturerIM_INC())
        if (!['0','O'].includes(yearLastDigit) || !['C','D','G','H'].includes(seasonID)) return false;

    // Returning true otherwise
    return true
};

/**
 * Identification of the occurrences of possible collections from the input data
 * by following the ISSEY MIYAKE ON LIMITS INC. (1989-1990) framework.
 * @return {Identification[]} Identification of the occurrences of possible collections.
 */
InputIM.prototype.extract_ON_LIMITS_89 = function() {

    // Returning empty array if the product code is not a
    // valid ISSEY MIYAKE ON LIMITS INC. (1989-1990) framework input
    if (!this.isON_LIMITS_89()) return [];

    // Initializing useful parameters
    let testCode = this.getProductCodeStandardized();

    // Correct product code if needed
    // as putting 'O' instead of '0' is a fairly common mistake
    if (testCode[0] === 'O')  testCode = '0' + testCode.substring(1);
    const productCode = testCode;

    // Initializing the identification object
    let identification = new Identification({
        label: Identification.Label.IM,
        framework: FRAMEWORK_ON_LIMITS_89,
        manufacturer: MANUFACTURER_ON_LIMITS,
        input: this.copy()
    });

    // Initializing useful parameters
    const yearLastDigit = productCode[0];
    const seasonID = productCode[1];
    const lineID = productCode[2];

    // Exception
    if (this.isManufacturerIM_INC())
        identification.manufacturer = MANUFACTURER_IM_INC;
    else if (this.isManufacturerUnspecified())
        if (['0','O'].includes(yearLastDigit) && ['C','D','G','H'].includes(seasonID))
            identification.manufacturer += " or " + MANUFACTURER_IM_INC;

    // Declaring the array of occurences by line
    let lineList = [];

    // Looping through each line of the line ID
    for (let line of LINE_ID[lineID]) {

        // Initializing useful parameters
        const operationPeriod = line.operationPeriod;

        // Initialize the set of candidates
        let candidates = ALL_COLLECTIONS.map(col => col.copy());

        // Limiting the set of candidates to the collections from 1989 and 1990
        candidates = candidates.filter(col => col.isBetween(new Collection(1989), new Collection(1990)));

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
