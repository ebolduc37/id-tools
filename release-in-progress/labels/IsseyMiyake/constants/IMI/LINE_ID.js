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

     AP: [LINE.AP],
     AT: [LINE.ASH.newBounds(new Collection(1999, Season.W), new Collection(1999, Season.W)),
          LINE.TY,
          LINE.AT],
     BB: [LINE.BB],
     CL: [LINE.CL.newUpperBound(new Collection(1995, Season.W))],
     GG: [LINE.GG],
     HA: [LINE.HA],
     HP: [LINE.HP],
     KZ: [LINE.FH.newUpperBound(LAST_BEFORE_ANET)],
     IF: [LINE.IF,
          LINE.WL.newLowerBound(new Collection(2004, Season.W)),],
     IL: [LINE.IL],
     IM: [LINE.IM,
          LINE.WL.newUpperBound(new Collection(2004, Season.S))],
     IS: [LINE.IS,
          LINE.ISSK.newUpperBound(LAST_BEFORE_ANET)],
     IW: [LINE.WCIM],
     LA: [LINE.IMMEN],
     LJ: [LINE.MDS.newUpperBound(LAST_BEFORE_ANET)],
     ME: [LINE.ME,//LINE.IMM,
          LINE.CL.newLowerBound(new Collection(1996, Season.S)),
          LINE.ML],
     MI: [LINE.MI],
     PE: [LINE.PE,
          LINE.ASH.newLowerBound(new Collection(1994, Season.W))],
     PL: [LINE.PL.newUpperBound(LAST_BEFORE_ANET),
          LINE.WC.newUpperBound(LAST_BEFORE_ANET)],
     PP: [LINE.IM.newBounds(new Collection(1993), new Collection(1994, Season.S)),
          LINE.PP,
          LINE.IT.newUpperBound(new Collection(2020, Season.S))],
     RT: [LINE["24"],
          LINE.IT.newLowerBound(new Collection(2023, Season.S))],
     TC: [LINE.TC.newUpperBound(LAST_BEFORE_ANET)],
     TM: [LINE.TM.newUpperBound(LAST_BEFORE_ANET)],
     ZU: [LINE.ZU.newUpperBound(LAST_BEFORE_ANET),
          LINE.ZT.newUpperBound(LAST_BEFORE_ANET),
          LINE.CZ.newUpperBound(LAST_BEFORE_ANET)]
});

export default LINE_ID;
