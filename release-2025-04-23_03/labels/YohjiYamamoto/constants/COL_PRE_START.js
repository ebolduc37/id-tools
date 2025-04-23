/**
 * Initialization of COL_PRE_START.
 *
 * Initialization as a constant for the Yohji Yamamoto pre-collections start.
 *
 * @author Etienne Bolduc
 */

import { Collection, deepFreeze } from "../../../utils/index.js";

// Initializing useful parameters
const Season = Collection.Season;

/**
 * Collection where Yohji Yamamoto pre-collections start.
 * @constant
 * @readonly
 * @type {Collection}
 * @default
 */
const COL_PRE_START = deepFreeze(new Collection(2015, Season.P));

export default COL_PRE_START;
