/**
 * Initialization of LINE_ID.
 *
 * Initialization of the Yohji Yamamoto line IDs and their corresponding
 * lines with adjusted operation period.
 *
 * @author Etienne Bolduc
 */

import { deepFreeze } from "../../../utils/index.js";
import LINE from "./LINE.js";

/**
 * Enum for the Yohji Yamamoto line IDs and their corresponding lines.
 * @constant
 * @readonly
 * @enum {LINE[]}
 */
const LINE_ID = deepFreeze({

     // F
     F: [LINE.YY],

     // H
     H: [LINE.YYPH],

     // S
     S: [LINE.WILD]
     
});

export default LINE_ID;
