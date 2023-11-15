/**
 * Initialization of SPECIAL_CASES.
 *
 * Initialization of the product codes that are special cases of COMME des GARÇONS.
 *
 * @author Etienne Bolduc
 */

import { Collection, Identification, Labels, deepFreeze } from "../../../utils/index.js";
import GARMENT_ID from "./GARMENT_ID.js";
import LINES from "./LINES.js";
import InputCDG from "../utils/classes/InputCDG.js";

// Initializing useful parameter
const SEASONS = Collection.SEASONS;

/**
 * Enum for the product codes of COMME des GARÇONS special cases and
 * corresponding year print information and identification data.
 * @constant
 * @readonly
 * @enum {{yearPrint: (string|InputCDG.NO_YEAR_PRINT_TYPES), identification: Identification}}
 */
const SPECIAL_CASES = deepFreeze({

	"08BBT01": {
		yearPrint: InputCDG.NO_YEAR_PRINT_TYPES.BLANK,
		identification: new Identification({
			label: Labels.CDG,
			codeStylized: "08BBT01",
			itemType: GARMENT_ID.T,
			lineList: [LINES.CCBB.newCollectionList([new Collection(2004)])],
			exception: true
		})
	},

	"08BBT02": {
		yearPrint: InputCDG.NO_YEAR_PRINT_TYPES.BLANK,
		identification: new Identification({
			label: Labels.CDG,
			codeStylized: "08BBT02",
			itemType: GARMENT_ID.T,
			lineList: [LINES.CCBB.newCollectionList([new Collection(2004)])],
			exception: true
		})
	},

	"BEARBRICKT001": {
		yearPrint: "2004",
		identification: new Identification({
			label: Labels.CDG,
			codeStylized: "BEARBRICK-T001",
			itemType: GARMENT_ID.T,
			lineList: [LINES.CCBB.newCollectionList([new Collection(2004)])],
			exception: true
		})
	},

	"BEARBRICKT002": {
		yearPrint: "2004",
		identification: new Identification({
			label: Labels.CDG,
			codeStylized: "BEARBRICK-T002",
			itemType: GARMENT_ID.T,
			lineList: [LINES.CCBB.newCollectionList([new Collection(2004)])],
			exception: true
		})
	},

	"BEARBRICKT003": {
		yearPrint: "2004",
		identification: new Identification({
			label: Labels.CDG,
			codeStylized: "BEARBRICK-T003",
			itemType: GARMENT_ID.T,
			lineList: [LINES.CCBB.newCollectionList([new Collection(2004)])],
			exception: true
		})
	},

	"BEARBRICKT004": {
		yearPrint: "2004",
		identification: new Identification({
			label: Labels.CDG,
			codeStylized: "BEARBRICK-T004",
			itemType: GARMENT_ID.T,
			lineList: [LINES.CCBB.newCollectionList([new Collection(2004)])],
			exception: true
		})
	},

	"PSJ063": {
		yearPrint: "2004",
		identification: new Identification({
			label: Labels.CDG,
			codeStylized: "PS-J063",
			itemType: GARMENT_ID.J,
			lineList: [LINES.HPCH.newCollectionList([new Collection(2007, SEASONS.W)])],
			exception: true
		})
	},

	"OTJ007": {
		yearPrint: "2007",
		identification: new Identification({
			label: Labels.CDG,
			codeStylized: "OT-J007",
			itemType: GARMENT_ID.J,
			lineList: [LINES.HPCH.newCollectionList([new Collection(2007, SEASONS.W)])],
			exception: true
		})
	},

	"SD19T60C": {
		yearPrint: InputCDG.NO_YEAR_PRINT_TYPES.BLANK,
		identification: new Identification({
			label: Labels.CDG,
			codeStylized: "SD19T60C",
			itemType: GARMENT_ID.T,
			lineList: [LINES.SPEEDO.newCollectionList([new Collection(2009, SEASONS.S)])],
			exception: true
		})
	},

	"5FT08A": {
		yearPrint: InputCDG.NO_YEAR_PRINT_TYPES.BLANK,
		identification: new Identification({
			label: Labels.CDG,
			codeStylized: "5FT08A",
			itemType: GARMENT_ID.T,
			lineList: [LINES.CCSS.newCollectionList([new Collection(2011, SEASONS.S)])],
			exception: true
		})
	},

	"5FT08B": {
		yearPrint: InputCDG.NO_YEAR_PRINT_TYPES.BLANK,
		identification: new Identification({
			label: Labels.CDG,
			codeStylized: "5FT08B",
			itemType: GARMENT_ID.T,
			lineList: [LINES.CCSS.newCollectionList([new Collection(2011, SEASONS.S)])],
			exception: true
		})
	},

	"CDGS2ST": {
		yearPrint: InputCDG.NO_YEAR_PRINT_TYPES.BLANK,
		identification: new Identification({
			label: Labels.CDG,
			codeStylized: "CDGS2ST",
			itemType: GARMENT_ID.B,
			lineList: [LINES.SHCHRE.newCollectionList([new Collection(2013)]),
			LINES.SHCH.newCollectionList([new Collection(2014),
			new Collection(2015)])],
			exception: true
		})
	},

	"CDGS2PL": {
		yearPrint: InputCDG.NO_YEAR_PRINT_TYPES.BLANK,
		identification: new Identification({
			label: Labels.CDG,
			codeStylized: "CDGS2PL",
			itemType: GARMENT_ID.B,
			lineList: [LINES.SHCH.newCollectionList([new Collection(2015)])],
			exception: true
		})
	},

	"PDB007": {
		yearPrint: InputCDG.NO_YEAR_PRINT_TYPES.BLANK,
		identification: new Identification({
			label: Labels.CDG,
			codeStylized: "PD-B007",
			itemType: GARMENT_ID.B,
			lineList: [LINES.HPCH.newCollectionList([new Collection(2021, SEASONS.W)])],
			exception: true
		})
	},

	"PFP043": {
		yearPrint: InputCDG.NO_YEAR_PRINT_TYPES.BLANK,
		identification: new Identification({
			label: Labels.CDG,
			codeStylized: "PF-P043",
			itemType: GARMENT_ID.P,
			lineList: [LINES.HPCH.newCollectionList([new Collection(2021, SEASONS.W)])],
			exception: true
		})
	},

	"CDGCH01": {
		yearPrint: InputCDG.NO_YEAR_PRINT_TYPES.BLANK,
		identification: new Identification({
			label: Labels.CDG,
			codeStylized: "CDG-CH-01",
			itemType: GARMENT_ID.B,
			lineList: [LINES.CHLIM.newCollectionList([new Collection(2021, SEASONS.W)])],
			exception: true
		})
	},

	"CDGCH02": {
		yearPrint: InputCDG.NO_YEAR_PRINT_TYPES.BLANK,
		identification: new Identification({
			label: Labels.CDG,
			codeStylized: "CDG-CH-02",
			itemType: GARMENT_ID.B,
			lineList: [LINES.CHLIM.newCollectionList([new Collection(2021, SEASONS.W)])],
			exception: true
		})
	},

	"CDGCH03": {
		yearPrint: InputCDG.NO_YEAR_PRINT_TYPES.BLANK,
		identification: new Identification({
			label: Labels.CDG,
			codeStylized: "CDG-CH-03",
			itemType: GARMENT_ID.B,
			lineList: [LINES.CHLIM.newCollectionList([new Collection(2021, SEASONS.W)])],
			exception: true
		})
	},

	"CDGCH04": {
		yearPrint: InputCDG.NO_YEAR_PRINT_TYPES.BLANK,
		identification: new Identification({
			label: Labels.CDG,
			codeStylized: "CDG-CH-04",
			itemType: GARMENT_ID.B,
			lineList: [LINES.CHLIM.newCollectionList([new Collection(2021, SEASONS.W)])],
			exception: true
		})
	},
});

export default SPECIAL_CASES;
