/**
 * Yohji Yamamoto identification.
 *
 * Evaluation of the occurrences of possible collections by looking
 * at all Yohji Yamamoto frameworks, their exceptions, and special cases.
 *
 * @author Etienne Bolduc
 */

import "./identificationFrameworks/index.js";
import { Identification } from "../../utils/index.js";
import { InputYY } from "./utils/index.js";

/**
* Identify the occurrences of possible collections from the input data by looking
* at all Yohji Yamamoto frameworks, their exceptions, and special cases.
* @return {Identification[]} Identification of the occurrences of possible collections.
*/
InputYY.prototype.identify = function() {

    // Returning false if the product code and year print data are not valid inputs
    if (!this.isValid()) return null;

    // Building the array of identifications of possible collections
    let identificationList = [];
    identificationList.push(this.identifyRegular());

    // Removing null and empty elements from the array of identifications
    identificationList = identificationList.filter(id => id != null && Object.keys(id).length !== 0);

    // Returning null if the array of identifications is empty
    if (identificationList.length === 0) return null;

    // Return the array of identifications otherwise
    else return identificationList;
};
