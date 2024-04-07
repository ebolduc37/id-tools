/**
 * COMME des GARÇONS identification.
 *
 * Evaluation of the occurrences of possible collections by looking
 * at all COMME des GARÇONS frameworks, their exceptions, and special cases.
 *
 * @author Etienne Bolduc
 */

import "./identificationFrameworks/index.js";
import { Identification, smooth } from "../../utils/index.js";
import { InputCDG } from "./utils/index.js";

/**
* Identify the occurrences of possible collections from the input data by looking
* at all COMME des GARÇONS frameworks, their exceptions, and special cases.
* @return {Identification[]} Identification of the occurrences of possible collections.
*/
InputCDG.prototype.idList = function() {

    // Returning empty array if the input data is not a valid input
    if (!this.isValid()) return [];

    // Building the array of identifications of possible collections
    let identificationList = [];
    identificationList.push(this.idList_Cdgcdg());
    identificationList.push(this.idList_Forever());
    identificationList.push(this.idList_ForeverException());
    identificationList.push(this.idList_Shirt());
    identificationList.push(this.idList_ShirtException());
    identificationList.push(this.idList_Monthly());
    identificationList.push(this.idList_Seasonal());
    identificationList.push(this.idList_SpecialCase());

    return smooth(identificationList);
};
