/**
 * Initialization of LINES.
 *
 * Initialization of all Yohji Yamamoto lines with information
 * on their operation period.
 *
 * @author Etienne Bolduc
 */

import { Collection, Line, OperationPeriod, deepFreeze } from "../../../utils/index.js";

// Initializing useful parameter
const SEASONS = Collection.SEASONS;
const SIGNATURE_TYPES = Line.SIGNATURE_TYPES;

/**
 * Enum for all Yohji Yamamoto lines with their operation period.
 * @constant
 * @readonly
 * @enum {Line}
 */
const LINES = deepFreeze({

    // TO CATAGORIZE
    // Y's for men shirts
    // Y’s for men red label (designed in collaboration with Michiko Suzuki in 2006)
    // Y's at work
    // Yohji Yamamoto jeans
    // Impermeable
    // Y'saccs (1986-2001)
    // Y-3
    // AAR
    // Yohji Yamamoto X Repetto
    // Y’s Mandarina
    // YOHJI YAMAMOTO PRODUCE
    // Y’s Bang On!

    // B
    BIS: new Line("Y's bis LIMI",
        new OperationPeriod(new Collection(1999, SEASONS.W), new Collection(2002, SEASONS.S)),
        SIGNATURE_TYPES.OTHER),

    // D
    // discord Yohji Yamamoto

    // F
    YY: new Line("Yohji Yamamoto (Pour Femme)",
        new OperationPeriod(new Collection(1981, SEASONS.W)),
        SIGNATURE_TYPES.MAIN),
    // REGULATION Yohji Yamamoto
    // Yohji Yamamoto Maison

    // G
    GR: new Line("Ground Y",
        new OperationPeriod(new Collection(2014, SEASONS.W)),
        SIGNATURE_TYPES.OTHER),

    // H
    YYPH: new Line("Yohji Yamamoto Pour Homme",
        new OperationPeriod(new Collection(1981, SEASONS.W)),
        SIGNATURE_TYPES.MAIN),
    // Yohji Yamamoto COSTUME D'HOMME
    // BLACK Scandal Yohji Yamamoto
    // REGULATION Yohji Yamamoto MEN
    // Power of the white shirt
    // Gothic

    // L
    LIMI: new Line("LIMI feu",
        new OperationPeriod(new Collection(2002, SEASONS.W)),
        SIGNATURE_TYPES.OTHER),

    // M
    YFM: new Line("Y's for Men", // also found with U
        new OperationPeriod(new Collection(1979, SEASONS.S), null,
        col => !col.isBetween(new Collection(2010, SEASONS.S), new Collection(2023, SEASONS.S))),
        SIGNATURE_TYPES.OTHER),
    // Y's [men]

    // N
    NOIR: new Line("Yohji Yamamoto + NOIR",
        new OperationPeriod(new Collection(1995)),
        SIGNATURE_TYPES.OTHER),
    // B Yohji Yamamoto

    // S
    WILD: new Line("WILDSIDE YOHJI YAMAMOTO",
        new OperationPeriod(new Collection(2022, SEASONS.W)),
        SIGNATURE_TYPES.OTHER),

    // U
    SYTE: new Line("S'YTE", // also found with O
    new OperationPeriod(new Collection(2011, SEASONS.W)),
    SIGNATURE_TYPES.OTHER),

    // Y
    YS: new Line("Y's",
        new OperationPeriod(new Collection(1972)),
        SIGNATURE_TYPES.OTHER),
    // Y's PINK
    // MICHIKO by Y's
    // KAYO NAKAMURA by Y's
    // RISMAT by Y's
    // Y's....[Y's B]

    // Exceptions
    YYFI: new Line("Yohji Yamamoto (Pour Femme) [made in France or Italy]",
        new OperationPeriod(new Collection(1991, SEASONS.W), new Collection(1999, SEASONS.W)),
        SIGNATURE_TYPES.MAIN),
    YYPHFI: new Line("Yohji Yamamoto Pour Homme [made in France or Italy]",
        new OperationPeriod(new Collection(1991, SEASONS.W), new Collection(1999, SEASONS.W)),
        SIGNATURE_TYPES.MAIN),
    CS: new Line("Coming Soon",
        new OperationPeriod(new Collection(2008, SEASONS.W), new Collection(2011, SEASONS.S)),
        SIGNATURE_TYPES.OTHER),

});

export default LINES;
