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

    MII:  {
        stylized: "MADE IN ITALY [unnamed manufacturer]",
        operationPeriod: new OperationPeriod(null, new Collection(2000, Season.W))
    },

    MIF:  {
        stylized: "MADE IN FRANCE [unnamed manufacturer]",
        operationPeriod: new OperationPeriod(null, null)
    },

    FUZZI: {
        stylized: "FUZZI S.P.A.",
        operationPeriod: new OperationPeriod(new Collection(1989, Season.S), new Collection(1989, Season.W))
    },

    DENI: {
        stylized: "DENI•CLER S.P.A.",
        operationPeriod: new OperationPeriod(new Collection(1989, Season.S), new Collection(1993, Season.W))
    },

    MD_SEP: {
        stylized: "MISS DEANNA [IT | EN]",
        operationPeriod: new OperationPeriod(new Collection(1995, Season.W), new Collection(2001, Season.W))
    },

    MD_TOG_MD: {
        stylized: "MISS DEANNA [IT + EN]",
        operationPeriod: new OperationPeriod(new Collection(2002, Season.S), new Collection(2003, Season.W))
    },

    MD_TOG_DS: {
        stylized: "DEANNA S.P.A. [IT + EN]",
        operationPeriod: new OperationPeriod(new Collection(2003, Season.S), new Collection(2003, Season.W))
    },

    SI:     {
        stylized: "STAFF INTERNATIONAL S.P.A.",
        operationPeriod: new OperationPeriod(new Collection(2001, Season.S), new Collection(2017, Season.W))
    },

    MG:     {
        stylized: "MARGIELA GROUP S.R.L.",
        operationPeriod: new OperationPeriod(new Collection(2018, Season.S), new Collection(2021, Season.S))
    },

    MS:     {
        stylized: "Margiela S.a.s.",
        operationPeriod: new OperationPeriod(new Collection(2021, Season.S), null)
    },

    MAC:    {
        stylized: "Mackintosh",
        operationPeriod: new OperationPeriod(new Collection(2018, Season.S), new Collection(2019, Season.W))
    },

    UNSPECIFIED:    {
        stylized: "unspecified",
        operationPeriod: new OperationPeriod(null, null)
    }

});

export default MANUFACTURER;
