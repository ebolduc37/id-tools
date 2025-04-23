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

    "KT11045": new Identification({
        input: new InputYY({ productCode: "K-T11-045", logoStyle: InputYY.LogoStyle.YOHJI_YAMAMOTO.SKEWED,
            sizing: InputYY.Sizing.NUMERICAL, fontType: InputYY.Typeface.MONOSPACED,
            fabricContent: InputYY.Language.FR_EN_JP, laundryPosition: InputYY.LaundryPosition.BOTTOM,
            doNotTumbleDry: InputYY.DoNotTumbleDry.UNSPECIFIED,
            manufacturer: InputYY.Manufacturer.YOHJI_YAMAMOTO_INC }),
        exception: true,
        label: Identification.Label.YY,
        stylizedCode: "K-T11-045",
        garmentType: GARMENT_TYPE_ID["K"],
        lineList: [LINE.YYPH.forIdentification([new Collection(1995, Season.W)])],
        counterfeit: true
    }),

    "HFB06933": new Identification({
        input: new InputYY({ productCode: "HF-B06-933", logoStyle: InputYY.LogoStyle.YOHJI_YAMAMOTO.SKEWED,
            sizing: InputYY.Sizing.ALPHABETICAL, fontType: InputYY.Typeface.UNSPECIFIED,
            fabricContent: InputYY.Language.FR_EN_JP, laundryPosition: InputYY.LaundryPosition.BOTTOM,
            doNotTumbleDry: InputYY.DoNotTumbleDry.UNSPECIFIED,
            manufacturer: InputYY.Manufacturer.YOHJI_YAMAMOTO_INC }),
        exception: true,
        label: Identification.Label.YY,
        stylizedCode: "HF-B06-933",
        garmentType: GARMENT_TYPE_ID["B"],
        lineList: [LINE.YYPH.forIdentification([new Collection(1996, Season.S)])],
        counterfeit: true
    }),

    "HEB23288": new Identification({
        input: new InputYY({ productCode: "HE-B23-288", logoStyle: InputYY.LogoStyle.YOHJI_YAMAMOTO.SKEWED,
            sizing: InputYY.Sizing.NUMERICAL, fontType: InputYY.Typeface.MONOSPACED,
            fabricContent: InputYY.Language.FR_EN_JP, laundryPosition: InputYY.LaundryPosition.BOTTOM,
            doNotTumbleDry: InputYY.DoNotTumbleDry.UNSPECIFIED,
            manufacturer: InputYY.Manufacturer.YOHJI_YAMAMOTO_INC }),
        exception: true,
        label: Identification.Label.YY,
        stylizedCode: "HE-B23-288",
        garmentType: GARMENT_TYPE_ID["B"],
        lineList: [LINE.YYPH.forIdentification([new Collection(2002, Season.S)])],
        counterfeit: true
    }),

});

export default COUNTERFEITS;
