/**
 * Yohji Yamamoto regular framework identification.
 *
 * Evaluation of the occurrences of possible collections by following
 * the Yohji Yamamoto regular identification framework.
 *
 * @author Etienne Bolduc
 */

// Imports
import { Collection, Identification } from "../../../utils/index.js";
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
];
const LINE_YSBIS = [
    LINE.BISL.name,
];

// SIZING
const COL_SIZING_ALPHABETICAL_END = {
    DIFF: new Collection(1999, Season.S),
    MAIN: new Collection(1999, Season.W),
    LIMI: new Collection(2020, Season.W)
};
const COL_SIZING_NUMERICAL_START = {
    DIFF: new Collection(1999, Season.W),
    MAIN: new Collection(2000, Season.S),
    LIMI: new Collection(2021, Season.S)
};
const SIZING_NUMERICAL_ONLY = [
    LINE.NOIR.name
];
const SIZING_ANY = [
    LINE.WILD.name,
    LINE.WILDC.name
];

// FONT
const LINE_SLAB = [
    LINE.BISL.name,
    // could add weird aw91 made in France/Italy and 80s?
];
const COL_FONT_SERIF_END = {
    DIFF: new Collection(2005, Season.W),
    MAIN: new Collection(2009, Season.W),
    LIMI: new Collection(2016, Season.W)
};
const COL_FONT_SANS_START = {
    DIFF: new Collection(2005, Season.W),
    MAIN: new Collection(2010, Season.S),
    LIMI: new Collection(2017, Season.S)
};

// FABRIC CONTENT
const COL_FABRIC_JP_END = {
    DIFF: new Collection(1991, Season.W),
    MAIN: new Collection(1984, Season.S)
};
const COL_FABRIC_TRANS_START = {
    DIFF: new Collection(1991, Season.W),
    MAIN: new Collection(1981, Season.W)
};

// LAUNDRY
const COL_LAUNDRY_BELOW_END = new Collection(2016, Season.W);
const COL_LAUNDRY_ABOVE_START = new Collection(2017, Season.R);

// MANUFACTURER
const COL_MANUFACTURER_YS_END = {
    DIFF: new Collection(1997, Season.S),
    MAIN: new Collection(1987, Season.S),
};
const COL_MANUFACTURER_YY_START = {
    DIFF: new Collection(1997, Season.S),
    YFMRL: new Collection(1997, Season.W),
    MAIN: new Collection(1986, Season.W),
};
const COL_MANUFACTURER_YSBIS_END = new Collection(2002, Season.S);
const COL_MANUFACTURER_YY_EXCEPTION_YFMRL = new Collection(1993, Season.W);

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




// PRECOLLECTIONS
//const LINE_PRECOLLECTION = [
//    LINE.YS.name,
//    LINE.YPTK.name,
//];

//const LINE_PRE_ONLY = [
//   LINE.YSEX.name,
//    LINE.RISM.name,
//    LINE.JEANS.name,
//]; // these are simply produced outside main production...?

// Lines with capsule collections
//const LINE_CAPSULE = [
//    LINE.YS.name,
//    LINE.YYPH.name,
//    LINE.SYTE.name,
//    LINE.GRY.name,
//    LINE.DISC.name,
//    LINE.BANG.name,
//    LINE.WILD.name,
//    LINE.WILDC.name
//];



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

        // Limiting the set of candidates to the collections with the right sizing system
        if (SIZING_NUMERICAL_ONLY.includes(line.name)) {
            if (this.isSizingAlphabetical()) continue;
        }
         else if (!SIZING_ANY.includes(line.name)) {
            if (this.isSizingAlphabetical()) {
                let col_limit = COL_SIZING_ALPHABETICAL_END["DIFF"];
                if (line.name === LINE.LIMI.name)
                    col_limit = COL_SIZING_ALPHABETICAL_END["LIMI"];
                else if (LINE_MAIN.includes(line.name))
                    col_limit = COL_SIZING_ALPHABETICAL_END["MAIN"];
                candidates = candidates.filter(col => col.isBeforeOrIn(col_limit));
            }
            else if (this.isSizingNumerical()) {
                let col_limit = COL_SIZING_NUMERICAL_START["DIFF"];
                if (line.name === LINE.LIMI.name)
                    col_limit = COL_SIZING_NUMERICAL_START["LIMI"];
                else if (LINE_MAIN.includes(line.name))
                    col_limit = COL_SIZING_NUMERICAL_START["MAIN"];
                candidates = candidates.filter(col => col.isAfterOrIn(col_limit));
            }
        }

        // Limiting the set of candidates to the collections with the right font type
        if (this.isFontSlabSerif()) // could add weird aw91 made in France and 80s?
            if (!LINE_SLAB.includes(line.name)) continue;
        else if (this.isFontSerif()) {
            let col_limit = COL_FONT_SERIF_END["DIFF"];
            if (line.name === LINE.LIMI.name)
                col_limit = COL_FONT_SERIF_END["LIMI"];
            else if (LINE_MAIN.includes(line.name))
                col_limit = COL_FONT_SERIF_END["MAIN"];
            candidates = candidates.filter(col => col.isBeforeOrIn(col_limit));
        }
        else if (this.isFontSansSerif()) {
            let col_limit = COL_FONT_SANS_START["DIFF"];
            if (line.name === LINE.LIMI.name)
                col_limit = COL_FONT_SANS_START["LIMI"];
            else if (LINE_MAIN.includes(line.name))
                col_limit = COL_FONT_SANS_START["MAIN"];
            candidates = candidates.filter(col => col.isAfterOrIn(col_limit));
        }

        // Limiting the set of candidates to the collections with the right fabric content
        if (this.isFabricContentJapanese()) {
            let col_limit = COL_FABRIC_JP_END["DIFF"];
            if (LINE_MAIN.includes(line.name))
                col_limit = COL_FABRIC_JP_END["MAIN"];
            candidates = candidates.filter(col => col.isBeforeOrIn(col_limit));
        }
        else if (this.isFabricContentTranslated()) {
            let col_limit = COL_FABRIC_TRANS_START["DIFF"];
            if (LINE_MAIN.includes(line.name))
                col_limit = COL_FABRIC_TRANS_START["MAIN"];
            candidates = candidates.filter(col => col.isAfterOrIn(col_limit));
        }

        // Limiting the set of candidates to the collections with the right laundry symbols location
        if (this.isLaundryBelow())
            candidates = candidates.filter(col => col.isBeforeOrIn(COL_LAUNDRY_BELOW_END));
        else if (this.isLaundryAbove())
            candidates = candidates.filter(col => col.isAfterOrIn(COL_LAUNDRY_ABOVE_START));

        // Limiting the set of candidates to the collections with the right manufacturer
        if (this.isManufacturerYS()) {
            let col_limit = COL_MANUFACTURER_YS_END["DIFF"];
            if (LINE_MAIN.includes(line.name))
                col_limit = COL_MANUFACTURER_YS_END["MAIN"];
            candidates = candidates.filter(col => col.isBeforeOrIn(col_limit));
        }
        else if (this.isManufacturerYSBIS()) {
            if (!LINE_YSBIS.includes(line.name)) continue;
            let col_limit = COL_MANUFACTURER_YSBIS_END;
            candidates = candidates.filter(col => col.isBeforeOrIn(col_limit));
        }
        else if (this.isManufacturerYY()) {
            let col_limit = COL_MANUFACTURER_YY_START["DIFF"];
            if (line.name === LINE.YFMRL.name)
                col_limit = COL_MANUFACTURER_YY_START["YFMRL"];
            else if (LINE_MAIN.includes(line.name))
                col_limit = COL_MANUFACTURER_YY_START["MAIN"];
            if (line.name === LINE.YFMRL.name) {
                candidates = candidates.filter(col => col.isAfterOrIn(col_limit)
                    || col.isEqualTo(COL_MANUFACTURER_YY_EXCEPTION_YFMRL));
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

        // Limiting the set of candidates to the collections of the season ID and extra
        //if (line.name === LINE.SYTE.name) {
        //    candidates = candidates.filter(col => seasonIDFilter(col) && (
        //        (col.isCollection() && col.isBeforeOrIn(new Collection(2018, Season.W)))
        //        || col.isEqualTo(new Collection(2019, Season.W))
        //        || (col.isPreCollection() && col.isAfterOrIn(new Collection(2019, Season.P)))));
        //}
        //else if (LINE_PRE_ONLY.includes(line.name)) {
        //    candidates = candidates.filter(col => seasonIDFilter(col) && col.isPreCollection());
        //}
        //else if (LINE_PRECOLLECTION.includes(line.name)) {
        //    candidates = candidates.filter(col => seasonIDFilter(col)
        //        || (col.isPreCollection() && seasonID !== "A"));
        //        //|| (col.isPreCollection() && !col.isAfterOrIn(COL_PRE_START) && seasonID !== "A"));
        //}
        //else {
        //    candidates = candidates.filter(col => seasonIDFilter(col) && !col.isPreCollection());
        //}
        //
        // Limiting the set of candidates related to the capsule collections
        //if (!LINE_CAPSULE.includes(line.name)) candidates = candidates.filter(col => !col.isCapsule());

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
