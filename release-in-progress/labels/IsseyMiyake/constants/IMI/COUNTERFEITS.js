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
        input: new InputIM({ productCode: "ME63-FC460", logoStyle: InputIM.LogoStyle.ME["BW"],
            manufacturer: InputIM.Manufacturer.IMI, sizingSystem: InputIM.SizingSystem.ALPHABETICAL,
            fontType: InputIM.FontType.SLAB_SERIF }),
        label: Identification.Label.IM,
        stylizedCode: "ME63-FC460",
        garmentType: GARMENT_TYPE_ID["J"],
        fabricType: FABRIC_TYPE_ID["F"],
        lineList: [LINE.ME.forIdentification([new Collection(1996, Season.W)])],
        counterfeit: true
    }),

});

export default COUNTERFEITS;
