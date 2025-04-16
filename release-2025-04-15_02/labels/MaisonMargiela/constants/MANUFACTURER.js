/**
 * Initialization of MANUFACTURER.
 *
 * Initialization of the Maison (Martin) Margiela manufacturers and their corresponding
 * operation period.
 *
 * @author Etienne Bolduc
 */

import { Collection, deepFreeze, OperationPeriod } from "../../../utils/index.js";

// Initializing useful parameter
const Season = Collection.Season;

/**
 * Enum for the Maison (Martin) Margiela manufacturers and their corresponding operation period.
 * @constant
 * @readonly
 * @enum {{stylized: string, operationPeriod: OperationPeriod}}
 */
const MANUFACTURER = deepFreeze({

    MADE_IN_ITALY:  {
        stylized: "MADE IN ITALY [unnamed]",
        operationPeriod: new OperationPeriod(null, new Collection(2000, Season.W))
    },

    MADE_IN_FRANCE:  {
        stylized: "MADE IN FRANCE [unnamed]",
        operationPeriod: new OperationPeriod(null, null)
    },

    FUZZI: {
        stylized: "FUZZI S.P.A.",
        operationPeriod: new OperationPeriod(new Collection(1989, Season.S), new Collection(1989, Season.W))
    },

    DENI_CLER: {
        stylized: "DENI_CLER•CLER S.P.A.",
        operationPeriod: new OperationPeriod(new Collection(1989, Season.S), new Collection(1993, Season.W))
    },

    MISS_DEANNA: {
        stylized: "MISS DEANNA",
        operationPeriod: new OperationPeriod(new Collection(1995, Season.W), new Collection(2003, Season.W))
    },

    MISS_DEANNA_SEPARATED: {
        stylized: "MISS DEANNA [IT /// EN]",
        operationPeriod: new OperationPeriod(new Collection(1995, Season.W), new Collection(2001, Season.W))
    },

    MISS_DEANNA_TOGETHER: {
        stylized: "MISS DEANNA [IT & EN]",
        operationPeriod: new OperationPeriod(new Collection(2002, Season.S), new Collection(2003, Season.W))
    },

    DEANNA_SPA: {
        stylized: "DEANNA S.P.A. [IT & EN]",
        operationPeriod: new OperationPeriod(new Collection(2003, Season.S), new Collection(2003, Season.W))
    },

    STAFF_INTERNATIONAL:     {
        stylized: "STAFF INTERNATIONAL S.P.A.",
        operationPeriod: new OperationPeriod(new Collection(2001, Season.S), new Collection(2017, Season.W))
    },

    MARGIELA_GROUP:     {
        stylized: "MARGIELA GROUP S.R.L.",
        operationPeriod: new OperationPeriod(new Collection(2018, Season.S), new Collection(2021, Season.S))
    },

    MARGIELA_SAS:     {
        stylized: "Margiela S.a.s.",
        operationPeriod: new OperationPeriod(new Collection(2021, Season.S), null)
    },

    MACKINTOSH:    {
        stylized: "Mackintosh",
        operationPeriod: new OperationPeriod(new Collection(2018, Season.S), new Collection(2019, Season.W))
    },

    UNSPECIFIED:    {
        stylized: "unspecified",
        operationPeriod: new OperationPeriod(null, null)
    }

});

export default MANUFACTURER;
