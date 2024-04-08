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
	"RD": new OperationPeriod(null, new Collection(1983, Season.W)),
	"BS": new OperationPeriod(new Collection(1983, Season.S), new Collection(1990, Season.S)),
	"IM_BW": new OperationPeriod(new Collection(1990, Season.S), null,
		col => col.isBeforeOrIn(new Collection(2000, Season.W))
		|| col.isAfterOrIn(new Collection(2002, Season.W))),
	"IM_WB": new OperationPeriod(new Collection(2000, Season.W), new Collection(2002, Season.W)),
};
const LOGO_LIST_ME = {
	"RD": new OperationPeriod(null, new Collection(1983, Season.W)),
	"BS": new OperationPeriod(new Collection(1983, Season.S), new Collection(1990, Season.S)),
	"IM_WB": new OperationPeriod(new Collection(1990, Season.S), new Collection(2011, Season.W),
		col => !col.isBetween(new Collection(1995, Season.W), new Collection(2002, Season.S))),
	"ME_BW": new OperationPeriod(new Collection(1995, Season.W), new Collection(2002, Season.S)),
	"ME_WB": new OperationPeriod(new Collection(1998, Season.W), new Collection(2020, Season.W),
		col => !col.isBetween(new Collection(2002, Season.W), new Collection(2011, Season.W))),
};
const LOGO_LIST_SPORT = {
	"IS_1": new OperationPeriod(null, new Collection(1981, Season.W)),
	"IS_2": new OperationPeriod(new Collection(1982, Season.S), new Collection(1983, Season.W)),
};
const LOGO_LIST_IS = {
	"IS_3": new OperationPeriod(new Collection(1984, Season.S), new Collection(1994, Season.S)),
};

/**
 * Enum for all ISSEY MIYAKE lines with their operation period.
 * @constant
 * @readonly
 * @enum {Line}
 */
const LINE = deepFreeze({

	// odds on

	AP: new Line("A-POC"),

	APA: new Line("A-POC ABLE ISSEY MIYAKE"),

	BB: new Line("BAO BAO ISSEY MIYAKE"),

	CL: new Line("COTTON LABEL ISSEY MIYAKE"),

	CZ: new Line("Cabane de Zucca"),

	DT: new Line("DUETRIO",
		new OperationPeriod(new Collection(1986, Season.W), new Collection(1989, Season.W))),

	FH: new Line("FINAL HOME"),

	GG: new Line("GOOD GOODS ISSEY MIYAKE"),

	HA: new Line("HaaT"),

	HP: new Line("HOMME PLISSÉ ISSEY MIYAKE"),

	IF: new Line("ISSEY MIYAKE FÊTE"),

	IL: new Line("132 5. ISSEY MIYAKE"),

	IM: new Line("ISSEY MIYAKE",
		new OperationPeriod(new Collection(1972, Season.S)),
		LOGO_LIST_IM),

	SP: new Line("ISSEY SPORT",
		new OperationPeriod(new Collection(1975, Season.W), new Collection(1983, Season.W)),
		LOGO_LIST_SPORT),
	IS: new Line("I.S.",
		new OperationPeriod(new Collection(1984, Season.S), new Collection(1994, Season.S)),
		LOGO_LIST_IS),
	ISSK: new Line("I.S. sunao kuwahara",
		new OperationPeriod(new Collection(1994, Season.W), new Collection(2002, Season.W))),

	WCIM: new Line("ISSEY MIYAKE WINDCOAT",
			new OperationPeriod(new Collection(1989, Season.W), new Collection(1994, Season.W))),
	WC: new Line("WINDCOAT"),

	MDS: new Line("IM MIYAKE DESIGN STUDIO",
			new OperationPeriod(new Collection(1989), new Collection(1995, Season.W))),
	IMMEN: new Line("IM MEN"),

	MB: new Line("mercibeaucoup,"),

	ME: new Line("ISSEY MIYAKE MEN",
		new OperationPeriod(new Collection(1976), new Collection(2020, Season.W)),
		LOGO_LIST_ME),

	MI: new Line("ISSEY MIYAKE me"),

	NE: new Line("NE-NET"),

	NY: new Line("NÉ-NET"),

	ASH: new Line("ASHA BY MDS"),

	OO: new Line("odds on BY AKIRA O.",
			new OperationPeriod(new Collection(1986, Season.W), new Collection(1990, Season.W))),

	PE: new Line("ISSEY MIYAKE PERMANENTE",
			new OperationPeriod(new Collection(1985), null)),

	PL: new Line("Plantation",
			new OperationPeriod(new Collection(1982, Season.S), null)),
	PLJE: new Line("jean of Plantation",
			new OperationPeriod(new Collection(1982, Season.S), new Collection(1990, Season.W))),
	PLIN: new Line("Plantation inn.",
			new OperationPeriod(new Collection(1982, Season.S), null)),

	PP: new Line("PLEATS PLEASE ISSEY MIYAKE",
		new OperationPeriod(new Collection(1993, Season.S))),

	24: new Line("24 ISSEY MIYAKE"),

	IT: new Line("IKKO TANAKA ISSEY MIYAKE"),

	SK: new Line("sunao"),

	TC: new Line("Tsumori Chisato"),

	ZU: new Line("Zucca"),
});

export default LINE;
