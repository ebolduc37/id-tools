/**
 * Initialization of LINES.
 *
 * Initialization of all COMME des GARÇONS lines with information
 * on their operation period and production schedule when required.
 *
 * @author Etienne Bolduc
 */

import { Collection, Line, OperationPeriod, deepFreeze } from "../../../utils/index.js";

// Initializing useful parameters
const SEASONS = Collection.SEASONS;
const PRODUCTION_SCHEDULE_TYPES = Line.PRODUCTION_SCHEDULE_TYPES;

/**
 * Enum for all COMME des GARÇONS lines with their operation period and production schedule when required.
 * @constant
 * @readonly
 * @enum {Line}
 */
const LINES = deepFreeze({

    // _
    CDG: new Line("COMME des GARÇONS",
        new OperationPeriod(new Collection(1969)),
        PRODUCTION_SCHEDULE_TYPES.EARLY), // L production schedule until Spring/Summer 1982 in LINEID

    // 1
    BLK: new Line("BLACK COMME des GARÇONS",
        new OperationPeriod(new Collection(2009, SEASONS.S))),

    // 2
    POCKET: new Line("COMME des GARÇONS POCKET",
        new OperationPeriod(new Collection(2011, SEASONS.S), new Collection(2017))),

    // 3
    TAOCDG: new Line("tao COMME des GARÇONS",
        new OperationPeriod(new Collection(2005, SEASONS.W), new Collection(2011, SEASONS.S))),
    NOIRKN: new Line("noir kei ninomiya",
        new OperationPeriod(new Collection(2013, SEASONS.W))),

    // 5
    SPEEDO: new Line("speedo COMME des GARÇONS",
        new OperationPeriod((new Collection(2007, SEASONS.S), new Collection(2009, SEASONS.S),
            col => col.isS()))),

    // 6
    EDITW: new Line("COMME des GARÇONS EDITED [women]",
        new OperationPeriod(new Collection(2007, SEASONS.S))),

    // 7
    EDITM: new Line("COMME des GARÇONS EDITED [men]",
        new OperationPeriod(new Collection(2007, SEASONS.S))),

    // 8
    WALL: new Line("Wallet COMME des GARÇONS",
        new OperationPeriod(new Collection(1980)),
        PRODUCTION_SCHEDULE_TYPES.LATE),

    // A
    NOIR: new Line("COMME des GARÇONS NOIR",
        new OperationPeriod(new Collection(1987, SEASONS.W), new Collection(2009, SEASONS.S),
            col => !col.isBetween(new Collection(1996, SEASONS.S), new Collection(2005, SEASONS.S))),
        PRODUCTION_SCHEDULE_TYPES.EARLY),
    PLAY: new Line("PLAY COMME des GARÇONS",
        new OperationPeriod(new Collection(2002))),

    // B
    PPDSM: new Line("COMME des GARÇONS parfums PARFUMS [shop exclusive DOVER STREET MARKET launch]",
        new OperationPeriod(new Collection(2009, SEASONS.W), new Collection(2009, SEASONS.W))),

    // D
    H2: new Line("COMME des GARÇONS HOMME DEUX",
        new OperationPeriod(new Collection(1987)),
        PRODUCTION_SCHEDULE_TYPES.LATE),

    // E
    RKCDG: new Line("Rei Kawakubo [COMME des GARÇONS Canadian trademark]",
        new OperationPeriod(new Collection(1984, SEASONS.S), new Collection(1995, SEASONS.W)),
        PRODUCTION_SCHEDULE_TYPES.EARLY),
    GAN: new Line("GANRYU COMME des GARÇONS",
        new OperationPeriod(new Collection(2008, SEASONS.S), new Collection(2017, SEASONS.S))),

    // F
    FR: new Line("COMME des GARÇONS FRANCE",
        new OperationPeriod(new Collection(1983, SEASONS.W), new Collection(1987, SEASONS.W)),
        PRODUCTION_SCHEDULE_TYPES.LATE),
    SHIRT: new Line("COMME des GARÇONS SHIRT",
        new OperationPeriod(new Collection(1988))),
    FOREVER: new Line("COMME des GARÇONS SHIRT [FOREVER]",
        new OperationPeriod(new Collection(2010))),
    SHIRTGIRL: new Line("COMME des GARÇONS SHIRT [GIRL]",
        new OperationPeriod(new Collection(2010, SEASONS.S), new Collection(2014, SEASONS.W))),
    SHIRTBOY: new Line("COMME des GARÇONS SHIRT BOY",
        new OperationPeriod(new Collection(2015, SEASONS.W), new Collection(2016, SEASONS.S))),
    SHIRTBOYS: new Line("COMME des GARÇONS SHIRT boys",
        new OperationPeriod(new Collection(2016, SEASONS.W), new Collection(2019, SEASONS.S))),

    // H
    H: new Line("COMME des GARÇONS HOMME",
        new OperationPeriod(new Collection(1978)),
        PRODUCTION_SCHEDULE_TYPES.LATE),

    // I
    IND: new Line("COMME des GARÇONS indigo",
        new OperationPeriod(new Collection(1983, SEASONS.W), new Collection(1987, SEASONS.W)),
        PRODUCTION_SCHEDULE_TYPES.LATE),
    HI: new Line("COMME des GARÇONS HOMME [inverted]",
        new OperationPeriod(new Collection(1994, SEASONS.S), new Collection(1998, SEASONS.W)),
        PRODUCTION_SCHEDULE_TYPES.LATE),
    HH: new Line("COMME des GARÇONS HOMME HOMME",
        new OperationPeriod(new Collection(1999, SEASONS.S), new Collection(2001, SEASONS.W)),
        PRODUCTION_SCHEDULE_TYPES.LATE),
    JAN: new Line("JAN COMME des GARÇONS",
        new OperationPeriod(new Collection(2005, SEASONS.S), new Collection(2006, SEASONS.W))),
    ALIVE: new Line("MAGAZINE ALIVE (VOGUE NIPPON and COMME des GARÇONS)",
        new OperationPeriod(new Collection(2009, SEASONS.W), new Collection(2009, SEASONS.W))),
    GDS: new Line("GOOD DESIGN SHOP COMME des GARÇONS",
        new OperationPeriod(new Collection(2011), new Collection(2018))),

    // J
    JW: new Line("JUNYA WATANABE COMME des GARÇONS",
        new OperationPeriod(new Collection(1992, SEASONS.W)),
        PRODUCTION_SCHEDULE_TYPES.EARLY),

    // K
    AOY: new Line("COMME des GARÇONS [Aoyama exclusive]",
        new OperationPeriod(new Collection(1989, SEASONS.S)),
        PRODUCTION_SCHEDULE_TYPES.LATE),
    CHAOY: new Line("COMME des GARÇONS Chrome Hearts [Aoyama exclusive]",
        new OperationPeriod(new Collection(2012, SEASONS.S), new Collection(2012, SEASONS.W))),

    // L
    ISE115: new Line("COMME des GARÇONS [ISETAN 115yrs]",
        new OperationPeriod(new Collection(2001, SEASONS.W), new Collection(2001, SEASONS.W)),
        PRODUCTION_SCHEDULE_TYPES.LATE),
    ISE2MAN: new Line("COMME des GARÇONS HOMME PLUS [CELEBRATION ISETAN MEN'S 1YEAR + COMME des GARCONS 2 MAN]",
        new OperationPeriod(new Collection(2004, SEASONS.W), new Collection(2004, SEASONS.W))),
    PPOH: new Line("COMME des GARÇONS parfums PARFUMS [shop exclusive ODOUR HOLIDAY]",
        new OperationPeriod(new Collection(2019, SEASONS.W), new Collection(2019, SEASONS.W))),

    // N
    GIRL: new Line("COMME des GARÇONS GIRL",
        new OperationPeriod(new Collection(2015, SEASONS.S))),

    // O
    CCNO: new Line("10 corso como COMME des GARÇONS [shop exclusive number series]",
        new OperationPeriod(new Collection(2002, SEASONS.S), new Collection(2003, SEASONS.W)),
        PRODUCTION_SCHEDULE_TYPES.LATE),
    AOYSE: new Line("COMME des GARÇONS [Aoyama exclusive]",
        new OperationPeriod(new Collection(2004, SEASONS.W), new Collection(2004, SEASONS.W))),
    CDGSE: new Line("COMME des GARÇONS [shop exclusive]",
        new OperationPeriod(new Collection(2005))),
    WALLSE: new Line("Wallet COMME des GARÇONS [shop exclusive]",
        new OperationPeriod(new Collection(2005))),
    EYESE: new Line("eYe JUNYA WATANABE COMME des GARÇONS MAN [shop exclusive]",
        new OperationPeriod(new Collection(2005, SEASONS.W), new Collection(2005, SEASONS.W))),
    SPEEDOSE: new Line("speedo COMME des GARÇONS [shop exclusive]",
        new OperationPeriod(new Collection(2006, SEASONS.S), new Collection(2006, SEASONS.S))),
    TRAD: new Line("TRADING MUSEUM COMME des GARÇONS",
        new OperationPeriod(new Collection(2009, SEASONS.W))),
    PLAYXMAX: new Line("PLAY COMME des GARÇONS [shop exclusive holidays special]",
        new OperationPeriod(new Collection(2013, SEASONS.W), new Collection(2017, SEASONS.W),
            col => col.isW())),
    BM: new Line("black market COMME des GARÇONS",
        new OperationPeriod(new Collection(2017, SEASONS.S))),
    CDGLINESE: new Line("CDG [shop exclusive]",
        new OperationPeriod(new Collection(2018, SEASONS.S), new Collection(2018, SEASONS.S))),
    FRIENDS: new Line("Friends and COMME des GARÇONS Happy Holidays",
        new OperationPeriod(new Collection(2018, SEASONS.W), new Collection(2018, SEASONS.W))),
    PEOPLE: new Line("COMME des GARÇONS [People of the Year by COMME des GARÇONS and SWITCH]",
        new OperationPeriod(new Collection(2020, SEASONS.W), new Collection(2020, SEASONS.W))),

    // P
    HP: new Line("COMME des GARÇONS HOMME PLUS",
        new OperationPeriod(new Collection(1985, SEASONS.S)),
        PRODUCTION_SCHEDULE_TYPES.EARLY),
    HPS: new Line("SPORT COMME des GARÇONS HOMME PLUS",
        new OperationPeriod(new Collection(2005, SEASONS.W), new Collection(2006, SEASONS.W))),
    HPE: new Line("COMME des GARÇONS HOMME PLUS EVER GREEN",
        new OperationPeriod(new Collection(2005, SEASONS.W), new Collection(2009, SEASONS.W))),

    // Q
    ALD: new Line("aldentelacrise for Comme des Garçons",
        new OperationPeriod(new Collection(2009, SEASONS.W), new Collection(2009, SEASONS.W))),

    // R
    RDC: new Line("robe de chambre COMME des GARÇONS",
        new OperationPeriod(new Collection(1981), new Collection(2004, SEASONS.W),),
        PRODUCTION_SCHEDULE_TYPES.LATE),
    CDGCDG: new Line("COMME des GARÇONS COMME des GARÇONS",
        new OperationPeriod(new Collection(1993))),

    // S
    CC: new Line("10 corso como COMME des GARÇONS",
        new OperationPeriod(new Collection(2002, SEASONS.S), new Collection(2011, SEASONS.W)),
        PRODUCTION_SCHEDULE_TYPES.LATE),
    CDGLINE: new Line("CDG",
        new OperationPeriod(new Collection(2018, SEASONS.S))),

    // T
    TRIC: new Line("tricot COMME des GARÇONS",
        new OperationPeriod(new Collection(1981), new Collection(2021, SEASONS.W)),
        PRODUCTION_SCHEDULE_TYPES.LATE),
    TAO: new Line("tao",
        new OperationPeriod(new Collection(2022, SEASONS.S))),

    // U
    HPD: new Line("COMME des GARÇONS HOMME PLUS in collaboration with District UNITED ARROWS",
        new OperationPeriod(new Collection(2000, SEASONS.W), new Collection(2005, SEASONS.W),
            col => !col.isBetween(new Collection(2003, SEASONS.S), new Collection(2005, SEASONS.S))),
        PRODUCTION_SCHEDULE_TYPES.EARLY),
    PINK: new Line("JUNYA WATANABE COMME des GARÇONS [pink]",
        new OperationPeriod(new Collection(2003, SEASONS.S), new Collection(2014, SEASONS.S))),

    // V
    BEAT: new Line("The Beatles COMME des GARÇONS",
        new OperationPeriod(new Collection(2009, SEASONS.S))),

    // W
    JWMAN: new Line("JUNYA WATANABE COMME des GARÇONS MAN",
        new OperationPeriod(new Collection(2002, SEASONS.S)),
        PRODUCTION_SCHEDULE_TYPES.EARLY),
    EYE: new Line("eYe JUNYA WATANABE COMME des GARÇONS MAN",
        new OperationPeriod(new Collection(2005, SEASONS.W))),

    // X
    RKHP: new Line("Rei Kawakubo [COMME des GARÇONS HOMME PLUS Canadian trademark]",
        new OperationPeriod(new Collection(1985, SEASONS.S), new Collection(1995, SEASONS.W)),
        PRODUCTION_SCHEDULE_TYPES.EARLY),
    JWD: new Line("JUNYA WATANABE COMME des GARÇONS denim",
        new OperationPeriod(new Collection(2014), new Collection(2021, SEASONS.W))),

    // Z
    TWO: new Line("COMME des GARÇONS HOMME HOMME [Aoyama exclusive COMME des GARÇONS two]",
        new OperationPeriod(new Collection(1999, SEASONS.S), new Collection(2001, SEASONS.W)),
        PRODUCTION_SCHEDULE_TYPES.LATE),
    PEG: new Line("Peggy Moffitt COMME des GARÇONS",
        new OperationPeriod(new Collection(2003, SEASONS.S), new Collection(2005, SEASONS.W))),
    VIV: new Line("Vivienne Westwood COMME des GARÇONS",
        new OperationPeriod(new Collection(2003, SEASONS.W), new Collection(2004, SEASONS.S))),
    CDGCHG: new Line("COMME des GARÇONS Chrome Hearts [DOVER STREET MARKET GINZA exclusive]",
        new OperationPeriod(new Collection(2012), new Collection(2019))),

    // EXCEPTIONS
    CCBB: new Line("10 corso como COMME des GARÇONS [BE@RBRICK series]"),
    HPCH: new Line("COMME des GARÇONS HOMME PLUS customized by Chrome Hearts"), // both labels on garment
    CCSS: new Line("10 corso como COMME des GARÇONS [summer series]"),
    SHCHRE: new Line("COMME des GARÇONS Chrome Hearts [striped shirt limited edition]"), // only the double name label
    SHCH: new Line("COMME des GARÇONS SHIRT customized by Chrome Hearts"),  // both labels on garment
    HPCHRE: new Line("COMME des GARÇONS Chrome Hearts [custom COMME des GARÇONS HOMME PLUS]"), // only the double name label
    CHLIM: new Line("COMME des GARÇONS Chrome Hearts [Aoyama exclusive limited release]"), // only the double name label
});

export default LINES;
