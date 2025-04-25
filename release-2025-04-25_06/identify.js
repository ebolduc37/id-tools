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
import "./labels/CommeDesGarcons/extract.js";
import { InputIM } from "./labels/IsseyMiyake/utils/index.js";
import "./labels/IsseyMiyake/extract.js";
import { InputMM } from "./labels/MaisonMargiela/utils/index.js";
import "./labels/MaisonMargiela/extract.js";
import { InputYY } from "./labels/YohjiYamamoto/utils/index.js";
import "./labels/YohjiYamamoto/extract.js";

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
    if (input.label === Input.Label.IM) {
        return new InputIM(input).identify();
    }
    if (input.label === Input.Label.MM) {
        return new InputMM(input).identify();
    }
    if (input.label === Input.Label.YY) {
        return new InputYY(input).identify();
    }
    return "error";
}

export default identify;
