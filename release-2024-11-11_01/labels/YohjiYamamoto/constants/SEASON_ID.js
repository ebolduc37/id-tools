/**
 * Initialization of SEASON_ID.
 *
 * Initialization of the Yohji Yamamoto season IDs and their corresponding
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
 * Enum for the Yohji Yamamoto season IDs and conditional functions to filter accordingly.
 * @constant
 * @readonly
 * @enum {lambda}
 */
const SEASON_ID = Object.freeze({

	/** @param {Collection} col @return {boolean} */
	A: col => col.hasNoSeason(),

	/** @param {Collection} col @return {boolean} */
	B: 	col => 	col.isEqualTo(new Collection(1990, Season.S)) ||
				col.isEqualTo(new Collection(1995, Season.S)) ||
				col.isEqualTo(new Collection(2000, Season.S)) ||
				col.isEqualTo(new Collection(2006, Season.W)) ||
				col.isEqualTo(new Collection(2012, Season.S)),

	/** @param {Collection} col @return {boolean} */
	C: col => 	col.isEqualTo(new Collection(1999, Season.S)) ||
				col.isEqualTo(new Collection(2010, Season.W)) ||
				col.isEqualTo(new Collection(2019, Season.W)),

	/** @param {Collection} col @return {boolean} */
	D: col => 	col.isEqualTo(new Collection(1988, Season.S)) ||
				col.isEqualTo(new Collection(2012, Season.W)) ||
				col.isEqualTo(new Collection(2017, Season.S)) ||
				col.isEqualTo(new Collection(2021, Season.S)),

	/** @param {Collection} col @return {boolean} */
	E: col => 	col.isEqualTo(new Collection(1988, Season.W)) ||
				col.isEqualTo(new Collection(1995, Season.W)) ||
				col.isEqualTo(new Collection(2002, Season.S)) ||
				col.isEqualTo(new Collection(2008, Season.W)) ||
				col.isEqualTo(new Collection(2022, Season.W)),

	/** @param {Collection} col @return {boolean} */
	F: col => 	col.isEqualTo(new Collection(1996, Season.S)) ||
				col.isEqualTo(new Collection(2014, Season.W)),

	/** @param {Collection} col @return {boolean} */
	G: col => 	col.isEqualTo(new Collection(1996, Season.W)) ||
				col.isEqualTo(new Collection(2014, Season.S)) ||
				col.isEqualTo(new Collection(2022, Season.S)),

	/** @param {Collection} col @return {boolean} */
	H: col => 	col.isEqualTo(new Collection(2019, Season.S)),

	/** @param {Collection} col @return {boolean} */
	I: col => 	col.isEqualTo(new Collection(1997, Season.W)),

	/** @param {Collection} col @return {boolean} */
	// col.isEqualTo(new Collection(1987, Season.W)) || ???
	J: col => 	col.isEqualTo(new Collection(1998, Season.S)) ||
				col.isEqualTo(new Collection(2004, Season.W)) ||
				col.isEqualTo(new Collection(2010, Season.S)) ||
				col.isEqualTo(new Collection(2023, Season.W)),

	/** @param {Collection} col @return {boolean} */
	K: col => 	col.isEqualTo(new Collection(2017, Season.W)),

	/** @param {Collection} col @return {boolean} */
	L: col => 	col.isEqualTo(new Collection(1987, Season.W)),

	/** @param {Collection} col @return {boolean} */
	M: col => 	col.isEqualTo(new Collection(2002, Season.W)) ||
				col.isEqualTo(new Collection(2008, Season.S)),

	/** @param {Collection} col @return {boolean} */
	N: col => 	col.isEqualTo(new Collection(1999, Season.W)) ||
				col.isEqualTo(new Collection(2005, Season.W)) ||
				col.isEqualTo(new Collection(2020, Season.S)),

	/** @param {Collection} col @return {boolean} */
	O: col =>	col.isEqualTo(new Collection(1993, Season.S)) ||
				col.isEqualTo(new Collection(2011, Season.S)) ||
				col.isEqualTo(new Collection(2016, Season.S)),

	/** @param {Collection} col @return {boolean} */
	P: col =>	col.isEqualTo(new Collection(1993, Season.W)) ||
				col.isEqualTo(new Collection(2011, Season.W)),

	/** @param {Collection} col @return {boolean} */
	Q: col =>	col.isEqualTo(new Collection(1991, Season.S)) ||
				col.isEqualTo(new Collection(2003, Season.S)) ||
				col.isEqualTo(new Collection(2013, Season.W)),

	/** @param {Collection} col @return {boolean} */
	R: col =>	col.isEqualTo(new Collection(1987, Season.S)) ||
				col.isEqualTo(new Collection(2006, Season.S)) ||
				col.isEqualTo(new Collection(2016, Season.W)) ||
				col.isEqualTo(new Collection(2020, Season.W)),

	/** @param {Collection} col @return {boolean} */
	S: col =>	col.isEqualTo(new Collection(1992, Season.W)),

	/** @param {Collection} col @return {boolean} */
	T: col =>	col.isEqualTo(new Collection(1994, Season.S)) ||
				col.isEqualTo(new Collection(2000, Season.W)) ||
				col.isEqualTo(new Collection(2007, Season.S)),

	/** @param {Collection} col @return {boolean} */
	U: col =>	col.isEqualTo(new Collection(1997, Season.S)) ||
				col.isEqualTo(new Collection(2003, Season.W)) ||
				col.isEqualTo(new Collection(2015, Season.S)),
	
	/** @param {Collection} col @return {boolean} */
	V: col =>	col.isEqualTo(new Collection(1991, Season.W)) ||
				col.isEqualTo(new Collection(1994, Season.W)) ||
				col.isEqualTo(new Collection(2001, Season.W)) ||
				col.isEqualTo(new Collection(2009, Season.S)) ||
				col.isEqualTo(new Collection(2018, Season.W)),

	/** @param {Collection} col @return {boolean} */
	W: col =>	col.isEqualTo(new Collection(2018, Season.S)),

	/** @param {Collection} col @return {boolean} */
	X: col =>	col.isEqualTo(new Collection(2001, Season.S)) ||
				col.isEqualTo(new Collection(2007, Season.W)) ||
				col.isEqualTo(new Collection(2013, Season.S)) ||
				col.isEqualTo(new Collection(2021, Season.W)),

	/** @param {Collection} col @return {boolean} */
	Y: col =>	col.isEqualTo(new Collection(1998, Season.W)) ||
				col.isEqualTo(new Collection(2005, Season.S)) ||
				col.isEqualTo(new Collection(2015, Season.W)),

	/** @param {Collection} col @return {boolean} */
	Z: col =>	col.isEqualTo(new Collection(1992, Season.S)) ||
				col.isEqualTo(new Collection(2004, Season.S)) ||
				col.isEqualTo(new Collection(2009, Season.W)) ||
				col.isEqualTo(new Collection(2023, Season.S))
});

export default SEASON_ID;
