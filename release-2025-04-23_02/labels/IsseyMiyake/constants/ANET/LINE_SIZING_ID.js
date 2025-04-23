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
const LINE_SIZING_ID = deepFreeze({

     CZ: [[LINE.CZ, "ALPHABETICAL"], // alph
          [LINE.ZT.newUpperBound(new Collection(1999, Season.W)), "NUMERICAL"], // num
          [LINE.ZD, "ALPHABETICAL"]], // alph
     FH: [[LINE.FH.newLowerBound(new Collection(1998, Season.W)), "ALPHABETICAL"]], // num until ss00, alph since ss00
     IS: [[LINE.ISSK, "ALPHABETICAL"]], // alph
     KT: [[LINE.FH.newUpperBound(new Collection(1998, Season.S)), "NUMERICAL"]], // num
     LJ: [[LINE.MDS, null],
          [LINE.IMPM, null]],
     MB: [[LINE.MB, "NUMERICAL"]], // num
     NE: [[LINE.NE, "NUMERICAL"]], // num
     NY: [[LINE.NY, null], // both
          [LINE.NYA, "NUMERICAL"]], // num
     PL: [[LINE.PL, null], // both, but num seems to be ss02 til aw09
          [LINE.WC, "ALPHABETICAL"]], // alph
     PW: [[LINE.WC, "ALPHABETICAL"]], // alph
     SK: [[LINE.SK, "ALPHABETICAL"]], // alph
     TC: [[LINE.TC, "ALPHABETICAL"]], // num until ss00, alph since begin
     TM: [[LINE.TM, "ALPHABETICAL"]], // num until ss00, alph since begin
     ZU: [[LINE.ZU, "ALPHABETICAL"], // alph
          [LINE.ZT.newLowerBound(new Collection(2000, Season.S)), "NUMERICAL"]] // num
});

export default LINE_SIZING_ID;
