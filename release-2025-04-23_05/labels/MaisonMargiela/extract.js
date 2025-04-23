/**
 * Maison Margiela identification.
 *
 * Evaluation of the occurrences of possible collections by looking
 * at all Maison Margiela frameworks, their exceptions, and special cases.
 *
 * @author Etienne Bolduc
 */

import "./identificationFrameworks/index.js";
import { Identification, smooth } from "../../utils/index.js";
import { InputMM } from "./utils/index.js";

/**
* Identify the occurrences of possible collections from the input data by looking
* at all Maison Margiela frameworks, their exceptions, and special cases.
* @return {Identification[]} Identification of the occurrences of possible collections.
*/
InputMM.prototype.extract = function() {

    // Returning empty array if the input data are not a valid input
    if (!this.isValid()) return [];

    // Building the array of identifications of possible collections
    let identificationList = [];
    identificationList.push(this.extract_Regular());

    return smooth(identificationList);
};
