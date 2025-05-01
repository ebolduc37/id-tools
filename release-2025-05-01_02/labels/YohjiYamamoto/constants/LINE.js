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
const OP_UNKNOWN_ASPESI = new OperationPeriod(new Collection(2008, Season.W), new Collection(2009, Season.W));



// LOGOS' FRAMEWORKS
const LOGO_MAIN = {
    "YOHJI_YAMAMOTO_ROUND": new OperationPeriod(new Collection(1981, Season.W), new Collection(1985, Season.S)),
    "YOHJI_YAMAMOTO_ROUGH": new OperationPeriod(new Collection(1983, Season.W), new Collection(1991, Season.W)),
    "YOHJI_YAMAMOTO_SKEWED": new OperationPeriod(new Collection(1991, Season.W), new Collection(2020, Season.W)),
    "YOHJI_YAMAMOTO_EVEN": new OperationPeriod(new Collection(2021, Season.R)),
};
const LOGO_YY = {
    "YOHJI_YAMAMOTO_ROUND": new OperationPeriod(new Collection(1981, Season.W), new Collection(1985, Season.S)),
    "YOHJI_YAMAMOTO_ROUGH": new OperationPeriod(new Collection(1983, Season.W), new Collection(1991, Season.W)),
    "YOHJI_YAMAMOTO_SKEWED": new OperationPeriod(new Collection(1991, Season.W), new Collection(2020, Season.W)),
    "YOHJI_YAMAMOTO_EVEN": new OperationPeriod(new Collection(2021, Season.S)),
    "YS_BRUSH": new OperationPeriod(null, null, col => col.isEqualTo(new Collection(1995, Season.S)))
};
const LOGO_YYPH = {
    "YOHJI_YAMAMOTO_ROUND": new OperationPeriod(new Collection(1981, Season.W), new Collection(1985, Season.S)),
    "YOHJI_YAMAMOTO_ROUGH": new OperationPeriod(new Collection(1983, Season.W), new Collection(1991, Season.W)),
    "YOHJI_YAMAMOTO_SKEWED": new OperationPeriod(new Collection(1991, Season.W), new Collection(2020, Season.W)),
    "YOHJI_YAMAMOTO_EVEN": new OperationPeriod(new Collection(2021, Season.S)),
    "YS_BRUSH": new OperationPeriod(null, null, col =>  col.isEqualTo(new Collection(1995, Season.S))
                || col.isBetween(new Collection(2009, Season.S), new Collection(2009, Season.W)))
};
const LOGO_IMPER = {
    "YOHJI_YAMAMOTO_SKEWED": new OperationPeriod(),
	//
    "YS_ANY_SANS_SERIF": new OperationPeriod(),
    //
    "YS_SANS_SERIF": new OperationPeriod(),
};
const LOGO_YS_ANY = { // LOGO_YS_ANY
    "YS_ANY_SANS_SERIF": new OperationPeriod(null, new Collection(1987, Season.W)),
    //
    "YS_SANS_SERIF": new OperationPeriod(null, new Collection(1987, Season.W)),
    "YS_FOR_MEN_SANS_SERIF": new OperationPeriod(null, new Collection(1987, Season.W)),
    //
    "YS_ANY_SERIF": new OperationPeriod(new Collection(1988, Season.S)),
    //
    "YS_YOHJI_YAMAMOTO_ABSENT": new OperationPeriod(new Collection(1988, Season.S)),
    "YS_YOHJI_YAMAMOTO_RIGHT": new OperationPeriod(new Collection(1988, Season.S)),
    "YS_YOHJI_YAMAMOTO_UNDER": new OperationPeriod(new Collection(1988, Season.S)),
    "YS_FOR_MEN_YOHJI_YAMAMOTO_ABSENT": new OperationPeriod(new Collection(1988, Season.S)),
    "YS_FOR_MEN_YOHJI_YAMAMOTO_UNDER": new OperationPeriod(new Collection(1988, Season.S)),
};
const LOGO_YS_SANS_SERIF = {
    "YS_ANY_SANS_SERIF": new OperationPeriod(),
    //
    "YS_SANS_SERIF": new OperationPeriod(),
    "YS_FOR_MEN_SANS_SERIF": new OperationPeriod(),
};



// PRODUCTION CYCLES' FRAMEWORKS
const PRODCYCLE_MAIN = {
    MAIN: new OperationPeriod(),
};
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
const PRODCYCLE_YP = {
    MAIN: new OperationPeriod(),
    PRE: new OperationPeriod(new Collection(2014, Season.R)),
    CAPSULE: new OperationPeriod(new Collection(2018, Season.W))
}



/**
 * Enum for all Yohji Yamamoto lines with their operation period.
 * @constant
 * @readonly
 * @enum {LineYY}
 */
const LINE = deepFreeze({

    // COLLABORATIONS, ETC. (impossible to add everything)
    // Yohji Yamamoto x Repetto (YY YYPH 2002 & YY aw18)
    // Yohji Yamamoto Eyewear by MURAI (aw94, ..., aw97, 1998, ss99) -> can add code as new framework
    // prototype with Linda Farrow (SS09, AW09, ..., aw11?) -> can add code as new framework
    // Yohji Yamamoto Eyewear [by MURAI] (2015, ...) -> can add as regular
    // Y's Eyewear [by MURAI] (2020, ...) -> can add as regular

    // to categorize
    // LQ men
    // SCHLÜSSELBEIN

    // B
    //
    // Y's company limited bis (80s english text tag) / Y's company.ltd. bis (80s japanese tag)
    // MOLDY FIGS
    BIS: new LineYY("Y's bis",
            new OperationPeriod(new Collection(1989, Season.S), new Collection(1999, Season.S)),
            { // LOGO_YS_ANY
				"YS_ANY_SANS_SERIF": new OperationPeriod(null, new Collection(1987, Season.W)),
				//
				"YS_SANS_SERIF": new OperationPeriod(null, new Collection(1987, Season.W)),
				"YS_FOR_MEN_SANS_SERIF": new OperationPeriod(null, new Collection(1987, Season.W)),
				//
				"YS_ANY_SERIF": new OperationPeriod(new Collection(1988, Season.S)),
				//
				"YS_YOHJI_YAMAMOTO_ABSENT": new OperationPeriod(new Collection(1988, Season.S)),
				"YS_YOHJI_YAMAMOTO_RIGHT": new OperationPeriod(new Collection(1988, Season.S)),
				"YS_FOR_MEN_YOHJI_YAMAMOTO_ABSENT": new OperationPeriod(new Collection(1988, Season.S)),
			}), // ss89 because direct mailer & ss99 because LIMI next season
            // BUT WHAT PROD CYCLE ???
            // TO INVESTIGATE
    //
    BISL: new LineYY("Y's bis LIMI",
            new OperationPeriod(new Collection(1999, Season.W), new Collection(2002, Season.S)),
            { // LOGO_YS_ANY
				"YS_ANY_SERIF": new OperationPeriod(),
				//
				"YS_YOHJI_YAMAMOTO_ABSENT": new OperationPeriod(),
				"YS_YOHJI_YAMAMOTO_RIGHT": new OperationPeriod(),
				"YS_FOR_MEN_YOHJI_YAMAMOTO_ABSENT": new OperationPeriod(),
			}, PRODCYCLE_MAIN),

    // C
    BLUEC: new LineYY("Y's bis Le Blue Collar",
            new OperationPeriod(new Collection(1988, Season.W), new Collection(1991, Season.S)),
            { // LOGO_YS_ANY
				"YS_ANY_SANS_SERIF": new OperationPeriod(null, new Collection(1987, Season.W)),
				//
				"YS_SANS_SERIF": new OperationPeriod(null, new Collection(1987, Season.W)),
				"YS_FOR_MEN_SANS_SERIF": new OperationPeriod(null, new Collection(1987, Season.W)),
				//
				"YS_ANY_SERIF": new OperationPeriod(new Collection(1988, Season.S)),
				//
				"YS_YOHJI_YAMAMOTO_ABSENT": new OperationPeriod(new Collection(1988, Season.S)),
				"YS_YOHJI_YAMAMOTO_RIGHT": new OperationPeriod(new Collection(1988, Season.S)),
				"YS_YOHJI_YAMAMOTO_UNDER": new OperationPeriod(new Collection(1988, Season.S)),
				"YS_FOR_MEN_YOHJI_YAMAMOTO_ABSENT": new OperationPeriod(new Collection(1988, Season.S)),
				"YS_FOR_MEN_YOHJI_YAMAMOTO_UNDER": new OperationPeriod(new Collection(1988, Season.S)),
			}, {
                MAIN: new OperationPeriod(),
                AUX: new OperationPeriod(null, new Collection(1989, Season.W))
            }),

    // D
    DISC: new LineYY("discord Yohji Yamamoto",
            new OperationPeriod(new Collection(2014, Season.W)),
            LOGO_MAIN, PRODCYCLE_MAIN_CAPSULE),

    // F
    YY: new LineYY("Yohji Yamamoto",
            new OperationPeriod(new Collection(1981, Season.W)),
            LOGO_YY, PRODCYCLE_MAIN),
    YYFI: new LineYY("Yohji Yamamoto [Made in France/Italy]",
            new OperationPeriod(new Collection(1981, Season.W), new Collection(1999, Season.W)),
            LOGO_YY, PRODCYCLE_MAIN), // TO VERIFY
    YYC: new LineYY("Yohji Yamamoto COSTUME",
            new OperationPeriod(new Collection(1999, Season.W), new Collection(2000, Season.S)),
            LOGO_MAIN, PRODCYCLE_MAIN),
    YJD: new LineYY("Yohji Justin Davis",
            new OperationPeriod(new Collection(2011, Season.S), new Collection(2011, Season.W)),
            LOGO_MAIN, PRODCYCLE_MAIN),
    RYY: new LineYY("REGULATION Yohji Yamamoto",
            new OperationPeriod(new Collection(2013, Season.S)),
            LOGO_MAIN, {
                MAIN: new OperationPeriod(null, new Collection(2017, Season.W)),
                AUX: new OperationPeriod()
            }),
    PLYY: new LineYY("plyy by RAGNE KIKAS",
            new OperationPeriod(new Collection(2015, Season.S), new Collection(2018, Season.W)),
            LOGO_MAIN, PRODCYCLE_MAIN),
    YYRI: new LineYY("Yohji Yamamoto by RIEFE",
            new OperationPeriod(new Collection(2021, Season.S)),
            LOGO_MAIN, PRODCYCLE_MAIN), // July 14 2021 launch
    YYCOL: new LineYY("Yohji Yamamoto collections",
            new OperationPeriod(new Collection(2021, Season.W)),
            LOGO_MAIN, PRODCYCLE_MAIN),
    YYM: new LineYY("Yohji Yamamoto MAISON",
            new OperationPeriod(new Collection(2022)),
            LOGO_MAIN, PRODCYCLE_MAIN),

    // G
    JEANS: new LineYY("Yohji JEANS",
            new OperationPeriod(new Collection(2012, Season.W), new Collection(2014, Season.W),
                col => col.isEqualTo(new Collection(2012, Season.W))
                    || col.isEqualTo(new Collection(2014, Season.W))),
            LOGO_MAIN, PRODCYCLE_AUX), // found GH-B02-007, GH-P01-001, GH-P01-002
    GRY: new LineYY("Ground Y",
            new OperationPeriod(new Collection(2014, Season.W)),
            {
                "YOHJI_YAMAMOTO_SKEWED": new OperationPeriod(null, new Collection(2020, Season.W)),
                "YOHJI_YAMAMOTO_EVEN": new OperationPeriod(new Collection(2021, Season.R)),
				//
                "YS_ANY_SANS_SERIF": new OperationPeriod(),
            }, {
                MAIN: new OperationPeriod(),
                AUX: new OperationPeriod(null, null, col => col.isEqualTo(new Collection(2014, Season.W))),
                CAPSULE: new OperationPeriod()
            }),

    // H
    YYPH: new LineYY("Yohji Yamamoto POUR HOMME",
            new OperationPeriod(new Collection(1981, Season.W)),
            LOGO_YYPH, PRODCYCLE_MAIN_CAPSULE),
    YYPHFI: new LineYY("Yohji Yamamoto POUR HOMME [Made in France/Italy]",
            new OperationPeriod(new Collection(1981, Season.W), new Collection(1999, Season.W)),
            LOGO_YYPH, PRODCYCLE_MAIN_CAPSULE), // TO VERIFY
    GOTHIC: new LineYY("GOTHIC YOHJI YAMAMOTO",
            new OperationPeriod(new Collection(2013, Season.W)),
            LOGO_MAIN, PRODCYCLE_MAIN),
    YYCH: new LineYY("Yohji Yamamoto COSTUME D'HOMME",
            new OperationPeriod(new Collection(1992, Season.W)),
            LOGO_MAIN, PRODCYCLE_MAIN),
    RYYM: new LineYY("REGULATION Yohji Yamamoto MEN",
            new OperationPeriod(new Collection(2013, Season.S)),
            LOGO_MAIN, PRODCYCLE_MAIN), // only found up to seasonal ID W
    PLYYM: new LineYY("plyy men by RAGNE KIKAS",
            new OperationPeriod(new Collection(2015, Season.S), new Collection(2018, Season.W)),
            LOGO_MAIN, PRODCYCLE_MAIN),
    PROD: new LineYY("YOHJI YAMAMOTO PRODUCE",
            new OperationPeriod(new Collection(2015, Season.W), new Collection(2020, Season.S)),
            LOGO_MAIN, PRODCYCLE_MAIN),
    YYREP: new LineYY("Yohji Yamamoto REPLICA",
            new OperationPeriod(new Collection(2015, Season.W), new Collection(2020, Season.S)),
            {
                "YOHJI_YAMAMOTO_ROUGH": new OperationPeriod(),
                "YOHJI_YAMAMOTO_SKEWED": new OperationPeriod()
            }, PRODCYCLE_MAIN),
    BSYY: new LineYY("BLACK Scandal Yohji Yamamoto",
            new OperationPeriod(new Collection(2018, Season.S), new Collection(2023, Season.W)),
            LOGO_MAIN, PRODCYCLE_MAIN),

    // I
    //
    // i wish Y's bis
    //

    // L
    LIMI: new LineYY("LIMI feu",
            new OperationPeriod(new Collection(2002, Season.W)),
            LOGO_MAIN, PRODCYCLE_MAIN), // seems like font is.. weird

    // M
    YFM: new LineYY("Y's for men", // ALSO FOUND WITH U (ONCE) -> UI from 90s
            new OperationPeriod(new Collection(1979, Season.S), null,
                col => col.isBeforeOrIn(new Collection(2009, Season.W)) || col.isAfterOrIn(new Collection(2023, Season.S))),
            {
                "YS_ANY_SANS_SERIF": new OperationPeriod(null, null,
                    col => col.isBeforeOrIn(new Collection(1987, Season.W)) || col.isAfterOrIn(new Collection(2023, Season.W))),
                //
                "YS_FOR_MEN_SANS_SERIF": new OperationPeriod(null, null,
                    col => col.isBeforeOrIn(new Collection(1987, Season.W)) || col.isAfterOrIn(new Collection(2023, Season.W))),
                //
                "YS_ANY_SERIF": new OperationPeriod(new Collection(1988, Season.S), new Collection(2009, Season.W)), // (MAIN ie clean start, MAIN ie clean cutoff)
                //
                "YS_FOR_MEN_YOHJI_YAMAMOTO_ABSENT": new OperationPeriod(new Collection(1988, Season.S), new Collection(2006, Season.S)),
                "YS_FOR_MEN_YOHJI_YAMAMOTO_UNDER": new OperationPeriod(new Collection(1993, Season.W), new Collection(2006, Season.S)),
                "YS_YOHJI_YAMAMOTO_ABSENT": new OperationPeriod(new Collection(2006, Season.W), new Collection(2009, Season.W)),
                //
                "YS_BRUSH": new OperationPeriod(new Collection(2003, Season.W), new Collection(2006, Season.W)), // (MAIN ie clean start, MAIN ie messy cutoff)
            }, {
                MAIN: new OperationPeriod(),
                AUX: new OperationPeriod(null, new Collection(2007, Season.W)),
            }),
    YFMRL: new LineYY("Y's for men [Red Label]",
            new OperationPeriod(new Collection(1993, Season.W), new Collection(2003, Season.W)),
            {
                "YS_ANY_SERIF": new OperationPeriod(null, new Collection(2003, Season.S)),
                //
                "YS_FOR_MEN_YOHJI_YAMAMOTO_UNDER": new OperationPeriod(null, new Collection(2003, Season.S)),
                //
                "YS_BRUSH": new OperationPeriod()
            }, {
                MAIN: new OperationPeriod(),
                AUX: new OperationPeriod(null, new Collection(1994, Season.S)),
            }),
    YFMS: new LineYY("Y's for men SHIRTS",
            new OperationPeriod(new Collection(1998, Season.S), new Collection(2000, Season.W),
                col => !col.isEqualTo(new Collection(2000, Season.S))),
                {
                        "YS_ANY_SERIF": new OperationPeriod(),
                        //
                        "YS_FOR_MEN_YOHJI_YAMAMOTO_ABSENT": new OperationPeriod(),
                }, {
                MAIN: new OperationPeriod(new Collection(1998, Season.S), new Collection(2000, Season.W),
                        col => !col.isEqualTo(new Collection(1999, Season.W))
                            || !col.isEqualTo(new Collection(2000, Season.S))),
                AUX: new OperationPeriod(new Collection(1998, Season.S), new Collection(2000, Season.W),
                        col => !col.isEqualTo(new Collection(1999, Season.S))
                            || !col.isEqualTo(new Collection(2000, Season.S)))
            }),
    YASP: new LineYY("Y's ASPESI",
            new OperationPeriod(new Collection(2006, Season.W), new Collection(2009, Season.W)),
            { // LOGO_YS_ANY
				"YS_ANY_SERIF": new OperationPeriod(),
				//
				"YS_YOHJI_YAMAMOTO_ABSENT": new OperationPeriod(),
				"YS_YOHJI_YAMAMOTO_UNDER": new OperationPeriod(),
			}, {
                MAIN: new OperationPeriod(new Collection(2006, Season.W), new Collection(2009, Season.W),
                            col => !col.isEqualTo(new Collection(2009, Season.S))),
                AUX: new OperationPeriod(null, null, col => OP_UNKNOWN_ASPESI.includes(col)),
            }),

    // N
    NOIR: new LineYY("YOHJI YAMAMOTO + NOIR",
            new OperationPeriod(new Collection(1995, Season.W), new Collection(2021, Season.S)),
            {
                "NOIR_SANS_SERIF": new OperationPeriod(null, new Collection(2007, Season.S)),
                "YOHJI_YAMAMOTO_SKEWED": new OperationPeriod(new Collection(2007, Season.S), new Collection(2020, Season.W)),
                "YOHJI_YAMAMOTO_EVEN": new OperationPeriod(new Collection(2021, Season.S))
            }, PRODCYCLE_MAIN),
    BYY: new LineYY("B Yohji Yamamoto",
            new OperationPeriod(new Collection(2016, Season.W), new Collection(2020, Season.W)),
            LOGO_MAIN, PRODCYCLE_MAIN),
    RRYY: new LineYY("RAGNE KIKAS Yohji Yamamoto",
            new OperationPeriod(new Collection(2016, Season.W), new Collection(2019, Season.W)),
            LOGO_MAIN, PRODCYCLE_MAIN),
    NOIRSB: new LineYY("Yohji Yamamoto Super Blue by YOHJI YAMAMOTO + NOIR",
            new OperationPeriod(new Collection(2017, Season.W), new Collection(2018, Season.S)),
            LOGO_MAIN, PRODCYCLE_MAIN),

    // O
    SYTW: new LineYY("S'YTE [women]",
            new OperationPeriod(new Collection(2012, Season.W), new Collection(2016, Season.S)),
            LOGO_MAIN, PRODCYCLE_MAIN),

    // P
    POWS: new LineYY("power of the WHITE shirt",
            new OperationPeriod(new Collection(2022, Season.W)),
            LOGO_MAIN, PRODCYCLE_MAIN),

    // R
    YSRED: new LineYY("Y's Red Label",
            new OperationPeriod(new Collection(2006, Season.W), new Collection(2009, Season.S)),
            {
                "YS_ANY_SERIF": new OperationPeriod(),
                //
                "YS_YOHJI_YAMAMOTO_ABSENT": new OperationPeriod(),
            }, {
                MAIN: new OperationPeriod(null, new Collection(2008, Season.W)),
                AUX: new OperationPeriod(null, new Collection(2008, Season.S)),
            }),

    // S
    YYOJ: new LineYY("Y YOHJI YAMAMOTO",
            new OperationPeriod(new Collection(2005, Season.W), new Collection(2008, Season.W)),
            LOGO_MAIN, PRODCYCLE_MAIN),
    WILDC: new LineYY("WILDSIDE YOHJI YAMAMOTO [collaboration]",
            new OperationPeriod(new Collection(2022, Season.W)),
            LOGO_MAIN, PRODCYCLE_MAIN_CAPSULE),

    // U
    SYTE: new LineYY("S'YTE",
            new OperationPeriod(new Collection(2011, Season.W)),
            LOGO_MAIN, {
                MAIN: new OperationPeriod(null, new Collection(2019, Season.W)),
                AUX: new OperationPeriod(new Collection(2019, Season.W)),
                CAPSULE: new OperationPeriod()
            }),

    // W
    WILD: new LineYY("WILDSIDE YOHJI YAMAMOTO",
            new OperationPeriod(new Collection(2022, Season.W)),
            LOGO_MAIN, PRODCYCLE_MAIN_CAPSULE),

    // Y
    YS: new LineYY("Y's",
            new OperationPeriod(new Collection(1972, Season.S)),
            {
				"YS_ANY_SANS_SERIF": new OperationPeriod(null, new Collection(1987, Season.W)),
    			//
    			"YS_SANS_SERIF": new OperationPeriod(null, new Collection(1987, Season.W)),
    			//
    			"YS_ANY_SERIF": new OperationPeriod(new Collection(1988, Season.S)),
    			//
    			"YS_YOHJI_YAMAMOTO_ABSENT": new OperationPeriod(new Collection(1988, Season.S), null,
					col => col.isBeforeOrIn(new Collection(1998, Season.S)) || col.isAfterOrIn(new Collection(2006, Season.W))),
    			"YS_YOHJI_YAMAMOTO_RIGHT": new OperationPeriod(new Collection(1993, Season.W), new Collection(1998, Season.S)),
    			"YS_YOHJI_YAMAMOTO_UNDER": new OperationPeriod(new Collection(1998, Season.W), new Collection(2006, Season.S)),
			}, {
                MAIN: new OperationPeriod(),
                AUX: new OperationPeriod(null, new Collection(2013, Season.W)),
                PRE: new OperationPeriod(new Collection(2014, Season.R)),
                CAPSULE: new OperationPeriod()
            }),
    YSBP: new LineYY("Y's BORN PRODUCT",
            new OperationPeriod(new Collection(2011, Season.S)),
            { // LOGO_YS_ANY
				"YS_ANY_SERIF": new OperationPeriod(),
				//
				"YS_YOHJI_YAMAMOTO_ABSENT": new OperationPeriod(),
				"YS_YOHJI_YAMAMOTO_RIGHT": new OperationPeriod(),
			}, {
                MAIN: new OperationPeriod(null, new Collection(2023, Season.W)),
                AUX: new OperationPeriod(new Collection(2024, Season.S))
            }),
    YP: new LineYY("Y's [Pink Label]",
            new OperationPeriod(new Collection(2011, Season.S), new Collection(2013, Season.W)),
            { // LOGO_YS_ANY
				"YS_ANY_SERIF": new OperationPeriod(),
				//
				"YS_YOHJI_YAMAMOTO_ABSENT": new OperationPeriod(),
			}, PRODCYCLE_YP),
    YPLE: new LineYY("Y's [Pink Label] LIMITED EDITION",
            new OperationPeriod(new Collection(2011, Season.S), new Collection(2012, Season.S)),
            { // LOGO_YS_ANY
				"YS_ANY_SERIF": new OperationPeriod(),
				//
				"YS_YOHJI_YAMAMOTO_ABSENT": new OperationPeriod(),
				"YS_YOHJI_YAMAMOTO_UNDER": new OperationPeriod(),
			}, PRODCYCLE_AUX),
    TAKE: new LineYY("TAKESHI KOSAKA [by Y's Pink Label]",
            new OperationPeriod(new Collection(2014, Season.R), new Collection(2015, Season.W)),
            { // LOGO_YS_ANY
				"YS_ANY_SERIF": new OperationPeriod(),
				//
				"YS_YOHJI_YAMAMOTO_ABSENT": new OperationPeriod(),
				"YS_YOHJI_YAMAMOTO_UNDER": new OperationPeriod(),
			}, PRODCYCLE_YP),
    YPTK: new LineYY("Y's PINK [by TAKESHI KOSAKA]",
            new OperationPeriod(new Collection(2016, Season.R), new Collection(2021, Season.S)),
            { // LOGO_YS_ANY
				"YS_ANY_SERIF": new OperationPeriod(),
				//
				"YS_YOHJI_YAMAMOTO_ABSENT": new OperationPeriod(),
				"YS_YOHJI_YAMAMOTO_UNDER": new OperationPeriod(),
			}, PRODCYCLE_YP),
    YSEX: new LineYY("Y's Exclusive",
            new OperationPeriod(new Collection(2013, Season.S), new Collection(2018, Season.W)),
            {
                "YS_ANY_SANS_SERIF": new OperationPeriod(null, new Collection(2016, Season.W)),
                //
                "YS_SANS_SERIF": new OperationPeriod(null, new Collection(2016, Season.W)),
                //
                "YS_ANY_SERIF": new OperationPeriod(new Collection(2016, Season.W)),
                //
                "YS_YOHJI_YAMAMOTO_ABSENT": new OperationPeriod(new Collection(2016, Season.W)),
                "YS_YOHJI_YAMAMOTO_UNDER": new OperationPeriod(new Collection(2016, Season.W)),
            }, PRODCYCLE_AUX),
    RISM: new LineYY("RISMAT by Y's",
            new OperationPeriod(new Collection(2014, Season.R), new Collection(2021, Season.R)),
            { // LOGO_YS_ANY
				"YS_ANY_SERIF": new OperationPeriod(),
				//
				"YS_YOHJI_YAMAMOTO_ABSENT": new OperationPeriod(),
				"YS_FOR_MEN_YOHJI_YAMAMOTO_ABSENT": new OperationPeriod(),
			}, PRODCYCLE_CRUISE),
    MICH: new LineYY("MICHIKO by Y's",
            new OperationPeriod(new Collection(2014, Season.W), new Collection(2021, Season.S)),
            { // LOGO_YS_ANY
				"YS_ANY_SERIF": new OperationPeriod(),
				//
				"YS_YOHJI_YAMAMOTO_ABSENT": new OperationPeriod(),
				"YS_FOR_MEN_YOHJI_YAMAMOTO_ABSENT": new OperationPeriod(),
			}, PRODCYCLE_MAIN),
    KAYO: new LineYY("KAYO NAKAMURA by Y's",
            new OperationPeriod(new Collection(2014, Season.W), new Collection(2021, Season.S)),
            { // LOGO_YS_ANY
				"YS_ANY_SERIF": new OperationPeriod(),
				//
				"YS_YOHJI_YAMAMOTO_ABSENT": new OperationPeriod(),
				"YS_FOR_MEN_YOHJI_YAMAMOTO_ABSENT": new OperationPeriod(),
			}, PRODCYCLE_MAIN),
    GIPSY: new LineYY("Gipsy",
            new OperationPeriod(new Collection(2014, Season.W), new Collection(2021, Season.S)),
            { // LOGO_YS_ANY
				"YS_ANY_SERIF": new OperationPeriod(),
				//
				"YS_YOHJI_YAMAMOTO_ABSENT": new OperationPeriod(),
			}, {
                MAIN: new OperationPeriod(),
                PRE: new OperationPeriod(null, null, col => col.isEqualTo(new Collection(2019, Season.R)))
            }),
    YSIND: new LineYY("Y's indigo",
            new OperationPeriod(new Collection(2015, Season.S), new Collection(2016, Season.W)),
            LOGO_YS_SANS_SERIF, PRODCYCLE_MAIN),
    BANG: new LineYY("Y's BANG ON!",
            new OperationPeriod(new Collection(2018, Season.W), new Collection(2022, Season.W)),
            { // LOGO_YS_ANY
				"YS_ANY_SERIF": new OperationPeriod(),
				//
				"YS_YOHJI_YAMAMOTO_ABSENT": new OperationPeriod(),
				"YS_FOR_MEN_YOHJI_YAMAMOTO_ABSENT": new OperationPeriod(),
				//
				"YS_BRUSH": new OperationPeriod(),
			}, PRODCYCLE_MAIN_CAPSULE),
    YSB: new LineYY("Y's....",
            new OperationPeriod(new Collection(2023, Season.S)),
            { // LOGO_YS_ANY
				"YS_ANY_SERIF": new OperationPeriod(),
				//
				"YS_YOHJI_YAMAMOTO_ABSENT": new OperationPeriod(),
			}, PRODCYCLE_MAIN),

    // Others
    YYSB: new LineYY("Yohji Yamamoto SUPER BLUE",
            new OperationPeriod(new Collection(1984, Season.W), new Collection(1987, Season.S)),
            LOGO_MAIN, PRODCYCLE_MAIN),
    YYPN: new LineYY("Yohji Yamamoto POUR LA NUIT",
            new OperationPeriod(new Collection(1984, Season.W), new Collection(1990, Season.W)),
            LOGO_MAIN, PRODCYCLE_MAIN),
    GOTH: new LineYY("GOTHIC YOHJI YAMAMOTO",
            new OperationPeriod(new Collection(1984, Season.W), new Collection(1990, Season.W)),
            LOGO_MAIN, PRODCYCLE_MAIN),
    GOTHH: new LineYY("GOTHIC YOHJI YAMAMOTO HOMME",
            new OperationPeriod(new Collection(1984, Season.W), new Collection(1990, Season.W)),
            LOGO_MAIN, PRODCYCLE_MAIN),
    YSSAC: new LineYY("Y'SACCS",
            new OperationPeriod(new Collection(1986), new Collection(2001)),
            LOGO_YS_SANS_SERIF, PRODCYCLE_MAIN),
    YSSACPH: new LineYY("Y'SACCS POUR HOMME",
            new OperationPeriod(new Collection(1986), new Collection(2001)),
            LOGO_YS_SANS_SERIF, PRODCYCLE_MAIN),
    YSSACPH: new LineYY("Y'SACCS + POUR TOUS",
            new OperationPeriod(new Collection(1986), new Collection(2001)),
            LOGO_YS_SANS_SERIF, PRODCYCLE_MAIN),
    IMPER: new LineYY("IMPERMEABLE YOHJI YAMAMOTO",
            new OperationPeriod(new Collection(1987, Season.W), new Collection(1990, Season.W)),
            LOGO_IMPER, PRODCYCLE_MAIN),
    IMPERH: new LineYY("IMPERMEABLE YOHJI YAMAMOTO HOMME",
            new OperationPeriod(new Collection(1987, Season.W), new Collection(1990, Season.W)),
            LOGO_IMPER, PRODCYCLE_MAIN),
    AAR: new LineYY("A.A.R Yohji Yamamoto D'URBAN",
            new OperationPeriod(new Collection(1992, Season.W), new Collection(2005, Season.W)),
            LOGO_MAIN, PRODCYCLE_MAIN),
    YDS: new LineYY("A.A.R Yohji Design Studio",
            new OperationPeriod(new Collection(2006, Season.S), new Collection(2008, Season.S)),
            LOGO_MAIN, PRODCYCLE_MAIN),
    Y3: new LineYY("Y-3",
            new OperationPeriod(new Collection(2003, Season.S)),
            LOGO_MAIN, PRODCYCLE_MAIN),
    YSM: new LineYY("Y's MANDARINA",
            new OperationPeriod(new Collection(2007, Season.S), new Collection(2010, Season.S)), // unsure end...
            LOGO_MAIN, PRODCYCLE_MAIN),
    CS: new LineYY("Coming Soon",
            new OperationPeriod(new Collection(2008, Season.W), new Collection(2011, Season.S)),
            LOGO_MAIN, PRODCYCLE_MAIN),

});

export default LINE;
