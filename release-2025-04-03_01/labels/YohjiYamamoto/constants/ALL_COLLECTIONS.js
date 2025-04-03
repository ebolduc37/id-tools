/**
 * Initialization of ALL_COLLECTIONS.
 *
 * Initialization of the set of all possible Yohji Yamamoto
 * collections and production years up to the latest.
 *
 * @author Etienne Bolduc
 */

import { Collection, deepFreeze } from "../../../utils/index.js";
//import { default as COL_PRE_START } from "./COL_PRE_START.js";
//import { default as COL_CAPSULE_START } from "./COL_CAPSULE_START.js";

// Initializing useful parameters
const Season = Collection.Season;
const YEAR_ESTABLISHED = 1972;
const COL_PRE_START = new Collection(2014, Season.R);
const COL_CAPSULE_START = new Collection(2018, Season.W);
const YEAR_CURRENT = new Date().getFullYear();
const MONTH_CURRENT = new Date().getMonth();

// Initializing the set of possible collections and production years before pre-collections
let ALL_COLLECTIONS_tofill = [];

for (let year = YEAR_ESTABLISHED; year < YEAR_CURRENT; year++) {
	ALL_COLLECTIONS_tofill.push(new Collection(year));
}
ALL_COLLECTIONS_tofill.push(new Collection(YEAR_CURRENT));

for (let year = YEAR_ESTABLISHED; year < COL_PRE_START.year; year++) {
	ALL_COLLECTIONS_tofill.push(new Collection(year, Season.S));
	ALL_COLLECTIONS_tofill.push(new Collection(year, Season.W));
}

if (COL_PRE_START.isR()) ALL_COLLECTIONS_tofill.push(new Collection(COL_PRE_START.year, Season.R));
ALL_COLLECTIONS_tofill.push(new Collection(COL_PRE_START.year, Season.S));
ALL_COLLECTIONS_tofill.push(new Collection(COL_PRE_START.year, Season.P));
ALL_COLLECTIONS_tofill.push(new Collection(COL_PRE_START.year, Season.W));

// Initializing the set of unknown pre-collections
for (let year = COL_PRE_START.year + 1; year < COL_CAPSULE_START.year; year++) {
	ALL_COLLECTIONS_tofill.push(new Collection(year, Season.R));
	ALL_COLLECTIONS_tofill.push(new Collection(year, Season.S));
	ALL_COLLECTIONS_tofill.push(new Collection(year, Season.P));
	ALL_COLLECTIONS_tofill.push(new Collection(year, Season.W));
}

ALL_COLLECTIONS_tofill.push(new Collection(COL_CAPSULE_START.year, Season.R));
ALL_COLLECTIONS_tofill.push(new Collection(COL_CAPSULE_START.year, Season.S));
if (COL_CAPSULE_START.isS()) ALL_COLLECTIONS_tofill.push(new Collection(COL_CAPSULE_START.year, Season.S, null, null, true));
ALL_COLLECTIONS_tofill.push(new Collection(COL_CAPSULE_START.year, Season.P));
ALL_COLLECTIONS_tofill.push(new Collection(COL_CAPSULE_START.year, Season.W));
ALL_COLLECTIONS_tofill.push(new Collection(COL_CAPSULE_START.year, Season.W, null, null, true));

// Initializing the set of remaining possible collections, pre-collections, and production years
for (let year = COL_CAPSULE_START.year + 1; year < YEAR_CURRENT; year++) {
	ALL_COLLECTIONS_tofill.push(new Collection(year, Season.R));
	ALL_COLLECTIONS_tofill.push(new Collection(year, Season.S));
	ALL_COLLECTIONS_tofill.push(new Collection(year, Season.S, null, null, true));
	ALL_COLLECTIONS_tofill.push(new Collection(year, Season.P));
	ALL_COLLECTIONS_tofill.push(new Collection(year, Season.W));
	ALL_COLLECTIONS_tofill.push(new Collection(year, Season.W, null, null, true));
}

ALL_COLLECTIONS_tofill.push(new Collection(YEAR_CURRENT, Season.R));
ALL_COLLECTIONS_tofill.push(new Collection(YEAR_CURRENT, Season.S));
ALL_COLLECTIONS_tofill.push(new Collection(YEAR_CURRENT, Season.S, null, null, true));
if (MONTH_CURRENT >= 6) {
	ALL_COLLECTIONS_tofill.push(new Collection(YEAR_CURRENT, Season.P));
	ALL_COLLECTIONS_tofill.push(new Collection(YEAR_CURRENT, Season.W));
	ALL_COLLECTIONS_tofill.push(new Collection(YEAR_CURRENT, Season.W, null, null, true));
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
