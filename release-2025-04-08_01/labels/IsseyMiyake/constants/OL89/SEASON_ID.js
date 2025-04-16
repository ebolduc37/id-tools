/**
 * Initialization of SEASON_ID.
 *
 * Initialization of the ISSEY MIYAKE ON LIMITS INC. (1989-1990) season IDs and their corresponding
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
 * Enum for the ISSEY MIYAKE ON LIMITS INC. (1989-1990) season IDs and
 * conditional functions to filter accordingly.
 * @constant
 * @readonly
 * @enum {lambda}
 */
const SEASON_ID = Object.freeze({
	/** @param {Collection} col @return {boolean} */
	A: col => col.isS(),
	/** @param {Collection} col @return {boolean} */
	B: col => col.isS(),
	/** @param {Collection} col @return {boolean} */
	C: col => col.isW(),
	/** @param {Collection} col @return {boolean} */
	D: col => col.isW(),
	/** @param {Collection} col @return {boolean} */
	E: col => col.isS(),
	/** @param {Collection} col @return {boolean} */
	F: col => col.isS(),
	/** @param {Collection} col @return {boolean} */
	G: col => col.isW(),
	/** @param {Collection} col @return {boolean} */
	H: col => col.isW(),
});

export default SEASON_ID;
