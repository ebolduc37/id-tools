/**
 * Initialization of LINE.
 *
 * Initialization of all COMME des GARÇONS lines with information
 * on their operation period and production schedule when required.
 *
 * @author Etienne Bolduc
 */

import { Collection, OperationPeriod, deepFreeze } from "../../../utils/index.js";
import LineCDG from "../utils/classes/LineCDG.js";

// Initializing useful parameters
const Season = Collection.Season;
const ProductionSchedule = LineCDG.ProductionSchedule;

/**
 * Enum for all COMME des GARÇONS lines with their operation period and production schedule when required.
 * @constant
 * @readonly
 * @enum {LineCDG}
 */
const LINE = deepFreeze({

    // _
    CDG: new LineCDG("COMME des GARÇONS",
        new OperationPeriod(new Collection(1969)),
        ProductionSchedule.EARLY), // L production schedule until Spring/Summer 1982 in LINEID

    // 1
    BLK: new LineCDG("BLACK COMME des GARÇONS",
        new OperationPeriod(new Collection(2009, Season.S))),

    // 2
    POCKET: new LineCDG("COMME des GARÇONS POCKET",
        new OperationPeriod(new Collection(2011, Season.S), new Collection(2017))),

    // 3
    TAOCDG: new LineCDG("tao COMME des GARÇONS",
        new OperationPeriod(new Collection(2005, Season.W), new Collection(2011, Season.S))),
    NOIRKN: new LineCDG("noir kei ninomiya",
        new OperationPeriod(new Collection(2013, Season.W))),

    // 5
    SPEEDO: new LineCDG("speedo COMME des GARÇONS",
        new OperationPeriod((new Collection(2007, Season.S), new Collection(2009, Season.S),
            col => col.isS()))),

    // 6
    EDITW: new LineCDG("COMME des GARÇONS EDITED [women]",
        new OperationPeriod(new Collection(2007, Season.S))),

    // 7
    EDITM: new LineCDG("COMME des GARÇONS EDITED [men]",
        new OperationPeriod(new Collection(2007, Season.S))),

    // 8
    WALL: new LineCDG("Wallet COMME des GARÇONS",
        new OperationPeriod(new Collection(1980)),
        ProductionSchedule.LATE),

    // A
    NOIR: new LineCDG("COMME des GARÇONS NOIR",
        new OperationPeriod(new Collection(1987, Season.W), new Collection(2009, Season.S),
            col => !col.isBetween(new Collection(1996, Season.S), new Collection(2005, Season.S))),
        ProductionSchedule.EARLY),
    PLAY: new LineCDG("PLAY COMME des GARÇONS",
        new OperationPeriod(new Collection(2002))),

    // B
    PPDSM: new LineCDG("COMME des GARÇONS parfums PARFUMS [shop exclusive DOVER STREET MARKET launch]",
        new OperationPeriod(new Collection(2009, Season.W), new Collection(2009, Season.W))),

    // D
    H2: new LineCDG("COMME des GARÇONS HOMME DEUX",
        new OperationPeriod(new Collection(1987)),
        ProductionSchedule.LATE),

    // E
    RKCDG: new LineCDG("Rei Kawakubo [COMME des GARÇONS under Canadian trademark]",
        new OperationPeriod(new Collection(1984, Season.S), new Collection(1995, Season.W)),
        ProductionSchedule.EARLY),
    GAN: new LineCDG("GANRYU COMME des GARÇONS",
        new OperationPeriod(new Collection(2008, Season.S), new Collection(2017, Season.S))),

    // F
    FR: new LineCDG("COMME des GARÇONS FRANCE",
        new OperationPeriod(new Collection(1983, Season.W), new Collection(1987, Season.W)),
        ProductionSchedule.LATE),
    SHIRT: new LineCDG("COMME des GARÇONS SHIRT",
        new OperationPeriod(new Collection(1988))),
    FOREVER: new LineCDG("COMME des GARÇONS SHIRT [FOREVER]",
        new OperationPeriod(new Collection(2010))),
    SHIRTGIRL: new LineCDG("COMME des GARÇONS SHIRT [GIRL]",
        new OperationPeriod(new Collection(2010, Season.S), new Collection(2014, Season.W))),
    SHIRTBOY: new LineCDG("COMME des GARÇONS SHIRT BOY",
        new OperationPeriod(new Collection(2015, Season.W), new Collection(2016, Season.S))),
    SHIRTBOYS: new LineCDG("COMME des GARÇONS SHIRT boys",
        new OperationPeriod(new Collection(2016, Season.W), new Collection(2019, Season.S))),

    // H
    H: new LineCDG("COMME des GARÇONS HOMME",
        new OperationPeriod(new Collection(1978)),
        ProductionSchedule.LATE),

    // I
    IND: new LineCDG("COMME des GARÇONS indigo",
        new OperationPeriod(new Collection(1983, Season.W), new Collection(1987, Season.W)),
        ProductionSchedule.LATE),
    HI: new LineCDG("COMME des GARÇONS HOMME [inverted]",
        new OperationPeriod(new Collection(1994, Season.S), new Collection(1998, Season.W)),
        ProductionSchedule.LATE),
    HH: new LineCDG("COMME des GARÇONS HOMME HOMME",
        new OperationPeriod(new Collection(1999, Season.S), new Collection(2001, Season.W)),
        ProductionSchedule.LATE),
    JAN: new LineCDG("JAN COMME des GARÇONS",
        new OperationPeriod(new Collection(2005, Season.S), new Collection(2006, Season.W))),
    ALIVE: new LineCDG("MAGAZINE ALIVE (VOGUE NIPPON and COMME des GARÇONS)",
        new OperationPeriod(new Collection(2009, Season.W), new Collection(2009, Season.W))),
    GDS: new LineCDG("GOOD DESIGN SHOP COMME des GARÇONS",
        new OperationPeriod(new Collection(2011), new Collection(2018))),

    // J
    JW: new LineCDG("JUNYA WATANABE COMME des GARÇONS",
        new OperationPeriod(new Collection(1992, Season.W)),
        ProductionSchedule.EARLY),

    // K
    AOY: new LineCDG("COMME des GARÇONS [Aoyama exclusive]",
        new OperationPeriod(new Collection(1989, Season.S)),
        ProductionSchedule.LATE),
    CHAOY: new LineCDG("COMME des GARÇONS Chrome Hearts [Aoyama exclusive]",
        new OperationPeriod(new Collection(2012, Season.S), new Collection(2012, Season.W))),

    // L
    ISE115: new LineCDG("COMME des GARÇONS [ISETAN 115yrs]",
        new OperationPeriod(new Collection(2001, Season.W), new Collection(2001, Season.W)),
        ProductionSchedule.LATE),
    ISE2MAN: new LineCDG("COMME des GARÇONS HOMME PLUS [CELEBRATION ISETAN MEN'S 1YEAR + COMME des GARCONS 2 MAN]",
        new OperationPeriod(new Collection(2004, Season.W), new Collection(2004, Season.W))),
    PPOH: new LineCDG("COMME des GARÇONS parfums PARFUMS [shop exclusive ODOUR HOLIDAY]",
        new OperationPeriod(new Collection(2019, Season.W), new Collection(2019, Season.W))),

    // N
    GIRL: new LineCDG("COMME des GARÇONS GIRL",
        new OperationPeriod(new Collection(2015, Season.S))),

    // O
    CCNO: new LineCDG("10 corso como COMME des GARÇONS [shop exclusive number series]",
        new OperationPeriod(new Collection(2002, Season.S), new Collection(2003, Season.W)),
        ProductionSchedule.LATE),
    AOYSE: new LineCDG("COMME des GARÇONS [Aoyama exclusive]",
        new OperationPeriod(new Collection(2004, Season.W), new Collection(2004, Season.W))),
    CDGSE: new LineCDG("COMME des GARÇONS [shop exclusive]",
        new OperationPeriod(new Collection(2005))),
    WALLSE: new LineCDG("Wallet COMME des GARÇONS [shop exclusive]",
        new OperationPeriod(new Collection(2005))),
    EYESE: new LineCDG("eYe JUNYA WATANABE COMME des GARÇONS MAN [shop exclusive]",
        new OperationPeriod(new Collection(2005, Season.W), new Collection(2005, Season.W))),
    SPEEDOSE: new LineCDG("speedo COMME des GARÇONS [shop exclusive]",
        new OperationPeriod(new Collection(2006, Season.S), new Collection(2006, Season.S))),
    TRAD: new LineCDG("TRADING MUSEUM COMME des GARÇONS",
        new OperationPeriod(new Collection(2009, Season.W))),
    PLAYXMAX: new LineCDG("PLAY COMME des GARÇONS [shop exclusive holidays special]",
        new OperationPeriod(new Collection(2013, Season.W), new Collection(2017, Season.W),
            col => col.isW())),
    GUCCI: new LineCDG("COMME des GARÇONS in collaboration with Gucci",
            new OperationPeriod(new Collection(2015, Season.W), null,
                col => !col.isBetween(new Collection(2016, Season.S), new Collection(2018, Season.S)))),
    BM: new LineCDG("black market COMME des GARÇONS",
        new OperationPeriod(new Collection(2017, Season.S))),
    CDGLINESE: new LineCDG("CDG [shop exclusive]",
        new OperationPeriod(new Collection(2018, Season.S), new Collection(2018, Season.S))),
    FRIENDS: new LineCDG("Friends and COMME des GARÇONS Happy Holidays",
        new OperationPeriod(new Collection(2018, Season.W), new Collection(2018, Season.W))),
    PEOPLE: new LineCDG("COMME des GARÇONS [People of the Year by COMME des GARÇONS and SWITCH]",
        new OperationPeriod(new Collection(2020, Season.W), new Collection(2020, Season.W))),

    // P
    HP: new LineCDG("COMME des GARÇONS HOMME PLUS",
        new OperationPeriod(new Collection(1985, Season.S)),
        ProductionSchedule.EARLY),
    HPS: new LineCDG("SPORT COMME des GARÇONS HOMME PLUS",
        new OperationPeriod(new Collection(2005, Season.W), new Collection(2006, Season.W))),
    HPE: new LineCDG("COMME des GARÇONS HOMME PLUS EVER GREEN",
        new OperationPeriod(new Collection(2005, Season.W), new Collection(2009, Season.W))),

    // Q
    ALD: new LineCDG("aldentelacrise for Comme des Garçons",
        new OperationPeriod(new Collection(2009, Season.W), new Collection(2009, Season.W))),

    // R
    RDC: new LineCDG("robe de chambre COMME des GARÇONS",
        new OperationPeriod(new Collection(1981), new Collection(2004, Season.W),),
        ProductionSchedule.LATE),
    CDGCDG: new LineCDG("COMME des GARÇONS COMME des GARÇONS",
        new OperationPeriod(new Collection(1993))),

    // S
    CC: new LineCDG("10 corso como COMME des GARÇONS",
        new OperationPeriod(new Collection(2002, Season.S), new Collection(2011, Season.W)),
        ProductionSchedule.LATE),
    CDGLINE: new LineCDG("CDG",
        new OperationPeriod(new Collection(2018, Season.S))),

    // T
    TRIC: new LineCDG("tricot COMME des GARÇONS",
        new OperationPeriod(new Collection(1981), new Collection(2021, Season.W)),
        ProductionSchedule.LATE),
    TAO: new LineCDG("tao",
        new OperationPeriod(new Collection(2022, Season.S))),

    // U
    HPD: new LineCDG("COMME des GARÇONS HOMME PLUS in collaboration with District UNITED ARROWS",
        new OperationPeriod(new Collection(2000, Season.W), new Collection(2005, Season.W),
            col => !col.isBetween(new Collection(2003, Season.S), new Collection(2005, Season.S))),
        ProductionSchedule.EARLY),
    PINK: new LineCDG("JUNYA WATANABE COMME des GARÇONS [pink]",
        new OperationPeriod(new Collection(2003, Season.S), new Collection(2014, Season.S))),

    // V
    BEAT: new LineCDG("The Beatles COMME des GARÇONS",
        new OperationPeriod(new Collection(2009, Season.S))),

    // W
    JWMAN: new LineCDG("JUNYA WATANABE COMME des GARÇONS MAN",
        new OperationPeriod(new Collection(2002, Season.S)),
        ProductionSchedule.EARLY),
    EYE: new LineCDG("eYe JUNYA WATANABE COMME des GARÇONS MAN",
        new OperationPeriod(new Collection(2005, Season.W))),

    // X
    RKHP: new LineCDG("Rei Kawakubo [COMME des GARÇONS HOMME PLUS under Canadian trademark]",
        new OperationPeriod(new Collection(1985, Season.S), new Collection(1995, Season.W)),
        ProductionSchedule.EARLY),
    JWD: new LineCDG("JUNYA WATANABE COMME des GARÇONS denim",
        new OperationPeriod(new Collection(2014), new Collection(2021, Season.W))),

    // Z
    TWO: new LineCDG("COMME des GARÇONS HOMME HOMME [Aoyama exclusive COMME des GARÇONS two]",
        new OperationPeriod(new Collection(1999, Season.S), new Collection(2001, Season.W)),
        ProductionSchedule.LATE),
    PEG: new LineCDG("Peggy Moffitt COMME des GARÇONS",
        new OperationPeriod(new Collection(2003, Season.S), new Collection(2005, Season.W))),
    VIV: new LineCDG("Vivienne Westwood COMME des GARÇONS",
        new OperationPeriod(new Collection(2003, Season.W), new Collection(2004, Season.S))),
    CDGCHG: new LineCDG("COMME des GARÇONS Chrome Hearts [DOVER STREET MARKET GINZA exclusive]",
        new OperationPeriod(new Collection(2012), new Collection(2019))),

    // EXCEPTIONS
    CCBB: new LineCDG("10 corso como COMME des GARÇONS [BE@RBRICK series]"),
    HPCH: new LineCDG("COMME des GARÇONS HOMME PLUS customized by Chrome Hearts"), // both labels on garment
    CCSS: new LineCDG("10 corso como COMME des GARÇONS [summer series]"),
    SHCHRE: new LineCDG("COMME des GARÇONS Chrome Hearts [striped shirt limited edition]"), // only the double name label
    SHCH: new LineCDG("COMME des GARÇONS SHIRT customized by Chrome Hearts"),  // both labels on garment
    HPCHRE: new LineCDG("COMME des GARÇONS Chrome Hearts [custom COMME des GARÇONS HOMME PLUS]"), // only the double name label
    CHLIM: new LineCDG("COMME des GARÇONS Chrome Hearts [Aoyama exclusive limited release]"), // only the double name label
});

export default LINE;
