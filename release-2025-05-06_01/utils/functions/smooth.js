/**
 * Initialization of function smooth.
 *
 * Initialization of a function to flatten an array and remove null and empty elements.
 *
 * @author Etienne Bolduc
 */

/**
 * Flatten and remove null and empty elements of an array.
 * @param {Object[]} arr Dirty array.
 * @return {Object[]} Clean array.
 */
function smooth(arr) {
    return arr.flat().filter(id => id != null && id.lineList.length !== 0);
};

export default smooth;
