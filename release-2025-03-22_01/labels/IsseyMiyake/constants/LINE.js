/**
 * Initialization of LINE.
 *
 * Initialization of all ISSEY MIYAKE lines with information
 * on their operation period.
 *
 * @author Etienne Bolduc
 */

import { Collection, Line, OperationPeriod, deepFreeze } from "../../../utils/index.js";

// Initializing useful parameter
const Season = Collection.Season;

// Only the lines with a logo list are scanned through for identification
const LOGO_LIST_IM = {
	"ROUND": new OperationPeriod(null, new Collection(1983, Season.W)),
	"BRUSH": new OperationPeriod(new Collection(1983, Season.S), new Collection(1990, Season.S)),
	"IM_BW": new OperationPeriod(new Collection(1990, Season.S), null,
		col => col.isBeforeOrIn(new Collection(2000, Season.W))
				|| col.isAfterOrIn(new Collection(2002, Season.W))),
	"IM_WB": new OperationPeriod(new Collection(2000, Season.W), new Collection(2002, Season.W)),
};
const LOGO_LIST_ME = {
	"ROUND": new OperationPeriod(null, new Collection(1983, Season.W)),
	"BRUSH": new OperationPeriod(new Collection(1983, Season.S), new Collection(1990, Season.S)),
	"IM_WB": new OperationPeriod(new Collection(1990, Season.S), new Collection(2011, Season.W),
		col => !col.isBetween(new Collection(1995, Season.W), new Collection(2002, Season.S))),
	"ME_BW": new OperationPeriod(new Collection(1995, Season.W), new Collection(2002, Season.S)),
	"ME_WB": new OperationPeriod(new Collection(1998, Season.W), new Collection(2020, Season.W),
		col => !col.isBetween(new Collection(2002, Season.W), new Collection(2011, Season.W))),
};
const LOGO_LIST_CL = {
	"IM_WB": new OperationPeriod(new Collection(1994, Season.W), new Collection(1994, Season.W))
}

/**
 * Enum for all ISSEY MIYAKE lines with their operation period.
 * @constant
 * @readonly
 * @enum {Line}
 */
const LINE = deepFreeze({

	AP: new Line("A-POC",
			new OperationPeriod(new Collection(1999, Season.S), new Collection(2021, Season.S))),
	TY: new Line("TADANORI YOKOO ISSEY MIYAKE",
			new OperationPeriod(new Collection(2020, Season.W), new Collection(2022, Season.W))),
	AT: new Line("A-POC ABLE ISSEY MIYAKE",
			new OperationPeriod(new Collection(2021, Season.W))),

	BB: new Line("BAO BAO ISSEY MIYAKE",
			new OperationPeriod(new Collection(2010, Season.W))),

	CF: new Line("CFCL",
			new OperationPeriod(new Collection(2021, Season.S))),

	CL: new Line("COTTON LABEL ISSEY MIYAKE",
			new OperationPeriod(new Collection(1994, Season.W), new Collection(1996, Season.W)),
			LOGO_LIST_CL),

	DT: new Line("DUETRIO",
			new OperationPeriod(new Collection(1986, Season.W), new Collection(1989, Season.W))),

	FH: new Line("FINAL HOME", // both sizing
			new OperationPeriod(new Collection(1994), new Collection(2015, Season.S))),

	GG: new Line("GOOD GOODS ISSEY MIYAKE",
			new OperationPeriod(new Collection(2018))),

	HA: new Line("HaaT",
			new OperationPeriod(new Collection(2000, Season.W))),

	HP: new Line("HOMME PLISSÉ ISSEY MIYAKE",
			new OperationPeriod(new Collection(2013, Season.W))),

	ININ: new Line("i-NEW, i-NOW; MIYAKE ISSEY",
		new OperationPeriod(new Collection(2003, Season.W), new Collection(2003, Season.W))),
	
	IF: new Line("ISSEY MIYAKE FÊTE",
			new OperationPeriod(new Collection(2004, Season.W), new Collection(2009, Season.S))),

	IL: new Line("132 5. ISSEY MIYAKE",
			new OperationPeriod(new Collection(2010))),

	IM: new Line("ISSEY MIYAKE",
			new OperationPeriod(new Collection(1972, Season.S)),
			LOGO_LIST_IM),
	WL: new Line("ISSEY MIYAKE WHITE LABEL",
			new OperationPeriod(new Collection(2002, Season.W), new Collection(2004, Season.W)),
			//LOGO_LIST_IM),
			),

	SP: new Line("ISSEY SPORT",
			new OperationPeriod(new Collection(1975, Season.W), new Collection(1983, Season.W))),
	IS: new Line("I.S.",
			new OperationPeriod(new Collection(1984, Season.S), new Collection(1994, Season.S))),
	ISSK: new Line("I.S. sunao kuwahara", // always alphabetical
			new OperationPeriod(new Collection(1994, Season.W), new Collection(2003, Season.S))),

	WCIM: new Line("ISSEY MIYAKE WINDCOAT",
			new OperationPeriod(new Collection(1989, Season.W), new Collection(1994, Season.W))),
	WC: new Line("WINDCOAT", // always alphabetical
			new OperationPeriod(new Collection(1995, Season.S), new Collection(2005, Season.W))),

	// to do
	MDS: new Line("IM MIYAKE DESIGN STUDIO",
			new OperationPeriod(new Collection(1989), new Collection(2001, Season.W))),
	IMPM: new Line("IM product MEN", // a-net both sizing
			new OperationPeriod(new Collection(1989), new Collection(2001, Season.W))),
	IMMEN: new Line("IM MEN",
			new OperationPeriod(new Collection(2021, Season.S))),

	MB: new Line("mercibeaucoup,", // always numerical
			new OperationPeriod(new Collection(2006, Season.W), new Collection(2020, Season.W))),

	ME: new Line("ISSEY MIYAKE MEN",
		new OperationPeriod(new Collection(1976), new Collection(2020, Season.W)),
			//col => !col.isBetween(new Collection(1990, Season.S), new Collection(1995, Season.S))
			//	&& !col.isBetween(new Collection(2002, Season.W), new Collection(2011, Season.W))),
			LOGO_LIST_ME),
	//IMM: new Line("ISSEY MIYAKE [MEN]",
	//	new OperationPeriod(new Collection(1990, Season.S), new Collection(2011, Season.W),
	//		col => !col.isBetween(new Collection(1995, Season.W), new Collection(2002, Season.S))),
	//		LOGO_LIST_ME),
	ML: new Line("ISSEY MIYAKE MEN WHITE LABEL",
			new OperationPeriod(new Collection(2002, Season.W), new Collection(2004, Season.W)), // initially had S/S '04 but A/W for safety
			//LOGO_LIST_ME),
			),

	MI: new Line("ISSEY MIYAKE me",
			new OperationPeriod(new Collection(2000, Season.W))),

	NE: new Line("Né-net", // numerical always
			new OperationPeriod(new Collection(2005), new Collection(2020, Season.W))),
	NY: new Line("にゃー", // seen alph but mostly numerical
			new OperationPeriod(new Collection(2007), new Collection(2020, Season.W))),
	NYA: new Line("NYA-", // assume numerical
			new OperationPeriod(new Collection(2024, Season.S))),

	ASH: new Line("ASHA BY MDS",
			new OperationPeriod(new Collection(1984, Season.W), new Collection(2000, Season.S))),

	OO: new Line("odds on BY AKIRA O.",
			new OperationPeriod(new Collection(1986, Season.W), new Collection(1990, Season.W))),

	PE: new Line("ISSEY MIYAKE PERMANENTE", // alphabetical until ss97, numerical after aw97
			new OperationPeriod(new Collection(1985), new Collection(1998, Season.W))),

	PLIM: new Line("Issey Miyake Plantation",
			new OperationPeriod(new Collection(1982, Season.S), new Collection(1986, Season.W))),
	PL: new Line("Plantation", // alphabetical then numerical then alphabetical?
			new OperationPeriod(new Collection(1987, Season.S))),
	PLIN: new Line("Plantation inn.", // 1986 according to SO-EN
			new OperationPeriod(new Collection(1987, Season.S), new Collection(1990, Season.W))),
	PLJE: new Line("jean of Plantation", // 1988 according to SO-EN
			new OperationPeriod(new Collection(1987, Season.S), new Collection(1990, Season.W))),

	PP: new Line("PLEATS PLEASE ISSEY MIYAKE",
			new OperationPeriod(new Collection(1993, Season.S))),

	"24": new Line("24 ISSEY MIYAKE",
			new OperationPeriod(new Collection(2009, Season.W), new Collection(2012, Season.W))),

	IT: new Line("IKKO TANAKA ISSEY MIYAKE",
			new OperationPeriod(new Collection(2016, Season.S))),

	SK: new Line("sunaosunaokuwahara", // alphabetical i think
			new OperationPeriod(new Collection(2003, Season.S))),

	TC: new Line("TSUMORI CHISATO", // slab until at least ss02, TC02 with numerical / aw98 with alpha
			new OperationPeriod(new Collection(1990, Season.W))),
		
	TM: new Line("TSUMORI CHISATO MEN", // almost nothing on the subject, but found aw15 and 2011 significant
			new OperationPeriod(new Collection(1990, Season.W))),

	ZU: new Line("ZUCCa", // always alphabetical
			new OperationPeriod(new Collection(1988))),
	ZT: new Line("ZUCCa TRAVAIL", // seems ZU + numerical til A-NET, CZ til AW99, then ZU, always numerical
			new OperationPeriod(new Collection(1994))),
	CZ: new Line("CABANE de ZUCCa", // seems ZU + numerical til A-NET, CZ + alpha
			new OperationPeriod(new Collection(1996))),
	ZD: new Line("ZUCCa dayz", // CZ + alpha
			new OperationPeriod(new Collection(2014, Season.W))),
});

export default LINE;
