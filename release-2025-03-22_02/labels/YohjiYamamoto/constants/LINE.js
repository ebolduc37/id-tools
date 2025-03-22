/**
 * Initialization of LINE.
 *
 * Initialization of all Yohji Yamamoto lines with information
 * on their operation period.
 *
 * @author Etienne Bolduc
 */

import { Collection, OperationPeriod, deepFreeze } from "../../../utils/index.js";
import LineYY from "../utils/classes/LineYY.js";

// Initializing useful parameter
const Season = Collection.Season;



// LOGOS' FRAMEWORKS
const LOGO_MAIN = {
    "YY_1": new OperationPeriod(new Collection(1981, Season.W), new Collection(1985, Season.S)),
    "YY_2": new OperationPeriod(new Collection(1983, Season.W), new Collection(1991, Season.W)),
    "YY_3": new OperationPeriod(new Collection(1991, Season.W)),
};
const LOGO_YY = {
    "YY_1": new OperationPeriod(new Collection(1981, Season.W), new Collection(1985, Season.S)),
    "YY_2": new OperationPeriod(new Collection(1983, Season.W), new Collection(1991, Season.W)),
    "YY_3": new OperationPeriod(new Collection(1991, Season.W)),
    "YS_B": new OperationPeriod(null, null,
                    col => col.isEqualTo(new Collection(1995, Season.S)))
};
const LOGO_YYPH = {
    "YY_1": new OperationPeriod(new Collection(1981, Season.W), new Collection(1985, Season.S)),
    "YY_2": new OperationPeriod(new Collection(1983, Season.W), new Collection(1991, Season.W)),
    "YY_3": new OperationPeriod(new Collection(1991, Season.W)),
    "YS_B": new OperationPeriod(null, null,
                    col =>  col.isEqualTo(new Collection(1995, Season.S)) ||
                            col.isBetween(new Collection(2009, Season.S), new Collection(2009, Season.W)))
};
const LOGO_IMPER = {
    "YY_3": new OperationPeriod(new Collection(1988, Season.W))
};
const LOGO_YS = {
    "YS_1": new OperationPeriod(null, new Collection(1987, Season.W)),
    "YS_2": new OperationPeriod(new Collection(1988, Season.S))
};
const LOGO_YFM = {
    "YS_1": new OperationPeriod(null, null,
            col => col.isBeforeOrIn(new Collection(1987, Season.W))
                || col.isAfterOrIn(new Collection(2023, Season.W))),
    "YS_2": new OperationPeriod(new Collection(1988, Season.S), new Collection(2009, Season.W)),
    "YS_B": new OperationPeriod(new Collection(2003, Season.W), new Collection(2006, Season.W))
};
const LOGO_YFMRL = {
    "YS_2": new OperationPeriod(new Collection(1993, Season.W), new Collection(2003, Season.S)),
    "YS_B": new OperationPeriod()
};
const LOGO_YSEX = {
    "YS_1": new OperationPeriod(null, new Collection(2016, Season.P)),
    "YS_2": new OperationPeriod(new Collection(2016, Season.P), null)
};
const LOGO_YS_1 = {
    "YS_1": new OperationPeriod(),
}
const LOGO_GRY = {
    "YS_1": new OperationPeriod(new Collection(2014, Season.W)),
    "YY_3": new OperationPeriod(new Collection(2014, Season.W)),
};
const LOGO_REP = {
    "YY_2": new OperationPeriod(new Collection(2015, Season.W), new Collection(2020, Season.S)),
    "YY_3": new OperationPeriod(new Collection(2015, Season.W), new Collection(2020, Season.S))
};



// PRODUCTION CYCLES' FRAMEWORKS
const PRODCYCLE_MAIN_CAPSULE = {
    MAIN: new OperationPeriod(),
    CAPSULE: new OperationPeriod(),
};
const PRODCYCLE_AUX = {
    AUX: new OperationPeriod(),
};
const PRODCYCLE_CRUISE = {
    PRE: new OperationPeriod(),
};
const PRODCYCLE_YFMRL = {
    MAIN: new OperationPeriod(),
    AUX: new OperationPeriod(null, new Collection(1996, Season.W)),
};
const PRODCYCLE_YFM = {
    MAIN: new OperationPeriod(),
    AUX: new OperationPeriod(null, new Collection(2007, Season.W)),
};
const PRODCYCLE_YSRED = {
    MAIN: new OperationPeriod(null, new Collection(2008, Season.W)),
    AUX: new OperationPeriod(null, new Collection(2008, Season.S)),
};
const PRODCYCLE_YS = {
    MAIN: new OperationPeriod(),
    AUX: new OperationPeriod(null, new Collection(2014, Season.W)),
    PRE: new OperationPeriod(new Collection(2015, Season.R)),
    CAPSULE: new OperationPeriod()
};
const PRODCYCLE_GRY = {
    MAIN: new OperationPeriod(),
    AUX: new OperationPeriod(new Collection(2014, Season.W), new Collection(2014, Season.W)),
    CAPSULE: new OperationPeriod()
};
const PRODCYCLE_YPTK = {
    MAIN: new OperationPeriod(),
    PRE: new OperationPeriod(),
};
const PRODCYCLE_SYTE = {
    MAIN: new OperationPeriod(null, new Collection(2019, Season.W)),
    AUX: new OperationPeriod(new Collection(2019, Season.W)),
    CAPSULE: new OperationPeriod()
};



/**
 * Enum for all Yohji Yamamoto lines with their operation period.
 * @constant
 * @readonly
 * @enum {LineYY}
 */
const LINE = deepFreeze({

    // Y's logo: filing
    // bold: 1981-10-20 // before that, ss79
    // classic: 1992-05-20 // modern Y's logo, ss88 magazine + Y's bis, ss89 DM
    // weird: 2006-05-08 // on runway aw04

    // to look into: y's code font changes

    // COLLABORATIONS, ETC. (impossible to add everything)
    // Yohji Yamamoto x Repetto (YY YYPH 2002 & YY aw18)
    // Yohji Yamamoto Eyewear by MURAI (aw94, ..., aw97, 1998, ss99) -> can add code as new framework
    // prototype with Linda Farrow (SS09, AW09, ..., aw11?) -> can add code as new framework
    //
    // Yohji Yamamoto Eyewear [by MURAI] (2015, ...) -> can add as regular
    // Y's Eyewear [by MURAI] (2020, ...) -> can add as regular

    // to categorize
    // Y's red label (aw06)
    // Y's [men]
    // Y's for Men SHIRTS
    // Y’s MANDARINA
    // Y's Aspesi (2007 seems active)
    // Y’s (for men?) red label (designed in collaboration with Michiko Suzuki launched AW2006)
    // Y's at work
    // LQ men
    // SCHLÜSSELBEIN
    // Yohji Yamamoto SUPER BLUE (+NK-NW)
    // Y's Indigo
    // look into prod cycle of Ground Y fr

    // B
    //
    // Y's company limited bis (80s english text tag) / Y's company.ltd. bis (80s japanese tag)
    // MOLDY FIGS
    //
    BIS: new LineYY("Y's bis",
            new OperationPeriod(new Collection(1989, Season.S), new Collection(1999, Season.S)),
            LOGO_YS), // ss89 because direct mailer & ss99 because LIMI next season
    BISL: new LineYY("Y's bis LIMI",
            new OperationPeriod(new Collection(1999, Season.W), new Collection(2002, Season.S)),
            LOGO_YS),

    // C
    //
    // LE BLUE COLLAR
    //

    // D
    DISC: new LineYY("discord Yohji Yamamoto",
            new OperationPeriod(new Collection(2014, Season.W)),
            LOGO_MAIN, PRODCYCLE_MAIN_CAPSULE),

    // F
    YY: new LineYY("Yohji Yamamoto",
            new OperationPeriod(new Collection(1981, Season.W)),
            LOGO_YY),
    YYFI: new LineYY("Yohji Yamamoto [Made in France/Italy]",
            new OperationPeriod(new Collection(1981, Season.W), new Collection(1999, Season.W)),
            LOGO_YY), // TO VERIFY
    YJD: new LineYY("Yohji Justin Davis",
            new OperationPeriod(new Collection(2011, Season.S), new Collection(2011, Season.W)),
            LOGO_MAIN),
    RYY: new LineYY("REGULATION Yohji Yamamoto",
            new OperationPeriod(new Collection(2013, Season.S)),
            LOGO_MAIN),
    PLYY: new LineYY("plyy by RAGNE KIKAS",
            new OperationPeriod(new Collection(2015, Season.S), new Collection(2018, Season.W)),
            LOGO_MAIN),
    YYRI: new LineYY("Yohji Yamamoto by RIEFE",
            new OperationPeriod(new Collection(2021, Season.S)),
            LOGO_MAIN), // July 14 2021 launch
    YYC: new LineYY("Yohji Yamamoto collections",
            new OperationPeriod(new Collection(2021, Season.W)),
            LOGO_MAIN),
    YYM: new LineYY("Yohji Yamamoto MAISON",
            new OperationPeriod(new Collection(2022)),
            LOGO_MAIN),

    // G
    JEANS: new LineYY("Yohji JEANS",
            new OperationPeriod(new Collection(2012, Season.W), new Collection(2014, Season.W),
                col => col.isEqualTo(new Collection(2012, Season.W))
                    || col.isEqualTo(new Collection(2014, Season.W))),
            LOGO_MAIN, PRODCYCLE_AUX), // found GH-B02-007, GH-P01-001, GH-P01-002
    GRY: new LineYY("Ground Y",
            new OperationPeriod(new Collection(2014, Season.W)),
            LOGO_GRY, PRODCYCLE_GRY),

    // H
    YYPH: new LineYY("Yohji Yamamoto POUR HOMME",
            new OperationPeriod(new Collection(1981, Season.W)),
            LOGO_YYPH, PRODCYCLE_MAIN_CAPSULE),
    YYPHFI: new LineYY("Yohji Yamamoto POUR HOMME [Made in France/Italy]",
            new OperationPeriod(new Collection(1981, Season.W), new Collection(1999, Season.W)),
            LOGO_YYPH), // TO VERIFY
    GOTHIC: new LineYY("GOTHIC YOHJI YAMAMOTO",
            new OperationPeriod(new Collection(2013, Season.W), new Collection(2024, Season.W)),
            LOGO_MAIN),
    YYCH: new LineYY("Yohji Yamamoto COSTUME D'HOMME",
            new OperationPeriod(new Collection(1992, Season.W), new Collection(2015, Season.W)), // A/W '14 ?
            LOGO_MAIN),
    RYYM: new LineYY("REGULATION Yohji Yamamoto MEN",
            new OperationPeriod(new Collection(2013, Season.S), new Collection(2018, Season.W)), // A/W '20 ?
            LOGO_MAIN), // only found up to seasonal ID W
    PLYYM: new LineYY("plyy men by RAGNE KIKAS",
            new OperationPeriod(new Collection(2015, Season.S), new Collection(2018, Season.W)),
            LOGO_MAIN),
    PROD: new LineYY("YOHJI YAMAMOTO PRODUCE",
            new OperationPeriod(new Collection(2015, Season.W), new Collection(2020, Season.S)),
            LOGO_MAIN),
    YYREP: new LineYY("Yohji Yamamoto REPLICA",
            new OperationPeriod(new Collection(2015, Season.W), new Collection(2020, Season.S)),
            LOGO_REP),
    BSYY: new LineYY("BLACK Scandal Yohji Yamamoto",
            new OperationPeriod(new Collection(2018, Season.S), new Collection(2023, Season.W)),
            LOGO_MAIN),

    // I
    //
    // i wish Y's bis
    //

    // L
    LIMI: new LineYY("LIMI feu",
            new OperationPeriod(new Collection(2002, Season.W)),
            LOGO_MAIN), // seems like font is.. weird

    // M
    YFM: new LineYY("Y's for men", // ALSO FOUND WITH U (ONCE) -> UI from 90s
            new OperationPeriod(new Collection(1979, Season.S), null,
                col => col.isBeforeOrIn(new Collection(2009, Season.W))
                    || col.isAfterOrIn(new Collection(2023, Season.S))),
            LOGO_YFM, PRODCYCLE_YFM),
    YFMRL: new LineYY("Y's for men [red label]",
            new OperationPeriod(new Collection(1993, Season.W), new Collection(2003, Season.S)),
            LOGO_YFMRL, PRODCYCLE_YFMRL),

    // N
    NOIR: new LineYY("YOHJI YAMAMOTO + NOIR",
            new OperationPeriod(new Collection(1995), new Collection(2021, Season.S)),
            LOGO_MAIN),
    BYY: new LineYY("B Yohji Yamamoto",
            new OperationPeriod(new Collection(2016, Season.W), new Collection(2020, Season.W)),
            LOGO_MAIN),
    RRYY: new LineYY("RAGNE KIKAS Yohji Yamamoto",
            new OperationPeriod(new Collection(2016, Season.W), new Collection(2019, Season.W)),
            LOGO_MAIN),

    // O
    SYTW: new LineYY("S'YTE [women]",
            new OperationPeriod(new Collection(2012, Season.W), new Collection(2016, Season.S)),
            LOGO_MAIN),

    // P
    POWS: new LineYY("power of the WHITE shirt",
            new OperationPeriod(new Collection(2022, Season.W)),
            LOGO_MAIN),

    // R
    YSRED: new LineYY("Y's Red Label",
            new OperationPeriod(new Collection(2006, Season.W), new Collection(2009, Season.S)),
            LOGO_YS, PRODCYCLE_YSRED),

    // S
    WILDC: new LineYY("WILDSIDE YOHJI YAMAMOTO [collaboration]",
            new OperationPeriod(new Collection(2022, Season.W)),
            LOGO_MAIN, PRODCYCLE_MAIN_CAPSULE),

    // U
    SYTE: new LineYY("S'YTE",
            new OperationPeriod(new Collection(2011, Season.W)),
            LOGO_MAIN, PRODCYCLE_SYTE),

    // W
    WILD: new LineYY("WILDSIDE YOHJI YAMAMOTO",
            new OperationPeriod(new Collection(2022, Season.W)),
            LOGO_MAIN, PRODCYCLE_MAIN_CAPSULE),

    // Y
    YS: new LineYY("Y's",
            new OperationPeriod(new Collection(1972, Season.S)),
            LOGO_YS, PRODCYCLE_YS),
    YP: new LineYY("Y's PINK",
            new OperationPeriod(new Collection(2011, Season.S), new Collection(2013, Season.W)),
            LOGO_YS),
    YSEX: new LineYY("Y's Exclusive",
            new OperationPeriod(new Collection(2013, Season.R), new Collection(2018, Season.P)),
            LOGO_YSEX, PRODCYCLE_AUX),
    RISM: new LineYY("RISMAT by Y's",
            new OperationPeriod(new Collection(2014, Season.R), new Collection(2021, Season.R)),
            LOGO_YS, PRODCYCLE_CRUISE),
    TAKE: new LineYY("TAKESHI KOSAKA [by Y's PINK LABEL]",
            new OperationPeriod(new Collection(2014, Season.S), new Collection(2015, Season.W)),
            LOGO_YS),
    MICH: new LineYY("MICHIKO by Y's",
            new OperationPeriod(new Collection(2014, Season.W), new Collection(2021, Season.S)),
            LOGO_YS),
    KAYO: new LineYY("KAYO NAKAMURA by Y's",
            new OperationPeriod(new Collection(2014, Season.W), new Collection(2021, Season.S)),
            LOGO_YS),
    GIPSY: new LineYY("Gipsy",
            new OperationPeriod(new Collection(2014, Season.W), new Collection(2021, Season.S)),
            LOGO_YS),
    YPTK: new LineYY("Y's PINK [by TAKESHI KOSAKA]",
            new OperationPeriod(new Collection(2016, Season.S), new Collection(2021, Season.S)),
            LOGO_YS, PRODCYCLE_YPTK),
    BANG: new LineYY("Y's BANG ON!",
            new OperationPeriod(new Collection(2018, Season.W), new Collection(2022, Season.W)),
            LOGO_YS, PRODCYCLE_MAIN_CAPSULE),
    YSB: new LineYY("Y's....",
            new OperationPeriod(new Collection(2023, Season.S)),
            LOGO_YS),

    // Others
    YYPN: new LineYY("Yohji Yamamoto POUR LA NUIT",
            new OperationPeriod(new Collection(1983, Season.W), new Collection(1990, Season.W)),
            LOGO_MAIN),
    GOTH: new LineYY("GOTHIC YOHJI YAMAMOTO",
            new OperationPeriod(new Collection(1983, Season.W), new Collection(1990, Season.W)),
            LOGO_MAIN),
    GOTHH: new LineYY("GOTHIC YOHJI YAMAMOTO HOMME",
            new OperationPeriod(new Collection(1983, Season.W), new Collection(1990, Season.W)),
            LOGO_MAIN),
    YSSAC: new LineYY("Y'SACCS",
            new OperationPeriod(new Collection(1986), new Collection(2001)),
            LOGO_YS_1),
    YSSACPH: new LineYY("Y'SACCS POUR HOMME",
            new OperationPeriod(new Collection(1986), new Collection(2001)),
            LOGO_YS_1),
    YSSACPH: new LineYY("Y'SACCS + POUR TOUS",
            new OperationPeriod(new Collection(1986), new Collection(2001)),
            LOGO_YS_1),
    IMPER: new LineYY("IMPERMEABLE YOHJI YAMAMOTO",
            new OperationPeriod(new Collection(1988, Season.W), new Collection(1992, Season.W)),
            LOGO_IMPER),
    IMPERH: new LineYY("IMPERMEABLE YOHJI YAMAMOTO HOMME",
            new OperationPeriod(new Collection(1988, Season.W), new Collection(1992, Season.W)),
            LOGO_IMPER),
    AAR: new LineYY("A.A.R Yohji Yamamoto D'URBAN",
            new OperationPeriod(new Collection(1992, Season.W), new Collection(2005, Season.W)),
            LOGO_MAIN),
    YDS: new LineYY("A.A.R Yohji Design Studio",
            new OperationPeriod(new Collection(2006, Season.S), new Collection(2008, Season.S)),
            LOGO_MAIN),
    Y3: new LineYY("Y-3",
            new OperationPeriod(new Collection(2003, Season.S)),
            LOGO_MAIN),
    CS: new LineYY("Coming Soon",
            new OperationPeriod(new Collection(2008, Season.W), new Collection(2011, Season.S)),
            LOGO_MAIN),

});

export default LINE;
