/**
 * Initialization of FABRIC_TYPE_ID.
 *
 * Initialization of the ISSEY MIYAKE INT'L. INC. fabric type IDs and their corresponding fabric type.
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
	
	A: "woven fabric",
	B: "knitted fabric",
	C: "mixed fabrics",
	D: "satin fabric",
	F: "woven fabric", // maybe tight or light weight weave
	G: "woven fabric",
	H: "twill fabric",
	J: "specialty fabric",
	K: "heavyweight weave fabric", // thick
	L: "rough weave fabric",
	M: "rough weave fabric",
	N: "woven fabric",
	P: "specialty knit fabric",
	Q: "leather",
	R: "woven fabric", // maybe tight or light weight weave
	S: "specialty weave fabric",
	T: "lightweight knit fabric",
	V: "specialty weave fabric", // double sided muslin woven?
	Y: "heavyweight knit fabric", // or maybe french terry or jersey
	//Z: "knitted"
});

export default FABRIC_TYPE_ID;
