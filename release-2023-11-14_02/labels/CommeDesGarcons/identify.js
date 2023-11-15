/**
 * COMME des GARÇONS identification.
 *
 * Evaluation of the occurrences of possible collections by looking
 * at all COMME des GARÇONS frameworks, their exceptions, and special cases.
 *
 * @author Etienne Bolduc
 */

import "./identificationFrameworks/index.js";
import { Identification } from "../../utils/index.js";
import { InputCDG } from "./utils/index.js";

/**
* Identify the occurrences of possible collections from the input data by looking
* at all COMME des GARÇONS frameworks, their exceptions, and special cases.
* @return {Identification[]} Identification of the occurrences of possible collections.
*/
InputCDG.prototype.identify = function() {

    // Returning false if the input data is not a valid input
    if (!this.isValid()) return null;

    // Building the array of identifications of possible collections
    let identificationList = [];
    identificationList.push(this.identifyCdgcdg());
    identificationList.push(this.identifyForever());
    identificationList.push(this.identifyForeverExceptions());
    identificationList.push(this.identifyShirt());
    identificationList.push(this.identifyShirtExceptions());
    identificationList.push(this.identifyMonthly());
    identificationList.push(this.identifySeasonal());
    identificationList.push(this.identifySpecialCases());

    // Removing null and empty elements from the array of identifications
    identificationList = identificationList.filter(id => id != null && Object.keys(id).length !== 0);

    // Returning null if the array of identifications is empty
    if (identificationList.length === 0) return null;

    // Return the array of identifications otherwise
    else return identificationList;
};
