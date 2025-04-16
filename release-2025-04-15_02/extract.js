/**
 * Initialization of function extract.
 *
 * Initialization of a function to return the identification data as a list
 * of the occurrences of possible collections for different labels.
 *
 * @author Etienne Bolduc
 */

import { Identification, Input } from "./utils/index.js";
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
 * @return {Identification[]} Identification of the occurrences of possible collections.
 */
function extract(input) {

    if (!input || !("label" in input) || !Object.values(Input.Label).includes(input.label)) {
        return [];
    }
    if (input.label === Input.Label.CDG) {
        return new InputCDG(input).extract();
    }
    if (input.label === Input.Label.IM) {
        return new InputIM(input).extract();
    }
    if (input.label === Input.Label.MM) {
        return new InputMM(input).extract();
    }
    if (input.label === Input.Label.YY) {
        return new InputYY(input).extract();
    }
    return [];
}

export default extract;
