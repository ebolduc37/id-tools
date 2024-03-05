/**
 * Identification string.
 *
 * Return the string representation of a garment identification.
 *
 * @author Etienne Bolduc
 */

import { InputCDG } from "./index.js";

const YEAR_BLANK = InputCDG.NO_YEAR_PRINT_TYPES.BLANK;
const YEAR_UNREADABLE = InputCDG.NO_YEAR_PRINT_TYPES.UNREADABLE;
const YEAR_UNKNOWN = InputCDG.NO_YEAR_PRINT_TYPES.UNKNOWN;

const inputCDG = [
    new InputCDG({ productCode: "S18B001", yearPrint: YEAR_BLANK }),
    new InputCDG({ productCode: "CDGS2ST", yearPrint: YEAR_BLANK }),
    new InputCDG({ productCode: "FO01B601", yearPrint: YEAR_BLANK }),
    new InputCDG({ productCode: "S11001", yearPrint: YEAR_BLANK }),
    new InputCDG({ productCode: "W23001", yearPrint: YEAR_BLANK }),
    new InputCDG({ productCode: "FW-01001", yearPrint: "1994" }),
    new InputCDG({ productCode: "HB-08000M", yearPrint: YEAR_UNKNOWN }),
    new InputCDG({ productCode: "PB-11001M", yearPrint: "1994" }),
    new InputCDG({ productCode: "PP-C002", yearPrint: YEAR_BLANK }),
    new InputCDG({ productCode: "EP-C002", yearPrint: YEAR_BLANK }),
    new InputCDG({ productCode: "AB-35003", yearPrint: YEAR_UNKNOWN }),
    new InputCDG({ productCode: "KK-27003", yearPrint: YEAR_UNKNOWN }),
    new InputCDG({ productCode: "KK-K004", yearPrint: YEAR_BLANK }),
    new InputCDG({ productCode: "7D-K004", yearPrint: YEAR_BLANK }),
    new InputCDG({ productCode: "OC-K004", yearPrint: YEAR_BLANK }),
    new InputCDG({ productCode: "AZT026", yearPrint: "2005" }),
    new InputCDG({ productCode: "AZT026", yearPrint: "2006" }),
    new InputCDG({ productCode: "DTK9210", yearPrint: "2006" }),
    new InputCDG({ productCode: "EP-C002", yearPrint: "1986" }),
    new InputCDG({ productCode: "FW09123", yearPrint: YEAR_BLANK }),
    new InputCDG({ productCode: "FW09123", yearPrint: "2001" }),
    new InputCDG({ productCode: "HB-08123M", yearPrint: YEAR_BLANK }),
    new InputCDG({ productCode: "HB-08123M", yearPrint: YEAR_UNKNOWN }),
    new InputCDG({ productCode: "PB-02123M", yearPrint: YEAR_UNREADABLE }),
    new InputCDG({ productCode: "HB-02123M", yearPrint: YEAR_UNREADABLE }),
    new InputCDG({ productCode: "PB-05123M", yearPrint: YEAR_UNREADABLE }),
    new InputCDG({ productCode: "HB-05123M", yearPrint: YEAR_UNREADABLE }),
    new InputCDG({ productCode: "PB-08123M", yearPrint: YEAR_UNREADABLE }),
    new InputCDG({ productCode: "HB-08123M", yearPrint: YEAR_UNREADABLE }),
    new InputCDG({ productCode: "PB-11123M", yearPrint: YEAR_UNREADABLE }),
    new InputCDG({ productCode: "HB-11123M", yearPrint: YEAR_UNREADABLE }),
    new InputCDG({ productCode: "OP-K402", yearPrint: YEAR_BLANK }),
    new InputCDG({ productCode: "GU-05004S", yearPrint: "1989" }),
    new InputCDG({ productCode: "1P-P002", yearPrint: "2005" }),
    new InputCDG({ productCode: "", yearPrint: "" }),
    new InputCDG({ productCode: "DTK9210", yearPrint: "2006" }),
]

import { InputYY } from "./index.js";

const CODE_BLANK = InputYY.NO_PRODUCT_CODE_TYPES.BLANK;
const CODE_UNREADABLE = InputYY.NO_PRODUCT_CODE_TYPES.UNREADABLE;
const CODE_UNKNOWN = InputYY.NO_PRODUCT_CODE_TYPES.UNKNOWN;

const LOGO_YY_I = InputYY.LOGO_STYLES.YY_I;
const LOGO_YY_II = InputYY.LOGO_STYLES.YY_II;
const LOGO_YY_III = InputYY.LOGO_STYLES.YY_III;
const LOGO_ELSE = InputYY.LOGO_STYLES.ELSE;

const SIZING_ALPHABETICAL = InputYY.SIZING_SYSTEMS.ALPHABETICAL;
const SIZING_NUMERICAL = InputYY.SIZING_SYSTEMS.NUMERICAL;
const SIZING_UNKNOWN = InputYY.SIZING_SYSTEMS.UNKNOWN;

const FONT_SERIF = InputYY.FONT_TYPES.SERIF;
const FONT_SANS_SERIF = InputYY.FONT_TYPES.SANS_SERIF;
const FONT_UNKNOWN = InputYY.FONT_TYPES.UNKNOWN;

const LAUNDRY_ABOVE = InputYY.LAUNDRY_SYMBOLS_LOCATIONS.ABOVE;
const LAUNDRY_BELOW = InputYY.LAUNDRY_SYMBOLS_LOCATIONS.BELOW;
const LAUNDRY_UNKNOWN = InputYY.LAUNDRY_SYMBOLS_LOCATIONS.UNKNOWN;

const inputYY = [
    new InputYY({ productCode: "HZ-B10-104", logoStyle: LOGO_YY_III,
                    sizingSystem: SIZING_ALPHABETICAL, fontType: FONT_SERIF,
                    laundrySymbolsLocation: LAUNDRY_BELOW }),
    new InputYY({ productCode: CODE_BLANK, logoStyle: LOGO_YY_III,
                    sizingSystem: SIZING_ALPHABETICAL, fontType: FONT_SERIF,
                    laundrySymbolsLocation: LAUNDRY_BELOW }),
    new InputYY({ productCode: CODE_BLANK, logoStyle: LOGO_YY_III,
                    sizingSystem: SIZING_ALPHABETICAL, fontType: FONT_SANS_SERIF,
                    laundrySymbolsLocation: LAUNDRY_BELOW }),
    new InputYY({ productCode: "FY-C10-104", logoStyle: LOGO_YY_III,
                    sizingSystem: SIZING_ALPHABETICAL, fontType: FONT_SERIF,
                    laundrySymbolsLocation: LAUNDRY_BELOW }),
    new InputYY({ productCode: "FY-C10-104", logoStyle: LOGO_YY_III,
                    sizingSystem: SIZING_NUMERICAL, fontType: FONT_SERIF,
                    laundrySymbolsLocation: LAUNDRY_BELOW }),
    new InputYY({ productCode: "FY-C10-104", logoStyle: LOGO_YY_III,
                    sizingSystem: SIZING_UNKNOWN, fontType: FONT_SERIF,
                    laundrySymbolsLocation: LAUNDRY_BELOW }),
    new InputYY({ productCode: "HO-K27-037", logoStyle: LOGO_YY_III,
                    sizingSystem: SIZING_ALPHABETICAL, fontType: FONT_SERIF,
                    laundrySymbolsLocation: LAUNDRY_BELOW }),
    new InputYY({ productCode: "HG-C21-035", logoStyle: LOGO_YY_III,
                    sizingSystem: SIZING_ALPHABETICAL, fontType: FONT_SERIF,
                    laundrySymbolsLocation: LAUNDRY_BELOW }),
    new InputYY({ productCode: "HN-Y01-003", logoStyle: LOGO_YY_III,
                    sizingSystem: SIZING_NUMERICAL, fontType: FONT_SANS_SERIF,
                    laundrySymbolsLocation: LAUNDRY_ABOVE }),
    new InputYY({ productCode: "FD-J17-135", logoStyle: LOGO_YY_III,
                    sizingSystem: SIZING_NUMERICAL, fontType: FONT_SANS_SERIF,
                    laundrySymbolsLocation: LAUNDRY_BELOW }),
    new InputYY({ productCode: "FD-J17-135", logoStyle: LOGO_YY_III,
                    sizingSystem: SIZING_NUMERICAL, fontType: FONT_SANS_SERIF,
                    laundrySymbolsLocation: LAUNDRY_ABOVE }),
    new InputYY({ productCode: CODE_UNKNOWN, logoStyle: LOGO_YY_III,
                    sizingSystem: SIZING_NUMERICAL, fontType: FONT_SANS_SERIF,
                    laundrySymbolsLocation: LAUNDRY_ABOVE }),
    new InputYY({ productCode: CODE_UNKNOWN, logoStyle: LOGO_YY_III,
                    sizingSystem: SIZING_NUMERICAL, fontType: FONT_SANS_SERIF,
                    laundrySymbolsLocation: LAUNDRY_UNKNOWN }),
    new InputYY({ productCode: CODE_UNKNOWN, logoStyle: LOGO_YY_III,
                    sizingSystem: SIZING_NUMERICAL, fontType: FONT_UNKNOWN,
                    laundrySymbolsLocation: LAUNDRY_UNKNOWN }),
    new InputYY({ productCode: CODE_UNKNOWN, logoStyle: LOGO_YY_III,
                    sizingSystem: SIZING_ALPHABETICAL, fontType: FONT_UNKNOWN,
                    laundrySymbolsLocation: LAUNDRY_UNKNOWN }),
    new InputYY({ productCode: CODE_UNREADABLE, logoStyle: LOGO_YY_III,
                    sizingSystem: SIZING_ALPHABETICAL, fontType: FONT_UNKNOWN,
                    laundrySymbolsLocation: LAUNDRY_UNKNOWN }),
    new InputYY({ productCode: "HV-C00-000", logoStyle: LOGO_YY_III,
                    sizingSystem: SIZING_NUMERICAL, fontType: FONT_UNKNOWN,
                    laundrySymbolsLocation: LAUNDRY_UNKNOWN }),
    new InputYY({ productCode: "HW-Y11-701", logoStyle: LOGO_YY_III,
                    sizingSystem: SIZING_NUMERICAL, fontType: FONT_SANS_SERIF,
                    laundrySymbolsLocation: LAUNDRY_ABOVE }),
    new InputYY({ productCode: "HJ-C37-146-1-01", logoStyle: LOGO_YY_III,
                    sizingSystem: SIZING_NUMERICAL, fontType: FONT_SANS_SERIF,
                    laundrySymbolsLocation: LAUNDRY_ABOVE }),
    new InputYY({ productCode: CODE_UNKNOWN, logoStyle: LOGO_YY_II,
                    sizingSystem: SIZING_NUMERICAL, fontType: FONT_SANS_SERIF,
                    laundrySymbolsLocation: LAUNDRY_ABOVE }),
    new InputYY({ productCode: CODE_UNKNOWN, logoStyle: LOGO_YY_II,
                    sizingSystem: SIZING_NUMERICAL, fontType: FONT_SERIF,
                    laundrySymbolsLocation: LAUNDRY_ABOVE }),
    new InputYY({ productCode: CODE_UNKNOWN, logoStyle: LOGO_YY_II,
                    sizingSystem: SIZING_NUMERICAL, fontType: FONT_SERIF,
                    laundrySymbolsLocation: LAUNDRY_BELOW }),
    new InputYY({ productCode: CODE_UNKNOWN, logoStyle: LOGO_YY_III,
                    sizingSystem: SIZING_ALPHABETICAL, fontType: FONT_SANS_SERIF,
                    laundrySymbolsLocation: LAUNDRY_ABOVE }),
    new InputYY({ productCode: CODE_UNKNOWN, logoStyle: LOGO_YY_III,
                    sizingSystem: SIZING_ALPHABETICAL, fontType: FONT_SERIF,
                    laundrySymbolsLocation: LAUNDRY_ABOVE }),
    new InputYY({ productCode: CODE_UNKNOWN, logoStyle: LOGO_YY_III,
                    sizingSystem: SIZING_ALPHABETICAL, fontType: FONT_SERIF,
                    laundrySymbolsLocation: LAUNDRY_BELOW }),
    new InputYY({ productCode: CODE_UNKNOWN, logoStyle: LOGO_YY_III,
                    sizingSystem: SIZING_NUMERICAL, fontType: FONT_SERIF,
                    laundrySymbolsLocation: LAUNDRY_ABOVE }),
    new InputYY({ productCode: "HB-T00-000", logoStyle: LOGO_ELSE,
                    sizingSystem: SIZING_UNKNOWN, fontType: FONT_UNKNOWN,
                    laundrySymbolsLocation: LAUNDRY_UNKNOWN }),
    new InputYY({ productCode: "SJ-T00-000", logoStyle: LOGO_YY_III,
                    sizingSystem: SIZING_ALPHABETICAL, fontType: FONT_UNKNOWN,
                    laundrySymbolsLocation: LAUNDRY_UNKNOWN }),
    new InputYY({ productCode: CODE_BLANK, logoStyle: LOGO_YY_III,
                    sizingSystem: SIZING_ALPHABETICAL, fontType: FONT_SERIF,
                    laundrySymbolsLocation: LAUNDRY_BELOW }),
    new InputYY({ productCode: CODE_BLANK, logoStyle: LOGO_YY_III,
                    sizingSystem: SIZING_NUMERICAL, fontType: FONT_SANS_SERIF,
                    laundrySymbolsLocation: LAUNDRY_ABOVE }),
    new InputYY({ productCode: "HB-T00-000", logoStyle: LOGO_YY_I,
                    sizingSystem: SIZING_ALPHABETICAL, fontType: FONT_SERIF,
                    laundrySymbolsLocation: LAUNDRY_ABOVE }),
    new InputYY({ productCode: "HW-Y11-701", logoStyle: LOGO_YY_III,
                    sizingSystem: SIZING_NUMERICAL, fontType: FONT_SANS_SERIF,
                    laundrySymbolsLocation: LAUNDRY_ABOVE }),
    new InputYY({ productCode: "HB-T00-000", logoStyle: LOGO_YY_II,
                    sizingSystem: SIZING_ALPHABETICAL, fontType: FONT_SERIF,
                    laundrySymbolsLocation: LAUNDRY_ABOVE }),
    new InputYY({ productCode: "HV-B00-000", logoStyle: LOGO_YY_II,
                    sizingSystem: SIZING_ALPHABETICAL, fontType: FONT_SERIF,
                    laundrySymbolsLocation: LAUNDRY_BELOW }),
    new InputYY({ productCode: "HV-B00-000", logoStyle: "wrong",
                    sizingSystem: SIZING_ALPHABETICAL, fontType: FONT_SERIF,
                    laundrySymbolsLocation: LAUNDRY_BELOW }),
    new InputYY({ productCode: "HE-B00-000", logoStyle: LOGO_YY_III,
                    sizingSystem: SIZING_ALPHABETICAL, fontType: FONT_SERIF,
                    laundrySymbolsLocation: LAUNDRY_BELOW }),
    new InputYY({ productCode: CODE_UNKNOWN, logoStyle: LOGO_YY_III,
                    sizingSystem: SIZING_ALPHABETICAL, fontType: FONT_SERIF,
                    laundrySymbolsLocation: LAUNDRY_ABOVE }),
    new InputYY({ productCode: CODE_UNKNOWN, logoStyle: LOGO_YY_III,
                    sizingSystem: SIZING_ALPHABETICAL, fontType: FONT_SERIF,
                    laundrySymbolsLocation: LAUNDRY_BELOW }),
];

let input = inputYY;

let count = 1;
for (let test of input) {
    console.log(`----------------\nTEST #${count}\n----------------\n`
    + test.identification())
    ++count;
}
