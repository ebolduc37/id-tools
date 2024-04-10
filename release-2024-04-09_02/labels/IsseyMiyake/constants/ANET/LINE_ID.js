/**
 * Initialization of LINE_ID.
 *
 * Initialization of the A-NET INC. line IDs and their corresponding
 * lines with adjusted operation period.
 *
 * @author Etienne Bolduc
 */

import { Collection, deepFreeze } from "../../../../utils/index.js";
import LINE from "../LINE.js";

// Initializing useful parameter
const Season = Collection.Season;

/**
 * Enum for the A-NET INC. line IDs and their corresponding lines.
 * @constant
 * @readonly
 * @enum {LINE[]}
 */
const LINE_ID = deepFreeze({

     FH: [LINE.FH.newLowerBound(new Collection(1998, Season.W))],
     IS: [LINE.ISSK],
     KT: [LINE.FH.newUpperBound(new Collection(1998, Season.S))],
});

export default LINE_ID;
