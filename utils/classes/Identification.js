/**
 * Initialization of class Identification.
 *
 * Initialization of a class for cataloging the identification of an item from a label
 * based the pattern of its product code, which may be following a certain framework.
 *
 * @author Etienne Bolduc
 */

import Occurrence from "./Occurrence.js";

/**
 * Class representing the cataloging of the identification of an item from a label
 * based the pattern of its product code, which may be following a certain framework.
 */
class Identification {
    /**
     * Create the identification catalog.
     * @param {string} [label="this label"] - Name of the label.
     * @param {string} [framework="usual"] - Framework.
     * @param {string} [codeStylized] - Stylized product code.
     * @param {string} [garmentType="a piece"] - Item type.
     * @param {string} [size] - Item size.
     * @param {Occurrence[]} [byLine] - Array of line occurences.
     * @param {boolean} [exception=false] - True if it is an exception to the framework; false otherwise.
     */
    constructor({ label = "this label", framework = "usual", codeStylized,
        garmentType = "a piece", size, byLine, exception = false }) {
        /** @type {string} */
        this.label = label;
        /** @type {string} */
        this.framework = framework;
        /** @type {string} */
        this.codeStylized = codeStylized;
        /** @type {string} */
        this.garmentType = garmentType;
        /** @type {string} */
        this.size = size;
        /** @type {Occurrence[]} */
        this.byLine = byLine;
        /** @type {boolean} */
        this.exception = exception;
    }

    /**
     * Return a copy of the instance as a new object.
     * @return {Identification} Copy of the instance.
     */
    copy() {
        return new Identification({
            label: this.label, framework: this.framework,
            codeStylized: this.codeStylized, garmentType: this.garmentType, size: this.size,
            byLine: this.byLine, exception: this.exception
        });
    }
};

export default Identification;
