/**
 * Initialization of LINE_ID.
 *
 * Initialization of the ISSEY MIYAKE ON LIMITS INC. (1986) line IDs and
 * their corresponding lines with adjusted operation period.
 *
 * @author Etienne Bolduc
 */

import { deepFreeze } from "../../../../utils/index.js";
import LINE from "../LINE.js";

/**
 * List of line IDs and corresponding lines for ISSEY MIYAKE ON LIMITS INC. (1986).
 * @constant
 * @readonly
 * @enum {LINE[]}
 */
const LINE_ID = deepFreeze({

     A: [LINE.ME],
     L: [LINE.IM],
     M: [LINE.ME],
     S: [LINE.IM],
     Z: [LINE.OO],
});

export default LINE_ID;
