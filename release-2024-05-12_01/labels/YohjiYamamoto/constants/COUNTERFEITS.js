/**
 * Initialization of COUNTERFEITS.
 *
 * Initialization of the array of inputs that have been spotted on counterfeits of Yohji Yamamoto.
 *
 * @author Etienne Bolduc
 */

import { Collection, Identification, deepFreeze } from "../../../utils/index.js";
import GARMENT_TYPE_ID from "./GARMENT_TYPE_ID.js";
import LINE from "./LINE.js";
import InputYY from "../utils/classes/InputYY.js";

// Initializing useful parameter
const Season = Collection.Season;

/**
 * Array of inputs that have been spotted on counterfeits of Yohji Yamamoto.
 * @constant
 * @readonly
 * @type {InputYY[]}
 * @default
 */
const COUNTERFEITS = deepFreeze({

    "HFB06933": new Identification({
        input: new InputYY({ productCode: "HF-B06-933", logoStyle: InputYY.LogoStyle.YY[3],
            sizingSystem: InputYY.SizingSystem.ALPHABETICAL, fontType: InputYY.FontType.UNSPECIFIED,
            laundryPosition: InputYY.LaundryPosition.BELOW }),
        label: Identification.Label.YY,
        stylizedCode: "HF-B06-933",
        garmentType: GARMENT_TYPE_ID.B,
        lineList: [LINE.YYPH.forIdentification([new Collection(1996, Season.S)])],
        counterfeit: true
    }),

    "HEB23288": new Identification({
        input: new InputYY({ productCode: "HE-B23-288", logoStyle: InputYY.LogoStyle.YY[3],
            sizingSystem: InputYY.SizingSystem.NUMERICAL, fontType: InputYY.FontType.SANS_SERIF,
            laundryPosition: InputYY.LaundryPosition.BELOW }),
        label: Identification.Label.YY,
        stylizedCode: "HE-B23-288",
        garmentType: GARMENT_TYPE_ID.B,
        lineList: [LINE.YYPH.forIdentification([new Collection(2002, Season.S)])],
        counterfeit: true
    }),

});

export default COUNTERFEITS;
