/**
 * ISSEY MIYAKE identification.
 *
 * Evaluation of the occurrences of possible collections by looking
 * at all ISSEY MIYAKE frameworks, their exceptions, and special cases.
 *
 * @author Etienne Bolduc
 */

import "./identificationFrameworks/index.js";
import { Identification, smooth } from "../../utils/index.js";
import { InputIM } from "./utils/index.js";

/**
* Identify the occurrences of possible collections from the input data by looking
* at all ISSEY MIYAKE frameworks, their exceptions, and special cases.
* @return {Identification[]} Identification of the occurrences of possible collections.
*/
InputIM.prototype.extract = function() {

    // Returning empty array if the input data are not a valid input
    if (!this.isValid()) return [];

    // Building the array of identifications of possible collections
    let identificationList = [];
    identificationList.push(this.extract_IMI());
    identificationList.push(this.extract_IMII());

    return smooth(identificationList);
};
