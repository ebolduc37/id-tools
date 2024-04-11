/**
 * Initialization of LINE_ID.
 *
 * Initialization of the ISSEY MIYAKE INC. line IDs and their corresponding
 * lines with adjusted operation period.
 *
 * @author Etienne Bolduc
 */

import { Collection, deepFreeze } from "../../../../utils/index.js";
import LINE from "../LINE.js";

// Initializing useful parameter
const Season = Collection.Season;
const LAST_BEFORE_ANET = new Collection(1996, Season.W);

/**
 * Enum for the ISSEY MIYAKE INC. line IDs and their corresponding lines.
 * @constant
 * @readonly
 * @enum {LINE[]}
 */
const LINE_ID = deepFreeze({

     KZ: [LINE.FH.newUpperBound(LAST_BEFORE_ANET)],
     IM: [LINE.IMNT,
          LINE.IM],
     IS: [LINE.IS,
          LINE.ISSK.newUpperBound(LAST_BEFORE_ANET)],
     ME: [LINE.MENT,
          LINE.ME],
     PP: [LINE.PP]
});

export default LINE_ID;
