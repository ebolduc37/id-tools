/**
 * Initialization of SEASON_ID.
 *
 * Initialization of the Yohji Yamamoto capsule season IDs and their corresponding
 * conditional function on the collections to use as a filter on possible candidates.
 *
 * @author Etienne Bolduc
 */

import { Collection } from "../../../utils/index.js";

// Initializing useful parameter
const Season = Collection.Season;

/**
 * @callback lambda
 * @param {Collection} col - Collection to evaluate a condition on.
 * @return {boolean} True if the collection satisfies the condition; false otherwise.
 */

/**
 * Enum for the Yohji Yamamoto capsule season IDs and conditional functions to filter accordingly.
 * @constant
 * @readonly
 * @enum {lambda}
 */
const SEASON_ID_CAPSULE = Object.freeze({

	/** @param {Collection} col @return {boolean} */
	A: col => false,

	/** @param {Collection} col @return {boolean} */
	B: col => false,

	/** @param {Collection} col @return {boolean} */
	C: col => 	col.isEqualTo(new Collection(2020, Season.W, null, null, true)) ||
				col.isEqualTo(new Collection(2023, Season.W, null, null, true)),

	/** @param {Collection} col @return {boolean} */
	D: col => 	col.isEqualTo(new Collection(2025, Season.S, null, null, true)),

	/** @param {Collection} col @return {boolean} */
	E: col => false,

	/** @param {Collection} col @return {boolean} */
	F: col => 	col.isEqualTo(new Collection(2018, Season.W, null, null, true)) ||
				col.isEqualTo(new Collection(2022, Season.W, null, null, true)),

	/** @param {Collection} col @return {boolean} */
	G: col => false,

	/** @param {Collection} col @return {boolean} */
	H: col => 	col.isEqualTo(new Collection(2023, Season.S, null, null, true)),

	/** @param {Collection} col @return {boolean} */
	I: col => false,

	/** @param {Collection} col @return {boolean} */
	J: col => false,

	/** @param {Collection} col @return {boolean} */
	K: col => 	col.isEqualTo(new Collection(2021, Season.W, null, null, true)),

	/** @param {Collection} col @return {boolean} */
	L: col => 	col.isEqualTo(new Collection(2021, Season.S, null, null, true)),

	/** @param {Collection} col @return {boolean} */
	M: col => false,

	/** @param {Collection} col @return {boolean} */
	N: col => 	col.isEqualTo(new Collection(2024, Season.S, null, null, true)),

	/** @param {Collection} col @return {boolean} */
	O: col => false,

	/** @param {Collection} col @return {boolean} */
	P: col => false,

	/** @param {Collection} col @return {boolean} */
	Q: col => false,

	/** @param {Collection} col @return {boolean} */
	R: col =>	col.isEqualTo(new Collection(2024, Season.W, null, null, true)),

	/** @param {Collection} col @return {boolean} */
	S: col => false,

	/** @param {Collection} col @return {boolean} */
	T: col => false,

	/** @param {Collection} col @return {boolean} */
	U: col => false,

	/** @param {Collection} col @return {boolean} */
	V: col => false,

	/** @param {Collection} col @return {boolean} */
	W: col =>	col.isEqualTo(new Collection(2022, Season.S, null, null, true)),

	/** @param {Collection} col @return {boolean} */
	X: col => false,

	/** @param {Collection} col @return {boolean} */
	Y: col =>	col.isEqualTo(new Collection(2019, Season.W, null, null, true)),

	/** @param {Collection} col @return {boolean} */
	Z: col => false,

	/** @param {Collection} col @return {boolean} */
	BLANK: col => true,

	/** @param {Collection} col @return {boolean} */
	UNREADABLE: col => true,

	/** @param {Collection} col @return {boolean} */
	UNSPECIFIED: col => true,
});

export default SEASON_ID_CAPSULE;
