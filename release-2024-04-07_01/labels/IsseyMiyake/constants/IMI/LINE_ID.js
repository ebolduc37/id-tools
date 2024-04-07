/**
 * Initialization of LINE_ID.
 *
 * Initialization of the ISSEY MIYAKE INC. line IDs and their corresponding
 * lines with adjusted operation period.
 *
 * @author Etienne Bolduc
 */

import { deepFreeze } from "../../../../utils/index.js";
import LINE from "../LINE.js";

/**
 * Enum for the ISSEY MIYAKE INC. line IDs and their corresponding lines.
 * @constant
 * @readonly
 * @enum {LINE[]}
 */
const LINE_ID = deepFreeze({

     IM: [LINE.IM],
     IS: [LINE.IS],
     ME: [LINE.ME],
     PP: [LINE.PP]
});

export default LINE_ID;
