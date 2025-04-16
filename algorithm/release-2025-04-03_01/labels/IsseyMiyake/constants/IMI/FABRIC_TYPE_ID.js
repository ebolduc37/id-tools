/**
 * Initialization of FABRIC_TYPE_ID.
 *
 * Initialization of the ISSEY MIYAKE INC. fabric type IDs and their corresponding fabric type.
 *
 * @author Etienne Bolduc
 */

/**
 * List of fabric type IDs and fabric types.
 * @constant
 * @readonly
 * @enum {string}
 */
const FABRIC_TYPE_ID = Object.freeze({
	A: null,
	F: "plain woven fabric",
	J: "lightweight knit fabric", // thinking jersey knitted
	K: "heavyweight knit fabric", // and sweater knitted
	L: "leather",
	Z: null
});

export default FABRIC_TYPE_ID;
