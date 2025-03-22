/**
 * Initialization of MANUFACTURER.
 *
 * Initialization of the Yohji Yamamoto manufacturers and their corresponding
 * operation period.
 *
 * @author Etienne Bolduc
 */

import { Collection, deepFreeze, OperationPeriod } from "../../../utils/index.js";

// Initializing useful parameter
const Season = Collection.Season;

/**
 * Enum for the Yohji Yamamoto manufacturers and their corresponding operation period.
 * @constant
 * @readonly
 * @enum {{stylized: string, operationPeriod: OperationPeriod}}
 */
const MANUFACTURER = deepFreeze({

    BLANK:{
        stylized: "blank",
        operationPeriod: new OperationPeriod(null, new Collection(1986, Season.W))
    },

    YS: {
        stylized: "Y's / Y's for men",
        operationPeriod: new OperationPeriod(null, new Collection(1997, Season.S))
    },

    YY: {
        stylized: "Yohji Yamamoto",
        operationPeriod: new OperationPeriod(new Collection(1986, Season.W), null)
    },

    UNSPECIFIED: {
        stylized: "unspecified",
        operationPeriod: new OperationPeriod(null, null)
    }

});

export default MANUFACTURER;
