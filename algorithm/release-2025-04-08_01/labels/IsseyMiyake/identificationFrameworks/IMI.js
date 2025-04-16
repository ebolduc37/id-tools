/**
 * ISSEY MIYAKE INC. framework identification.
 *
 * Evaluation of the occurrences of possible collections by following
 * the ISSEY MIYAKE INC. identification framework.
 *
 * @author Etienne Bolduc
 */

// Imports
import { Collection, Identification, OperationPeriod } from "../../../utils/index.js";
import { InputIM } from "../utils/index.js";

// Constants
import { ALL_COLLECTIONS, IMI_ACCESSORY_TYPE_ID as ACCESSORY_TYPE_ID,
    IMI_COUNTERFEITS as COUNTERFEITS, IMI_FABRIC_TYPE_ID as FABRIC_TYPE_ID,
    IMI_GARMENT_TYPE_ID as GARMENT_TYPE_ID, IMI_LINE_ID as LINE_ID,
    IMI_SEASON_ID as SEASON_ID, 
    LINE} from "../constants/index.js";
const Season = Collection.Season;
const REGEX_IMI = /^[A-Z]{2}\d{2}[A-Z]{2}\d{3}\d?\d?$/;
const FRAMEWORK_IMI = "ISSEY MIYAKE INC.";
const MANUFACTURER_IMI = "ISSEY MIYAKE INC. [Japanese: 株式会社 イッセイ ミヤケ]";

// Common alphabetical sizing system ending
const SIZING_ALPHABETICAL_END = new Collection(2002, Season.S);

// Exceptional alphabetical sizing ending
let SIZING_ALPHABETICAL_END_EXCEPTIONS_toFill = {};
SIZING_ALPHABETICAL_END_EXCEPTIONS_toFill[LINE.CL.name] =  new Collection(1990);
SIZING_ALPHABETICAL_END_EXCEPTIONS_toFill[LINE.PE.name] =  new Collection(1997, Season.S);
SIZING_ALPHABETICAL_END_EXCEPTIONS_toFill[LINE.PP.name] =  new Collection(1990);
SIZING_ALPHABETICAL_END_EXCEPTIONS_toFill[LINE.ZT.name] =  new Collection(1990);
SIZING_ALPHABETICAL_END_EXCEPTIONS_toFill[LINE.CZ.name] =  new Collection(1990);
const SIZING_ALPHABETICAL_END_EXCEPTIONS = SIZING_ALPHABETICAL_END_EXCEPTIONS_toFill;

// Common numerical sizing system beginning
const SIZING_NUMERICAL_START = new Collection(2000, Season.W);

// Exceptional numerical sizing beginning
let SIZING_NUMERICAL_START_EXCEPTIONS_toFill = {};
SIZING_NUMERICAL_START_EXCEPTIONS_toFill[LINE.CL.name] =  new Collection(1995, Season.S);
SIZING_NUMERICAL_START_EXCEPTIONS_toFill[LINE.PE.name] =  new Collection(1997, Season.W);
SIZING_NUMERICAL_START_EXCEPTIONS_toFill[LINE.PP.name] =  new Collection(1993, Season.S);
SIZING_NUMERICAL_START_EXCEPTIONS_toFill[LINE.ZT.name] =  new Collection(1994);
SIZING_NUMERICAL_START_EXCEPTIONS_toFill[LINE.CZ.name] =  new Collection(1996);
const SIZING_NUMERICAL_START_EXCEPTIONS = SIZING_NUMERICAL_START_EXCEPTIONS_toFill;

// Proto sans serif type ending
const FONT_PROTO_SANS_END = new Collection(1994, Season.S);

// Slab serif type ending and sans serif beginning
const FONT_SLAB_END = new Collection(2000, Season.W);
const FONT_SANS_DEBUT = new Collection(2000, Season.S);

// List of designers other than Issey Miyake for the main lines
const DESIGNERS = {
    IM: {
        NT: new OperationPeriod(new Collection(2000, Season.S), new Collection(2007, Season.S)),
        DF: new OperationPeriod(new Collection(2007, Season.W), new Collection(2011, Season.W)),
        YM: new OperationPeriod(new Collection(2012, Season.S), new Collection(2019, Season.W)),
        SK: new OperationPeriod(new Collection(2020, Season.S))
    },
    ME: {
        NT: new OperationPeriod(new Collection(1994, Season.S), new Collection(2007, Season.S)),
        DF: new OperationPeriod(new Collection(2007, Season.W), new Collection(2011, Season.W)),
        YT: new OperationPeriod(new Collection(2012, Season.S), new Collection(2020, Season.S))
    }
}



/**
 * Evaluate if the input data corresponds to the ISSEY MIYAKE INC. framework.
 * @return {boolean} True if the input data corresponds to the ISSEY MIYAKE INC. framework; false otherwise.
 */
InputIM.prototype.isIMI = function() {

    // Returning false if the product code is not a valid input
    if (!this.isValid()) return false;

    // Returning false if the font style is not sans serif
    if (!this.isLogoHelvetica() && !this.isLogoUnspecified()) return false;

    // Returning false if the manufacturer is not a ISSEY MIYAKE INC.
    if (!this.isManufacturerIMI() && !this.isManufacturerUnspecified()) return false;

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Returning true if the product code corresponds to a counterfeit
    if (productCode in COUNTERFEITS) return true;

    // Returning false if the product code does not fit the regular expression of the framework
    // or is not the empty string
    if (!REGEX_IMI.test(productCode)) return false;

    // Returning false if the line ID is not valid
    const lineID = productCode.slice(0, 2);
    if (!(lineID in LINE_ID)) return false;

    // Returning false if the season ID is not valid
    const seasonID = productCode[3];
    if (!(seasonID in SEASON_ID)) return false;

    // Initializing useful parameters
    const fabricTypeID = productCode[4];
    const garmentTypeID = productCode[5];

    if (fabricTypeID === "A") {
        // Returning false if the accessory type ID is not valid
        if (!(garmentTypeID in ACCESSORY_TYPE_ID)) return false;
    }
    else {
        // Returning false if the fabric type ID or garment type ID is not valid
        if (!(fabricTypeID in FABRIC_TYPE_ID)) return false;
        if (!(garmentTypeID in GARMENT_TYPE_ID)) return false;
    }

    // Returning true otherwise
    return true
};

/**
 * Identification of the occurrences of possible collections from the input data
 * by following the ISSEY MIYAKE INC. framework.
 * @return {Identification[]} Identification of the occurrences of possible collections.
 */
InputIM.prototype.extract_IMI = function() {

    // Returning empty array if the product code is not a
    // valid ISSEY MIYAKE INC. framework input
    if (!this.isIMI()) return [];

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Initializing the identification object
    let identification = new Identification({
        label: Identification.Label.IM,
        framework: FRAMEWORK_IMI,
        manufacturer: MANUFACTURER_IMI,
        input: this.copy()
    });

    // Initializing useful parameters
    const lineID = productCode.slice(0, 2);
    const yearLastDigit = productCode[2];
    const seasonID = productCode[3];
    const fabricTypeID = productCode[4];
    const garmentTypeID = productCode[5];

    // Declaring the array of occurences by line
    let lineList = [];

    // Declaring the array of possible lines
    //let selection = Object.values(LINE_ID).flat();
    //if (lineID != null) selection = LINE_ID[lineID];
    //if (typeof selection === "undefined") selection = [];

    // Looping through each line of the line ID
    for (let line of LINE_ID[lineID]) {

        // Initializing useful parameters
        const name = line.name;
        const operationPeriod = line.operationPeriod;

        // Initialize the set of candidates
        let candidates = ALL_COLLECTIONS.map(col => col.copy());

        // Limiting the set of candidates to the collections of ISSEY MIYAKE INC.
        candidates = candidates.filter(col => col.isAfterOrIn(new Collection(1991, Season.S)));

        // Limiting the set of candidates to the collections with the right last digit of the year
        let yearLastDigitException = col => false;
        if (productCode.slice(2, 4) === "55") yearLastDigitException = col => true;
        else if (productCode.slice(0,3) === "PP0" && name === LINE.IM.name && this.isFontSlabSerif())
            yearLastDigitException = col => col.isEqualTo(new Collection(1993, Season.S)) || col.isEqualTo(new Collection(1993));
        candidates = candidates.filter(col => col.year%10 == yearLastDigit || yearLastDigitException(col));

        // Limiting the set of candidates to the collections with the right logo style if specified
        if (!this.isLogoUnspecified()) {
            if (!line.includes(this.logoStyle)) continue;
            else candidates = candidates.filter(col => line.logoList[this.logoStyle].includes(col));
        }

        // Limiting the set of candidates to the collections with the right sizing system
        if (this.isSizingAlphabetical()) {
            let sizingAlphabeticalEnd = SIZING_ALPHABETICAL_END;
            if (name in SIZING_ALPHABETICAL_END_EXCEPTIONS)
            sizingAlphabeticalEnd = SIZING_ALPHABETICAL_END_EXCEPTIONS[name];
            candidates = candidates.filter(col => col.isBeforeOrIn(sizingAlphabeticalEnd));
        }
        else if (this.isSizingNumerical()) {
            let sizingNumericalStart = SIZING_NUMERICAL_START;
            if (name in SIZING_NUMERICAL_START_EXCEPTIONS)
                sizingNumericalStart = SIZING_NUMERICAL_START_EXCEPTIONS[name];
            candidates = candidates.filter(col => col.isAfterOrIn(sizingNumericalStart));
        }

        // Limiting the set of candidates to the collections with the right font type
        if (this.isFontSlabSerif())
            candidates = candidates.filter(col => col.isBeforeOrIn(FONT_SLAB_END));
        else if (this.isFontSansSerif())
            //candidates = candidates.filter(col => !col.isBetween(new Collection(1994, Season.W), new Collection(1999, Season.W)));
            candidates = candidates.filter(col => col.isBeforeOrIn(FONT_PROTO_SANS_END) || col.isAfterOrIn(FONT_SANS_DEBUT));

        // Initializing the season ID filter
        let filterSeasonID = SEASON_ID[seasonID];
        // Limiting the set of candidates to the collections of the season ID and extra
        candidates = candidates.filter(col => filterSeasonID(col));

        // Limiting the set of candidates to the collections within the operation period
        candidates = candidates.filter(col => operationPeriod.includes(col));

        // Designers for the ISSEY MIYAKE line
        if (name === LINE.IM.name) {
            candidates.filter(col => DESIGNERS.IM["NT"].includes(col)).forEach((col) => {
                col.text = "(by Naoki Takizawa)";
            });
            candidates.filter(col => DESIGNERS.IM["DF"].includes(col)).forEach((col) => {
                col.text = "(by Dai Fujiwara)";
            });
            candidates.filter(col => DESIGNERS.IM["YM"].includes(col)).forEach((col) => {
                col.text = "(by Yoshiyuki Miyamae)";
            });
            candidates.filter(col => DESIGNERS.IM["SK"].includes(col)).forEach((col) => {
                col.text = "(by Satoshi Kondo)";
            });
        }

        // Designers for the ISSEY MIYAKE MEN line
        if (name === LINE.ME.name) { // || name === LINE.IMM.name) {
            candidates.filter(col => DESIGNERS.ME["NT"].includes(col)).forEach((col) => {
                col.text = "(by Naoki Takizawa)";
            });
            candidates.filter(col => DESIGNERS.ME["DF"].includes(col)).forEach((col) => {
                col.text = "(by Dai Fujiwara)";
            });
            candidates.filter(col => DESIGNERS.ME["YT"].includes(col)).forEach((col) => {
                col.text = "(by Yusuke Takahashi)";
            });
        }
        //    candidates.filter(col => LINE.ME.logoList["IM_WB"].includes(col)).forEach((col) => {
        //        col.text = "[white ISSEY MIYAKE over black background]";
        //    });
        //}

        // Adding the occurrence to the array of occurences if non-empty
        if (candidates.length !== 0) lineList.push(line.forIdentification(candidates));
    }

    // Assign possibility of being a counterfeit
    if (productCode in COUNTERFEITS) {
        identification.counterfeit = true;
        if (lineList.length === 0) { // doesnt work in the case of PP06
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
    let stylizedCode = productCode;
    if (this.isFontSlabSerif()) stylizedCode = productCode.slice(0, 4) + "-" + productCode.slice(4);
    identification.stylizedCode = stylizedCode;
    // Assigning the fabric type
    identification.fabricType = FABRIC_TYPE_ID[fabricTypeID];
    // Assigning the accessory/garment type
    if (fabricTypeID === "A") identification.garmentType = ACCESSORY_TYPE_ID[garmentTypeID];
    else identification.garmentType = GARMENT_TYPE_ID[garmentTypeID];

    return [identification];
};
