/**
 * Initialization of function identify.
 *
 * Initialization of a function to identify the occurrences
 * of possible collections for different labels.
 *
 * @author Etienne Bolduc
 */

import Input from "./utils/classes/Input.js";
import { InputCDG } from "./labels/CommeDesGarcons/utils/index.js";
import "./labels/CommeDesGarcons/idList.js";
import { InputYY } from "./labels/YohjiYamamoto/utils/index.js";
import "./labels/YohjiYamamoto/idList.js";

/**
 * Identify the occurrences of possible collections from the input data.
 * @param {Object} input Object containing input data to identify.
 * @return {string} Identification of the occurrences of possible collections.
 */
function identify(input) {

    if (!input || !("label" in input) || !Object.values(Input.Label).includes(input.label)) {
        return new Input(input).identify();
    }
    if (input.label === Input.Label.CDG) {
        return new InputCDG(input).identify();
    }
    if (input.label === Input.Label.YY) {
        return new InputYY(input).identify();
    }
    return "unknown error";
}

export default identify;
