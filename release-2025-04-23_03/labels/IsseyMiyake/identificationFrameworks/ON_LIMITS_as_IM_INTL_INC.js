/**
 * ISSEY MIYAKE ON LIMITS INC. as ISSEY MIYAKE INT'L. INC. framework identification.
 *
 * Evaluation of the occurrences of possible collections by following
 * the ISSEY MIYAKE ON LIMITS INC. as ISSEY MIYAKE INT'L. INC. identification framework.
 *
 * @author Etienne Bolduc
 */

// Imports
import { Identification } from "../../../utils/index.js";
import { InputIM } from "../utils/index.js";
import "./IM_INTL_INC.js";

// Constants
const REGEX_ON_LIMITS_as_IM_INTL_INC = /^[E][A-Z]\d{5}$/;
const FRAMEWORK_ON_LIMITS_as_IM_INTL_INC = "ISSEY MIYAKE ON LIMITS INC. as ISSEY MIYAKE INT'L. INC.";
const MANUFACTURER_ON_LIMITS = "ISSEY MIYAKE ON LIMITS INC. [Japanese: ㈱ イッセイ ミヤケ オンリミット]";



/**
 * Evaluate if the input data corresponds to the ISSEY MIYAKE ON LIMITS INC. as ISSEY MIYAKE INT'L. INC. framework.
 * @return {boolean} True if the input data corresponds to the ISSEY MIYAKE ON LIMITS INC.
 *                      as ISSEY MIYAKE INT'L. INC. framework; false otherwise.
 */
InputIM.prototype.isON_LIMITS_as_IM_INTL_INC = function() {

    // Returning false if the product code is not a valid input
    if (!this.isValid()) return false;

    // Returning false if the font style is not sans serif
    if (!this.isLogoBRUSH() && !this.isLogoUnspecified()) return false;

    // Returning false if the manufacturer is not a ISSEY MIYAKE ON LIMITS INC.
    if (!this.isManufacturerON_LIMITS() && !this.isManufacturerUnspecified()) return false;

    // Returning false if the font style is not sans serif
    if (!this.isTypefaceSansSerif() && !this.isTypefaceUnspecified()) return false;

    // Initializing useful parameter
    const productCode = this.getProductCodeStandardized();

    // Returning false if the product code does not fit the regular expression of the framework
    // or is not the empty string
    if (!REGEX_ON_LIMITS_as_IM_INTL_INC.test(productCode)) return false;

    // Returning false if the input data is not valid as IM_INTL_INC
    let input_IM_INTL_INC = this.copy();
    input_IM_INTL_INC.manufacturer = InputIM.Manufacturer.IM_INTL_INC;
    if (!input_IM_INTL_INC.isIM_INTL_INC()) return false;

    // Returning true otherwise
    return true
};

/**
 * Identification of the occurrences of possible collections from the input data
 * by following the ISSEY MIYAKE ON LIMITS INC. as ISSEY MIYAKE INT'L. INC. framework.
 * @return {Identification[]} Identification of the occurrences of possible collections.
 */
InputIM.prototype.extract_ON_LIMITS_as_IM_INTL_INC = function() {

    // Returning empty array if the product code is not a
    // valid ISSEY MIYAKE ON LIMITS INC. as ISSEY MIYAKE INT'L. INC. framework input
    if (!this.isON_LIMITS_as_IM_INTL_INC()) return [];

    let input_IM_INTL_INC = this.copy();
    input_IM_INTL_INC.manufacturer = InputIM.Manufacturer.IM_INTL_INC;
    let result = input_IM_INTL_INC.extract_IM_INTL_INC();
    if (result.length === 0) return [];

    result[0].framework = FRAMEWORK_ON_LIMITS_as_IM_INTL_INC;
    result[0].manufacturer = MANUFACTURER_ON_LIMITS;
    result[0].input = this.copy();

    return result;
};
