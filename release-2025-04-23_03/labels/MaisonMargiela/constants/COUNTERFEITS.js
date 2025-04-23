/**
 * Initialization of COUNTERFEITS.
 *
 * Initialization of the array of inputs that have been spotted on counterfeits of Maison Margiela.
 *
 * @author Etienne Bolduc
 */

import { Collection, Identification, deepFreeze } from "../../../utils/index.js";
import LINE from "./LINE.js";
import InputMM from "../utils/classes/InputMM.js";

// Initializing useful parameter
const Season = Collection.Season;

/**
 * Array of inputs that have been spotted on counterfeits of Maison Margiela.
 * @constant
 * @readonly
 * @type {InputMM[]}
 * @default
 */
const COUNTERFEITS = deepFreeze({
    "01PR20174891201701": new Identification({
        input: new InputMM({ labelNotation: InputMM.LabelNotation.UNSPECIFIED, // found in line 10
            productCode: "01PR/2017/4891 - 2017 01",
            manufacturer: InputMM.Manufacturer.SI}),
        exception: true,
        label: Identification.Label.MM,
        stylizedCode: "01PR/2017/4891 - 2017 01",
        lineList: [LINE["UNSPECIFIED"].forIdentification([new Collection(2017, Season.S)])],
        counterfeit: true
    }),
    "01PR20174891": new Identification({
        input: new InputMM({ labelNotation: InputMM.LabelNotation.UNSPECIFIED,
            productCode: "01PR/2017/4891", // found in line 10
            manufacturer: InputMM.Manufacturer.SI}),
        exception: true,
        label: Identification.Label.MM,
        stylizedCode: "01PR/2017/4891",
        lineList: [LINE["UNSPECIFIED"].forIdentification([new Collection(2017, Season.S)])],
        counterfeit: true
    }),
});

export default COUNTERFEITS;
