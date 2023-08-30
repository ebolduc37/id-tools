/**
 * Initialization of SPECIAL_CASES.
 *
 * Initialization of the product codes that are special cases to known pattern.
 *
 * @author Etienne Bolduc
 */

import { Seasons, Collection, Occurrence, deepFreeze } from "../../../utils/index.js";
import IdentificationCDG from "../utils/classes/IdentificationCDG.js";
import YearPrint from "../utils/classes/YearPrint.js"
import GARMENT_ID from "./GARMENT_ID.js";
import LINES from "./LINES.js";

/**
 * Enum for the product codes of special cases and corresponding year print information
 * and identification values.
 * @constant
 * @readonly
 * @enum {{yearPrint: YearPrint, identification: IdentificationCDG}}}
 */
const SPECIAL_CASES = deepFreeze({

	"08BBT01": {
		yearPrint: new YearPrint("BLANK"),
		identification: new IdentificationCDG({
			codeStylized: "08BBT01",
			itemType: GARMENT_ID.T,
			byLine: [new Occurrence(LINES.CCBB.name, [new Collection(2004)])]
		})
	},

	"08BBT02": {
		yearPrint: new YearPrint("BLANK"),
		identification: new IdentificationCDG({
			codeStylized: "08BBT02",
			itemType: GARMENT_ID.T,
			byLine: [new Occurrence(LINES.CCBB.name, [new Collection(2004)])]
		})
	},

	"BEARBRICKT001": {
		yearPrint: new YearPrint(2004),
		identification: new IdentificationCDG({
			codeStylized: "BEARBRICK-T001",
			itemType: GARMENT_ID.T,
			byLine: [new Occurrence(LINES.CCBB.name, [new Collection(2004)])]
		})
	},

	"BEARBRICKT002": {
		yearPrint: new YearPrint(2004),
		identification: new IdentificationCDG({
			codeStylized: "BEARBRICK-T002",
			itemType: GARMENT_ID.T,
			byLine: [new Occurrence(LINES.CCBB.name, [new Collection(2004)])]
		})
	},

	"BEARBRICKT003": {
		yearPrint: new YearPrint(2004), identification: new IdentificationCDG({
			codeStylized: "BEARBRICK-T003",
			itemType: GARMENT_ID.T,
			byLine: [new Occurrence(LINES.CCBB.name, [new Collection(2004)])]
		})
	},

	"BEARBRICKT004": {
		yearPrint: new YearPrint(2004),
		identification: new IdentificationCDG({
			codeStylized: "BEARBRICK-T004",
			itemType: GARMENT_ID.T,
			byLine: [new Occurrence(LINES.CCBB.name, [new Collection(2004)])]
		})
	},

	"PSJ063": {
		yearPrint: new YearPrint(2004),
		identification: new IdentificationCDG({
			codeStylized: "PS-J063",
			itemType: GARMENT_ID.J,
			byLine: [new Occurrence(LINES.HPCH.name, [new Collection(2007, Seasons.W)])]
		})
	},

	"OTJ007": {
		yearPrint: new YearPrint(2007), identification: new IdentificationCDG({
			codeStylized: "OT-J007",
			itemType: GARMENT_ID.J,
			byLine: [new Occurrence(LINES.HPCH.name, [new Collection(2007, Seasons.W)])]
		})
	},

	"SD19T60C": {
		yearPrint: new YearPrint("BLANK"), identification: new IdentificationCDG({
			codeStylized: "SD19T60C",
			itemType: GARMENT_ID.T,
			byLine: [new Occurrence(LINES.SPEEDO.name, [new Collection(2009, Seasons.S)])]
		})
	},

	"5FT08A": {
		yearPrint: new YearPrint("BLANK"), identification: new IdentificationCDG({
			codeStylized: "5FT08A",
			itemType: GARMENT_ID.T,
			byLine: [new Occurrence(LINES.CCSS.name, [new Collection(2011, Seasons.S)])]
		})
	},

	"5FT08B": {
		yearPrint: new YearPrint("BLANK"), identification: new IdentificationCDG({
			codeStylized: "5FT08B",
			itemType: GARMENT_ID.T,
			byLine: [new Occurrence(LINES.CCSS.name, [new Collection(2011, Seasons.S)])]
		})
	},

	"CDGS2ST": {
		yearPrint: new YearPrint("BLANK"), identification: new IdentificationCDG({
			codeStylized: "CDGS2ST",
			itemType: GARMENT_ID.B,
			byLine: [new Occurrence(LINES.SHCHRE.name, [new Collection(2013)]),
			new Occurrence(LINES.SHCH.name, [new Collection(2014),
			new Collection(2015)])]
		})
	},

	"CDGS2PL": {
		yearPrint: new YearPrint("BLANK"), identification: new IdentificationCDG({
			codeStylized: "CDGS2PL",
			itemType: GARMENT_ID.B,
			byLine: [new Occurrence(LINES.SHCH.name, [new Collection(2015)])]
		})
	},

	"PDB007": {
		yearPrint: new YearPrint("BLANK"), identification: new IdentificationCDG({
			codeStylized: "PD-B007",
			itemType: GARMENT_ID.B,
			byLine: [new Occurrence(LINES.HPCH.name, [new Collection(2021, Seasons.W)])]
		})
	},

	"PFP043": {
		yearPrint: new YearPrint("BLANK"), identification: new IdentificationCDG({
			codeStylized: "PF-P043",
			itemType: GARMENT_ID.P,
			byLine: [new Occurrence(LINES.HPCH.name, [new Collection(2021, Seasons.W)])]
		})
	},

	"CDGCH01": {
		yearPrint: new YearPrint("BLANK"), identification: new IdentificationCDG({
			codeStylized: "CDG-CH-01",
			itemType: GARMENT_ID.B,
			byLine: [new Occurrence(LINES.CHLIM.name, [new Collection(2021, Seasons.W)])]
		})
	},

	"CDGCH02": {
		yearPrint: new YearPrint("BLANK"), identification: new IdentificationCDG({
			codeStylized: "CDG-CH-02",
			itemType: GARMENT_ID.B,
			byLine: [new Occurrence(LINES.CHLIM.name, [new Collection(2021, Seasons.W)])]
		})
	},

	"CDGCH03": {
		yearPrint: new YearPrint("BLANK"), identification: new IdentificationCDG({
			codeStylized: "CDG-CH-03",
			itemType: GARMENT_ID.B,
			byLine: [new Occurrence(LINES.CHLIM.name, [new Collection(2021, Seasons.W)])]
		})
	},

	"CDGCH04": {
		yearPrint: new YearPrint("BLANK"), identification: new IdentificationCDG({
			codeStylized: "CDG-CH-04",
			itemType: GARMENT_ID.B,
			byLine: [new Occurrence(LINES.CHLIM.name, [new Collection(2021, Seasons.W)])]
		})
	},
});

export default SPECIAL_CASES;
