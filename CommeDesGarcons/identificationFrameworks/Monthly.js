/**
 * COMME des GARÇONS monthly framework identification.
 *
 * Evaluation of the occurrences of possible collections by following
 * the COMME des GARÇONS monthly identification framework.
 *
 * @author Etienne Bolduc
 */

// Imports
import { isNumeric, standardize, Labels, Seasons, Collection, Occurrence } from "../../utils/index.js";
import { YearPrint, IdentificationCDG, isValid } from "../utils/index.js";

// Constants
import { ALL_COLLECTIONS, GARMENT_ID, LINE_ID, TITLES, FROM_BLANK_TO_PRINT, FROM_MONTHLY_TO_SEASONAL, SIZES } from "../constants/index.js";
const REGEX_MONTHLY = /^[0-9A-Z_][A-Z]\d{5}[0-9A-Z]?$/;
const FRAMEWORK_MONTHLY = "monthly";
const EXCEPTIONS_M1 = ["A", "D", "F", "K", "Z"];
const EXCEPTIONS_M1Y0 = ["D", "Z"];
const BLANK_GARMENT_ID = ["K"];

/**
 * Evaluate if a product code and year print data correspond to the COMME des GARÇONS monthly framework.
 * @param {string} codeInput - Product code.
 * @param {(string|YearPrint)} yearInput - Year print data.
 * @return {boolean} True if the pair corresponds to the COMME des GARÇONS monthly framework; false otherwise.
 */
function isMonthly(codeInput, yearInput) {

    // Returning false if the product code and year print data are not valid inputs
    if (!isValid(codeInput, yearInput)) return false;

    // Standardizing the product code and year print data
    codeInput = standardize(codeInput);
    yearInput = new YearPrint(yearInput);

    // Adding an underscore if the line ID is empty
    if (isNumeric(codeInput[1])) codeInput = "_" + codeInput;

    // Returning false if the product code does not fit the regular expression of the framework
    if (!REGEX_MONTHLY.test(codeInput)) return false;

    // Returning false if the line ID is not valid
    const lineID = codeInput[0];
    if (!(lineID in LINE_ID)) return false;

    // Returning false if the garment ID is not valid
    const garmentID = codeInput[1];
    if (!(garmentID in GARMENT_ID)) return false;

    // Initializing useful parameters
    const monthRaw = parseInt(codeInput.slice(2, 4));
    const exceptionM1 = EXCEPTIONS_M1.includes(lineID);
    const exceptionM1Y0 = EXCEPTIONS_M1Y0.includes(lineID);

    // Returning false if the first two digits are not valid unless there is an exception
    if (!(0 <= monthRaw && monthRaw <= 12) && !exceptionM1) return false;
    // Returning false if the first two digits are not valid under a stronger exception
    if (exceptionM1Y0 && yearInput.isNumeric() && yearInput.year % 10 !== (monthRaw / 10 >> 0)) return false;

    // Returning false if the size notation is not valid
    if (codeInput.length === 8) {
        const size = codeInput[7];
        if (!(size in SIZES)) return false;
    }

    // Returning true otherwise
    return true;
};

/**
 * Identification of the occurrences of possible collections from the product code and year print data
 * by following the COMME des GARÇONS monthly framework.
 * @param {string} codeInput - Product code.
 * @param {(string|YearPrint)} yearInput - Year print data.
 * @return {IdentificationCDG} Identification of the occurrences of possible collections.
 */
function identifyMonthly(codeInput, yearInput) {

    // Returning null if the product code and year print data are not
    // valid COMME des GARÇONS monthly framework inputs
    if (!isMonthly(codeInput, yearInput)) return null;

    // Standardizing the product code and year print data
    yearInput = new YearPrint(yearInput);
    codeInput = standardize(codeInput);

    // Initializing the identification object
    let identification = new IdentificationCDG({
        label: Labels.CDG,
        framework: FRAMEWORK_MONTHLY,
        yearPrint: yearInput,
    });

    // Adding an underscore if the line ID is empty
    if (isNumeric(codeInput[1])) codeInput = "_" + codeInput;

    // Initializing useful parameters
    const lineID = codeInput[0];
    const garmentID = codeInput[1];
    const size = (codeInput.length === 8) ? SIZES[codeInput[7]] : SIZES.X;
    const monthRaw = parseInt(codeInput.slice(2, 4));
    const exceptionM1 = EXCEPTIONS_M1.includes(lineID);
    const exceptionM1Y0 = EXCEPTIONS_M1Y0.includes(lineID);

    // Correcting the month if there is an exception
    const month = exceptionM1 ? (monthRaw % 10 + ((monthRaw % 10 < 2) ? 10 : 0)) : monthRaw;

    // Declaring the array of occurences by line
    let byLine = [];

    // Looping through each line of the line ID
    for (let line of LINE_ID[lineID]) {

        // Initializing useful parameters
        const name = line.name;
        const opPeriod = line.opPeriod;

        // Initialize the set of candidates
        let candidates = ALL_COLLECTIONS.map(col => col.copy());

        // Limiting the set of candidates those with a season if there is a production schedule
        if (line.hasProdSched()) candidates = candidates.filter(col => !col.isProductionYear());
        // Limiting the set of candidates to production years otherwise
        else candidates = candidates.filter(col => col.isProductionYear());

        // Initializing the last year and yearly quarter for which the monthly framework can be found
        let lastYear = FROM_MONTHLY_TO_SEASONAL.year;
        let lastQuarter = FROM_MONTHLY_TO_SEASONAL.quarter;

        // Initializing the last year and yearly quarter for which the monthly framework
        // without a year print can be found unless the type allows it
        if (yearInput.isBlank() && !BLANK_GARMENT_ID.includes(garmentID)) {
            lastYear = FROM_BLANK_TO_PRINT.year;
            lastQuarter = FROM_BLANK_TO_PRINT.quarter;
        }

        // Initializing the last candidate as the last production year of the monthly framework
        // in terms of the year print data
        let lastCandidate = new Collection(lastYear);

        // Limiting the set of candidates and setting the last candidate in terms of
        // the month and production schedule according to the last year and yearly quarter
        switch (month) {

            case 0: case 1: case 2: case 3:
                if (line.isEarly()) {
                    if (yearInput.isNumeric()) candidates = candidates.filter(col => col.isReleasedIn(yearInput.year));
                    if (exceptionM1Y0) candidates = candidates.filter(col => col.year % 10 === (monthRaw / 10 >> 0));
                    candidates = candidates.filter(col => col.isW());
                    lastCandidate = new Collection(lastYear, Seasons.W);
                }
                else if (line.isLate()) {
                    if (yearInput.isNumeric()) candidates = candidates.filter(col => col.isReleasedIn(yearInput.year));
                    if (exceptionM1Y0) candidates = candidates.filter(col => col.year % 10 === (monthRaw / 10 >> 0));
                    candidates = candidates.filter(col => col.isS());
                    lastCandidate = new Collection(lastYear, Seasons.S);
                }
                break;

            case 4: case 5: case 6:
                if (line.hasProdSched()) {
                    if (yearInput.isNumeric()) candidates = candidates.filter(col => col.isReleasedIn(yearInput.year));
                    if (exceptionM1Y0) candidates = candidates.filter(col => col.year % 10 === (monthRaw / 10 >> 0));
                    candidates = candidates.filter(col => col.isW());
                    lastCandidate = new Collection(lastYear - 1, Seasons.W);
                    if (lastQuarter >= 2) ++lastCandidate.year
                }
                break;

            case 7: case 8: case 9:
                if (line.isEarly()) {
                    if (yearInput.isNumeric()) candidates = candidates.filter(col => col.isReleasedIn(yearInput.year + 1));
                    if (exceptionM1Y0) candidates = candidates.filter(col => (col.year - 1) % 10 === (monthRaw / 10 >> 0));
                    candidates = candidates.filter(col => col.isS());
                    lastCandidate = new Collection(lastYear, Seasons.S);
                    if (lastQuarter >= 3) ++lastCandidate.year
                }
                else if (line.isLate()) {
                    if (yearInput.isNumeric()) candidates = candidates.filter(col => col.isReleasedIn(yearInput.year));
                    if (exceptionM1Y0) candidates = candidates.filter(col => col.year % 10 === (monthRaw / 10 >> 0));
                    candidates = candidates.filter(col => col.isW())
                    lastCandidate = new Collection(lastYear - 1, Seasons.W);
                    if (lastQuarter >= 3) ++lastCandidate.year
                }
                break;

            case 10: case 11: case 12:
                if (line.hasProdSched()) {
                    if (yearInput.isNumeric()) candidates = candidates.filter(col => col.isReleasedIn(yearInput.year + 1));
                    if (exceptionM1Y0) candidates = candidates.filter(col => (col.year - 1) % 10 === (monthRaw / 10 >> 0));
                    candidates = candidates.filter(col => col.isS());
                    lastCandidate = new Collection(lastYear, Seasons.S);
                    if (lastQuarter == 4) ++lastCandidate.year
                }
                break;
        }

        // Limiting the set of candidates to the collection occuring before the last candidate
        candidates = candidates.filter(col => col.isBeforeOrIn(lastCandidate));
        // Limiting the set of candidates to the collections within the operation period
        candidates = candidates.filter(col => opPeriod.includes(col));

        // Setting titles to collections whenever possible
        if (name in TITLES) candidates.map(function (col) {
            let namedCol = TITLES[name].find(el => el.isEqualTo(col));
            if (namedCol != null) col.title = namedCol.title;
        });

        // Adding the occurrence to the array of occurences if non-empty
        if (candidates.length !== 0) byLine.push(new Occurrence(name, candidates));
    }

    // Returning null if there is no occurence
    if (byLine.length === 0) return null;

    // Assigning the array of occurences
    identification.byLine = byLine;
    // Assigning the stylized code
    identification.codeStylized = codeInput.slice((codeInput[0] === "_") ? 1 : 0, 2) + "-" + codeInput.slice(2);
    // Assigning the item type
    identification.garmentType = GARMENT_ID[garmentID];
    // Assigning the size
    identification.size = size;

    return identification;
};

export { identifyMonthly };
