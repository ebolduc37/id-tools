/**
 * Initialization of function idList.
 *
 * Initialization of a function to return the identification data as a list
 * of the occurrences of possible collections for different labels.
 *
 * @author Etienne Bolduc
 */

import { Identification, Input } from "./utils/index.js";
import { InputCDG } from "./labels/CommeDesGarcons/utils/index.js";
import "./labels/CommeDesGarcons/idList.js";
import { InputYY } from "./labels/YohjiYamamoto/utils/index.js";
import "./labels/YohjiYamamoto/idList.js";

/**
 * Identify the occurrences of possible collections from the input data.
 * @param {Object} input Object containing input data to identify.
 * @return {Identification[]} Identification of the occurrences of possible collections.
 */
function idList(input) {

    if (!input || !("label" in input) || !Object.values(Input.Label).includes(input.label)) {
        return [];
    }
    if (input.label === Input.Label.CDG) {
        return new InputCDG(input).idList();
    }
    if (input.label === Input.Label.YY) {
        return new InputYY(input).idList();
    }
    return [];
}

export default idList;
