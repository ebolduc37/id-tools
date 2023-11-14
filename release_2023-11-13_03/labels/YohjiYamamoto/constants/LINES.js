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

    // B
    BIS: new Line("Y's bis LIMI",
    new OperationPeriod(new Collection(1999, SEASONS.W), new Collection(2002, SEASONS.S))),

    // F
    YY: new Line("Yohji Yamamoto",
        new OperationPeriod(new Collection(1981, SEASONS.W))),

    // G
    GR: new Line("Ground Y",
        new OperationPeriod(new Collection(2014, SEASONS.W))),

    // H
    YYPH: new Line("Yohji Yamamoto Pour Homme",
        new OperationPeriod(new Collection(1981, SEASONS.W))),

    // L
    LIMI: new Line("LIMI feu",
    new OperationPeriod(new Collection(2002, SEASONS.W))),

    // O, U
    SYTE: new Line("S'YTE",
        new OperationPeriod(new Collection(2011, SEASONS.W))),
});

export default LINES;
