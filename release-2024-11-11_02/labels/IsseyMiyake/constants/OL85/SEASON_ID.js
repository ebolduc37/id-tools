/**
 * Initialization of SEASON_ID.
 *
 * Initialization of the ISSEY MIYAKE ON LIMITS INC. (1985) season IDs and their corresponding
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
 * List of season IDs and conditional functions for ISSEY MIYAKE ON LIMITS INC. (1985)
 * to filter accordingly.
 * @constant
 * @readonly
 * @enum {lambda}
 */
const SEASON_ID = Object.freeze({
	
	/** @param {Collection} col @return {boolean} */
	G: col => col.isEqualTo(new Collection(1985, Season.W)),
	/** @param {Collection} col @return {boolean} */
	Y: col => col.isEqualTo(new Collection(1985, Season.S)),
});

export default SEASON_ID;
