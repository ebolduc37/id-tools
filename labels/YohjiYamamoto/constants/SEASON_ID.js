/**
 * Initialization of SEASON_ID.
 *
 * Initialization of the season IDs and their corresponding conditional function on collections
 * to use as a filter on possible candidates.
 *
 * @author Etienne Bolduc
 */

import { Seasons, Collection } from "../../../utils/index.js";

/**
 * Enum for the season IDs and conditional functions to filter accordingly.
 * @constant
 * @readonly
 * @enum {lambda}
 */
const SEASON_ID = Object.freeze({

	/** @param {Collection} col @return {boolean} */
	A: col => col.isProductionYear(),

	/** @param {Collection} col @return {boolean} */
	B: 	col => 	col.isEqualTo(new Collection(1990, Seasons.S)) ||
				col.isEqualTo(new Collection(1995, Seasons.S)) ||
				col.isEqualTo(new Collection(2000, Seasons.S)) ||
				col.isEqualTo(new Collection(2006, Seasons.W)) ||
				col.isEqualTo(new Collection(2012, Seasons.S)),

	/** @param {Collection} col @return {boolean} */
	C: col => 	col.isEqualTo(new Collection(1999, Seasons.S)) ||
				col.isEqualTo(new Collection(2010, Seasons.W)) ||
				col.isEqualTo(new Collection(2019, Seasons.W)),

	/** @param {Collection} col @return {boolean} */
	D: col => 	col.isEqualTo(new Collection(1988, Seasons.S)) ||
				col.isEqualTo(new Collection(2012, Seasons.W)) ||
				col.isEqualTo(new Collection(2017, Seasons.S)) ||
				col.isEqualTo(new Collection(2021, Seasons.S)),

	/** @param {Collection} col @return {boolean} */
	E: col => 	col.isEqualTo(new Collection(1995, Seasons.W)) ||
				col.isEqualTo(new Collection(2002, Seasons.S)) ||
				col.isEqualTo(new Collection(2008, Seasons.W)) ||
				col.isEqualTo(new Collection(2022, Seasons.W)),

	/** @param {Collection} col @return {boolean} */
	F: col => 	col.isEqualTo(new Collection(1996, Seasons.S)) ||
				col.isEqualTo(new Collection(2014, Seasons.W)),

	/** @param {Collection} col @return {boolean} */
	G: col => 	col.isEqualTo(new Collection(1996, Seasons.W)) ||
				col.isEqualTo(new Collection(2014, Seasons.S)) ||
				col.isEqualTo(new Collection(2022, Seasons.S)),

	/** @param {Collection} col @return {boolean} */
	H: col => 	col.isEqualTo(new Collection(2019, Seasons.S)),

	/** @param {Collection} col @return {boolean} */
	I: col => 	col.isEqualTo(new Collection(1997, Seasons.W)),

	/** @param {Collection} col @return {boolean} */
	J: col => 	col.isEqualTo(new Collection(1998, Seasons.S)) ||
				col.isEqualTo(new Collection(2004, Seasons.W)) ||
				col.isEqualTo(new Collection(2010, Seasons.S)),

	/** @param {Collection} col @return {boolean} */
	K: col => 	col.isEqualTo(new Collection(2017, Seasons.W)),

	/** @param {Collection} col @return {boolean} */
	L: col => 	col.isEqualTo(new Collection(1987, Seasons.W)),

	/** @param {Collection} col @return {boolean} */
	M: col => 	col.isEqualTo(new Collection(2002, Seasons.W)) ||
				col.isEqualTo(new Collection(2008, Seasons.S)),

	/** @param {Collection} col @return {boolean} */
	N: col => 	col.isEqualTo(new Collection(1999, Seasons.W)) ||
				col.isEqualTo(new Collection(2005, Seasons.W)) ||
				col.isEqualTo(new Collection(2020, Seasons.S)),

	/** @param {Collection} col @return {boolean} */
	O: col =>	col.isEqualTo(new Collection(1993, Seasons.S)) ||
				col.isEqualTo(new Collection(2011, Seasons.S)) ||
				col.isEqualTo(new Collection(2016, Seasons.S)),

	/** @param {Collection} col @return {boolean} */
	P: col =>	col.isEqualTo(new Collection(1993, Seasons.W)) ||
				col.isEqualTo(new Collection(2011, Seasons.W)),

	/** @param {Collection} col @return {boolean} */
	Q: col =>	col.isEqualTo(new Collection(1991, Seasons.S)) ||
				col.isEqualTo(new Collection(2003, Seasons.S)) ||
				col.isEqualTo(new Collection(2013, Seasons.W)),

	/** @param {Collection} col @return {boolean} */
	R: col =>	col.isEqualTo(new Collection(1987, Seasons.S)) ||
				col.isEqualTo(new Collection(2006, Seasons.S)) ||
				col.isEqualTo(new Collection(2016, Seasons.W)) ||
				col.isEqualTo(new Collection(2020, Seasons.W)),

	/** @param {Collection} col @return {boolean} */
	S: col =>	col.isEqualTo(new Collection(1992, Seasons.W)),

	/** @param {Collection} col @return {boolean} */
	T: col =>	col.isEqualTo(new Collection(1994, Seasons.S)) ||
				col.isEqualTo(new Collection(2000, Seasons.W)) ||
				col.isEqualTo(new Collection(2007, Seasons.S)),

	/** @param {Collection} col @return {boolean} */
	U: col =>	col.isEqualTo(new Collection(1997, Seasons.S)) ||
				col.isEqualTo(new Collection(2003, Seasons.W)) ||
				col.isEqualTo(new Collection(2015, Seasons.S)),
	
	/** @param {Collection} col @return {boolean} */
	V: col =>	col.isEqualTo(new Collection(1991, Seasons.W)) ||
				col.isEqualTo(new Collection(1994, Seasons.W)) ||
				col.isEqualTo(new Collection(2001, Seasons.W)) ||
				col.isEqualTo(new Collection(2009, Seasons.S)) ||
				col.isEqualTo(new Collection(2018, Seasons.W)),

	/** @param {Collection} col @return {boolean} */
	W: col =>	col.isEqualTo(new Collection(2018, Seasons.S)),

	/** @param {Collection} col @return {boolean} */
	X: col =>	col.isEqualTo(new Collection(2001, Seasons.S)) ||
				col.isEqualTo(new Collection(2007, Seasons.W)) ||
				col.isEqualTo(new Collection(2013, Seasons.S)) ||
				col.isEqualTo(new Collection(2021, Seasons.W)),

	/** @param {Collection} col @return {boolean} */
	Y: col =>	col.isEqualTo(new Collection(1998, Seasons.W)) ||
				col.isEqualTo(new Collection(2005, Seasons.S)) ||
				col.isEqualTo(new Collection(2015, Seasons.W)),

	/** @param {Collection} col @return {boolean} */
	Z: col =>	col.isEqualTo(new Collection(1992, Seasons.S)) ||
				col.isEqualTo(new Collection(2004, Seasons.S)) ||
				col.isEqualTo(new Collection(2009, Seasons.W)),
});

export default SEASON_ID;
