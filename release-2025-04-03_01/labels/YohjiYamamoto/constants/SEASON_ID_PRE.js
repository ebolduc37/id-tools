/**
 * Initialization of SEASON_ID.
 *
 * Initialization of the Yohji Yamamoto precollection season IDs and their corresponding
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
 * Enum for the Yohji Yamamoto precollection season IDs and conditional functions to filter accordingly.
 * @constant
 * @readonly
 * @enum {lambda}
 */
const SEASON_ID_PRE = Object.freeze({

	/** @param {Collection} col @return {boolean} */
	A: col => col.hasNoSeason(),

	/** @param {Collection} col @return {boolean} */
	B: 	col => 	col.isEqualTo(new Collection(2020, Season.P)) ||
				col.isEqualTo(new Collection(2024, Season.P)),

	/** @param {Collection} col @return {boolean} */
	C: col => false,

	/** @param {Collection} col @return {boolean} */
	D: col => false,

	/** @param {Collection} col @return {boolean} */
	E: col => 	col.isEqualTo(new Collection(2018, Season.R)),

	/** @param {Collection} col @return {boolean} */
	F: col => false,

	/** @param {Collection} col @return {boolean} */
	G: col => false,

	/** @param {Collection} col @return {boolean} */
	H: col => 	col.isEqualTo(new Collection(2014, Season.P)),

	/** @param {Collection} col @return {boolean} */
	I: col => 	col.isEqualTo(new Collection(2018, Season.P)) ||
				col.isEqualTo(new Collection(2023, Season.R)),

	/** @param {Collection} col @return {boolean} */
	J: col => 	col.isEqualTo(new Collection(2015, Season.R)) ||
				col.isEqualTo(new Collection(2019, Season.P)),

	/** @param {Collection} col @return {boolean} */
	K: col => false,

	/** @param {Collection} col @return {boolean} */
	L: col => 	col.isEqualTo(new Collection(2016, Season.P)),

	/** @param {Collection} col @return {boolean} */
	M: col => 	col.isEqualTo(new Collection(2021, Season.P)),

	/** @param {Collection} col @return {boolean} */
	N: col => false,

	/** @param {Collection} col @return {boolean} */
	O: col => false,

	/** @param {Collection} col @return {boolean} */
	P: col =>	col.isEqualTo(new Collection(2016, Season.R)) ||
				col.isEqualTo(new Collection(2023, Season.P)),

	/** @param {Collection} col @return {boolean} */
	Q: col =>	col.isEqualTo(new Collection(2017, Season.P)) ||
				col.isEqualTo(new Collection(2022, Season.R)),

	/** @param {Collection} col @return {boolean} */
	R: col => false,

	/** @param {Collection} col @return {boolean} */
	S: col =>	col.isEqualTo(new Collection(2015, Season.P)) ||
				col.isEqualTo(new Collection(2020, Season.R)),

	/** @param {Collection} col @return {boolean} */
	T: col =>	col.isEqualTo(new Collection(2021, Season.R)) ||
				col.isEqualTo(new Collection(2025, Season.R)),

	/** @param {Collection} col @return {boolean} */
	U: col => false,
	
	/** @param {Collection} col @return {boolean} */
	V: col =>	col.isEqualTo(new Collection(2014, Season.R)) ||
				col.isEqualTo(new Collection(2022, Season.P)),

	/** @param {Collection} col @return {boolean} */
	W: col => false,

	/** @param {Collection} col @return {boolean} */
	X: col =>	col.isEqualTo(new Collection(2017, Season.R)),

	/** @param {Collection} col @return {boolean} */
	Y: col =>	col.isEqualTo(new Collection(2024, Season.R)),

	/** @param {Collection} col @return {boolean} */
	Z: col =>	col.isEqualTo(new Collection(2019, Season.R)),

	/** @param {Collection} col @return {boolean} */
	BLANK: col => true,

	/** @param {Collection} col @return {boolean} */
	UNREADABLE: col => true,

	/** @param {Collection} col @return {boolean} */
	UNSPECIFIED: col => true,
});

export default SEASON_ID_PRE;
