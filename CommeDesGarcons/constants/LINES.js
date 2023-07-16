/**
 * Initialization of LINES.
 *
 * Initialization of the lines with information on their operation period and production schedule if necessary.
 *
 * @author Etienne Bolduc
 */

import { deepFreeze, Seasons, Collection, OperationPeriod } from "../../utils/index.js";
import ProductionSchedules from "../utils/enums/ProductionSchedules.js";
import LineCDG from "../utils/classes/LineCDG.js";

/**
 * Enum for the lines and their operation period and production schedule information
 * @constant
 * @readonly
 * @enum {LineCDG}
 */
const LINES = deepFreeze({

    // _
    CDG: new LineCDG("COMME des GARÇONS",
        new OperationPeriod(new Collection(1969)),
        ProductionSchedules.EARLY), // L production schedule until Spring/Summer 1982 in LINEID

    // 1
    BLK: new LineCDG("BLACK COMME des GARÇONS",
        new OperationPeriod(new Collection(2009, Seasons.S))),

    // 2
    POCKET: new LineCDG("COMME des GARÇONS POCKET",
        new OperationPeriod(new Collection(2011, Seasons.S), new Collection(2017))),

    // 3
    TAOCDG: new LineCDG("tao COMME des GARÇONS",
        new OperationPeriod(new Collection(2005, Seasons.W), new Collection(2011, Seasons.S))),
    NOIRKN: new LineCDG("noir kei ninomiya",
        new OperationPeriod(new Collection(2013, Seasons.W))),

    // 5
    SPEEDO: new LineCDG("speedo COMME des GARÇONS",
        new OperationPeriod((new Collection(2007, Seasons.S), new Collection(2009, Seasons.S),
            col => col.isS()))),

    // 6
    EDITW: new LineCDG("COMME des GARÇONS EDITED (for women)",
        new OperationPeriod(new Collection(2007, Seasons.S))),

    // 7
    EDITM: new LineCDG("COMME des GARÇONS EDITED (for men)",
        new OperationPeriod(new Collection(2007, Seasons.S))),

    // 8
    WALL: new LineCDG("Wallet COMME des GARÇONS",
        new OperationPeriod(new Collection(1980)),
        ProductionSchedules.LATE),

    // A
    NOIR: new LineCDG("COMME des GARÇONS NOIR",
        new OperationPeriod(new Collection(1987, Seasons.W), new Collection(2009, Seasons.S),
            col => !col.isBetween(new Collection(1996, Seasons.S), new Collection(2005, Seasons.S))),
        ProductionSchedules.EARLY),
    PLAY: new LineCDG("PLAY COMME des GARÇONS",
        new OperationPeriod(new Collection(2002))),

    // B
    PPDSM: new LineCDG("COMME des GARÇONS parfums PARFUMS (shop exclusive DOVER STREET MARKET launch)",
        new OperationPeriod(new Collection(2009, Seasons.W), new Collection(2009, Seasons.W))),

    // D
    H2: new LineCDG("COMME des GARÇONS HOMME DEUX",
        new OperationPeriod(new Collection(1987)),
        ProductionSchedules.LATE),

    // E
    RKCDG: new LineCDG("Rei Kawakubo [COMME des GARÇONS Canadian trademark]",
        new OperationPeriod(new Collection(1984, Seasons.S), new Collection(1995, Seasons.W)),
        ProductionSchedules.EARLY),
    GAN: new LineCDG("GANRYU COMME des GARÇONS",
        new OperationPeriod(new Collection(2008, Seasons.S), new Collection(2017, Seasons.S))),

    // F
    FR: new LineCDG("COMME des GARÇONS FRANCE",
        new OperationPeriod(new Collection(1983, Seasons.W), new Collection(1987, Seasons.W)),
        ProductionSchedules.LATE),
    SHIRT: new LineCDG("COMME des GARÇONS SHIRT",
        new OperationPeriod(new Collection(1988))),
    FOREVER: new LineCDG("COMME des GARÇONS SHIRT (FOREVER)",
        new OperationPeriod(new Collection(2010))),
    SHIRTGIRL: new LineCDG("COMME des GARÇONS SHIRT (GIRL)",
        new OperationPeriod(new Collection(2010, Seasons.S), new Collection(2014, Seasons.W))),
    SHIRTBOY: new LineCDG("COMME des GARÇONS SHIRT BOY",
        new OperationPeriod(new Collection(2015, Seasons.W), new Collection(2016, Seasons.S))),
    SHIRTBOYS: new LineCDG("COMME des GARÇONS SHIRT boys",
        new OperationPeriod(new Collection(2016, Seasons.W), new Collection(2019, Seasons.S))),

    // H
    H: new LineCDG("COMME des GARÇONS HOMME",
        new OperationPeriod(new Collection(1978)),
        ProductionSchedules.LATE),

    // I
    IND: new LineCDG("COMME des GARÇONS indigo",
        new OperationPeriod(new Collection(1983, Seasons.W), new Collection(1987, Seasons.W)),
        ProductionSchedules.LATE),
    HI: new LineCDG("COMME des GARÇONS HOMME (inverted)",
        new OperationPeriod(new Collection(1994, Seasons.S), new Collection(1998, Seasons.W)),
        ProductionSchedules.LATE),
    HH: new LineCDG("COMME des GARÇONS HOMME HOMME",
        new OperationPeriod(new Collection(1999, Seasons.S), new Collection(2001, Seasons.W)),
        ProductionSchedules.LATE),
    JAN: new LineCDG("JAN COMME des GARÇONS",
        new OperationPeriod(new Collection(2005, Seasons.S), new Collection(2006, Seasons.W))),
    ALIVE: new LineCDG("MAGAZINE ALIVE (VOGUE NIPPON and COMME des GARÇONS)",
        new OperationPeriod(new Collection(2009, Seasons.W), new Collection(2009, Seasons.W))),
    GDS: new LineCDG("GOOD DESIGN SHOP COMME des GARÇONS",
        new OperationPeriod(new Collection(2011), new Collection(2018))),

    // J
    JW: new LineCDG("JUNYA WATANABE COMME des GARÇONS",
        new OperationPeriod(new Collection(1992, Seasons.W)),
        ProductionSchedules.EARLY),

    // K
    AOY: new LineCDG("COMME des GARÇONS (Aoyama exclusive)",
        new OperationPeriod(new Collection(1989, Seasons.S)),
        ProductionSchedules.LATE),
    CHAOY: new LineCDG("COMME des GARÇONS Chrome Hearts (Aoyama exclusive)",
        new OperationPeriod(new Collection(2012, Seasons.S), new Collection(2012, Seasons.W))),

    // L
    ISE115: new LineCDG("COMME des GARÇONS (ISETAN 115yrs)",
        new OperationPeriod(new Collection(2001, Seasons.W), new Collection(2001, Seasons.W)),
        ProductionSchedules.LATE),
    ISE2MAN: new LineCDG("COMME des GARÇONS HOMME PLUS (CELEBRATION ISETAN MEN'S 1YEAR + COMME des GARCONS 2 MAN)",
        new OperationPeriod(new Collection(2004, Seasons.W), new Collection(2004, Seasons.W))),
    PPOH: new LineCDG("COMME des GARÇONS parfums PARFUMS (shop exclusive ODOUR HOLIDAY)",
        new OperationPeriod(new Collection(2019, Seasons.W), new Collection(2019, Seasons.W))),

    // N
    GIRL: new LineCDG("COMME des GARÇONS GIRL",
        new OperationPeriod(new Collection(2015, Seasons.S))),

    // O
    CCNO: new LineCDG("10 corso como COMME des GARÇONS (shop exclusive number series)",
        new OperationPeriod(new Collection(2002, Seasons.S), new Collection(2003, Seasons.W)),
        ProductionSchedules.LATE),
    AOYSE: new LineCDG("COMME des GARÇONS (Aoyama exclusive)",
        new OperationPeriod(new Collection(2004, Seasons.W), new Collection(2004, Seasons.W))),
    CDGSE: new LineCDG("COMME des GARÇONS (shop exclusive)",
        new OperationPeriod(new Collection(2005))),
    WALLSE: new LineCDG("Wallet COMME des GARÇONS (shop exclusive)",
        new OperationPeriod(new Collection(2005))),
    EYESE: new LineCDG("eYe JUNYA WATANABE COMME des GARÇONS MAN (shop exclusive)",
        new OperationPeriod(new Collection(2005, Seasons.W), new Collection(2005, Seasons.W))),
    SPEEDOSE: new LineCDG("speedo COMME des GARÇONS (shop exclusive)",
        new OperationPeriod(new Collection(2006, Seasons.S), new Collection(2006, Seasons.S))),
    TRAD: new LineCDG("TRADING MUSEUM COMME des GARÇONS",
        new OperationPeriod(new Collection(2009, Seasons.W))),
    PLAYXMAX: new LineCDG("PLAY COMME des GARÇONS (shop exclusive holidays special)",
        new OperationPeriod(new Collection(2013, Seasons.W), new Collection(2017, Seasons.W),
            col => col.isW())),
    BM: new LineCDG("black market COMME des GARÇONS",
        new OperationPeriod(new Collection(2017, Seasons.S))),
    CDGLINESE: new LineCDG("CDG (shop exclusive)",
        new OperationPeriod(new Collection(2018, Seasons.S), new Collection(2018, Seasons.S))),
    FRIENDS: new LineCDG("Friends and COMME des GARÇONS Happy Holidays",
        new OperationPeriod(new Collection(2018, Seasons.W), new Collection(2018, Seasons.W))),
    PEOPLE: new LineCDG("COMME des GARÇONS (People of the Year by COMME des GARÇONS and SWITCH)",
        new OperationPeriod(new Collection(2020, Seasons.W), new Collection(2020, Seasons.W))),

    // P
    HP: new LineCDG("COMME des GARÇONS HOMME PLUS",
        new OperationPeriod(new Collection(1985, Seasons.S)),
        ProductionSchedules.EARLY),
    HPS: new LineCDG("SPORT COMME des GARÇONS HOMME PLUS",
        new OperationPeriod(new Collection(2005, Seasons.W), new Collection(2006, Seasons.W))),
    HPE: new LineCDG("COMME des GARÇONS HOMME PLUS EVER GREEN",
        new OperationPeriod(new Collection(2005, Seasons.W), new Collection(2009, Seasons.W))),

    // R
    RDC: new LineCDG("robe de chambre COMME des GARÇONS",
        new OperationPeriod(new Collection(1981), new Collection(2004, Seasons.W),),
        ProductionSchedules.LATE),
    CDGCDG: new LineCDG("COMME des GARÇONS COMME des GARÇONS",
        new OperationPeriod(new Collection(1993))),

    // S
    CC: new LineCDG("10 corso como COMME des GARÇONS",
        new OperationPeriod(new Collection(2002, Seasons.S), new Collection(2011, Seasons.W)),
        ProductionSchedules.LATE),
    CDGLINE: new LineCDG("CDG",
        new OperationPeriod(new Collection(2018, Seasons.S))),

    // T
    TRIC: new LineCDG("tricot COMME des GARÇONS",
        new OperationPeriod(new Collection(1981), new Collection(2021, Seasons.W)),
        ProductionSchedules.LATE),
    TAO: new LineCDG("tao",
        new OperationPeriod(new Collection(2022, Seasons.S))),

    // U
    HPD: new LineCDG("COMME des GARÇONS HOMME PLUS in collaboration with District UNITED ARROWS",
        new OperationPeriod(new Collection(2000, Seasons.W), new Collection(2005, Seasons.W),
            col => !col.isBetween(new Collection(2003, Seasons.S), new Collection(2005, Seasons.S))),
        ProductionSchedules.EARLY),
    PINK: new LineCDG("JUNYA WATANABE COMME des GARÇONS (pink)",
        new OperationPeriod(new Collection(2003, Seasons.S), new Collection(2014, Seasons.S))),

    // V
    BEAT: new LineCDG("The Beatles COMME des GARÇONS",
        new OperationPeriod(new Collection(2009, Seasons.S))),

    // W
    JWMAN: new LineCDG("JUNYA WATANABE COMME des GARÇONS MAN",
        new OperationPeriod(new Collection(2002, Seasons.S)),
        ProductionSchedules.EARLY),
    EYE: new LineCDG("eYe JUNYA WATANABE COMME des GARÇONS MAN",
        new OperationPeriod(new Collection(2005, Seasons.W))),

    // X
    RKHP: new LineCDG("Rei Kawakubo [COMME des GARÇONS HOMME PLUS Canadian trademark]",
        new OperationPeriod(new Collection(1985, Seasons.S), new Collection(1995, Seasons.W)),
        ProductionSchedules.EARLY),
    JWD: new LineCDG("JUNYA WATANABE COMME des GARÇONS denim",
        new OperationPeriod(new Collection(2014), new Collection(2021, Seasons.W))),

    // Z
    TWO: new LineCDG("COMME des GARÇONS HOMME HOMME (Aoyama exclusive COMME des GARÇONS two)",
        new OperationPeriod(new Collection(1999, Seasons.S), new Collection(2001, Seasons.W)),
        ProductionSchedules.LATE),
    PEG: new LineCDG("Peggy Moffitt COMME des GARÇONS",
        new OperationPeriod(new Collection(2003, Seasons.S), new Collection(2005, Seasons.W))),
    VIV: new LineCDG("Vivienne Westwood COMME des GARÇONS",
        new OperationPeriod(new Collection(2003, Seasons.W), new Collection(2004, Seasons.S))),
    CDGCHG: new LineCDG("COMME des GARÇONS Chrome Hearts (DOVER STREET MARKET GINZA exclusive)",
        new OperationPeriod(new Collection(2012), new Collection(2019))),

    // EXCEPTIONS
    CCBB: new LineCDG("10 corso como COMME des GARÇONS (BE@RBRICK series)"),
    HPCH: new LineCDG("COMME des GARÇONS HOMME PLUS customized by Chrome Hearts"), // both labels on garment
    CCSS: new LineCDG("10 corso como COMME des GARÇONS (summer series)"),
    SHCHRE: new LineCDG("COMME des GARÇONS Chrome Hearts (striped shirt limited edition)"), // only the double name label
    SHCH: new LineCDG("COMME des GARÇONS SHIRT customized by Chrome Hearts"),  // both labels on garment
    HPCHRE: new LineCDG("COMME des GARÇONS Chrome Hearts (custom COMME des GARÇONS HOMME PLUS)"), // only the double name label
    CHLIM: new LineCDG("COMME des GARÇONS Chrome Hearts (Aoyama exclusive limited release)"), // only the double name label
});

export default LINES;
