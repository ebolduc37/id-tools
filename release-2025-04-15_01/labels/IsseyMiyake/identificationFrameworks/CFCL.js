/**
 * CFCL framework identification.
 *
 * Evaluation of the occurrences of possible collections by following
 * the CFCL identification framework.
 *
 * @author Etienne Bolduc
 */

// Imports
import { Collection, Identification } from "../../../utils/index.js";
import { InputIM } from "../utils/index.js";

// Constants
import { ALL_COLLECTIONS, IM_INC_FABRIC_TYPE_ID as FABRIC_TYPE_ID,
    IM_INC_GARMENT_TYPE_ID as GARMENT_TYPE_ID, LINE} from "../constants/index.js";
const Season = Collection.Season;
const REGEX_IM_INC = /^[C][F]\d{3}[A-Z]{2}\d{3}\d?$/;
const FRAMEWORK_CFCL = "CFCL";



/**
 * Evaluate if the input data corresponds to the CFCL framework.
 * @return {boolean} True if the input data corresponds to the CFCL framework; false otherwise.
 */
InputIM.prototype.isCFCL = function() {

    // Returning false if the product code is not a valid input
    if (!this.isValid()) return false;

    // Returning false if the font style is not sans serif
    if (!this.isLogoUnspecified()) return false;

    // Returning false if the manufacturer is not a ISSEY MIYAKE INC.
    if (!this.isManufacturerIM_INC() && !this.isManufacturerUnspecified()) return false;

    // Returning false if the sizing system is not numerical
    if (!this.isSizingNumerical() && !this.isSizingUnspecified()) return false;

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Returning false if the product code does not fit the regular expression of the framework
    // or is not the empty string
    if (!REGEX_IM_INC.test(productCode)) return false;

    // Returning false if the line ID is not valid
    const yearID = parseInt(productCode.slice(2, 5));

    // Calculate the current year ID
    let yearIDMax = 2*(new Date().getFullYear()-2020)-1;
    if (new Date().getMonth() >= 6) ++yearIDMax;

    // Returning false if the year ID is not valid
    if (yearID > yearIDMax) return false;

    // Returning false if the garment ID is not valid
    const fabricTypeID = productCode[5];
    if (!(fabricTypeID in FABRIC_TYPE_ID)) return false;

    // Returning false if the garment ID is not valid
    const garmentTypeID = productCode[6];
    if (!(garmentTypeID in GARMENT_TYPE_ID)) return false;

    // Returning true otherwise
    return true
};

/**
 * Identification of the occurrences of possible collections from the input data
 * by following the CFCL framework.
 * @return {Identification[]} Identification of the occurrences of possible collections.
 */
InputIM.prototype.extract_CFCL = function() {

    // Returning empty array if the product code is not a
    // valid CFCL framework input
    if (!this.isCFCL()) return [];

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Initializing the identification object
    let identification = new Identification({
        label: Identification.Label.IM,
        framework: FRAMEWORK_CFCL,
        input: this.copy()
    });

    // Initializing useful parameters
    const yearID = parseInt(productCode.slice(2, 5));
    const fabricTypeID = productCode[4];
    const garmentTypeID = productCode[5];

    const year = 2020+(yearID+yearID%2)/2;
    const season = (yearID%2 == 1)? Season.S : Season.W;

    // Assigning the array of occurences
    identification.lineList = [LINE.CF.forIdentification([new Collection(year, season)])];
    // Assigning the stylized code
    identification.stylizedCode = productCode;
    // Assigning the garment type
    identification.garmentType = GARMENT_TYPE_ID[garmentTypeID];
    // Assigning the fabric type
    identification.fabricType = FABRIC_TYPE_ID[fabricTypeID];

    return [identification];
};
