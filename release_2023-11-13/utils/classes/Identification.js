/**
 * Initialization of class Identification.
 *
 * Initialization of a class for the identification of an input's corresponding
 * collections throughout different lines of a label following a single identification framework.
 *
 * @author Etienne Bolduc
 */

import Input from "./Input.js";

/**
 * Class representing the identification of an input's corresponding
 * collections throughout different lines of a label following a single identification framework.
 */
class Identification {
    /**
     * Create the identification.
     * @param {string} [label] - Name of the label.
     * @param {string} [framework] - Name of the identification framework used.
     * @param {Input}  [input] - Input data.
     * @param {string} [codeStylize] - Stylized product code.
     * @param {string} [garmentType="a piece"] - Item type.
     * @param {string} [size] - Item size.
     * @param {Line[]} [lineList] - Array of lines with associated collections.
     * @param {boolean} [exception=false] - True if it is an exception to the framework; false otherwise.
     */
    constructor({ label, framework, input, codeStylized,
                    garmentType = "a piece", size, lineList, exception = false }) {
        /** @type {string} */
        this.label = label;
        /** @type {string} */
        this.framework = framework;
        /** @type {Input} */
        this.input = input;
        /** @type {string} */
        this.codeStylized = codeStylized;
        /** @type {string} */
        this.garmentType = garmentType;
        /** @type {string} */
        this.size = size;
        /** @type {Line[]} */
        this.lineList = lineList;
        /** @type {boolean} */
        this.exception = exception;
    }

    /**
     * Return a copy of the instance as a new object.
     * @return {Identification} Copy of the instance.
     */
    copy() {
        return new Identification({
            label: this.label, input: this.input, framework: this.framework, codeStylized: this.codeStylized,
            garmentType: this.garmentType, size: this.size, lineList: this.lineList, exception: this.exception
        });
    }

    /**
     * Return a string representation of the instance.
     * @return {string} String representation of the instance.
     */
    toString() {

        let str = "According to ";

        // Exception
        if (this.exception) {
            if (this.lineList.length > 1 || this.lineList[0].collectionList.length > 1)
                str += "exceptions to ";
            else
                str += "an exception to ";
        }

        // Framework
        if (this.framework != null) str += `the ${this.framework} identification framework `
        else str += "the identification framework ";

        // Label
        str += `of ${this.label}, the item should be `;

        // Item type
        if (this.garmentType != null) str += `${this.garmentType} `;

        // Size
        if (this.size != null) str += `in size ${this.size} `;

        str += "from";
        if (this.lineList.length > 1 || this.lineList[0].collectionList.length > 1) str += ` one of`;
        str += "...";

        // Lines and their collection list
        for (let line of this.lineList) {
            str += "\n\n" + line.toString();
        }

        return str;
    }
};

export default Identification;
