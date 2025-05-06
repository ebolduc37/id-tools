/**
 * COMME des GARÇONS monthly framework identification.
 *
 * Evaluation of the occurrences of possible collections by following
 * the COMME des GARÇONS monthly identification framework.
 *
 * @author Etienne Bolduc
 */

import { Collection, Identification, isNumeric } from "../../../utils/index.js";
import { InputCDG } from "../utils/index.js";

// Constants
import { ALL_COLLECTIONS, FROM_BLANK_TO_PRINT, FROM_MONTHLY_TO_SEASONAL, GARMENT_TYPE_ID, LINE_ID, LINE, GARMENT_SIZE_ID, TITLES } from "../constants/index.js";
const REGEX_MONTHLY = /^[0-9A-Z_][A-Z]\d{5}[0-9A-Z]?$/;
const FRAMEWORK_MONTHLY = "monthly";
const EXCEPTIONS_M1 = ["A", "D", "F", "K", "Z"];
const EXCEPTIONS_M1Y0 = ["D", "Z"];
const GARMENT_TYPE_ID_BLANK = ["K"];
const Season = Collection.Season;

/**
 * Evaluate if the input data corresponds to the COMME des GARÇONS monthly framework.
 * @return {boolean} True if the input data corresponds to the COMME des GARÇONS monthly framework; false otherwise.
 */
InputCDG.prototype.isMonthly = function() {

    // Returning false if the input data is not valid
    if (!this.isValid()) return false;

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();
    let effectiveCode = productCode;

    // Adding an underscore if the line ID is empty
    if (isNumeric(productCode[1])) effectiveCode = "_" + productCode;

    // Returning false if the product code does not fit the regular expression of the framework
    if (!REGEX_MONTHLY.test(effectiveCode)) return false;

    // Returning false if the line ID is not valid
    const lineID = effectiveCode[0];
    if (!(lineID in LINE_ID)) return false;

    // Returning false if the garment ID is not valid
    const garmentTypeID = effectiveCode[1];
    if (!(garmentTypeID in GARMENT_TYPE_ID)) return false;

    // Initializing useful parameters
    const monthRaw = parseInt(effectiveCode.slice(2, 4));
    const exceptionM1 = EXCEPTIONS_M1.includes(lineID);
    const exceptionM1Y0 = EXCEPTIONS_M1Y0.includes(lineID);

    // Returning false if the first two digits are not valid unless there is an exception
    if (!(0 <= monthRaw && monthRaw <= 12) && !exceptionM1) return false;
    // Returning false if the first two digits are not valid under a stronger exception
    if (exceptionM1Y0 && this.isYearPrintNumeric()
        && this.getYearPrintParsed() % 10 !== (monthRaw / 10 >> 0)) return false;

    // Returning false if the garment size ID is not valid
    if (effectiveCode.length === 8) {
        const garmentSizeID = effectiveCode[7];
        if (!(garmentSizeID in GARMENT_SIZE_ID)) return false;
    }

    // Returning false if the year is in the wrong range
    if (!this.isYearBetween(FROM_BLANK_TO_PRINT.year, FROM_MONTHLY_TO_SEASONAL.year))
        return false;

    // Returning true otherwise
    return true;
};

/**
 * Identification of the occurrences of possible collections from the input data
 * by following the COMME des GARÇONS monthly framework.
 * @return {Identification[]} Identification of the occurrences of possible collections.
 */
InputCDG.prototype.extract_Monthly = function() {

    // Returning empty array if the input data is not a valid COMME des GARÇONS monthly input
    if (!this.isMonthly()) return [];

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();
    let effectiveCode = productCode;

    // Initializing the identification object
    let identification = new Identification({
        label: Identification.Label.CDG,
        framework: FRAMEWORK_MONTHLY,
        input: this.copy(),
    });

    // Adding an underscore if the line ID is empty
    if (isNumeric(productCode[1])) effectiveCode = "_" + productCode;

    // Initializing useful parameters
    const lineID = effectiveCode[0];
    const garmentTypeID = effectiveCode[1];
    const garmentSizeID = (effectiveCode.length === 8) ? effectiveCode[7] : "X";
    const monthRaw = parseInt(effectiveCode.slice(2, 4));
    const exceptionM1 = EXCEPTIONS_M1.includes(lineID);
    const exceptionM1Y0 = EXCEPTIONS_M1Y0.includes(lineID);

    // Correcting the month if there is an exception
    const month = exceptionM1 ? (monthRaw % 10 + ((monthRaw % 10 < 2) ? 10 : 0)) : monthRaw;

    // Declaring the array of occurences by line
    let lineList = [];

    // Looping through each line of the line ID
    for (let line of LINE_ID[lineID]) {

        // Initializing useful parameters
        const name = line.name;
        const operationPeriod = line.operationPeriod;

        // Initialize the set of candidates
        let candidates = ALL_COLLECTIONS.map(col => col.copy());

        // Limiting the set of candidates those with a season if there is a production schedule
        if (line.hasProductionSchedule()) candidates = candidates.filter(col => !col.hasNoSeason());
        // Limiting the set of candidates to production years otherwise
        else candidates = candidates.filter(col => col.hasNoSeason());

        // Initializing the first year and yearly quarter for which the monthly framework can be found
        let firstYear = candidates[0].year;
        let firstQuarter = 1;

        // Initializing the first year and yearly quarter for which the monthly framework
        // with a year print can be found unless the type allows it
        if (this.isYearPrintUnreadable()) {
            firstYear = FROM_BLANK_TO_PRINT.year;
            firstQuarter = FROM_BLANK_TO_PRINT.quarter;
        }
        
        // Initializing the first candidate as the first production year of the monthly framework
        // in terms of the year print data
        let firstCandidate = new Collection(firstYear);

        // Initializing the last year and yearly quarter for which the monthly framework can be found
        let lastYear = FROM_MONTHLY_TO_SEASONAL.year;
        let lastQuarter = FROM_MONTHLY_TO_SEASONAL.quarter;

        // Initializing the last year and yearly quarter for which the monthly framework
        // without a year print can be found unless the type allows it
        if (this.isYearPrintBlank() && !GARMENT_TYPE_ID_BLANK.includes(garmentTypeID)) {
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
                    if (this.isYearPrintNumeric()) candidates = candidates.filter(col => col.isReleasedIn(this.getYearPrintParsed()));
                    if (exceptionM1Y0) candidates = candidates.filter(col => col.year % 10 === (monthRaw / 10 >> 0));
                    candidates = candidates.filter(col => col.isW());

                    firstCandidate = new Collection(firstYear, Season.W);
                    if (firstQuarter > 1) ++firstCandidate.year;

                    lastCandidate = new Collection(lastYear, Season.W);
                }
                else if (line.isLate()) {
                    if (this.isYearPrintNumeric()) candidates = candidates.filter(col => col.isReleasedIn(this.getYearPrintParsed()));
                    if (exceptionM1Y0) candidates = candidates.filter(col => col.year % 10 === (monthRaw / 10 >> 0));
                    candidates = candidates.filter(col => col.isS());

                    firstCandidate = new Collection(firstYear, Season.S);
                    if (firstQuarter > 1) ++firstCandidate.year;

                    lastCandidate = new Collection(lastYear, Season.S);
                }
                break;

            case 4: case 5: case 6:
                if (line.hasProductionSchedule()) {
                    if (this.isYearPrintNumeric()) candidates = candidates.filter(col => col.isReleasedIn(this.getYearPrintParsed()));
                    if (exceptionM1Y0) candidates = candidates.filter(col => col.year % 10 === (monthRaw / 10 >> 0));
                    candidates = candidates.filter(col => col.isW());

                    firstCandidate = new Collection(firstYear, Season.W);
                    if (firstQuarter > 2) ++firstCandidate.year;

                    lastCandidate = new Collection(lastYear - 1, Season.W);
                    if (lastQuarter >= 2) ++lastCandidate.year
                }
                break;

            case 7: case 8: case 9:
                if (line.isEarly()) {
                    if (this.isYearPrintNumeric()) candidates = candidates.filter(col => col.isReleasedIn(this.getYearPrintParsed() + 1));
                    if (exceptionM1Y0) candidates = candidates.filter(col => (col.year - 1) % 10 === (monthRaw / 10 >> 0));
                    candidates = candidates.filter(col => col.isS());

                    firstCandidate = new Collection(firstYear + 1, Season.S);
                    if (firstQuarter > 3) ++firstCandidate.year;

                    lastCandidate = new Collection(lastYear, Season.S);
                    if (lastQuarter >= 3) ++lastCandidate.year
                }
                else if (line.isLate()) {
                    if (this.isYearPrintNumeric()) candidates = candidates.filter(col => col.isReleasedIn(this.getYearPrintParsed()));
                    if (exceptionM1Y0) candidates = candidates.filter(col => col.year % 10 === (monthRaw / 10 >> 0));
                    candidates = candidates.filter(col => col.isW())

                    firstCandidate = new Collection(firstYear, Season.W);
                    if (firstQuarter > 3) ++firstCandidate.year;

                    lastCandidate = new Collection(lastYear - 1, Season.W);
                    if (lastQuarter >= 3) ++lastCandidate.year
                }
                break;

            case 10: case 11: case 12:
                if (line.hasProductionSchedule()) {
                    if (this.isYearPrintNumeric()) candidates = candidates.filter(col => col.isReleasedIn(this.getYearPrintParsed() + 1));
                    if (exceptionM1Y0) candidates = candidates.filter(col => (col.year - 1) % 10 === (monthRaw / 10 >> 0));
                    candidates = candidates.filter(col => col.isS());

                    firstCandidate = new Collection(firstYear + 1, Season.S);

                    lastCandidate = new Collection(lastYear, Season.S);
                    if (lastQuarter == 4) ++lastCandidate.year
                }
                break;
        }

        // Limiting the set of candidates to the collections occuring after the last candidate
        candidates = candidates.filter(col => col.isAfterOrIn(firstCandidate));
        // Limiting the set of candidates to the collections occuring before the last candidate
        candidates = candidates.filter(col => col.isBeforeOrIn(lastCandidate));
        // Limiting the set of candidates to the collections within the operation period
        candidates = candidates.filter(col => operationPeriod.includes(col));

        // Setting titles to collections whenever possible
        for (const [key, value] of Object.entries(TITLES)) {
            if (name === LINE[key].name) candidates.map(function (col) {
                let namedCol = value.find(el => el.isEqualTo(col));
                if (namedCol != null) col.title = namedCol.title;
            });
        }

        // Adding the occurrence to the array of occurences if non-empty
        if (candidates.length !== 0) lineList.push(line.forIdentification(candidates));
    }

    // Returning empty array if there is no occurence
    if (lineList.length === 0) return [];

    // Assigning the array of occurences
    identification.lineList = lineList;
    // Assigning the stylized code
    identification.stylizedCode = effectiveCode.slice((effectiveCode[0] === "_") ? 1 : 0, 2) + "-" + effectiveCode.slice(2);
    // Assigning the garment type
    identification.garmentType = GARMENT_TYPE_ID[garmentTypeID];
    // Assigning the size
    identification.garmentSize = GARMENT_SIZE_ID[garmentSizeID];

    return [identification];
};
