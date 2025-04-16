/**
 * Initialization of SEASON_ID.
 *
 * Initialization of the ISSEY MIYAKE ON LIMITS INC. (1983-1985) season IDs and their corresponding
 * conditional function on the collections to use as a filter on possible candidates.
 *
 * @author Etienne Bolduc
 */

import { Collection } from "../../../../utils/index.js";

// Initializing useful parameter
const Season = Collection.Season;

/**
 * @callback lambda
 * @param {Collection} col - Collection to evaluate a condition on.
 * @return {boolean} True if the collection satisfies the condition; false otherwise.
 */

/**
 * List of season IDs and conditional functions for ISSEY MIYAKE ON LIMITS INC. (1983-1985)
 * to filter accordingly.
 * @constant
 * @readonly
 * @enum {lambda}
 */
const SEASON_ID = Object.freeze({
	/** @param {Collection} col @return {boolean} */
	0: col => !col.hasNoSeason(),
	/** @param {Collection} col @return {boolean} */
	1: col => !col.hasNoSeason(),
	/** @param {Collection} col @return {boolean} */
	2: col => !col.hasNoSeason(),
	/** @param {Collection} col @return {boolean} */
	3: col => !col.hasNoSeason(),
});

export default SEASON_ID;
