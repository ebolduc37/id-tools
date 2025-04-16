/**
 * Initialization of ALL_COLLECTIONS.
 *
 * Initialization of the set of all possible Maison Margiela
 * collections and production years up to the latest.
 *
 * @author Etienne Bolduc
 */

import { Collection, deepFreeze } from "../../../utils/index.js";
//import { default as COL_PRE_START } from "./COL_PRE_START.js";

// Initializing useful parameters
const Season = Collection.Season;
const YEAR_ESTABLISHED = 1988;
const COL_PRE_START = new Collection(2010, Season.P);
const YEAR_CURRENT = new Date().getFullYear();
const MONTH_CURRENT = new Date().getMonth();

// Initializing the set of all possible collections and production years 
let ALL_COLLECTIONS_tofill = [];

for (let year = YEAR_ESTABLISHED; year < COL_PRE_START.year; year++) {
	ALL_COLLECTIONS_tofill.push(new Collection(year, Season.S));
	ALL_COLLECTIONS_tofill.push(new Collection(year, Season.W));
}

if (COL_PRE_START.isR()) ALL_COLLECTIONS_tofill.push(new Collection(COL_PRE_START.year, Season.R));
ALL_COLLECTIONS_tofill.push(new Collection(COL_PRE_START.year, Season.S));
ALL_COLLECTIONS_tofill.push(new Collection(COL_PRE_START.year, Season.P));
ALL_COLLECTIONS_tofill.push(new Collection(COL_PRE_START.year, Season.W));
for (let year = COL_PRE_START.year + 1; year < YEAR_CURRENT; year++) {
	ALL_COLLECTIONS_tofill.push(new Collection(year, Season.R));
	ALL_COLLECTIONS_tofill.push(new Collection(year, Season.S));
	ALL_COLLECTIONS_tofill.push(new Collection(year, Season.P));
	ALL_COLLECTIONS_tofill.push(new Collection(year, Season.W));
}

ALL_COLLECTIONS_tofill.push(new Collection(YEAR_CURRENT, Season.R));
ALL_COLLECTIONS_tofill.push(new Collection(YEAR_CURRENT, Season.S));
if (MONTH_CURRENT >= 6) {
	ALL_COLLECTIONS_tofill.push(new Collection(YEAR_CURRENT, Season.P));
	ALL_COLLECTIONS_tofill.push(new Collection(YEAR_CURRENT, Season.W));
}

/////////
/////////
/////////

//for (let year = YEAR_ESTABLISHED; year < YEAR_CURRENT; year++) {
//	ALL_COLLECTIONS_tofill.push(new Collection(year, Season.S));
//	ALL_COLLECTIONS_tofill.push(new Collection(year, Season.W));
//}
//ALL_COLLECTIONS_tofill.push(new Collection(YEAR_CURRENT, Season.S));
//if (MONTH_CURRENT >= 6) ALL_COLLECTIONS_tofill.push(new Collection(YEAR_CURRENT, Season.W));

//if (COL_PRE_START.isR()) ALL_COLLECTIONS_tofill.push(new Collection(COL_PRE_START.year, Season.R));
//ALL_COLLECTIONS_tofill.push(new Collection(COL_PRE_START.year, Season.P));
//for (let year = COL_PRE_START.year + 1; year < YEAR_CURRENT; year++) {
//	ALL_COLLECTIONS_tofill.push(new Collection(year, Season.R));
//	ALL_COLLECTIONS_tofill.push(new Collection(year, Season.P));
//}
//ALL_COLLECTIONS_tofill.push(new Collection(YEAR_CURRENT, Season.R));
//if (MONTH_CURRENT >= 6) ALL_COLLECTIONS_tofill.push(new Collection(YEAR_CURRENT, Season.P));



/**
 * Array of all possible Yohji Yamamoto collections and productions years.
 * @constant
 * @readonly
 * @type {Collection[]}
 * @default
 */
const ALL_COLLECTIONS = deepFreeze(ALL_COLLECTIONS_tofill);

export default ALL_COLLECTIONS;
