import year_curr from "./constants/yearCurr";
import { code_change, wrongcode } from "./constants/comme-des-garcons"
import { exception_firstdigit_list, exception_lastdigit_list, rep_list, size_list } from "./constants/comme-des-garcons/lists"
import { exception_code_dict, garmentID_dict, lineID_dict, name_dict, seasonID_dict } from "./dictionary/comme-des-garcons"


////////////////////////////////////////////////////////////////////
///// WELCOME TO THE 'COMME des GARÇONS' IDENTIFICATION CENTER /////
////////////////////////////////////////////////////////////////////

// We will do our best to help you identify your COMME des GARÇONS pieces
// and find out what collection(s) they are from.
// Simply provide the product code and the production year (if there is one) from the care label.

// This program was conceived by the genius behind My Clothing Archive
// and it was built according to the COMME des GARÇONS identification chart.

///// ERROR FUNCTIONS

// prints "error" to the console log
function error() {
    console.log("error");
};

// prints the string input to the console log
// input
    // str: (string) error message
function error(str) {
    if (typeof str !== 'string') str = "internal error: wrong input to error function";
	console.log(str);
};

// prints the string input to the console log and returns an empty array
// input
    // str: (string) error message
// output
    // [empty array]
function error_empty(str) {
	error(str);
	return [];
};

// prints the string input to the console log and returns false
// input
    // str: (string) error message
// output
    // (boolean) false
function error_false(str) {
	error(str);
	return false;
};



///// PRELIMINARY FUNCTIONS

// returns true if the string is only composed of letters
// input
    // str: (string) string to check
// output
    // (boolean) truth value of statement
function isalpha(str) {
    return /^[0-9A-Za-z]+$/.test(str);
};

// returns true if the string is only composed of numerical digits
// input
    // str: (string) string to check
// output
    // (boolean) truth value of statement
function isnumeric(str) {
    return /^[0-9]+$/.test(str);
};

// returns true if the character is an accepted type of schedule
// input
    // char: (string) character to check
// output
    // (boolean) truth value of statement
function isschedule(char) {
    if (/^[EL]?$/.test(char)) return true;
    else return error_false("internal error: wrong input to isschedule function");
};

// returns true if the character is an accepted type of (or lack of) season
// input
    // char: (string) character to check
// output
    // (boolean) truth value of statement
function isseason(char) {
    if (/^[SW]?$/.test(char)) return true;
    else return error_false("internal error: wrong input to isseason function");
};

// returns true if the season and year pair is a valid possibility
// input
    // char: (string) character to check
// output
    // (boolean) truth value of statement
function isvalidpair(pair) {
    if (pair.length === 2 && isseason(pair[0]) && Number.isInteger(pair[1])) return true;
    else return error_false("internal error: wrong input to isvalidpair function");
};

// returns true if the first season and year pair comes before or at the same time as the second one
// Spring/Summer comes before Autumn/Winter of the same year while the season does not matter if either have no seasonal indication
// input
    // s1: [(string) season, (int) year] first pair
    // s2: [(string) season, (int) year] second pair
// output
    // (boolean) truth value of statement
function beforeorat(p1, p2) {

    // checking input
	if (!isvalidpair(p1) || !isvalidpair(p2)) return error_false("internal error: wrong input to beforeat function");

    // giving values proper names
    const season1 = p1[0];
    const year1 = p1[1];
    const season2 = p2[0];
    const year2 = p2[1];

    // comparing values
    if (year1 < year2) return true;
    else if (year1 > year2) return false;
    else { // as year1 === year2
        if (season1 === '' || season2 === '') return true;
        else if (season1 === 'S') return true; // as season2 must be either 'S' or 'W'
        else return season2 === 'W'; // as season1 === 'W'
    }

    return error_false("internal error: inconclusive result to beforeat function");
};

// returns true if the season and year pair given falls between the two subsequent pairs
// Spring/Summer comes before Autumn/Winter of the same year while the season does not matter if either have no seasonal indication
// input
    // s:  [(string) season, (int) year] pair to check
    // s1: [(string) season, (int) year] lower bound pair
    // s2: [(string) season, (int) year] upper bound pair
// output
    // (boolean) truth value of statement
function between(s, s1, s2) {
	return beforeorat(s1, s) && beforeorat(s, s2);
};


///// MONTHLY CODE RELATED FUNCTIONS

// returns true if the product code corresponds to a monthly product code (used until 2001)
// input
    // code_input: (string) product code to check
// output
    // (boolean) truth value of statement
function ismonthlycode(code_input) {

    // simplifying the product code to make it easier to work with
    let code = code_input.toUpperCase().replace(/[^0-9A-Z]/g,"");

    // checking the structure of the product code to see if it's a match
    const re_monthly = /^[0-9A-Z]?[A-Z]\d{5}[0-9A-Z]?$/;
    if (!re_monthly.test(code)) return false;

    if (isnumeric(code[1])) code = "_" + code;

    // giving values proper names
    const lineID = code[0];
    const garmentID = code[1];
    const month_raw = parseInt(code.slice(2,4));
    const exception = exception_firstdigit_list.includes(lineID);
    const size = (code.length === 8)? code[7] : '';

    return lineID in lineID_dict && garmentID in garmentID_dict && ((1 <= month_raw && month_raw <= 12) || exception) && size_list.includes(size);
};

// returns all valid collections corresponding to a monthly product code and (lack of) production year along with other useful information
// input
    // code_input: (string) product code to check
    // year_input (string/int) production year on care label
// output
    // [(string) code_output, (string) year_output, (string) garmentID, (string) size,
    // [list of [(string) name, [list of [(string) season, (int) year] pairs]]]]
function identify_cdg_monthly(code_input, year_input) {

    if (!ismonthlycode(code_input)) return [];

    // simplifying the product code and year to make them easier to work with
    let code = code_input.toUpperCase().replace(/[^0-9A-Z]/g,"");
    if (isnumeric(code[1])) code = "_" + code;
    let year;
    switch(year_input) {
        case "blank": year = 0; break;
        case "erased": year = -1; break;
        default: year = parseInt(year_input);
    }

    // giving values proper names
    const lineID = code[0];
    const garmentID = code[1];
    const month_raw = parseInt(code.slice(2,4));
    const exception = exception_firstdigit_list.includes(lineID);
    const size = (code.length === 8)? code[7] : '';

    // checking the validity of the year according to the product code
    if ((year < 1988 || 2001 < year) && year > 0) return error_empty("error: mismatch between product code and year");
    if (exception_lastdigit_list.includes(lineID) && (month_raw/10 >> 0) !== year%10 && year > 0) // stronger condition on some lines
    	return error_empty("error: mismatch between product code and year");

    // correcting the value of the month if it is an exception
    const month = (exception_firstdigit_list.includes(lineID))? (month_raw%10 + ((month_raw%10 <= 2)? 10 : 0)) : month_raw;

    // initializing the list of possible collections associated with the product code and year
    let collections = [];

    // list of season and year pairs from before the appearance of the production year on the care label
    let range_y = [];
    let range_s = [];
    let range_w = [];
    let range_sn = [];
    for (let y = 1969; y < ((year === -1)? 2002 : 1988); y++) {
        range_y.push(['', y]);
        range_s.push(['S', y]);
        range_w.push(['W', y]);
        range_sn.push(['S', y+1]);
    }

    for (let line of lineID_dict[lineID]) {

        // giving values proper names
        const name = line[0];
        const sched = line[1];
        const p_i = line[2][0];
        const p_f = line[2][1];

        // checking the validity of the line information
        if (typeof name !== 'string' || !isschedule(sched) || !isvalidpair(p_i) || !isvalidpair(p_f))
            return error_empty("internal error: wrong value(s) for line with line ID " + lineID);

        // jumping the loop if the line began after the change in product code structure
        if (!beforeorat(p_i, code_change)) continue;

        // initializing the list of possible season and year pairs
        let pairs = [];

        // going through each semester
        switch(month) {
            case 1:
            case 2:
            case 3:
                if (sched === 'E') pairs = pairs.concat((year <= 0)? range_w : [['W', year]]);
                else if (sched === 'L') pairs = pairs.concat((year <= 0)? range_s : [['S', year]]);
                else pairs = pairs.concat((year <= 0)? range_y : [['', year]]);
                break;
            case 4:
            case 5:
            case 6:
                if (sched === 'E' || sched === 'L') pairs = pairs.concat((year <= 0)? range_w : [['W', year]]);
                else pairs = pairs.concat((year <= 0)? range_y : [['', year]]);
                break;
            case 7:
            case 8:
            case 9:
                if (sched === 'E') pairs = pairs.concat((year <= 0)? range_sn : [['S', year+1]]);
                else if (sched === 'L') pairs = pairs.concat((year <= 0)? range_w : [['W', year]]);
                else pairs = pairs.concat((year <= 0)? range_y : [['', year], ['', year+1]]);
                break;
            case 10:
            case 11:
            case 12:
                if (sched === 'E' || sched === 'L') pairs = pairs.concat((year <= 0)? range_sn : [['S', year+1]]);
                else pairs = pairs.concat((year <= 0)? range_y : [['', year], ['', year+1]]);
                break;
            default:
                return error_empty("internal error: wrong value(s) of month");
        }

        // filtering the pairs to match the period of existence of the line
        pairs = pairs.filter(p => between(p, p_i, p_f));
        if (pairs.length !== 0) collections.push([name, pairs]);

    }

    if (code[0] === "_") code_output = code[1] + "-" + code.slice(2);
    else code_output = code.slice(0,2) + "-" + code.slice(2);

	return [code_output, year_input, garmentID, size, collections];
};


///// SEASONAL CODE RELATED FUNCTIONS

// returns true if the product code corresponds to a seasonal product code (used since 2001)
// input
    // code_input: (string) product code to check
// output
    // (boolean) truth value of statement
function isseasonalcode(code_input) {

    // simplifying the product code to make it easier to work with
    const code = code_input.toUpperCase().replace(/[^0-9A-Z]/g,"");

    // checking the structure of the product code to see if it's a match
    const re_seasonal = /^[0-9A-Z][A-UZ][A-Z]\d{3}[0-9A-Z]*$/;
    if (!re_seasonal.test(code)) return false;

    // giving values proper names
    const lineID = code[0];
    const seasonID = code[1];
    const garmentID = code[2];

    // checking if the line ID is R whenever the season ID is 'U'
    if (seasonID === 'U' && lineID !== 'R') return error_false("error: season ID 'U' only used with line ID 'R'");

    return lineID in lineID_dict && seasonID in seasonID_dict && garmentID in garmentID_dict;
};

// returns all valid collections corresponding to a seasonal product code and (lack of) production year along with other useful information
// input
    // code_input: (string) product code to check
    // year_input (string/int) production year on care label
// output
    // [(string) code_output, (string) year_output, (string) garmentID, (string) size,
    // [list of [(string) name, [list of [(string) season, (int) year] pairs]]]]
function identify_cdg_seasonal(code_input, year_input) {
	
    if (!isseasonalcode(code_input)) return [];

    // simplifying the product code and year to make them easier to work with
    const code = code_input.toUpperCase().replace(/[^0-9A-Z]/g,"");
    let year;
    switch(year_input) {
        case "blank": year = 0; break;
        case "erased": year = -1; break;
        default: year = parseInt(year_input);
    }

    // giving values proper names
    const lineID = code[0];
    const seasonID = code[1];
    const garmentID = code[2];

    // checking the validity of the year according to the product code
    if (year < 2001 && year > 0) return error_empty("error: mismatch between product code and year");

    // initializing the list of possible collections associated with the product code and year
    let collections = [];
    
    for (let line of lineID_dict[lineID]) {
        
        // giving values proper names
        const name = line[0];
        const sched = line[1];
        const p_i = line[2][0];
        const p_f = line[2][1];

        // checking the validity of the line information
        if (typeof name !== 'string' || !isschedule(sched) || !isvalidpair(p_i) || !isvalidpair(p_f))
            return error_empty("internal error: wrong value(s) for line with line ID " + lineID);

        // jumping the loop if the line began after the change in product code structure
        if (!beforeorat(code_change, p_f)) continue;

        // jumping the loop if the line is "COMME des GARÇONS SHIRT" and the garment type ID is 'Z'
        // because 'Z' is only for "COMME des GARÇONS SHIRT FOREVER"
        if (lineID === 'F' && seasonID === 'Z' && name !== name_dict['shirtFO']) continue;

        // evaluating the effective season ID which takes into account certain exceptions
        let seasonID_eff = seasonID;
        if (seasonID === 'P' && name === name_dict['hp']) seasonID_eff = 'PP';
        if (seasonID === 'C' && name === name_dict['ppoh']) seasonID_eff = 'LC';

        // initializing the list of possible season and year pairs
        let pairs = seasonID_dict[seasonID_eff];

        // setting bounds on the possible collections produced on the year
        let bound = (year <= 0)? [code_change, ['', year_curr]] : [['S', year], ['S', year+1]];

        // setting new bounds for exceptions that have older collections produced for multiple consecutive years
        if (lineID === '2' && name === name_dict['pocket']) {
            switch(seasonID) {
                case 'G': bound = [['', 2011], ['', 2015]]; break;
                case 'J': bound = [['', 2012], ['', 2015]]; break;
                case 'Z': bound = [['', 2016], ['', 2017]]; break;
            }
        }
        if (lineID === 'Z' && name === name_dict['cdgch']) {
            switch(seasonID) {
                case 'I': bound = [['', 2012], ['', 2017]]; break;
                case 'B': bound = [['', 2018], ['', 2019]]; break;
            }
        }

        // checking that the year of production falls between the bounds
        // trivial for non-exceptions
        if (year > 0 && !between(['', year], bound[0], bound[1])) continue;

        // filtering the pairs to match the period of existence of the line and the bounds on the possible season
        pairs = pairs.filter(p => between(p, p_i, p_f) && between(p, bound[0], bound[1]));

        // filtering the pairs of exceptions
        if (name === name_dict['hpd']) pairs = pairs.filter(p => !between(p, ['S', 2003], ['S', 2005]) || !between(p, ['', 2003], ['', 2004]));
        if (name === name_dict['speed']) pairs = pairs.filter(p => p[0] !== 'W');
        if (name === name_dict['playxmas']) pairs = pairs.filter(p => p[0] !== 'S');

        if (pairs.length !== 0) collections.push([name, pairs]);
    }

    // preparing output values
    let code_output = code.slice(0,2) + "-" + code.slice(2,6);
    for (let i = 6; i < code.length; i = i+3) code_output += "-" + code.slice(i, i+3);

    return [code_output, year_input, garmentID, '', collections];
};


///// COMME DES GARÇONS SHIRT RELATED FUNCTIONS

// returns true if the product code corresponds to a COMME des GARÇONS SHIRT AW94 product code
// input
    // code_input: (string) product code to check
// output
    // (boolean) truth value of statement
function isshirtcode_AW94(code_input) {
	
    // simplifying the product code to make it easier to work with
    const code = code_input.toUpperCase().replace(/[^0-9A-Z]/g,"");

    // checking the structure of the product code to see if it's a match
    const re_shirt_AW94 = /^[F][W][0][1]\d{3}[0-9A-Z]?$/;
    if (!re_shirt_AW94.test(code)) return false;

    // giving the value a proper name
    const size = (code.length === 8)? code[7] : '';

    return size_list.includes(size);
};

// returns true if the product code corresponds to a COMME des GARÇONS SHIRT SS01 product code
// input
    // code_input: (string) product code to check
// output
    // (boolean) truth value of statement
function isshirtcode_SS01(code_input) {

    // simplifying the product code to make it easier to work with
    const code = code_input.toUpperCase().replace(/[^0-9A-Z]/g,"");

    // checking the structure of the product code to see if it's a match
    const re_shirt_SS01 = /^[S][0][8]\d{3}$/;
    return re_shirt_SS01.test(code);
};

// returns true if the product code corresponds to a COMME des GARÇONS SHIRT AW01 product code
// input
    // code_input: (string) product code to check
// output
    // (boolean) truth value of statement
function isshirtcode_AW01(code_input) {
    
    // simplifying the product code to make it easier to work with
    const code = code_input.toUpperCase().replace(/[^0-9A-Z]/g,"");

    // checking the structure of the product code to see if it's a match
    const re_shirt_AW01 = /^[F][W][0][9]\d{3}$/;
    return re_shirt_AW01.test(code);
};

// returns true if the product code corresponds to a COMME des GARÇONS SHIRT FOREVER AW20 product code
// input
    // code_input: (string) product code to check
// output
    // (boolean) truth value of statement
function isshirtcode_FO_AW20(code_input) {

    // simplifying the product code to make it easier to work with
    const code = code_input.toUpperCase().replace(/[^0-9A-Z]/g,"");

    // checking the structure of the product code to see if it's a match
    const re_shirt_FO_AW20 = /^[F][O]\d{2}[A-Z]\d{3}[0-9A-Z]*$/;
    if (!re_shirt_FO_AW20.test(code)) return false;

    // giving the value a proper names
    const garmentID = code[4];

    return garmentID in garmentID_dict;
};

// returns true if the product code corresponds to a COMME des GARÇONS SHIRT FOREVER product code
// input
    // code_input: (string) product code to check
// output
    // (boolean) truth value of statement
function isshirtcode_FO(code_input) {

    // simplifying the product code to make it easier to work with
    const code = code_input.toUpperCase().replace(/[^0-9A-Z]/g,"");

    if (isshirtcode_FO_AW20(code)) return true;
    if (isseasonalcode(code) && code.slice(0,2) === "FZ") return true;

    // checking the structure of the product code to see if it's a match
    const re_shirt_FO = /^[C][D][G][A-Z]\d[A-Z]{2}[0-9A-Z]*$/;
    return re_shirt_FO.test(code);
};

// returns true if the product code corresponds to a COMME des GARÇONS SHIRT product code
// input
    // code_input: (string) product code to check
// output
    // (boolean) truth value of statement
function isshirtcode(code_input) {

    // simplifying the product code to make it easier to work with
    const code = code_input.toUpperCase().replace(/[^0-9A-Z]/g,"");

    // checking other known cases
	if (code[0] === 'F' && isseasonalcode(code)) return true;
    if (isshirtcode_AW94(code) || isshirtcode_SS01(code) || isshirtcode_AW01(code) || isshirtcode_FO(code)) return true;

    // checking the structure of the product code to see if it's a match
    const re_shirt = /^[SW]\d{5}$/;
    if (!re_shirt.test(code)) return false;

    // giving values proper names
    const yearID = parseInt(code.slice(1,3));

    return 10 <= yearID && yearID <= 28;
};

// returns all valid collections corresponding to a COMME des GARÇONS SHIRT product code and (lack of) production year along with other useful information
// input
    // code_input: (string) product code to check
    // year_input (string/int) production year on care label
// output
    // [(string) code_output, (string) year_output, (string) garmentID, (string) size,
    // [list of [(string) name, [list of [(string) season, (int) year] pairs]]]]
function identify_cdg_shirt(code_input, year_input) {

	if (!isshirtcode(code_input)) return [];

    // simplifying the product code and year to make them easier to work with
    const code = code_input.toUpperCase().replace(/[^0-9A-Z]/g,"");
    let year;
    switch(year_input) {
        case "blank": year = 0; break;
        case "erased": year = -1; break;
        default: year = parseInt(year_input);
    }

    // preparing output values
    let code_output = code;
    let garmentID = 'Z';

    // initializing the list of possible collections associated with the product code and year
    let collections = [];

    // going through the possible code patterns
	if (isseasonalcode(code)) {
        const result = identify_cdg_seasonal(code, year);
        code_output = result[0];
        garmentID = result[2];
        collections.concat(result[4]);
    }
	else if (isshirtcode_AW94(code)) {
        if (year !== 1994 & year !== -1) return error_empty("error: mismatch between product code and year");
        code_output = code.slice(0,2) + "-" + code.slice(2);
        collections = [[name_dict['shirt'], [['W', 1994]]]];
	}
    else if (year > 0) return error_empty("error: mismatch between product code and year");
    else if (isshirtcode_SS01(code)) collections = [[name_dict['shirt'], [['S', 2001]]]];
    else if (isshirtcode_AW01(code)) collections = [[name_dict['shirt'], [['W', 2001]]]];
    else if (isshirtcode_FO_AW20(code)) collections = [[name_dict['shirtFO'], [['W', 2020]]]];
    else if (isshirtcode_FO(code)) {
        let pairs = [];
        for (let y = 2010; y <= 2020; y++) pairs.push(['', y]);
        collections = [[name_dict['shirtFO'], pairs]];
    }
    else {

        // giving values proper names
        const yearID = parseInt(code.slice(1,3));
        const season = [code[0], 1992+yearID];

        collections.push([name_dict['shirt'], [season]]);

        // going through other possible lines with the same code
        if (between(season, ['S', 2010], ['W', 2014])) collections.push([name_dict['shirtgirl'], [season]]);
        if (between(season, ['W', 2015], ['S', 2016])) collections.push([name_dict['shirtboy'], [season]]);
        if (between(season, ['W', 2016], ['S', 2019])) collections.push([name_dict['shirtboys'], [season]]);
    }

    return [code_output, year_input, garmentID, '', collections];
};

///// COMME DES GARÇONS COMME DES GARÇONS RELATED FUNCTIONS

// returns true if the product code corresponds to a COMME des GARÇONS COMME des GARÇONS product code
// input
    // code_input: (string) product code to check
// output
    // (boolean) truth value of statement
function iscdgcdgcode(code_input) {

    // simplifying the product code to make it easier to work with
    const code = code_input.toUpperCase().replace(/[^0-9A-Z]/g,"");

    // checking other known case
	if (isseasonalcode(code) && code[0] == 'R') return true;

    // checking the structure of the product code to see if it's a match
    const re_cdgcdg = /^[SW]\d\d?[A-Z]\d{3}$/;
    if (!re_cdgcdg.test(code)) return false;

    // giving the value a proper names
    const yearID = (code.length === 6)? parseInt(code[1]) : parseInt(code.slice(1,3));
    const garmentID = (code.length === 6)? code[2] : code[3];

    return 5 <= yearID && yearID <= 19 && garmentID in garmentID_dict;
};

// returns all valid collections corresponding to a COMME des GARÇONS COMME des GARÇONS product code and (lack of) production year along with other useful information
// input
    // code_input: (string) product code to check
    // year_input (string/int) production year on care label
// output
    // [(string) code_output, (string) year_output, (string) garmentID, (string) size,
    // [list of [(string) name, [list of [(string) season, (int) year] pairs]]]]
function identify_cdg_cdgcdg(code_input, year_input) {

    if (!iscdgcdgcode(code_input)) return [];

    // simplifying the product code and year to make them easier to work with
    const code = code_input.toUpperCase().replace(/[^0-9A-Z]/g,"");
    let year;
    switch(year_input) {
        case "blank": year = 0; break;
        case "erased": year = -1; break;
        default: year = parseInt(year_input);
    }
    let garmentID = 'Z';

    // preparing output values
    let code_output = code;

    // initializing the list of possible collections associated with the product code and year
    let collections = [];

    // going through the possible code patterns
    if (isseasonalcode(code)) {
        const result = identify_cdg_seasonal(code, year);
        code_output = result[0];
        garmentID = result[2];
        collections.concat(result[4]);
    }
    else if (year > 0) return error_empty("error: mismatch between product code and year");
    else {

        // giving values proper names
        const yearID = (code.length === 6)? parseInt(code[1]) : parseInt(code.slice(1,3));
        const garmentID = (code.length === 6)? code[2] : code[3];
        const season = [code[0], 1998+yearID];

        collections.push([name_dict['cdgcdg'], [season]]);
    }

    return [code_output, year_input, garmentID, '', collections];
};


///// DRIVER FUNCTION

// returns all valid collections corresponding to a COMME des GARÇONS product code and (lack of) production year along with other useful information
// will return the string "empty" if the code is empty or the string "wrong" if the secondary code located on the care label has been entered
// input
    // code_input: (string) product code to check
    // year_input (string/int) production year on care label
// output
    // [(string) code_output, (string) year_output, (string) garmentID, (string) size,
    // [list of [(string) name, [list of [(string) season, (int) year] pairs]]]]
    // the first element of the last array is the string "fake" if the product code and year has been observed on reproductions before
    // the only element of the array is the string "empty" if the code entered empty
    // the only element of the array is the string "wrong" if the code entered is not the product code, but the other one located on the care label
function identify_cdg(code_input, year_input) {

    // checking the validity of the inputs
	if (typeof code_input !== 'string') return error_empty("error: wrong input type");
    if (!(year_input === "blank" || year_input === "erased" || isnumeric(year_input))) return error_empty("error: wrong input type");

    // simplifying the product code and year to make them easier to work with
    const code = (code_input.replace(/[^A-Za-z0-9]/g,"")).toUpperCase();
    if (code === "") return ["empty"];
    else if (code === wrongcode) return ["wrong"];
    let year;
    switch(year_input) {
        case "blank": year = 0; break;
        case "erased": year = -1; break;
        default: year = parseInt(year_input);
    }

    // checking the validity of the year
    if ((year < 1969 || year_curr < year) && year > 0) error_empty("error: year out of range");

    // initializing values
    let code_output = "";
    let garmentID = '';
    let size = '';
    let collections = [];

    // setting the first elements of the last array to be the string "fake" if there is a risk
    for (let rep of rep_list) if (code === rep[0] && (year === rep[1] || year === -1))
       collections.push("fake");

   let result = [];

    // identifying the possible collections by going through the different product code patterns
	if (ismonthlycode(code)) result = identify_cdg_monthly(code, year);

    // setting output values
    if (result.length !== 0) {
        code_output = result[0];
        garmentID = result[2];
        size = result[3];
        collections = collections.concat(result[4]);
    }

    result = [];

    // There can be overlaps between product codes from different periods

    if (isseasonalcode(code)) result = identify_cdg_seasonal(code, year);
    else if (isshirtcode(code)) result = identify_cdg_shirt(code, year);
    else if (iscdgcdgcode(code)) result = identify_cdg_cdgcdg(code, year);

    // setting output values
    if (result.length !== 0) {
        code_output = result[0];
        garmentID = result[2];
        size = result[3];
        collections = collections.concat(result[4]);
    }

    // exceptions
    if (code in exception_code_dict) {
        result = exception_code_dict[code];
        if (year > 0 && result[1] !== year) return error_empty("error: mismatch between product code and year");
        code_output = result[0];
        garmentID = result[2];
        size = result[3];
        collections = collections.concat(result[4]);
    }


    if (collections.length === 0) return error_empty("error: no match");

	return [code_output, year_input, garmentID, size, collections];
};


///// SIMPLE TO STRING FUNCTION

// returns as a string all valid collections as returned by the driver function
// input
    // identification: [(string) code_output, (string) year_output, (string) garmentID, (string) size,
    // [list of [(string) name, [list of [(string) season, (int) year] pairs]]]]
    // the first element of the last array is the string "fake" if the product code and year has been observed on reproductions before
// output
    // (string) result
function identifyToString(identification) {

    // if there is no match
	if (identification.length === 0) {
        return "This item is unknown to us. Please contact us after making sure that you have entered the right product code and year.";
    }

    if (identification[0] === "empty") return "Please enter a valid product code and year above to begin.";
    else if (identification[0] === "wrong") return "The code entered is not the product code. Please enter the right one.";

    // giving values proper names
	const code = identification[0];
	const year = identification[1];
	const garmentID = identification[2];
	const size = identification[3];
	const collections = identification[4];
    let result = "";

    // if the item has a risk of being fake
    if (collections[0] === "fake") {
        collections.shift();
        result += "The item might be a counterfeit! ";
    }

    // turning the identification information into a string
	result += "With " + code;
    switch(year) {
        case "blank": result += " and no year on the care label"; break;
        case "erased": result += " and the year on the care label erased"; break;
        default: result += " and AD" + year;
    }
	result += ", the item should be";
    if (garmentID in garmentID_dict) result += " " + garmentID_dict[garmentID];
    if (size !== '' && size !== '0') result += " in size " + size;
    result += " from";
    if (collections.length > 1 || collections[0][1].length > 1) result += " either";
    for (let col of collections) {
    	result += "\n\n" + col[0];
    	for (let idx_s = 0; idx_s < col[1].length; idx_s++) {
    		let s = col[1][idx_s];
    		if (s[0] === 'S') {
    			result += "\n- Spring/Summer " + s[1].toString();
    			if (s[1] === 2006 && code[1] === 'P' && col[0] == name_dict['hp'])
                    result += " (if in collaboration with the Rolling Stones)";
    		}
    		else if (s[0] == 'W')
    			result += "\n- Autumn/Winter " + s[1].toString() + "-" + (s[1]+1).toString();
    		else result += "\n- " + s[1].toString();
    	}
    }
    return result + "\n\nMake sure to subscribe to our Patreon or make a donation on PayPal following the links below.\n:-)";
};
