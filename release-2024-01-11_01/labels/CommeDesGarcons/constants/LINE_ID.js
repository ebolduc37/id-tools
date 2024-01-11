/**
 * Initialization of LINE_ID.
 *
 * Initialization of the COMME des GARÇONS line IDs and their corresponding
 * lines with adjusted operation period and production schedule if required.
 *
 * @author Etienne Bolduc
 */

import { Collection, Line, deepFreeze } from "../../../utils/index.js";
import LINES from "./LINES.js";

// Initializing useful parameter
const SEASONS = Collection.SEASONS;
const PRODUCTION_SCHEDULE_TYPES = Line.PRODUCTION_SCHEDULE_TYPES;

/**
 * Enum for the COMME des GARÇONS line IDs and their corresponding lines.
 * @constant
 * @readonly
 * @enum {LINES[]}
 */
const LINE_ID = deepFreeze({

     _: [LINES.CDG.newUpperBound(new Collection(1982, SEASONS.S)).newProductionSchedule(PRODUCTION_SCHEDULE_TYPES.LATE)],

     1: [LINES.BLK],

     2: [LINES.POCKET],

     3: [LINES.TAOCDG,
     LINES.NOIRKN],

     5: [LINES.SPEEDO],

     6: [LINES.EDITW],

     7: [LINES.EDITM],

     8: [LINES.WALL],

     A: [LINES.NOIR.newUpperBound(new Collection(1995, SEASONS.W)),
     LINES.PLAY],

     B: [LINES.PPDSM],

     D: [LINES.H2],

     E: [LINES.CDG.newBounds(new Collection(1982, SEASONS.W), new Collection(2005, SEASONS.W)),
     LINES.RKCDG,
     LINES.NOIR.newUpperBound(new Collection(2005, SEASONS.W)),
     LINES.GAN],

     F: [LINES.FR,
     LINES.SHIRT.newLowerBound(new Collection(2021, SEASONS.S)),
     LINES.FOREVER.newLowerBound(new Collection(2021, SEASONS.S))],

     G: [LINES.CDG.newLowerBound(new Collection(1982, SEASONS.W)),
     LINES.NOIR.newLowerBound(new Collection(2005, SEASONS.W))],

     H: [LINES.H],

     I: [LINES.IND,
     LINES.HI,
     LINES.HH,
     LINES.JAN,
     LINES.JWMAN.newBounds(new Collection(2006, SEASONS.S), new Collection(2006, SEASONS.S)),
     LINES.ALIVE,
     LINES.GDS,
     LINES.CDGSE.newBounds(new Collection(2011, SEASONS.W), new Collection(2012, SEASONS.W))],

     J: [LINES.JW],

     K: [LINES.AOY,
     LINES.CHAOY],

     L: [LINES.ISE115,
     LINES.ISE2MAN,
     LINES.PPOH],

     N: [LINES.GIRL],

     O: [LINES.CCNO,
     LINES.AOYSE,
     LINES.CDGCDG.newBounds(new Collection(2005, SEASONS.S), new Collection(2005, SEASONS.S)),
     LINES.CDGSE,
     LINES.WALLSE,
     LINES.EYESE,
     LINES.SPEEDOSE,
     LINES.TRAD,
     LINES.PLAYXMAX,
     LINES.GUCCI,
     LINES.BM,
     LINES.CDGLINESE,
     LINES.FRIENDS,
     LINES.PPOH,
     LINES.PEOPLE],

     P: [LINES.HP,
     LINES.HPS,
     LINES.HPE],

     Q: [LINES.ALD],

     R: [LINES.RDC,
     LINES.CDGCDG.newLowerBound(new Collection(2005, SEASONS.S))],

     S: [LINES.CC,
     LINES.CDGLINES],

     T: [LINES.TRIC,
     LINES.TAO],

     U: [LINES.HPD,
     LINES.PINK],

     V: [LINES.JW.newUpperBound(new Collection(2005, SEASONS.W)),
     LINES.BEAT],

     W: [LINES.JWMAN,
     LINES.EYE],

     X: [LINES.HP.newUpperBound(new Collection(2005, SEASONS.W)),
     LINES.RKHP,
     LINES.JWD],

     Y: [LINES.JWMAN.newUpperBound(new Collection(2005, SEASONS.W))],

     Z: [LINES.TWO,
     LINES.PEG,
     LINES.VIV,
     LINES.CDGCHG]
});

export default LINE_ID;
