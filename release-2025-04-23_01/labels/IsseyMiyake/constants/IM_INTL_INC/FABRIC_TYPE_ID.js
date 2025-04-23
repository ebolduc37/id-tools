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
	
	A: "plain woven fabric",
	B: "knitted fabric",
	C: "mixed fabrics",
	D: "satin fabric",
	F: "plain woven fabric", // maybe tight or light weight weave
	G: "plain woven fabric",
	H: "twill fabric",
	J: "specialty fabric",
	K: "heavyweight plain woven fabric", // thick
	L: "rough plain woven fabric",
	M: "rough plain woven fabric",
	N: "plain woven fabric",
	P: "specialty knit fabric",
	Q: "leather",
	R: "plain woven fabric", // maybe tight or light weight weave
	S: "specialty plain woven fabric",
	T: "lightweight knit fabric",
	V: "specialty plain woven fabric", // double sided muslin woven?
	Y: "heavyweight knit fabric or leather", // or maybe french terry or jersey
	//Z: "knitted"
});

export default FABRIC_TYPE_ID;
