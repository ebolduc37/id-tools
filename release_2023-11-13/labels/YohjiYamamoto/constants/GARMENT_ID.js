/**
 * Initialization of GARMENT_ID.
 *
 * Initialization of the Yohji Yamamoto garment IDs and their corresponding garment type.
 *
 * @author Etienne Bolduc
 */

/**
 * Enum for the garment IDs and garment types.
 * @constant
 * @readonly
 * @enum {string}
 */
const GARMENT_ID = Object.freeze({
	B: "a button-up",
	C: "a coat",
	J: "a jacket",
	K: "a knitwear piece",
	P: "pants or shorts",
	S: "a skirt",
	T: "a top",
	Y: "a piece" // only seen on a tailored jacket/blazer so far
});

export default GARMENT_ID;
