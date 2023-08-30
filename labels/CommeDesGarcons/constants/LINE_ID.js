/**
 * Initialization of LINE_ID.
 *
 * Initialization of the lines associated with each line ID and their corresponding
 * operation period and production schedule.
 *
 * @author Etienne Bolduc
 */

import { Seasons, Collection, deepFreeze } from "../../../utils/index.js";
import ProductionSchedules from "../utils/enums/ProductionSchedules.js";
import LINES from "./LINES.js";

/**
 * Enum for the line IDs and lines.
 * @constant
 * @readonly
 * @enum {LINES[]}
 */
const LINE_ID = deepFreeze({

     _: [LINES.CDG.changeUpperBound(new Collection(1982, Seasons.S)).changeProdSched(ProductionSchedules.LATE)],

     1: [LINES.BLK],

     2: [LINES.POCKET],

     3: [LINES.TAOCDG,
     LINES.NOIRKN],

     5: [LINES.SPEEDO],

     6: [LINES.EDITW],

     7: [LINES.EDITM],

     8: [LINES.WALL],

     A: [LINES.NOIR.changeUpperBound(new Collection(1995, Seasons.W)),
     LINES.PLAY],

     B: [LINES.PPDSM],

     D: [LINES.H2],

     E: [LINES.CDG.changeBounds(new Collection(1982, Seasons.W), new Collection(2005, Seasons.W)),
     LINES.RKCDG.changeUpperBound(new Collection(2005, Seasons.W)),
     LINES.NOIR.changeUpperBound(new Collection(2005, Seasons.W)),
     LINES.GAN],

     F: [LINES.FR,
     LINES.SHIRT.changeLowerBound(new Collection(2021, Seasons.S)),
     LINES.FOREVER.changeLowerBound(new Collection(2021, Seasons.S))],

     G: [LINES.CDG.changeLowerBound(new Collection(1982, Seasons.W)),
     LINES.NOIR.changeLowerBound(new Collection(2005, Seasons.W))],

     H: [LINES.H],

     I: [LINES.IND,
     LINES.HI,
     LINES.HH,
     LINES.JAN,
     LINES.JWMAN.changeBounds(new Collection(2006, Seasons.S), new Collection(2006, Seasons.S)),
     LINES.ALIVE,
     LINES.GDS,
     LINES.CDGSE.changeBounds(new Collection(2011, Seasons.W), new Collection(2012, Seasons.W))],

     J: [LINES.JW],

     K: [LINES.AOY,
     LINES.CHAOY],

     L: [LINES.ISE115,
     LINES.ISE2MAN,
     LINES.PPOH],

     N: [LINES.GIRL],

     O: [LINES.CCNO,
     LINES.AOYSE,
     LINES.CDGCDG.changeBounds(new Collection(2005, Seasons.S), new Collection(2005, Seasons.S)),
     LINES.CDGSE,
     LINES.WALLSE,
     LINES.EYESE,
     LINES.SPEEDOSE,
     LINES.TRAD,
     LINES.PLAYXMAX,
     LINES.BM,
     LINES.CDGLINESSE,
     LINES.FRIENDS,
     LINES.PPOH,
     LINES.PEOPLE],

     P: [LINES.HP,
     LINES.HPS,
     LINES.HPE],

     R: [LINES.RDC,
     LINES.CDGCDG.changeLowerBound(new Collection(2005, Seasons.S))],

     S: [LINES.CC,
     LINES.CDGLINES],

     T: [LINES.TRIC,
     LINES.TAO],

     U: [LINES.HPD,
     LINES.PINK],

     V: [LINES.JW.changeUpperBound(new Collection(2005, Seasons.W)),
     LINES.BEAT],

     W: [LINES.JWMAN,
     LINES.EYE],

     X: [LINES.HP.changeUpperBound(new Collection(2005, Seasons.W)),
     LINES.RKHP,
     LINES.JWD],

     Y: [LINES.JWMAN.changeUpperBound(new Collection(2005, Seasons.W))],

     Z: [LINES.TWO,
     LINES.PEG,
     LINES.VIV,
     LINES.CDGCHG]
});

export default LINE_ID;
