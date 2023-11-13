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
const SEASONS = Collection.SEASONS;

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
	A: col => col.isProductionYear(),

	/** @param {Collection} col @return {boolean} */
	B: 	col => 	col.isEqualTo(new Collection(1990, SEASONS.S)) ||
				col.isEqualTo(new Collection(1995, SEASONS.S)) ||
				col.isEqualTo(new Collection(2000, SEASONS.S)) ||
				col.isEqualTo(new Collection(2006, SEASONS.W)) ||
				col.isEqualTo(new Collection(2012, SEASONS.S)),

	/** @param {Collection} col @return {boolean} */
	C: col => 	col.isEqualTo(new Collection(1999, SEASONS.S)) ||
				col.isEqualTo(new Collection(2010, SEASONS.W)) ||
				col.isEqualTo(new Collection(2019, SEASONS.W)),

	/** @param {Collection} col @return {boolean} */
	D: col => 	col.isEqualTo(new Collection(1988, SEASONS.S)) ||
				col.isEqualTo(new Collection(2012, SEASONS.W)) ||
				col.isEqualTo(new Collection(2017, SEASONS.S)) ||
				col.isEqualTo(new Collection(2021, SEASONS.S)),

	/** @param {Collection} col @return {boolean} */
	E: col => 	col.isEqualTo(new Collection(1995, SEASONS.W)) ||
				col.isEqualTo(new Collection(2002, SEASONS.S)) ||
				col.isEqualTo(new Collection(2008, SEASONS.W)) ||
				col.isEqualTo(new Collection(2022, SEASONS.W)),

	/** @param {Collection} col @return {boolean} */
	F: col => 	col.isEqualTo(new Collection(1996, SEASONS.S)) ||
				col.isEqualTo(new Collection(2014, SEASONS.W)),

	/** @param {Collection} col @return {boolean} */
	G: col => 	col.isEqualTo(new Collection(1996, SEASONS.W)) ||
				col.isEqualTo(new Collection(2014, SEASONS.S)) ||
				col.isEqualTo(new Collection(2022, SEASONS.S)),

	/** @param {Collection} col @return {boolean} */
	H: col => 	col.isEqualTo(new Collection(2019, SEASONS.S)),

	/** @param {Collection} col @return {boolean} */
	I: col => 	col.isEqualTo(new Collection(1997, SEASONS.W)),

	/** @param {Collection} col @return {boolean} */
	J: col => 	col.isEqualTo(new Collection(1998, SEASONS.S)) ||
				col.isEqualTo(new Collection(2004, SEASONS.W)) ||
				col.isEqualTo(new Collection(2010, SEASONS.S)),

	/** @param {Collection} col @return {boolean} */
	K: col => 	col.isEqualTo(new Collection(2017, SEASONS.W)),

	/** @param {Collection} col @return {boolean} */
	L: col => 	col.isEqualTo(new Collection(1987, SEASONS.W)),

	/** @param {Collection} col @return {boolean} */
	M: col => 	col.isEqualTo(new Collection(2002, SEASONS.W)) ||
				col.isEqualTo(new Collection(2008, SEASONS.S)),

	/** @param {Collection} col @return {boolean} */
	N: col => 	col.isEqualTo(new Collection(1999, SEASONS.W)) ||
				col.isEqualTo(new Collection(2005, SEASONS.W)) ||
				col.isEqualTo(new Collection(2020, SEASONS.S)),

	/** @param {Collection} col @return {boolean} */
	O: col =>	col.isEqualTo(new Collection(1993, SEASONS.S)) ||
				col.isEqualTo(new Collection(2011, SEASONS.S)) ||
				col.isEqualTo(new Collection(2016, SEASONS.S)),

	/** @param {Collection} col @return {boolean} */
	P: col =>	col.isEqualTo(new Collection(1993, SEASONS.W)) ||
				col.isEqualTo(new Collection(2011, SEASONS.W)),

	/** @param {Collection} col @return {boolean} */
	Q: col =>	col.isEqualTo(new Collection(1991, SEASONS.S)) ||
				col.isEqualTo(new Collection(2003, SEASONS.S)) ||
				col.isEqualTo(new Collection(2013, SEASONS.W)),

	/** @param {Collection} col @return {boolean} */
	R: col =>	col.isEqualTo(new Collection(1987, SEASONS.S)) ||
				col.isEqualTo(new Collection(2006, SEASONS.S)) ||
				col.isEqualTo(new Collection(2016, SEASONS.W)) ||
				col.isEqualTo(new Collection(2020, SEASONS.W)),

	/** @param {Collection} col @return {boolean} */
	S: col =>	col.isEqualTo(new Collection(1992, SEASONS.W)),

	/** @param {Collection} col @return {boolean} */
	T: col =>	col.isEqualTo(new Collection(1994, SEASONS.S)) ||
				col.isEqualTo(new Collection(2000, SEASONS.W)) ||
				col.isEqualTo(new Collection(2007, SEASONS.S)),

	/** @param {Collection} col @return {boolean} */
	U: col =>	col.isEqualTo(new Collection(1997, SEASONS.S)) ||
				col.isEqualTo(new Collection(2003, SEASONS.W)) ||
				col.isEqualTo(new Collection(2015, SEASONS.S)),
	
	/** @param {Collection} col @return {boolean} */
	V: col =>	col.isEqualTo(new Collection(1991, SEASONS.W)) ||
				col.isEqualTo(new Collection(1994, SEASONS.W)) ||
				col.isEqualTo(new Collection(2001, SEASONS.W)) ||
				col.isEqualTo(new Collection(2009, SEASONS.S)) ||
				col.isEqualTo(new Collection(2018, SEASONS.W)),

	/** @param {Collection} col @return {boolean} */
	W: col =>	col.isEqualTo(new Collection(2018, SEASONS.S)),

	/** @param {Collection} col @return {boolean} */
	X: col =>	col.isEqualTo(new Collection(2001, SEASONS.S)) ||
				col.isEqualTo(new Collection(2007, SEASONS.W)) ||
				col.isEqualTo(new Collection(2013, SEASONS.S)) ||
				col.isEqualTo(new Collection(2021, SEASONS.W)),

	/** @param {Collection} col @return {boolean} */
	Y: col =>	col.isEqualTo(new Collection(1998, SEASONS.W)) ||
				col.isEqualTo(new Collection(2005, SEASONS.S)) ||
				col.isEqualTo(new Collection(2015, SEASONS.W)),

	/** @param {Collection} col @return {boolean} */
	Z: col =>	col.isEqualTo(new Collection(1992, SEASONS.S)) ||
				col.isEqualTo(new Collection(2004, SEASONS.S)) ||
				col.isEqualTo(new Collection(2009, SEASONS.W)),
});

export default SEASON_ID;
