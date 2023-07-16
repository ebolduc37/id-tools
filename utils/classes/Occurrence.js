/**
 * Initialization of class Occurrence.
 *
 * Initialization of a class for the occurrence of chosen collections under a line.
 *
 * @author Etienne Bolduc
 */

import Collection from "./Collection.js";

/**
 * Class representing an occurence of chosen collections under a line.
 */
class Occurrence {
    /**
     * Create an occurence of collections under a line.
     * @param {string} name - Name of the line.
     * @param {Collection[]} colList - List of collections.
     */
    constructor(name, colList) {
        /** @type {string} */
        this.name = name;
        /** @type {Collection[]} */
        this.colList = colList;
    }
}

export default Occurrence;
