/**
 * Initialization of ALL_COLLECTIONS.
 *
 * Initialization of the set of all possible Yohji Yamamoto
 * collections and production years up to the latest.
 *
 * @author Etienne Bolduc
 */

import { Collection, deepFreeze } from "../../../utils/index.js";

// Initializing useful parameters
const Season = Collection.Season;
const YEAR_ESTABLISHED = 1972;
const YEAR_INTERSEASON_START = 2018;
const YEAR_CURRENT = new Date().getFullYear();
const MONTH_CURRENT = new Date().getMonth();

// Initializing the set of all possible collections and production years 
let ALL_COLLECTIONS_tofill = [];
for (let year = YEAR_ESTABLISHED; year < YEAR_CURRENT; year++) {
	ALL_COLLECTIONS_tofill.push(new Collection(year));
	if (year >= YEAR_INTERSEASON_START) ALL_COLLECTIONS_tofill.push(new Collection(year, Season.R));
	ALL_COLLECTIONS_tofill.push(new Collection(year, Season.S));
	if (year >= YEAR_INTERSEASON_START) ALL_COLLECTIONS_tofill.push(new Collection(year, Season.P));
	ALL_COLLECTIONS_tofill.push(new Collection(year, Season.W));
}
ALL_COLLECTIONS_tofill.push(new Collection(YEAR_CURRENT));
ALL_COLLECTIONS_tofill.push(new Collection(YEAR_CURRENT, Season.R));
ALL_COLLECTIONS_tofill.push(new Collection(YEAR_CURRENT, Season.S));

// Only adding the Autumn/Winter collection of the current year to the set in July
if (MONTH_CURRENT >= 6) {
	ALL_COLLECTIONS_tofill.push(new Collection(YEAR_CURRENT, Season.P));
	ALL_COLLECTIONS_tofill.push(new Collection(YEAR_CURRENT, Season.W));
}

/**
 * Array of all possible Yohji Yamamoto collections and productions years.
 * @constant
 * @readonly
 * @type {Collection[]}
 * @default
 */
const ALL_COLLECTIONS = deepFreeze(ALL_COLLECTIONS_tofill);

export default ALL_COLLECTIONS;
