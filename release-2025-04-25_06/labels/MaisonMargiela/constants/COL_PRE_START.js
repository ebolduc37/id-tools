/**
 * Initialization of COL_PRE_START.
 *
 * Initialization as a constant for the first Maison (Martin) Margiela pre-collection.
 *
 * @author Etienne Bolduc
 */

import { Collection, deepFreeze } from "../../../utils/index.js";

// Initializing useful parameters
const Season = Collection.Season;

/**
 * Collection where Maison (Martin) Margiela pre-collections started.
 * @constant
 * @readonly
 * @type {Collection}
 * @default
 */
const COL_PRE_START = deepFreeze(new Collection(2010, Season.P));

export default COL_PRE_START;
