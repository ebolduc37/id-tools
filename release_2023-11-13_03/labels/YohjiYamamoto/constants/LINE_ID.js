/**
 * Initialization of LINE_ID.
 *
 * Initialization of the Yohji Yamamoto line IDs and their corresponding
 * lines with adjusted operation period.
 *
 * @author Etienne Bolduc
 */

import { deepFreeze } from "../../../utils/index.js";
import LINES from "./LINES.js";

/**
 * Enum for the Yohji Yamamoto line IDs and their corresponding lines.
 * @constant
 * @readonly
 * @enum {LINES[]}
 */
const LINE_ID = deepFreeze({

     F: [LINES.YY],

     H: [LINES.YYPH],
});

export default LINE_ID;
