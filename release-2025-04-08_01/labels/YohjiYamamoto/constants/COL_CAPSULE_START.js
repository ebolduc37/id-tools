/**
 * Initialization of COL_CAPSULE_START.
 *
 * Initialization as a constant for the collection where the Yohji Yamamoto
 * capsule collections started.
 *
 * @author Etienne Bolduc
 */

import { Collection, deepFreeze } from "../../../utils/index.js";

// Initializing useful parameters
const Season = Collection.Season;

/**
 * Collection where the Yohji Yamamoto capsule collections started.
 * @constant
 * @readonly
 * @type {Collection}
 * @default
 */
const COL_CAPSULE_START = deepFreeze(new Collection(2020, Season.W));

export default COL_CAPSULE_START;
