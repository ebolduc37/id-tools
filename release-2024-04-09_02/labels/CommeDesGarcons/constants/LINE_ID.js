/**
 * Initialization of LINE_ID.
 *
 * Initialization of the COMME des GARÇONS line IDs and their corresponding
 * lines with adjusted operation period and production schedule if required.
 *
 * @author Etienne Bolduc
 */

import { Collection, deepFreeze } from "../../../utils/index.js";
import LineCDG from "../utils/classes/LineCDG.js";
import LINE from "./LINE.js";

// Initializing useful parameter
const Season = Collection.Season;
const ProductionSchedule = LineCDG.ProductionSchedule;

/**
 * Enum for the COMME des GARÇONS line IDs and their corresponding lines.
 * @constant
 * @readonly
 * @enum {LINE[]}
 */
const LINE_ID = deepFreeze({

     _: [LINE.CDG.newUpperBound(new Collection(1982, Season.S)).newProductionSchedule(ProductionSchedule.LATE)],

     1: [LINE.BLK],

     2: [LINE.POCKET],

     3: [LINE.TAOCDG,
     LINE.NOIRKN],

     5: [LINE.SPEEDO],

     6: [LINE.EDITW],

     7: [LINE.EDITM],

     8: [LINE.WALL],

     A: [LINE.NOIR.newUpperBound(new Collection(1995, Season.W)),
     LINE.PLAY],

     B: [LINE.PPDSM],

     D: [LINE.H2],

     E: [LINE.CDG.newBounds(new Collection(1982, Season.W), new Collection(2005, Season.W)),
     LINE.RKCDG,
     LINE.NOIR.newUpperBound(new Collection(2005, Season.W)),
     LINE.GAN],

     F: [LINE.FR,
     LINE.SHIRT.newLowerBound(new Collection(2021, Season.S)),
     LINE.FOREVER.newLowerBound(new Collection(2021, Season.S))],

     G: [LINE.CDG.newLowerBound(new Collection(1982, Season.W)),
     LINE.NOIR.newLowerBound(new Collection(2005, Season.W))],

     H: [LINE.H],

     I: [LINE.IND,
     LINE.HI,
     LINE.HH,
     LINE.JAN,
     LINE.JWMAN.newBounds(new Collection(2006, Season.S), new Collection(2006, Season.S)),
     LINE.ALIVE,
     LINE.GDS,
     LINE.CDGSE.newBounds(new Collection(2011, Season.W), new Collection(2012, Season.W))],

     J: [LINE.JW],

     K: [LINE.AOY,
     LINE.CHAOY],

     L: [LINE.ISE115,
     LINE.ISE2MAN,
     LINE.PPOH],

     N: [LINE.GIRL],

     O: [LINE.CCNO,
     LINE.AOYSE,
     LINE.CDGCDG.newBounds(new Collection(2005, Season.S), new Collection(2005, Season.S)),
     LINE.CDGSE,
     LINE.WALLSE,
     LINE.EYESE,
     LINE.SPEEDOSE,
     LINE.TRAD,
     LINE.PLAYXMAX,
     LINE.GUCCI,
     LINE.BM,
     LINE.CDGLINESE,
     LINE.FRIENDS,
     LINE.PPOH,
     LINE.PEOPLE],

     P: [LINE.HP,
     LINE.HPS,
     LINE.HPE],

     Q: [LINE.ALD],

     R: [LINE.RDC,
     LINE.CDGCDG.newLowerBound(new Collection(2005, Season.S))],

     S: [LINE.CC,
     LINE.CDGLINE],

     T: [LINE.TRIC,
     LINE.TAO],

     U: [LINE.HPD,
     LINE.PINK],

     V: [LINE.JW.newUpperBound(new Collection(2005, Season.W)),
     LINE.BEAT],

     W: [LINE.JWMAN,
     LINE.EYE],

     X: [LINE.HP.newUpperBound(new Collection(2005, Season.W)),
     LINE.RKHP,
     LINE.JWD],

     Y: [LINE.JWMAN.newUpperBound(new Collection(2005, Season.W))],

     Z: [LINE.TWO,
     LINE.PEG,
     LINE.VIV,
     LINE.CDGCHG]
});

export default LINE_ID;
