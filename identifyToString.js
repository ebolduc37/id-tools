/**
 * Identification string.
 *
 * Return the string representation of a garment identification.
 *
 * @author Etienne Bolduc
 */

import identify from "./identify.js"
import { standardize, Labels, Seasons } from "./utils/index.js";
import { YearPrint } from "./labels/CommeDesGarcons/utils/index.js";
import { REPRODUCTIONS, WRONG_CODE } from "./labels/CommeDesGarcons/constants/index.js";
import { CodePrintTypes, SizingSystems, SignatureStyles, FontTypes } from "./labels/YohjiYamamoto/utils/index.js";

/**
 * Representation of the identification of possible collections from a product code
 * and other specifications on a garment.
 * @param {Labels} labelInput - Fashion label.
 * @param {string} codeInput - Product code.
 * @param {string} yearInput - Year print data.
 * @return {string} String representation of the identification.
 */
function identifyToString({
    labelInput,
    codeInput,
    yearInput, // CDG specific
    sizingSystem, signatureStyle, fontType // YY specific
}) {

    if (codeInput == null || codeInput === "") return "Please enter a code to begin.";
    let str = "";

    codeInput = standardize(codeInput);
    if (codeInput !== CodePrintTypes.BLANK && codeInput !== CodePrintTypes.ERASED)
        str += `You have entered the product code ${codeInput}`;
    else if (codeInput === CodePrintTypes.BLANK)
        str += "You have entered that there is no product code"
    else if (codeInput === CodePrintTypes.ERASED)
        str += "You have entered that that you are unsure about the product code"

    // COMME des GARÇONS specific
    if (labelInput === Labels.CDG) {
        yearInput = new YearPrint(standardize(yearInput));
        if (yearInput == null || yearInput.isWrong()) return "Internal error: invalid year input.";

        if (yearInput.isNumeric()) str += ` with the print AD${yearInput.year} on the care label`;
        else if (yearInput.isBlank()) str += ` without a year print on the care label`;
        else if (yearInput.isErased()) str += ` and you are unsure about the year print on the care label`;
    }

    str += "."

    if (labelInput === Labels.CDG) {
        if (codeInput === WRONG_CODE) {
            str += `\n\nThis code appears on every ${Labels.CDG} care label, `;
            str += "but it is not the product code. Please try again.";
            return str;
        }
    
        if (codeInput in REPRODUCTIONS && yearInput.isEqualTo(REPRODUCTIONS[codeInput])) {
            if (typeof window !== 'undefined') alert("The item might be a counterfeit!");
            str += "\n\nThis information has been found on counterfeited items before!".toUpperCase();
        }
    }

    const result = identify({labelInput, codeInput,
        yearInput, // CDG
        sizingSystem, signatureStyle, fontType // YY
    });

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
        str += `of ${res.label}`;
        if (res.codeStylized != null)  str += ` with ${res.codeStylized}`;

        if (res.label === Labels.CDG) {
            if (res.yearPrint.isNumeric()) str += ` and AD${res.yearPrint.year}`;
            else if (res.yearPrint.isBlank()) str += ` without a year print`;
            else if (res.yearPrint.isErased()) str += ` with no knowledge about the year print`;
        }
        str += `, `;

        str += `the item could be `;
        if (res.garmentType != null) str += `${res.garmentType} `;
        if (res.size != null) str += `in size ${res.size} `;
        str += `from`;
        if (res.byLine.length > 1 || res.byLine[0].colList.length > 1) str += ` one of`;
        str += ` the following:`;

        for (let line of res.byLine) {
            str += `\n\n${line.name}`;
            if (line.colList.length > 1 &&
                line.colList.reduce(function (a, b) {return (a != null &&
                    a.year + 1 === b.year && a.season === b.season) ? b : null;})) {
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
            else if (line.colList.length > 1 &&
                line.colList.reduce(function (a, b) {return (a != null && (
                        (a.year === b.year && a.season === Seasons.S && b.season === Seasons.W) ||
                        (a.year + 1 === b.year && a.season === Seasons.W && b.season === Seasons.S))) ? b : null;})) {
                str += `\n- any collection from `;
                str += `${line.colList[0].season} ${line.colList[0].year} until `;
                str += `${line.colList.slice(-1)[0].season} ${line.colList.slice(-1)[0].year}`;
                }
            else for (let col of line.colList) str += `\n- ${col}`;
        }
    }
    return str;
}

export default identifyToString;

const inputCDG = {
    labelInput: Labels.CDG,
    codeInput: "PB-11000M",
    yearInput: "1999",
}
console.log(identifyToString(inputCDG));

const inputYY = {
    labelInput: Labels.YY,
    codeInput: CodePrintTypes.BLANK,
    sizingSystem: SizingSystems.ALPHABETICAL,
    signatureStyle: SignatureStyles.MAIN_I,
    fontType: FontTypes.SERIF,
}
//console.log(identifyToString(inputYY));
