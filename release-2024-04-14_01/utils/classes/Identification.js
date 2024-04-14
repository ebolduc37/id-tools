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

    ////////////////////////////////
    // CONSTRUCTOR & COPY
    ////////////////////////////////

    static Label = Input.Label;

    /**
     * Create the identification.
     * @param {Identification.Label} [label] - Name of the label.
     * @param {Input}  [input] - Input data.
     * @param {string} [framework] - Name of the identification framework used.
     * @param {boolean}[exception=false] - True if it is an exception to the framework; false otherwise.
     * @param {Line[]} [lineList] - Array of lines with associated collections.
     * @param {string} [stylizedCode] - Stylized product code.
     * @param {string} [garmentType="a piece"] - Garment type.
     * @param {string} [fabricType] - Fabric type.
     * @param {string} [garmentSize] - Garment size.
     * @param {string} [manufacturer] - Manufacturer.
     * @param {boolean}[counterfeit=false] - True if it may be a counterfeit; false otherwise.
     */
    constructor({ input, label, framework, exception = false, stylizedCode,
                    garmentType = "a piece", fabricType, garmentSize,
                    manufacturer, lineList, counterfeit = false }) {
        /** @type {Input} */
        this.input = null;
        if (input != null) this.input = input.copy();
        /** @type {string} */
        this.label = label;
        /** @type {string} */
        this.framework = framework;
        /** @type {boolean} */
        this.exception = exception;
        /** @type {string} */
        this.stylizedCode = stylizedCode;
        /** @type {string} */
        this.garmentType = garmentType;
        /** @type {string} */
        this.fabricType = fabricType;
        /** @type {string} */
        this.garmentSize = garmentSize;
        /** @type {string} */
        this.manufacturer = manufacturer;
        /** @type {Line[]} */
        this.lineList = [];
        if (lineList != null) this.lineList = lineList.map(line => line.copy());
        /** @type {boolean} */
        this.counterfeit = counterfeit;
    }

    /**
     * Return a copy of the instance as a new object.
     * @return {Identification} Copy of the instance.
     */
    copy() {
        return new Identification({
            input: this.input, label: this.label, framework: this.framework, exception: this.exception,
            stylizedCode: this.stylizedCode, garmentType: this.garmentType, fabricType: this.fabricType,
            garmentSize: this.garmentSize, manufacturer: this.manufacturer, lineList: this.lineList,
            counterfeit: this.counterfeit
        });
    }

    /**
     * Return a string representation of the instance.
     * @return {string} String representation of the instance.
     */
    result() {

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
        str += `of ${this.label}, the garment should be `;

        // Garment type
        if (this.garmentType != null) str += `${this.garmentType} `;

        // Fabric type
        if (this.fabricType != null) str += `made of ${this.fabricType} `;

        // Size
        if (this.garmentSize != null) str += `in size ${this.garmentSize} `;

        // Manufacturer
        if (this.manufacturer != null) str += `produced by ${this.manufacturer} `;

        str += "from";
        if (this.lineList.length > 1 || this.lineList[0].collectionList.length > 1)str += ` one of`;
        str += " the following:";

        // Lines and their collection list
        for (let line of this.lineList) {
            str += "\n\n" + line.toString();
        }

        // Counterfeit alert
        if (this.counterfeit) {
            if (typeof window !== 'undefined') alert("The garment might be a counterfeit!");
            str += "\n\n>>> BEWARE! This information has also been found on counterfeited garments before!";
        }


        return str;
    }

    toString() {
        return JSON.stringify(this);
    }
};

export default Identification;
