/**
 * Yohji Yamamoto identification.
 *
 * Evaluation of the occurrences of possible collections by looking
 * at all Yohji Yamamoto frameworks, their exceptions, and special cases.
 *
 * @author Etienne Bolduc
 */

import "./identificationFrameworks/index.js";
import { Identification, smooth } from "../../utils/index.js";
import { InputYY } from "./utils/index.js";

/**
* Identify the occurrences of possible collections from the input data by looking
* at all Yohji Yamamoto frameworks, their exceptions, and special cases.
* @return {Identification[]} Identification of the occurrences of possible collections.
*/
InputYY.prototype.idList = function() {

    // Returning empty array if the input data are not a valid input
    if (!this.isValid()) return [];

    // Building the array of identifications of possible collections
    let identificationList = [];
    identificationList.push(this.idList_Regular());

    return smooth(identificationList);
};
