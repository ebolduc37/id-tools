/**
 * Initialization of COUNTERFEITS.
 *
 * Initialization of the product codes found on COMME des GARÇONS counterfeited items.
 *
 * @author Etienne Bolduc
 */

import { deepFreeze } from "../../../utils/index.js";

/**
 * Enum for the product codes as keys and arrays of years as values found on COMME des GARÇONS counterfeited items.
 * @constant
 * @readonly
 * @enum {[string]}
 */
const COUNTERFEITS = deepFreeze({
    "AZT026": ["2005", "2007"],
    "AZT095": ["2009"]
});

export default COUNTERFEITS;
