/**
 * Yohji Yamamoto regular framework identification.
 *
 * Evaluation of the occurrences of possible collections by following
 * the Yohji Yamamoto regular identification framework.
 *
 * @author Etienne Bolduc
 */

// Imports
import { Collection, Identification, OperationPeriod } from "../../../utils/index.js";
import { InputYY } from "../utils/index.js";

// Constants
import { ALL_COLLECTIONS, COUNTERFEITS, GARMENT_TYPE_ID, LINE_ID, LINE } from "../constants/index.js";
import { SEASON_ID_AUX, SEASON_ID_CAPSULE, SEASON_ID_MAIN, SEASON_ID_PRE } from "../constants/index.js";
const Season = Collection.Season;
const REGEX_REGULAR = /^([A-Z]{3}\d{5}((\d*)|(\d[A-Z])))$/;
const FRAMEWORK_REGULAR = "regular";

// Classification of pre-2010 lines for sizing, font, and manufacturer changes
//
// THINK ABOUT 80s LINES
//
const LINE_MAIN = [
    LINE.YY.name,
    LINE.YYFI.name,
    LINE.YYPH.name,
    LINE.YYPHFI.name,
    LINE.YYCH.name,
    LINE.NOIR.name,
    LINE.RYY.name,
    LINE.RYYM.name,
];
const LINE_YSBIS = [
    LINE.BLUEC.name,
    LINE.BISL.name,
];

// SIZING
const COL_SIZING_ALPHABETICAL_END = {
    MAIN: new Collection(1999, Season.W),
    DIFF: new Collection(1999, Season.S), // AUX ie clean cutoff
    NOIR: new Collection(1996, Season.S),
    LIMI: new Collection(2020, Season.W),
};
const COL_SIZING_NUMERICAL_START = {
    MAIN: new Collection(2000, Season.S),
    DIFF: new Collection(1999, Season.W), // MAIN ie clean start
    NOIR: new Collection(1996, Season.S),
    LIMI: new Collection(2021, Season.S),
};
const SIZING_ANY = [
    LINE.YYOJ.name,
    LINE.WILD.name,
    LINE.WILDC.name
];

// TYPEFACE
const COL_TYPEFACE_SLAB_END = {
    YS: new Collection(1991, Season.S), // MAIN ie messy cutoff
    BISL: new Collection(2002, Season.S),
};
const COL_TYPEFACE_PROP_START = {
    YS: new Collection(1990, Season.S), // MAIN ie clean start
};
const COL_TYPEFACE_PROP_END = {
    MAIN: new Collection(2009, Season.W),
    DIFF: new Collection(2005, Season.W), // read YFM; AUX ie clean cutoff
    YS: new Collection(2001, Season.S), // AUX ie clean cutoff
    LIMI: new Collection(2016, Season.W),
};
const COL_TYPEFACE_MONO_START = {
    MAIN: new Collection(2010, Season.S),
    DIFF: new Collection(2005, Season.W), // AUX ie messy start
    YS: new Collection(2001, Season.S), // MAIN ie clean start
    LIMI: new Collection(2017, Season.S),
};

// FABRIC CONTENT LANGUAGE
const COL_FABRIC_JP_END = {
    MAIN: new Collection(1984, Season.S),
    DIFF: new Collection(1991, Season.W), // AUX ie clean cutoff
    NOIR: new Collection(1995, Season.W),
};
const COL_FABRIC_JP_FR_EN_START = {
    MAIN: new Collection(1981, Season.W),
    DIFF: new Collection(1991, Season.W), // AUX ie messy start
    NOIR: new Collection(1995, Season.W),
};

// LAUNDRY
const COL_LAUNDRY_BOTTOM_END = new Collection(2017, Season.R);
const COL_LAUNDRY_TOP_START = new Collection(2017, Season.R);

// DO NOT TUMBLE
const OP_DONOTTUMBLEDRY_SHORT = {
    MAIN: new OperationPeriod(new Collection(1991, Season.S), new Collection(2005, Season.W)),
    DIFF: new OperationPeriod(new Collection(1991, Season.W), new Collection(2005, Season.W)),
    // (AUX ie messy start; same as JP_FR_EN start, UNCLEAR; same as proportional)
    YS: new OperationPeriod(new Collection(1985, Season.W), new Collection(2001, Season.S)),
    // (UNCLEAR; since beginning, UNCLEAR; same as monospaced)
};
const COL_DONOTTUMBLEDRY_LONG_START = {
    MAIN: new Collection(2006, Season.S),
    DIFF: new Collection(2005, Season.W), // read YFM; AUX ie messy start; same as monospaced
    YS: new Collection(2001, Season.S), // UNCLEAR; same as monospaced
};

// MANUFACTURER
const COL_MANUFACTURER_YS_CO_LTD_END = {
    MAIN: new Collection(1987, Season.S),
    DIFF: new Collection(1997, Season.S), // AUX ie clean cutoff
    BIS: new Collection(2002, Season.S),
};
const COL_MANUFACTURER_YOHJI_YAMAMOTO_INC_START = {
    MAIN: new Collection(1987, Season.W),
    DIFF: new Collection(1997, Season.S), // AUX ie messy start
    YFMRL: new Collection(1997, Season.W),
};
//const COL_MANUFACTURER_YS_BIS_END = new Collection(2002, Season.S);
const COL_MANUFACTURER_YOHJI_YAMAMOTO_INC_EXCEPTION_YFMRL = new Collection(1993, Season.W);

// Lines with A as only garment ID
const LINE_GARMENT_A_ONLY = [
    LINE.YYRI.name,
    LINE.GOTHIC.name,
];

// Lines with A as season ID
const LINE_SEASON_A = [
    LINE.YS.name,
    LINE.YFM.name,
    LINE.YY.name,
    LINE.YYPH.name,
    LINE.BISL.name,
    LINE.GRY.name,
    LINE.GOTHIC.name,
];

// Lines with A as only season ID
const LINE_SEASON_A_ONLY = [
    LINE.BANG.name,
    LINE.YYM.name
];



/**
 * Evaluate if the input data corresponds to the Yohji Yamamoto regular framework.
 * @return {boolean} True if the input data corresponds to the Yohji Yamamoto regular framework; false otherwise.
 */
InputYY.prototype.isRegular = function() {

    // Returning false if the product code is not a valid input
    if (!this.isValid()) return false;

    // Returning true if there is no product code
    if (!this.isProductCodeString()) return true;

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Returning true if the product code corresponds to a counterfeit
    if (productCode in COUNTERFEITS) return true;

    // Returning false if the product code does not fit the regular expression of the framework
    // or is not the empty string
    if (!REGEX_REGULAR.test(productCode)) return false;

    // Returning false if the line ID is not valid
    const lineID = productCode[0];
    if (!(lineID in LINE_ID)) return false;

    // Returning false if the season ID is not valid
    const seasonID = productCode[1];
    if (!(seasonID in SEASON_ID_MAIN || seasonID in SEASON_ID_AUX)) return false;

    // Returning false if the garment ID is not valid
    const garmentTypeID = productCode[2];
    if (!(garmentTypeID in GARMENT_TYPE_ID)) return false;

    // Returning true otherwise
    return true
};

/**
 * Identification of the occurrences of possible collections from the input data
 * by following the Yohji Yamamoto regular framework.
 * @return {Identification[]} Identification of the occurrences of possible collections.
 */
InputYY.prototype.extract_Regular = function() {

    // Returning empty array if the product code is not a
    // valid Yohji Yamamoto regular framework input
    if (!this.isRegular()) return [];

    // Initializing useful parameters
    const productCode = this.getProductCodeStandardized();

    // Initializing the identification object
    let identification = new Identification({
        label: Identification.Label.YY,
        framework: FRAMEWORK_REGULAR,
        input: this.copy()
    });

    // Exceptions that do not fit the regular structure of the product code
    if (productCode in COUNTERFEITS && !REGEX_REGULAR.test(productCode)) {
        let newIdentification = COUNTERFEITS[productCode].copy();
        newIdentification.framework = identification.framework;
        newIdentification.input = identification.input;
        newIdentification.lineList[0].name = "Counterfeit of " + newIdentification.lineList[0].name;
        return [newIdentification];
    }

    // Initializing useful parameters
    const lineID = this.isProductCodeString()? productCode[0] : productCode;
    const seasonID = this.isProductCodeString()? productCode[1] : productCode;
    const garmentTypeID = this.isProductCodeString()? productCode[2] : null;   

    // Declaring the array of occurences by line
    let lineList = [];

    // Looping through each line of the line ID
    for (let line of LINE_ID[lineID]) {

        // Initializing the set of candidates
        let candidates = ALL_COLLECTIONS.map(col => col.copy());

        // Limiting the set of candidates to the collections within the operation period
        candidates = candidates.filter(col => line.operationPeriod.includes(col));

        // Skipping if the garment type ID does not fit
        if (this.isProductCodeString() && LINE_GARMENT_A_ONLY.includes(line.name) && garmentTypeID !== 'A') continue;

        // Limiting the set of candidates related to the seasonless ID
        if (LINE_SEASON_A_ONLY.includes(line.name)) {
            candidates = candidates.filter(col => !col.isCollection() && !col.isPreCollection());
            if (line.name !== LINE.BANG) {
                if (seasonID !== "A") continue;
                else candidates = candidates.filter(col => !col.isCapsule());
            }
        }
        else if (LINE_SEASON_A.includes(line.name) && seasonID === "A")
            candidates = candidates.filter(col => col.hasNoSeason());
        else  candidates = candidates.filter(col => !col.hasNoSeason());

        // Limiting the set of candidates to the collections with the right logo style if specified
        if (!this.isLogoUnspecified() && !line.isLogoListEmpty()) {
            if (line.includes(this.logoStyle))
                candidates = candidates.filter(col => line.logoList[this.logoStyle].includes(col));
            else continue;
        }

        // Limiting the set of candidates to the collections with the right sizing
        if (!SIZING_ANY.includes(line.name)) {
            if (this.isSizingAlphabetical()) {
                let col_limit = COL_SIZING_ALPHABETICAL_END["DIFF"];
                if (line.name === LINE.NOIR.name)
                    col_limit = COL_SIZING_ALPHABETICAL_END["NOIR"];
                else if (line.name === LINE.LIMI.name)
                    col_limit = COL_SIZING_ALPHABETICAL_END["LIMI"];
                else if (LINE_MAIN.includes(line.name))
                    col_limit = COL_SIZING_ALPHABETICAL_END["MAIN"];
                candidates = candidates.filter(col => col.isBeforeOrIn(col_limit));
            }
            else if (this.isSizingNumerical()) {
                let col_limit = COL_SIZING_NUMERICAL_START["DIFF"];
                if (line.name === LINE.NOIR.name)
                    col_limit = COL_SIZING_NUMERICAL_START["NOIR"];
                else if (line.name === LINE.LIMI.name)
                    col_limit = COL_SIZING_NUMERICAL_START["LIMI"];
                else if (LINE_MAIN.includes(line.name))
                    col_limit = COL_SIZING_NUMERICAL_START["MAIN"];
                candidates = candidates.filter(col => col.isAfterOrIn(col_limit));
            }
        }

        // Limiting the set of candidates to the collections with the right font type
        if (this.isTypefaceSlabSerif()) { // could add weird aw91 made in France and 80s?
            let col_limit = new Collection(1950);
            if (line.name === LINE.YS.name)
                col_limit = COL_TYPEFACE_SLAB_END["YS"];
            else if (line.name === LINE.BISL.name)
                col_limit = COL_TYPEFACE_SLAB_END["BISL"];
            candidates = candidates.filter(col => col.isBeforeOrIn(col_limit));
        }
        else if (this.isTypefaceProportional()) {
            let col_limit = COL_TYPEFACE_PROP_END["DIFF"];
            if (line.name === LINE.YS.name) {
                candidates = candidates.filter(col => col.isAfterOrIn(COL_TYPEFACE_PROP_START["YS"]));
                col_limit = COL_TYPEFACE_PROP_END["YS"];
            }
            else if (line.name === LINE.LIMI.name)
                col_limit = COL_TYPEFACE_PROP_END["LIMI"];
            else if (LINE_MAIN.includes(line.name))
                col_limit = COL_TYPEFACE_PROP_END["MAIN"];
            candidates = candidates.filter(col => col.isBeforeOrIn(col_limit));
        }
        else if (this.isTypefaceMonospaced()) {
            let col_limit = COL_TYPEFACE_MONO_START["DIFF"];
            if (line.name === LINE.YS.name)
                col_limit = COL_TYPEFACE_MONO_START["YS"];
            else if (line.name === LINE.LIMI.name)
                col_limit = COL_TYPEFACE_MONO_START["LIMI"];
            else if (LINE_MAIN.includes(line.name))
                col_limit = COL_TYPEFACE_MONO_START["MAIN"];
            candidates = candidates.filter(col => col.isAfterOrIn(col_limit));
        }

        // Limiting the set of candidates to the collections with the right fabric content language
        if (this.isLanguageJP()) {
            let col_limit = COL_FABRIC_JP_END["DIFF"];
            if (line.name === LINE.NOIR.name)
                col_limit = COL_FABRIC_JP_END["NOIR"];
            else if (LINE_MAIN.includes(line.name))
                col_limit = COL_FABRIC_JP_END["MAIN"];
            candidates = candidates.filter(col => col.isBeforeOrIn(col_limit));
        }
        else if (this.isLanguageJP_FR_EN()) {
            let col_limit = COL_FABRIC_JP_FR_EN_START["DIFF"];
            if (line.name === LINE.NOIR.name)
                col_limit = COL_FABRIC_JP_FR_EN_START["NOIR"];
            else if (LINE_MAIN.includes(line.name))
                col_limit = COL_FABRIC_JP_FR_EN_START["MAIN"];
            candidates = candidates.filter(col => col.isAfterOrIn(col_limit));
        }

        // Limiting the set of candidates to the collections with the right laundry symbols location
        if (this.isLaundryBottom())
            candidates = candidates.filter(col => col.isBeforeOrIn(COL_LAUNDRY_BOTTOM_END));
        else if (this.isLaundryTop())
            candidates = candidates.filter(col => col.isAfterOrIn(COL_LAUNDRY_TOP_START));

        // Limiting the set of candidates to the collections with the right "do not tumble" length in Japanese
        if (this.isDoNotTumbleDryShort()) {
            let op_limit = OP_DONOTTUMBLEDRY_SHORT["DIFF"];
            if (line.name === LINE.YS.name)
                op_limit = OP_DONOTTUMBLEDRY_SHORT["YS"];
            else if (LINE_MAIN.includes(line.name))
                op_limit = OP_DONOTTUMBLEDRY_SHORT["MAIN"];
            candidates = candidates.filter(col => op_limit.includes(col));
        }
        else if (this.isDoNotTumbleDryLong()) {
            let col_limit = COL_DONOTTUMBLEDRY_LONG_START["DIFF"];
            if (line.name === LINE.YS.name)
                col_limit = COL_DONOTTUMBLEDRY_LONG_START["YS"];
            else if (LINE_MAIN.includes(line.name))
                col_limit = COL_DONOTTUMBLEDRY_LONG_START["MAIN"];
            candidates = candidates.filter(col => col.isAfterOrIn(col_limit));
        }

        // Limiting the set of candidates to the collections with the right manufacturer
        if (this.isManufacturerYS_CO_LTD()) {
            let col_limit = COL_MANUFACTURER_YS_CO_LTD_END["DIFF"];
            if (LINE_MAIN.includes(line.name))
                col_limit = COL_MANUFACTURER_YS_CO_LTD_END["MAIN"];
            if (LINE_YSBIS.includes(line.name))
                col_limit = COL_MANUFACTURER_YS_CO_LTD_END["BIS"];
            candidates = candidates.filter(col => col.isBeforeOrIn(col_limit));
        }
        //else if (this.isManufacturerYSBIS()) {
        //    if (!LINE_YSBIS.includes(line.name)) continue;
        //    let col_limit = COL_MANUFACTURER_YSBIS_END;
        //    candidates = candidates.filter(col => col.isBeforeOrIn(col_limit));
        //}
        else if (this.isManufacturerYOHJI_YAMAMOTO_INC()) {
            let col_limit = COL_MANUFACTURER_YOHJI_YAMAMOTO_INC_START["DIFF"];
            if (line.name === LINE.YFMRL.name)
                col_limit = COL_MANUFACTURER_YOHJI_YAMAMOTO_INC_START["YFMRL"];
            else if (LINE_MAIN.includes(line.name))
                col_limit = COL_MANUFACTURER_YOHJI_YAMAMOTO_INC_START["MAIN"];
            if (line.name === LINE.YFMRL.name) {
                candidates = candidates.filter(col => col.isAfterOrIn(col_limit)
                    || col.isEqualTo(COL_MANUFACTURER_YOHJI_YAMAMOTO_INC_EXCEPTION_YFMRL));
            }
            else candidates = candidates.filter(col => col.isAfterOrIn(col_limit));
        }

        // Initializing the season ID filters
        const seasonIDFilter_MAIN = SEASON_ID_MAIN[seasonID];
        const seasonIDFilter_AUX = SEASON_ID_AUX[seasonID];
        const seasonIDFilter_PRE = SEASON_ID_PRE[seasonID];
        const seasonIDFilter_CAPSULE = SEASON_ID_CAPSULE[seasonID];

        // Limiting the set of candidates to the collections of the season ID
        candidates = candidates.filter(col =>
            (seasonIDFilter_MAIN(col) && line.hasInMainCycle(col)) ||
            (seasonIDFilter_AUX(col) && line.hasInAuxCycle(col)) ||
            (seasonIDFilter_PRE(col) && line.hasInPreCycle(col)) ||
            (seasonIDFilter_CAPSULE(col) && line.hasInCapsuleCycle(col))
        );

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
        let stylizedCode = productCode.slice(0, 2) + "-" + productCode.slice(2,5) + "-" + productCode.slice(5);
        identification.stylizedCode = stylizedCode;
    }
    // Assigning the garment type
    if (garmentTypeID != null) identification.garmentType = GARMENT_TYPE_ID[garmentTypeID];

    return [identification];
};
