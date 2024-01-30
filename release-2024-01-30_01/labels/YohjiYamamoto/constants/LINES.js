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

    // Y's logo: filing
    // bold: 1981-10-20
    // classic: 1992-05-20
    // weird: 2006-05-08

    // TO CATAGORIZE
    // Y’s (for men?) red label (designed in collaboration with Michiko Suzuki launched AW2006)
    // Y's at work
    // Yohji Yamamoto jeans
    // Impermeable (1989/03 - ?)
    // Y'saccs (1986-2001)
    // Yohji Yamamoto X Repetto
    // Y’s Mandarina
    // YOHJI YAMAMOTO PRODUCE
    // Gipsy (AW14 - SS21 at least)

    // B
    BISL: new Line("Y's bis LIMI",
        new OperationPeriod(new Collection(1999, SEASONS.W), new Collection(2002, SEASONS.S)),
        SIGNATURE_TYPES.OTHER), // looks like it followed the season ID
    // Y's bis
    // Y's company.,limited bis
    // Y's bis Le Blue Collar

    // D
    DISC: new Line("discord Yohji Yamamoto",
        new OperationPeriod(new Collection(2014, SEASONS.W)),
        SIGNATURE_TYPES.OTHER),

    // F
    YY: new Line("Yohji Yamamoto",
        new OperationPeriod(new Collection(1981, SEASONS.W)),
        SIGNATURE_TYPES.MAIN),
    RYY: new Line("REGULATION Yohji Yamamoto",
        new OperationPeriod(new Collection(2013, SEASONS.S)),
        SIGNATURE_TYPES.OTHER),
    YYC: new Line("Yohji Yamamoto collections",
        new OperationPeriod(new Collection(2021, SEASONS.W)),
        SIGNATURE_TYPES.MAIN),
    // Yohji Yamamoto Maison

    // G
    GRY: new Line("Ground Y",
        new OperationPeriod(new Collection(2014, SEASONS.W)),
        SIGNATURE_TYPES.OTHER),

    // H
    YYPH: new Line("Yohji Yamamoto POUR HOMME",
        new OperationPeriod(new Collection(1981, SEASONS.W)),
        SIGNATURE_TYPES.MAIN),
    YYCH: new Line("Yohji Yamamoto COSTUME D’HOMME",
        new OperationPeriod(new Collection(1992, SEASONS.W), new Collection(2015, SEASONS.S)),
        SIGNATURE_TYPES.OTHER),
    BSYY: new Line("BLACK Scandal Yohji Yamamoto",
        new OperationPeriod(new Collection(2018, SEASONS.S)),
        SIGNATURE_TYPES.OTHER),
    POWS: new Line("power of the WHITE shirt",
        new OperationPeriod(new Collection(2022, SEASONS.W)),
        SIGNATURE_TYPES.OTHER),
    // REGULATION Yohji Yamamoto MEN (AW13 - AW20 at least but seems to have merged with other)
    // Gothic (80s then 2013)

    // I
    // i wish Y's bis

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
    // Y's for Men SHIRTS
    // Y's Aspesi

    // N
    NOIR: new Line("Yohji Yamamoto + NOIR",
        new OperationPeriod(new Collection(1995)), new Collection(2021, SEASONS.S),
        SIGNATURE_TYPES.OTHER),
    BYY: new Line("B Yohji Yamamoto",
        new OperationPeriod(new Collection(2016, SEASONS.W), new Collection(2020, SEASONS.W)),
        SIGNATURE_TYPES.OTHER),

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
    BANG: new Line("Y's BANG ON!", // always YA I think
        new OperationPeriod(new Collection(2018, SEASONS.W)),
        SIGNATURE_TYPES.OTHER),
    // Y's PINK
    // MICHIKO by Y's
    // KAYO NAKAMURA by Y's
    // RISMAT by Y's
    // Y's....[Y's B]

    // Exceptions
    YYFI: new Line("Yohji Yamamoto [made in France or Italy]",
        new OperationPeriod(new Collection(1991, SEASONS.W), new Collection(1999, SEASONS.W)),
        SIGNATURE_TYPES.MAIN),
    YYPHFI: new Line("Yohji Yamamoto POUR HOMME [made in France or Italy]",
        new OperationPeriod(new Collection(1991, SEASONS.W), new Collection(1999, SEASONS.W)),
        SIGNATURE_TYPES.MAIN),
    Y3: new Line("Y-3", // not blank code but not regular
        new OperationPeriod(new Collection(2003, SEASONS.S), null),
        SIGNATURE_TYPES.OTHER),
    CS: new Line("Coming Soon", // not blank code but not regular
        new OperationPeriod(new Collection(2008, SEASONS.W), new Collection(2011, SEASONS.S)),
        SIGNATURE_TYPES.OTHER),
    CS: new Line("Yohji Yamamoto by RIEFE",
        new OperationPeriod(new Collection(2021, SEASONS.S)), // July 14 2021 launch
        SIGNATURE_TYPES.OTHER),
    // AAR

});

export default LINES;
