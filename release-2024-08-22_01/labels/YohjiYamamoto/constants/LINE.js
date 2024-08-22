/**
 * Initialization of LINE.
 *
 * Initialization of all Yohji Yamamoto lines with information
 * on their operation period.
 *
 * @author Etienne Bolduc
 */

import { Collection, Line, OperationPeriod, deepFreeze } from "../../../utils/index.js";

// Initializing useful parameter
const Season = Collection.Season;

// Only the lines with a logo list are scanned through for identification
const LOGO_LIST_MAINLINE = {
    "YY_1": new OperationPeriod(new Collection(1981, Season.W), new Collection(1985, Season.S)),
    "YY_2": new OperationPeriod(new Collection(1984, Season.S), new Collection(1991, Season.W)),
    "YY_3": new OperationPeriod(new Collection(1991, Season.W)),
};
const LOGO_LIST_YY_3 = {
    "YY_3": new OperationPeriod(new Collection(1991, Season.W)),
};

/**
 * Enum for all Yohji Yamamoto lines with their operation period.
 * @constant
 * @readonly
 * @enum {Line}
 */
const LINE = deepFreeze({

    // Y's logo: filing
    // bold: 1981-10-20
    // classic: 1992-05-20
    // weird: 2006-05-08

    // TO CATAGORIZE
    // A.A.R.
    // Y’s (for men?) red label (designed in collaboration with Michiko Suzuki launched AW2006)
    // Y's at work
    // Yohji Yamamoto jeans
    // Impermeable (1989/03 - ?)
    // Y'saccs (1986-2001)
    // Yohji Yamamoto X Repetto
    // Y’s Mandarina
    // YOHJI YAMAMOTO PRODUCE
    // Gipsy (SS14 - SS21 at least)
    // Yohji Yamamoto POUR LA NUIT

    // B
    BISL: new Line("Y's bis LIMI", // looks like it followed the season ID
        new OperationPeriod(new Collection(1999, Season.W), new Collection(2002, Season.S))),
    // Y's bis
    // Y's company.,limited bis
    // Y's bis Le Blue Collar

    // D
    DISC: new Line("discord Yohji Yamamoto",
        new OperationPeriod(new Collection(2014, Season.W))),

    // F
    YY: new Line("Yohji Yamamoto",
        new OperationPeriod(new Collection(1981, Season.W)),
        LOGO_LIST_MAINLINE),
    YYFI: new Line("Yohji Yamamoto [Made in France or Italy]",
        new OperationPeriod(new Collection(1991, Season.W), new Collection(1999, Season.W)),
        LOGO_LIST_YY_3),
    RYY: new Line("REGULATION Yohji Yamamoto",
        new OperationPeriod(new Collection(2013, Season.S))),
    YYC: new Line("Yohji Yamamoto collections",
        new OperationPeriod(new Collection(2021, Season.W))),
    // Yohji Yamamoto Maison

    // G
    GRY: new Line("Ground Y",
        new OperationPeriod(new Collection(2014, Season.W))),

    // H
    YYPH: new Line("Yohji Yamamoto POUR HOMME",
        new OperationPeriod(new Collection(1981, Season.W)),
        LOGO_LIST_MAINLINE),
    YYPHFI: new Line("Yohji Yamamoto POUR HOMME [Made in France or Italy]",
        new OperationPeriod(new Collection(1991, Season.W), new Collection(1999, Season.W)),
        LOGO_LIST_YY_3),
    YYCH: new Line("Yohji Yamamoto COSTUME D'HOMME",
        new OperationPeriod(new Collection(1992, Season.W), new Collection(2015, Season.S))),
    BSYY: new Line("BLACK Scandal Yohji Yamamoto",
        new OperationPeriod(new Collection(2018, Season.S))),
    POWS: new Line("power of the WHITE shirt",
        new OperationPeriod(new Collection(2022, Season.W))),
    // REGULATION Yohji Yamamoto MEN (AW13 - AW20 at least but seems to have merged with other)
    // Gothic (80s then 2013)

    // I
    // i wish Y's bis

    // L
    LIMI: new Line("LIMI feu",
        new OperationPeriod(new Collection(2002, Season.W))),

    // M
    YFM: new Line("Y's for Men", // also found with U
        new OperationPeriod(new Collection(1979, Season.S), null,
            col => !col.isBetween(new Collection(2010, Season.S), new Collection(2023, Season.S)))),
    // Y's [men]
    // Y's for Men SHIRTS
    // Y's Aspesi

    // N
    NOIR: new Line("Yohji Yamamoto + NOIR",
        new OperationPeriod(new Collection(1995), new Collection(2021, Season.S))),
    BYY: new Line("B Yohji Yamamoto",
        new OperationPeriod(new Collection(2016, Season.W), new Collection(2020, Season.W))),

    // S
    WILD: new Line("WILDSIDE YOHJI YAMAMOTO",
        new OperationPeriod(new Collection(2022, Season.W)),
        LOGO_LIST_MAINLINE),

    // U
    SYTE: new Line("S'YTE", // also found with O
    new OperationPeriod(new Collection(2011, Season.W))),

    // Y
    YS: new Line("Y's",
        new OperationPeriod(new Collection(1972))),
    BANG: new Line("Y's BANG ON!", // always YA I think
        new OperationPeriod(new Collection(2018, Season.W))),
    // Y's PINK
    // MICHIKO by Y's
    // KAYO NAKAMURA by Y's
    // TAKESHI KOSAKA by Y's Pink Label since ss14
    // Gipsy since ss14
    // RISMAT by Y's
    // Y's....[Y's B]

    // Exceptions with no line ID
    Y3: new Line("Y-3", // not blank code but not regular
        new OperationPeriod(new Collection(2003, Season.S))),
    CS: new Line("Coming Soon", // not blank code but not regular
        new OperationPeriod(new Collection(2008, Season.W), new Collection(2011, Season.S))),
    YYR: new Line("Yohji Yamamoto by RIEFE",
        new OperationPeriod(new Collection(2021, Season.S))), // July 14 2021 launch
    // AAR since 2012

});

export default LINE;
