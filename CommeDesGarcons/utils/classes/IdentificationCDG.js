/**
 * Initialization of class IdentificationCDG.
 *
 * Initialization of a class for cataloging the identification of COMME des GARÇONS from a label
 * based the pattern of its product code, which may be following a certain framework.
 *
 * @author Etienne Bolduc
 */

import { Identification, Occurrence } from "../../../utils/index.js";
import YearPrint from "./YearPrint.js";

/**
 * Class representing a code identification following a framework from a label.
 */
class IdentificationCDG extends Identification {
    /**
     * Create occurences of collections for a line.
     * @param   {string} [label="this label"] - Name of the label.
     * @param   {string} [framework="usual"] - Framework.
     * @param   {string} [codeStylized] - Stylized code.
     * @param   {YearPrint} [yearPrint] - Information on the year print.
     * @param   {string} [garmentType="a piece"] - Item type.
     * @param   {string} [size] - Item size.
     * @param   {Occurrence[]} [byLine] - Array of occurences by line.
     * @param   {boolean} [exception=false] - If exception from any known framework.
     */
    constructor({ label, framework, codeStylized, yearPrint, garmentType, size, byLine, exception }) {
        super({ label, framework, codeStylized, garmentType, size, byLine, exception });
        /** @type {YearPrint} */
        this.yearPrint = yearPrint;
    }

    /**
     * Return a copy of the instance as a new object.
     * @return {IdentificationCDG} Copy of the instance.
     */
    copy() {
        return new IdentificationCDG({
            label: this.label, framework: this.framework, yearPrint: this.yearPrint,
            codeStylized: this.codeStylized, garmentType: this.garmentType, size: this.size,
            byLine: this.byLine, exception: this.exception
        });
    }
};


export default IdentificationCDG;