/**
 * Initialization of LINES.
 *
 * Initialization of all Yohji Yamamoto lines with information
 * on their operation period.
 *
 * @author Etienne Bolduc
 */

import { Collection, OperationPeriod, deepFreeze } from "../../../utils/index.js";
import { LineYY } from "../utils/index.js";

// Initializing useful parameter
const SEASONS = Collection.SEASONS;

// Only the lines with a logo list are scanned through for identification
const LOGO_LIST_MAINLINE = {
    "YY_I": new OperationPeriod(new Collection(1981, SEASONS.W), new Collection(1985, SEASONS.S)),
    "YY_II": new OperationPeriod(new Collection(1984, SEASONS.S), new Collection(1991, SEASONS.W)),
    "YY_III": new OperationPeriod(new Collection(1991, SEASONS.W))
};
const LOGO_LIST_YY_III = {
    "YY_III": new OperationPeriod(new Collection(1991, SEASONS.W))
};
const LOGO_LIST_ELSE = {
    "ELSE": new OperationPeriod()
};
const LOGO_LIST_ANY = {
    "ANY": new OperationPeriod()
};

/**
 * Enum for all Yohji Yamamoto lines with their operation period.
 * @constant
 * @readonly
 * @enum {LineYY}
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
    // Yohji Yamamoto POUR LA NUIT

    // B
    BISL: new LineYY("Y's bis LIMI", // looks like it followed the season ID
        new OperationPeriod(new Collection(1999, SEASONS.W), new Collection(2002, SEASONS.S))),
    // Y's bis
    // Y's company.,limited bis
    // Y's bis Le Blue Collar

    // D
    DISC: new LineYY("discord Yohji Yamamoto",
        new OperationPeriod(new Collection(2014, SEASONS.W))),

    // F
    YY: new LineYY("Yohji Yamamoto",
        new OperationPeriod(new Collection(1981, SEASONS.W)),
        LOGO_LIST_MAINLINE),
    RYY: new LineYY("REGULATION Yohji Yamamoto",
        new OperationPeriod(new Collection(2013, SEASONS.S))),
    YYC: new LineYY("Yohji Yamamoto collections",
        new OperationPeriod(new Collection(2021, SEASONS.W))),
    // Yohji Yamamoto Maison

    // G
    GRY: new LineYY("Ground Y",
        new OperationPeriod(new Collection(2014, SEASONS.W))),

    // H
    YYPH: new LineYY("Yohji Yamamoto POUR HOMME",
        new OperationPeriod(new Collection(1981, SEASONS.W)),
        LOGO_LIST_MAINLINE),
    YYCH: new LineYY("Yohji Yamamoto COSTUME D'HOMME",
        new OperationPeriod(new Collection(1992, SEASONS.W), new Collection(2015, SEASONS.S))),
    BSYY: new LineYY("BLACK Scandal Yohji Yamamoto",
        new OperationPeriod(new Collection(2018, SEASONS.S))),
    POWS: new LineYY("power of the WHITE shirt",
        new OperationPeriod(new Collection(2022, SEASONS.W))),
    // REGULATION Yohji Yamamoto MEN (AW13 - AW20 at least but seems to have merged with other)
    // Gothic (80s then 2013)

    // I
    // i wish Y's bis

    // L
    LIMI: new LineYY("LIMI feu",
        new OperationPeriod(new Collection(2002, SEASONS.W))),

    // M
    YFM: new LineYY("Y's for Men", // also found with U
        new OperationPeriod(new Collection(1979, SEASONS.S), null,
            col => !col.isBetween(new Collection(2010, SEASONS.S), new Collection(2023, SEASONS.S)))),
    // Y's [men]
    // Y's for Men SHIRTS
    // Y's Aspesi

    // N
    NOIR: new LineYY("Yohji Yamamoto + NOIR",
        new OperationPeriod(new Collection(1995), new Collection(2021, SEASONS.S))),
    BYY: new LineYY("B Yohji Yamamoto",
        new OperationPeriod(new Collection(2016, SEASONS.W), new Collection(2020, SEASONS.W))),

    // S
    WILD: new LineYY("WILDSIDE YOHJI YAMAMOTO",
        new OperationPeriod(new Collection(2022, SEASONS.W)),
        LOGO_LIST_ELSE),

    // U
    SYTE: new LineYY("S'YTE", // also found with O
    new OperationPeriod(new Collection(2011, SEASONS.W))),

    // Y
    YS: new LineYY("Y's",
        new OperationPeriod(new Collection(1972))),
    BANG: new LineYY("Y's BANG ON!", // always YA I think
        new OperationPeriod(new Collection(2018, SEASONS.W))),
    // Y's PINK
    // MICHIKO by Y's
    // KAYO NAKAMURA by Y's
    // RISMAT by Y's
    // Y's....[Y's B]

    // Exceptions
    YYFI: new LineYY("Yohji Yamamoto [Made in France or Italy]",
        new OperationPeriod(new Collection(1991, SEASONS.W), new Collection(1999, SEASONS.W)),
        LOGO_LIST_YY_III),
    YYPHFI: new LineYY("Yohji Yamamoto POUR HOMME [Made in France or Italy]",
        new OperationPeriod(new Collection(1991, SEASONS.W), new Collection(1999, SEASONS.W)),
        LOGO_LIST_YY_III),
    Y3: new LineYY("Y-3", // not blank code but not regular
        new OperationPeriod(new Collection(2003, SEASONS.S))),
    CS: new LineYY("Coming Soon", // not blank code but not regular
        new OperationPeriod(new Collection(2008, SEASONS.W), new Collection(2011, SEASONS.S))),
    CS: new LineYY("Yohji Yamamoto by RIEFE",
        new OperationPeriod(new Collection(2021, SEASONS.S))), // July 14 2021 launch
    // AAR

});

export default LINES;
