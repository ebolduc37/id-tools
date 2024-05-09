/**
 * Initialization of SEASON_ID.
 *
 * Initialization of the ISSEY MIYAKE INC. season IDs and their corresponding
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
 * Enum for the ISSEY MIYAKE INC. season IDs and conditional functions to filter accordingly.
 * @constant
 * @readonly
 * @enum {lambda}
 */
const SEASON_ID = Object.freeze({
	/** @param {Collection} col @return {boolean} */
	0: col => col.hasNoSeason(),
	/** @param {Collection} col @return {boolean} */
	1: col => col.isS(),
	/** @param {Collection} col @return {boolean} */
	2: col => col.isS(),
	/** @param {Collection} col @return {boolean} */
	3: col => col.isW(),
	/** @param {Collection} col @return {boolean} */
	4: col => col.isW(),
	/** @param {Collection} col @return {boolean} */
	5: col => col.hasNoSeason(),
	/** @param {Collection} col @return {boolean} */
	6: col => col.isS(),
	/** @param {Collection} col @return {boolean} */
	7: col => col.isS(),
	/** @param {Collection} col @return {boolean} */
	8: col => col.isW(),
	/** @param {Collection} col @return {boolean} */
	9: col => col.isW(),
});

export default SEASON_ID;
