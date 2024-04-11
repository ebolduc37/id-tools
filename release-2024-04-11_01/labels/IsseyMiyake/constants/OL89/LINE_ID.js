/**
 * Initialization of LINE_ID.
 *
 * Initialization of the ISSEY MIYAKE ON LIMITS INC. (1989-1990) line IDs and
 * their corresponding lines with adjusted operation period.
 *
 * @author Etienne Bolduc
 */

import { deepFreeze } from "../../../../utils/index.js";
import LINE from "../LINE.js";

/**
 * Enum for the ISSEY MIYAKE ON LIMITS INC. line IDs and their corresponding lines.
 * @constant
 * @readonly
 * @enum {LINE[]}
 */
const LINE_ID = deepFreeze({

     A: [LINE.OO],
     H: [LINE.ME],
     J: [LINE.MDS],
     L: [LINE.ME],
});

export default LINE_ID;
