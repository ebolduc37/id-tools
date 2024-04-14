/**
 * Initialization of GARMENT_TYPE_ID.
 *
 * Initialization of the ISSEY MIYAKE INT'L. INC. garment type IDs and their corresponding garment type.
 *
 * @author Etienne Bolduc
 */

/**
 * List of garment type IDs and garment types.
 * @constant
 * @readonly
 * @enum {string}
 */
const GARMENT_TYPE_ID = Object.freeze({

    1: "a top", // lighter tops
    2: "an outer covering",
    3: "a jacket or a bag", // or light jacket or blouson maybe
    4: "pants",
    5: "a skirt",
    6: "a coat", // seen swimsuit/trunks with 6
    7: "a jumpsuit",
    8: "a top", // any top, from T-shirts to sweaters - combination of 1-2
});

export default GARMENT_TYPE_ID;
