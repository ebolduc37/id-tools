/**
 * Initialization of LINE_ID.
 *
 * Initialization of the ISSEY MIYAKE ON LIMITS INC. (1985) line IDs and
 * their corresponding lines with adjusted operation period.
 *
 * @author Etienne Bolduc
 */

import { deepFreeze } from "../../../../utils/index.js";
import LINE from "../LINE.js";

/**
 * List of line IDs and corresponding lines for ISSEY MIYAKE ON LIMITS INC. (1985).
 * @constant
 * @readonly
 * @enum {LINE[]}
 */
const LINE_ID = deepFreeze({

     L: [LINE.ME],
});

export default LINE_ID;
