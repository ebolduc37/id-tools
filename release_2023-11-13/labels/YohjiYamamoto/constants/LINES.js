/**
 * Initialization of LINES.
 *
 * Initialization of all Yohji Yamamoto lines with information
 * on their operation period.
 *
 * @author Etienne Bolduc
 */

import { Collection, Line, OperationPeriod, deepFreeze } from "../../../utils/index.js";

// Initializing useful parameter
const SEASONS = Collection.SEASONS;

/**
 * Enum for all Yohji Yamamoto lines with their operation period.
 * @constant
 * @readonly
 * @enum {Line}
 */
const LINES = deepFreeze({

    // F
    YY: new Line("Yohji Yamamoto",
        new OperationPeriod(new Collection(1981, SEASONS.W))),

    // H
    YYPH: new Line("Yohji Yamamoto Pour Homme",
        new OperationPeriod(new Collection(1981, SEASONS.W))),
});

export default LINES;
