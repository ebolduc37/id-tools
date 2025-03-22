/**
 * Initialization of COUNTERFEITS.
 *
 * Initialization of the array of inputs that have been spotted on counterfeits of ISSEY MIYAKE
 * for ISSEY MIYAKE INT'L. INC.
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

    "JY11097": new Identification({
        input: new InputIM({ productCode: "JY11097", logoStyle: InputIM.LogoStyle.BRUSH,
            manufacturer: InputIM.Manufacturer.IMII, sizingSystem: InputIM.SizingSystem.ALPHABETICAL,
            fontType: InputIM.FontType.SLAB_SERIF }),
        exception: true,
        label: Identification.Label.IM,
        stylizedCode: "JY11097",
        garmentType: GARMENT_TYPE_ID[1],
        fabricType: FABRIC_TYPE_ID["Y"],
        lineList: [LINE.ME.forIdentification([new Collection(1996, Season.W)])],
        counterfeit: true
    }),

});

export default COUNTERFEITS;
