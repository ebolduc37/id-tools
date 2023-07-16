/**
 * Initialization of ALL_COLLECTIONS.
 *
 * Initialization of the set of all possible collection and production years up to the latest.
 *
 * @author Etienne Bolduc
 */

import { Seasons, Collection, deepFreeze } from "../../utils/index.js";

// Initializing useful parameters
const YEAR_ESTABLISHED = 1969;
const YEAR_CURRENT = new Date().getFullYear();
const MONTH_CURRENT = new Date().getMonth();

// Initializing the set of all possible collections and productions years 
let ALL_COLLECTIONS_tofill = [];
for (let year = YEAR_ESTABLISHED; year < YEAR_CURRENT; year++) {
	ALL_COLLECTIONS_tofill.push(new Collection(year));
	ALL_COLLECTIONS_tofill.push(new Collection(year, Seasons.S));
	ALL_COLLECTIONS_tofill.push(new Collection(year, Seasons.W));
}
ALL_COLLECTIONS_tofill.push(new Collection(YEAR_CURRENT));
ALL_COLLECTIONS_tofill.push(new Collection(YEAR_CURRENT, Seasons.S));

// Only adding the Autumn/Winter collection of the current year to the set after July
if (MONTH_CURRENT >= 6) ALL_COLLECTIONS_tofill.push(new Collection(YEAR_CURRENT, Seasons.W));

/**
 * Array of all possible collections and productions years.
 * @constant
 * @readonly
 * @type {Collection[]}
 * @default
 */
const ALL_COLLECTIONS = deepFreeze(ALL_COLLECTIONS_tofill);

export default ALL_COLLECTIONS;
