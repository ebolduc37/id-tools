/**
 * ISSEY MIYAKE ON LIMITS INC. (1983-1985) 'F' framework identification.
 *
 * Evaluation of the occurrences of possible collections by following
 * the ISSEY MIYAKE ON LIMITS INC. (1983-1985) identification framework.
 *
 * @author Etienne Bolduc
 */

// Imports
import { Collection, Identification } from "../../../utils/index.js";
import { InputIM } from "../utils/index.js";

// Constants
import { ALL_COLLECTIONS, LINE } from "../constants/index.js";
const Season = Collection.Season;
const REGEX_OL83F = /^[F][A-Z]\d{4}[4]$/;
const FRAMEWORK_OL83F = "ISSEY MIYAKE ON LIMITS INC. (1983-1985) 'F'";
const MANUFACTURER_ON_LIMITS = "ISSEY MIYAKE ON LIMITS INC., which may also appear as ㈱ イッセイ ミヤケ "
                            + "オンリミット on the care label,";



/**
 * Evaluate if the input data corresponds to the ISSEY MIYAKE ON LIMITS INC. (1983-1985) 'F' framework.
 * @return {boolean} True if the input data corresponds to the ISSEY MIYAKE ON LIMITS INC. (1983-1985) 'F' framework; false otherwise.
 */
InputIM.prototype.isOL83F = function() {

    // Returning false if the product code is not a valid input
    if (!this.isValid()) return false;

    // Returning false if the manufacturer is not a ISSEY MIYAKE ON LIMITS INC.
    if (!this.isManufacturerON_LIMITS() && !this.isManufacturerUnspecified()) return false;

    // Returning false if the font style is not sans serif
    if (!this.isFontSansSerif() && !this.isFontUnspecified()) return false;

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Returning false if the product code does not fit the regular expression of the framework
    // or is not the empty string
    if (!REGEX_OL83F.test(productCode)) return false;

    // Returning true otherwise
    return true
};

/**
 * Identification of the occurrences of possible collections from the input data
 * by following the ISSEY MIYAKE ON LIMITS INC. (1983-1985) 'F' framework.
 * @return {Identification[]} Identification of the occurrences of possible collections.
 */
InputIM.prototype.extract_OL83F = function() {

    // Returning empty array if the product code is not a
    // valid ISSEY MIYAKE ON LIMITS INC. (1983-1985) 'F' framework input
    if (!this.isOL83F()) return [];

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Initializing the identification object
    let identification = new Identification({
        label: Identification.Label.IM,
        framework: FRAMEWORK_OL83F,
        manufacturer: MANUFACTURER_ON_LIMITS,
        input: this.copy()
    });

    // Declaring the array of occurences by line
    let lineList = [];

    // Looping through each line of the line ID
    for (let line of [LINE.ME]) {

        // Initializing useful parameters
        const operationPeriod = line.operationPeriod;

        // Initialize the set of candidates
        let candidates = ALL_COLLECTIONS.map(col => col.copy());

        // Limiting the set of candidates to the collections between 1983 and 1985
        candidates = candidates.filter(col => col.isBetween(new Collection(1983), new Collection(1985, Season.W)));

        // Limiting the set of candidates to semiannual seasonal collections
        candidates = candidates.filter(col => !col.hasNoSeason());

        // Limiting the set of candidates to the collections with the right logo style if specified
        if (!this.isLogoUnspecified()) {
            if (!line.includes(this.logoStyle)) continue;
            else candidates = candidates.filter(col => line.logoList[this.logoStyle].includes(col));
        }

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
