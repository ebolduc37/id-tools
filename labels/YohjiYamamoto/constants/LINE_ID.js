/**
 * Initialization of LINE_ID.
 *
 * Initialization of the lines associated with each line ID and their corresponding
 * operation period and production schedule.
 *
 * @author Etienne Bolduc
 */

import { Seasons, Collection, deepFreeze } from "../../../utils/index.js";
import LINES from "./LINES.js";

/**
 * Enum for the line IDs and lines.
 * @constant
 * @readonly
 * @enum {LINES[]}
 */
const LINE_ID = deepFreeze({

     F: [LINES.YY],

     H: [LINES.YYPH],
});

export default LINE_ID;
