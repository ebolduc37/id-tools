/**
 * Initialization of COUNTERFEITS.
 *
 * Initialization of the array of inputs that have been spotted on counterfeits of Maison Margiela.
 *
 * @author Etienne Bolduc
 */

import { Collection, Identification, deepFreeze } from "../../../utils/index.js";
import LINE from "./LINE.js";
import InputMM from "../utils/classes/InputMM.js";

// Initializing useful parameter
const Season = Collection.Season;

/**
 * Array of inputs that have been spotted on counterfeits of Maison Margiela.
 * @constant
 * @readonly
 * @type {InputMM[]}
 * @default
 */
const COUNTERFEITS = deepFreeze({});

export default COUNTERFEITS;
