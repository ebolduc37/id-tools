/**
 * Initialization of LINES.
 *
 * Initialization of the lines with information on their operation period.
 *
 * @author Etienne Bolduc
 */

import { deepFreeze, Seasons, Collection, OperationPeriod, Line } from "../../../utils/index.js";

/**
 * Enum for the lines and their operation period and production schedule information
 * @constant
 * @readonly
 * @enum {Line}
 */
const LINES = deepFreeze({

    // F
    YY: new Line("Yohji Yamamoto",
        new OperationPeriod(new Collection(1981, Seasons.W))),

    // H
    YYPH: new Line("Yohji Yamamoto POUR HOMME",
        new OperationPeriod(new Collection(1981, Seasons.W))),
});

export default LINES;
