/**
 * Initialization of COUNTERFEITS.
 *
 * Initialization of the array of inputs that have been spotted on counterfeits of ISSEY MIYAKE
 * for ISSEY MIYAKE INC.
 *
 * @author Etienne Bolduc
 */

import { Collection, Identification, deepFreeze } from "../../../../utils/index.js";
import FABRIC_TYPE_ID from "./FABRIC_TYPE_ID.js";
import GARMENT_TYPE_ID from "./GARMENT_TYPE_ID.js";
import LINE from "../LINE.js";
import InputIM from "../../utils/classes/InputIM.js";

// Initializing useful parameter
const Season = Collection.Season;

/**
 * Array of inputs that have been spotted on counterfeits of ISSEY MIYAKE.
 * @constant
 * @readonly
 * @type {InputIM[]}
 * @default
 */
const COUNTERFEITS = deepFreeze({

    "ME63FC460": new Identification({
        input: new InputIM({ productCode: "ME63-FC460", logoStyle: InputIM.LogoStyle.ME.BLACK_ON_WHITE,
            manufacturer: InputIM.Manufacturer.IMI, sizing: InputIM.Sizing.ALPHABETICAL,
            typeface: InputIM.Typeface.SLAB_SERIF }),
        exception: true,
        label: Identification.Label.IM,
        stylizedCode: "ME63-FC460",
        garmentType: GARMENT_TYPE_ID["C"],
        fabricType: FABRIC_TYPE_ID["F"],
        lineList: [LINE.ME.forIdentification([new Collection(1996, Season.W)])],
        counterfeit: true
    }),

    "PP06JF595": new Identification({
        input: new InputIM({ productCode: "PP06-JF595", logoStyle: InputIM.LogoStyle.UNSPECIFIED,
            manufacturer: InputIM.Manufacturer.IMI, sizing: InputIM.Sizing.UNSPECIFIED,
            typeface: InputIM.Typeface.SANS_SERIF }),
        exception: true,
        label: Identification.Label.IM,
        stylizedCode: "PP06-JF595",
        garmentType: GARMENT_TYPE_ID["F"],
        fabricType: FABRIC_TYPE_ID["J"],
        lineList: [LINE.PP.forIdentification([new Collection(2010, Season.S), new Collection(2020, Season.S)])],
        counterfeit: true
    }),

    "PP56JT994": new Identification({
        input: new InputIM({ productCode: "PP56-JT994", logoStyle: InputIM.LogoStyle.UNSPECIFIED,
            manufacturer: InputIM.Manufacturer.IMI, sizing: InputIM.Sizing.UNSPECIFIED,
            typeface: InputIM.Typeface.SANS_SERIF }),
        exception: true,
        label: Identification.Label.IM,
        stylizedCode: "PP56-JT994",
        garmentType: GARMENT_TYPE_ID["T"],
        fabricType: FABRIC_TYPE_ID["J"],
        lineList: [LINE.PP.forIdentification([new Collection(2005, Season.S), new Collection(2015, Season.S)])],
        counterfeit: true
    }),

});

export default COUNTERFEITS;
