/**
 * Maison Margiela regular framework identification.
 *
 * Evaluation of the occurrences of possible collections by following
 * the Maison Margiela regular identification framework.
 *
 * @author Etienne Bolduc
 */

// TO DO
// - blank code? (for line 0, always; for all other lines, until ss98 or aw03 when miss deanna)
// - add miss deanna

// Imports
import { Collection, Identification, OperationPeriod } from "../../../utils/index.js";
import { InputMM } from "../utils/index.js";

// Constants
import { ALL_COLLECTIONS, COUNTERFEITS, LABEL_NOTATION, LINE, MANUFACTURER } from "../constants/index.js";
const Season = Collection.Season;
//const REGEX_REGULAR = /^\d{8}|\d{9}|\d{13}|(\d{2}[A-Z]{2}\d{4}\d{2}\d*)$/;
const REGEX_OLD = /^(\d{8}|\d{9}|\d{13})$/;
const REGEX_NEW = /^[P]?\d{2}[A-Z]{2}\d*$/;
const FRAMEWORK_REGULAR = "regular";
const COL_CURRENT = new Collection(new Date().getFullYear(), (new Date().getMonth() < 6)? Season.S : Season.W);
const OP_OLD = new OperationPeriod(new Collection(1998, Season.W), new Collection(2010, Season.W));
const OP_NEW = new OperationPeriod(new Collection(2010, Season.W), COL_CURRENT);
const COL_P_START = new Collection(2018, Season.S);
const COL_NO20_START = new Collection(2022, Season.W);
const COL_NO20_START_22 = new Collection(2021, Season.S);
const LABEL_NOCODE = ['20', 'HM', 'SUP'];
const MANUFACTURER_NOCODE = ['MAC'];
const LINENAME_ARTISANAL = [LINE['(0)'].name, LINE['(0)(10)'].name];
const COL_NOCODE_LAST = new Collection(1998, Season.S);
const COL_MD_LAST = new Collection(2003, Season.W);



/**
 * Evaluate if the input data corresponds to the Maison Margiela regular framework.
 * @return {boolean} True if the input data corresponds to the Maison Margiela regular framework;
 * false otherwise.
 */
InputMM.prototype.isRegular = function() {

    // Returning false if the product code is not a valid input
    if (!this.isValid()) return false;

    // Artisanal always Made in France
    if (this.isLabelNotationArtisanal() && !this.isLabelNotationBLANK()) {
        if (this.isProductCodeString()) return false;
        if (!(this.isManufacturerMIF() || this.isManufacturerUnspecified())) return false;
    }
    if (this.isManufacturerMIF()) {
        if (this.isProductCodeString()) return false;
        if (!this.isLabelNotationArtisanal()) return false;
    }

    // Returning true if there is no product code
    if (!this.isProductCodeString()) return true;

    // Returning true if label notation exception
    const labelNotation = this.getLabelNotation();
    const manufacturer = this.getManufacturer();
    const nocode_exception = LABEL_NOCODE.includes(labelNotation) || MANUFACTURER_NOCODE.includes(manufacturer);
    if (nocode_exception) return true;

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();
    const effectiveCode = (productCode.at(0) === 'P')? productCode.slice(1) : productCode;

    // Returning true if the product code corresponds to a counterfeit
    if (productCode in COUNTERFEITS) return true;

    // Returning false if the product code does not fit the regular expression of the framework
    // or is not the empty string
    if (!(REGEX_OLD.test(productCode) || REGEX_NEW.test(productCode))) return false;

    // Initializing useful parameters
    let year = 0;
    let seasonID = 0;
    let collection = null;

    if (REGEX_OLD.test(productCode)) {
        if (productCode.length === 8) {
            year = parseInt(productCode.slice(-3,-1));
            if (productCode.at(-3) === '9') year += 1900;
            else if (productCode.at(-3) === '0') year += 2000;
            else return false;
        }
        else year = 2000 + parseInt(productCode.slice(-4,-1));
        seasonID = productCode.slice(-1);
    }
    else {
        if (effectiveCode.slice(4,6) === '20') year = parseInt(effectiveCode.slice(4,8));
        else year = 2000 + parseInt(effectiveCode.slice(4,6));
        seasonID = effectiveCode[1];
    }

    // Returning false if the season ID is not valid
    if (!(['1','2'].includes(seasonID))) return false;

    // Initializing useful parameters
    if (seasonID === '1') collection = new Collection(year, Season.S);
    else if (seasonID === '2') collection = new Collection(year, Season.W);

    // Returning false if the corresponding collection is not valid
    if (REGEX_OLD.test(productCode) && !OP_OLD.includes(collection)) return false;
    else if (REGEX_NEW.test(productCode) && !OP_NEW.includes(collection)) return false;
    else if (effectiveCode.slice(4,6) === '20') {
        if (labelNotation == '22')
            if (collection.isAfterOrIn(COL_NO20_START_22)) return false;
        else if (collection.isAfterOrIn(COL_NO20_START)) return false;
    }

    // Returning false if P is not for line 22 or if P is missing for line 22
    if (productCode.at(0) === 'P' ^ (labelNotation === '22' && collection.isAfterOrIn(COL_P_START)))
        return false;

    // Returning true otherwise
    return true
};

/**
 * Identification of the occurrences of possible collections from the input data
 * by following the Maison Margiela regular framework.
 * @return {Identification[]} Identification of the occurrences of possible collections.
 */
InputMM.prototype.extract_Regular = function() {

    // Returning empty array if the product code is not a
    // valid Maison Margiela regular framework input
    if (!this.isRegular()) return [];

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Initializing the identification object
    let identification = new Identification({
        label: Identification.Label.MM,
        framework: FRAMEWORK_REGULAR,
        input: this.copy()
    });

    // Initializing useful parameters
    const labelNotation = this.getLabelNotation();
    const manufacturer = this.getManufacturer();
    const nocode_exception = LABEL_NOCODE.includes(labelNotation) || MANUFACTURER_NOCODE.includes(manufacturer);
    let collection = null;

    if (this.isProductCodeString() && !nocode_exception) {
        let year = 0;
        let seasonID = 0;

        if (REGEX_OLD.test(productCode)) {
            if (productCode.length === 8) {
                year = parseInt(productCode.slice(-3,-1));
                if (productCode.at(-3) === '9') year += 1900;
                else if (productCode.at(-3) === '0') year += 2000;
                else return false;
            }
            else year = 2000 + parseInt(productCode.slice(-4,-1));
            seasonID = productCode.slice(-1);
        }
        else {
            const effectiveCode = (productCode.at(0) === 'P')? productCode.slice(1) : productCode;
            if (effectiveCode.slice(4,6) === '20') year = parseInt(effectiveCode.slice(4,8));
            else year = 2000 + parseInt(effectiveCode.slice(4,6));
            seasonID = effectiveCode[1];
        }

        if (seasonID === '1') collection = new Collection(year, Season.S);
        else if (seasonID === '2') collection = new Collection(year, Season.W);
    }

    // Declaring the array of occurences by line
    let lineList = [];
    const operationPeriod_manufacturer = MANUFACTURER[manufacturer].operationPeriod;

    // Looping through each line
    for (let line of LABEL_NOTATION[labelNotation].lineList) {

        // Artisanal
        if (LINENAME_ARTISANAL.includes(line.name)) {
            if (this.isProductCodeString()) continue;
            else if (!(this.isManufacturerMIF() || this.isManufacturerUnspecified())) continue;
        }
        else if (this.isManufacturerMIF()) continue;

        // Initializing useful parameters
        const operationPeriod = line.operationPeriod;

        // Initialize the set of candidates
        let candidates = ALL_COLLECTIONS.map(col => col.copy());

        // Limiting the set of candidates to the collections with a season
        candidates = candidates.filter(col => !col.hasNoSeason());

        // Limiting the set of candidates to the collections within the operation period
        candidates = candidates.filter(col => operationPeriod.includes(col));

        // FIND TITLE but should change condition to non artisanal line name
        if (this.isProductCodeBlank() && !LINENAME_ARTISANAL.includes(line.name)) {
            if (this.isManufacturerMD() || this.isManufacturerUnspecified())
                candidates = candidates.filter(col => col.isBeforeOrIn(COL_MD_LAST));
            else candidates = candidates.filter(col => col.isBeforeOrIn(COL_NOCODE_LAST));
        }
        
        else if (this.isProductCodeString() && !nocode_exception)
            candidates = candidates.filter(col => col.isEqualTo(collection));

        // Limiting the set of candidates to the collections with a product code
        else if (this.isProductCodeUnreadable())
            candidates = candidates.filter(col => col.isAfterOrIn(OP_OLD.lowerBound));

        // Limiting the set of candidates to the collections within the manufacturer operation period
        if (!this.isManufacturerUnspecified())
            candidates = candidates.filter(col => operationPeriod_manufacturer.includes(col));

        // Editing the line's name if crafted by Mackintosh
        if (this.isManufacturerMAC()){
            line = line.copy();
            line.name += " crafted by Mackintosh";
        }

        // Adding the occurrence to the array of occurences if non-empty
        if (candidates.length !== 0) lineList.push(line.forIdentification(candidates));

    }

    // Assign possibility of being a counterfeit
    if (productCode in COUNTERFEITS) {
        identification.counterfeit = true;
        if (lineList.length === 0) {
            let newIdentification = COUNTERFEITS[productCode].copy();
            newIdentification.framework = identification.framework;
            newIdentification.input = identification.input;
            newIdentification.lineList[0].name = "Counterfeit of " + newIdentification.lineList[0].name;
            return [newIdentification];
        }
    }

    // Returning empty array if there is no occurence
    if (lineList.length === 0) return [];

    // Assigning the array of occurences
    identification.lineList = lineList;

    // Assigning the stylized code
    if (this.isProductCodeString()) {
        let stylizedCode = productCode;
        identification.stylizedCode = stylizedCode;
    }

    return [identification];
};
