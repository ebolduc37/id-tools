/**
 * Initialization of SPECIAL_CASE.
 *
 * Initialization of the product codes that are special cases of COMME des GARÇONS.
 *
 * @author Etienne Bolduc
 */

import { Collection, Identification, deepFreeze } from "../../../utils/index.js";
import GARMENT_TYPE_ID from "./GARMENT_TYPE_ID.js";
import LINE from "./LINE.js";
import InputCDG from "../utils/classes/InputCDG.js";

// Initializing useful parameter
const Season = Collection.Season;

/**
 * Enum for the product codes of COMME des GARÇONS special cases and
 * corresponding year print information and identification data.
 * @constant
 * @readonly
 * @enum {{yearPrint: (string|InputCDG.NoYearPrint), identification: Identification}}
 */
const SPECIAL_CASE = deepFreeze({

	"08BBT01": {
		yearPrint: InputCDG.NoYearPrint.BLANK,
		identification: new Identification({
			input: new InputCDG({ productCode: "08BBT01", yearPrint: "BLANK" }),
			label: Identification.Label.CDG,
			stylizedCode: "08BBT01",
			garmentType: GARMENT_TYPE_ID.T,
			lineList: [LINE.CCBB.forIdentification([new Collection(2004)])],
			exception: true
		})
	},

	"08BBT02": {
		yearPrint: InputCDG.NoYearPrint.BLANK,
		identification: new Identification({
			input: new InputCDG({ productCode: "08BBT02", yearPrint: "BLANK" }),
			label: Identification.Label.CDG,
			stylizedCode: "08BBT02",
			garmentType: GARMENT_TYPE_ID.T,
			lineList: [LINE.CCBB.forIdentification([new Collection(2004)])],
			exception: true
		})
	},

	"BEARBRICKT001": {
		yearPrint: "2004",
		identification: new Identification({
			input: new InputCDG({ productCode: "BEARBRICKT001", yearPrint: "2004" }),
			label: Identification.Label.CDG,
			stylizedCode: "BEARBRICK-T001",
			garmentType: GARMENT_TYPE_ID.T,
			lineList: [LINE.CCBB.forIdentification([new Collection(2004)])],
			exception: true
		})
	},

	"BEARBRICKT002": {
		yearPrint: "2004",
		identification: new Identification({
			input: new InputCDG({ productCode: "BEARBRICKT002", yearPrint: "2004" }),
			label: Identification.Label.CDG,
			stylizedCode: "BEARBRICK-T002",
			garmentType: GARMENT_TYPE_ID.T,
			lineList: [LINE.CCBB.forIdentification([new Collection(2004)])],
			exception: true
		})
	},

	"BEARBRICKT003": {
		yearPrint: "2004",
		identification: new Identification({
			input: new InputCDG({ productCode: "BEARBRICKT003", yearPrint: "2004" }),
			label: Identification.Label.CDG,
			stylizedCode: "BEARBRICK-T003",
			garmentType: GARMENT_TYPE_ID.T,
			lineList: [LINE.CCBB.forIdentification([new Collection(2004)])],
			exception: true
		})
	},

	"BEARBRICKT004": {
		yearPrint: "2004",
		identification: new Identification({
			input: new InputCDG({ productCode: "BEARBRICKT004", yearPrint: "2004" }),
			label: Identification.Label.CDG,
			stylizedCode: "BEARBRICK-T004",
			garmentType: GARMENT_TYPE_ID.T,
			lineList: [LINE.CCBB.forIdentification([new Collection(2004)])],
			exception: true
		})
	},

	"PSJ063": {
		yearPrint: "2004",
		identification: new Identification({
			input: new InputCDG({ productCode: "PSJ063", yearPrint: "2004" }),
			label: Identification.Label.CDG,
			stylizedCode: "PS-J063",
			garmentType: GARMENT_TYPE_ID.J,
			lineList: [LINE.HPCH.forIdentification([new Collection(2007, Season.W)])],
			exception: true
		})
	},

	"OTJ007": {
		yearPrint: "2007",
		identification: new Identification({
			input: new InputCDG({ productCode: "OTJ007", yearPrint: "2007" }),
			label: Identification.Label.CDG,
			stylizedCode: "OT-J007",
			garmentType: GARMENT_TYPE_ID.J,
			lineList: [LINE.HPCH.forIdentification([new Collection(2007, Season.W)])],
			exception: true
		})
	},

	"SD19T60C": {
		yearPrint: InputCDG.NoYearPrint.BLANK,
		identification: new Identification({
			input: new InputCDG({ productCode: "SD19T60C", yearPrint: "BLANK" }),
			label: Identification.Label.CDG,
			stylizedCode: "SD19T60C",
			garmentType: GARMENT_TYPE_ID.T,
			lineList: [LINE.SPEEDO.forIdentification([new Collection(2009, Season.S)])],
			exception: true
		})
	},

	"5FT08A": {
		yearPrint: InputCDG.NoYearPrint.BLANK,
		identification: new Identification({
			input: new InputCDG({ productCode: "5FT08A", yearPrint: "BLANK" }),
			label: Identification.Label.CDG,
			stylizedCode: "5FT08A",
			garmentType: GARMENT_TYPE_ID.T,
			lineList: [LINE.CCSS.forIdentification([new Collection(2011, Season.S)])],
			exception: true
		})
	},

	"5FT08B": {
		yearPrint: InputCDG.NoYearPrint.BLANK,
		identification: new Identification({
			input: new InputCDG({ productCode: "5FT08B", yearPrint: "BLANK" }),
			label: Identification.Label.CDG,
			stylizedCode: "5FT08B",
			garmentType: GARMENT_TYPE_ID.T,
			lineList: [LINE.CCSS.forIdentification([new Collection(2011, Season.S)])],
			exception: true
		})
	},

	"CDGS2ST": {
		yearPrint: InputCDG.NoYearPrint.BLANK,
		identification: new Identification({
			input: new InputCDG({ productCode: "CDGS2ST", yearPrint: "BLANK" }),
			label: Identification.Label.CDG,
			stylizedCode: "CDGS2ST",
			garmentType: GARMENT_TYPE_ID.B,
			lineList: [LINE.SHCHRE.forIdentification([new Collection(2013)]),
			LINE.SHCH.forIdentification([new Collection(2014),
			new Collection(2015)])],
			exception: true
		})
	},

	"CDGS2PL": {
		yearPrint: InputCDG.NoYearPrint.BLANK,
		identification: new Identification({
			input: new InputCDG({ productCode: "CDGS2PL", yearPrint: "BLANK" }),
			label: Identification.Label.CDG,
			stylizedCode: "CDGS2PL",
			garmentType: GARMENT_TYPE_ID.B,
			lineList: [LINE.SHCH.forIdentification([new Collection(2015)])],
			exception: true
		})
	},

	"PDB007": {
		yearPrint: InputCDG.NoYearPrint.BLANK,
		identification: new Identification({
			input: new InputCDG({ productCode: "PDB007", yearPrint: "BLANK" }),
			label: Identification.Label.CDG,
			stylizedCode: "PD-B007",
			garmentType: GARMENT_TYPE_ID.B,
			lineList: [LINE.HPCH.forIdentification([new Collection(2021, Season.W)])],
			exception: true
		})
	},

	"PFP043": {
		yearPrint: InputCDG.NoYearPrint.BLANK,
		identification: new Identification({
			input: new InputCDG({ productCode: "PFP043", yearPrint: "BLANK" }),
			label: Identification.Label.CDG,
			stylizedCode: "PF-P043",
			garmentType: GARMENT_TYPE_ID.P,
			lineList: [LINE.HPCH.forIdentification([new Collection(2021, Season.W)])],
			exception: true
		})
	},

	"CDGCH01": {
		yearPrint: InputCDG.NoYearPrint.BLANK,
		identification: new Identification({
			input: new InputCDG({ productCode: "CDGCH01", yearPrint: "BLANK" }),
			label: Identification.Label.CDG,
			stylizedCode: "CDG-CH-01",
			garmentType: GARMENT_TYPE_ID.B,
			lineList: [LINE.CHLIM.forIdentification([new Collection(2021, Season.W)])],
			exception: true
		})
	},

	"CDGCH02": {
		yearPrint: InputCDG.NoYearPrint.BLANK,
		identification: new Identification({
			input: new InputCDG({ productCode: "CDGCH02", yearPrint: "BLANK" }),
			label: Identification.Label.CDG,
			stylizedCode: "CDG-CH-02",
			garmentType: GARMENT_TYPE_ID.B,
			lineList: [LINE.CHLIM.forIdentification([new Collection(2021, Season.W)])],
			exception: true
		})
	},

	"CDGCH03": {
		yearPrint: InputCDG.NoYearPrint.BLANK,
		identification: new Identification({
			input: new InputCDG({ productCode: "CDGCH03", yearPrint: "BLANK" }),
			label: Identification.Label.CDG,
			stylizedCode: "CDG-CH-03",
			garmentType: GARMENT_TYPE_ID.B,
			lineList: [LINE.CHLIM.forIdentification([new Collection(2021, Season.W)])],
			exception: true
		})
	},

	"CDGCH04": {
		yearPrint: InputCDG.NoYearPrint.BLANK,
		identification: new Identification({
			input: new InputCDG({ productCode: "CDGCH04", yearPrint: "BLANK" }),
			label: Identification.Label.CDG,
			stylizedCode: "CDG-CH-04",
			garmentType: GARMENT_TYPE_ID.B,
			lineList: [LINE.CHLIM.forIdentification([new Collection(2021, Season.W)])],
			exception: true
		})
	},

	"DR200501": {
		yearPrint: "2004",
		identification: new Identification({
			input: new InputCDG({ productCode: "DR-2005-01", yearPrint: "2004" }),
			label: Identification.Label.CDG,
			stylizedCode: "DR-2005-01",
			garmentType: GARMENT_TYPE_ID.T,
			lineList: [LINE.DR05.forIdentification([new Collection(2004, Season.W)])],
			exception: true
		})
	},
});

export default SPECIAL_CASE;
