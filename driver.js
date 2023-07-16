/**
 * Identification driver.
 *
 * Driver file to execute the identification of a garment.
 *
 * @author Etienne Bolduc
 */

import { standardize, Labels } from "./utils/index.js";
import { YearPrint } from "./CommeDesGarcons/utils/index.js";
import identify from "./identify.js"
import { REPRODUCTIONS, WRONG_CODE } from "./CommeDesGarcons/constants/index.js";

/**
 * Representation of the identification of possible collections from a product code
 * and other specifications on a garment.
 * @param {Labels} labelInput - Fashion label.
 * @param {string} codeInput - Product code.
 * @param {YearPrint} yearInput - Year print data.
 * @return {string} String representation of the identification.
 */
function identifyToString(labelInput, codeInput, yearInput) {

    labelInput = standardize(labelInput);
    if (!(labelInput in Labels)) return "Internal error: invalid label.";
    labelInput = Labels[labelInput];

    yearInput = new YearPrint(standardize(yearInput));
    if (yearInput == null || yearInput.isWrong()) return "Internal error: invalid year input.";

    if (codeInput == null || codeInput === "") return "Please enter a code to begin.";
    let str = `You have entered the product code ${codeInput}`;
    codeInput = standardize(codeInput);

    if (labelInput === Labels.CDG) {
        if (yearInput.isNumeric()) str += ` with the print AD${yearInput.year} on the care label`;
        else if (yearInput.isBlank()) str += ` without a year print on the care label`;
        else if (yearInput.isErased()) str += ` and you are unsure about the year print on the care label`;
        str += "."
    }

    if (codeInput === WRONG_CODE) {
        str += `\n\nThis code appears on every ${Labels.CDG} care label, `;
        str += "but it is not the product code. Please try again.";
        return str;
    }

    if (codeInput in REPRODUCTIONS && yearInput.isEqualTo(REPRODUCTIONS[codeInput])) {
        if (typeof window !== 'undefined') alert("The item might be a counterfeit!");
        str += "\n\nThis information has been found on counterfeited items before!".toUpperCase();
    }

    const result = identify(labelInput, codeInput, yearInput);

    if (result == null) {
        str += "\n\nWe could not find any match. Please try again.\n\n"
        str += "If the problem persists, please contact us by e-mail at 'contact@myclothingarchive.com'.";
        return str;
    }

    for (let res of result) {

        str += "\n\n";
        str += "Following ";
        if (res.exception) str += `an exception to `;
        if (res.framework != null) str += `the ${res.framework} identification framework `
        else str += "all identification frameworks ";
        str += `of ${res.label} with ${res.codeStylized}`;

        if (res.label === Labels.CDG) {
            if (res.yearPrint.isNumeric()) str += ` and AD${res.yearPrint.year}`;
            else if (res.yearPrint.isBlank()) str += ` without a year print`;
            else if (res.yearPrint.isErased()) str += ` with no knowledge about the year print`;
        }
        str += `, `;

        str += `the item could be ${res.itemType} `;
        if (res.size != null) str += `in size ${res.size} `;
        str += `from`;
        if (res.byLine.length > 1 || res.byLine[0].colList.length > 1) str += ` one of`;
        str += ` the following:`;

        for (let line of res.byLine) {
            str += `\n\n${line.name}`;
            if (line.colList.length > 1 &&
                line.colList.reduce(function (a, b) {return (a != null && a.year + 1 === b.year && a.season === b.season) ? b : null;})) {
                if (line.colList[0].season != null) {
                    str += `\n- any ${line.colList[0].season} collection from `;
                    str += `${line.colList[0].season} ${line.colList[0].year} until `;
                    str += `${line.colList.slice(-1)[0].season} ${line.colList.slice(-1)[0].year}`;
                }
                else {
                    str += `\n- any production year from `;
                    str += `${line.colList[0]} until `;
                    str += `${line.colList.slice(-1)[0]}`;
                }
            }
            else for (let col of line.colList) str += `\n- ${col}`;
        }
    }
    return str;
}
