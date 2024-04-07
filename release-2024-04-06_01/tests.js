/**
 * Identification string.
 *
 * Return the string representation of a garment identification.
 *
 * @author Etienne Bolduc
 */

import { identify, extract, CDG, YY } from "./index.js";

const CDG_YEAR_BLANK = CDG.NoYearPrint.BLANK;
const CDG_YEAR_UNCLEAR = CDG.NoYearPrint.UNCLEAR;
const CDG_YEAR_UNKNOWN = CDG.NoYearPrint.UNKNOWN;

const inputCDG = [
    { label: CDG.Label, productCode: "S18B001", yearPrint: CDG_YEAR_BLANK },
    { label: CDG.Label, productCode: "CDGS2ST", yearPrint: CDG_YEAR_BLANK },
    { label: CDG.Label, productCode: "FO01B601", yearPrint: CDG_YEAR_BLANK },
    { label: CDG.Label, productCode: "S11001", yearPrint: CDG_YEAR_BLANK },
    { label: CDG.Label, productCode: "W23001", yearPrint: CDG_YEAR_BLANK },
    { label: CDG.Label, productCode: "FW-01001", yearPrint: "1994" },
    { label: CDG.Label, productCode: "HB-08000M", yearPrint: CDG_YEAR_UNKNOWN },
    { label: CDG.Label, productCode: "PB-11001M", yearPrint: "1994" },
    { label: CDG.Label, productCode: "PP-C002", yearPrint: CDG_YEAR_BLANK },
    { label: CDG.Label, productCode: "EP-C002", yearPrint: CDG_YEAR_BLANK },
    { label: CDG.Label, productCode: "AB-35003", yearPrint: CDG_YEAR_UNKNOWN },
    { label: CDG.Label, productCode: "KK-27003", yearPrint: CDG_YEAR_UNKNOWN },
    { label: CDG.Label, productCode: "KK-K004", yearPrint: CDG_YEAR_BLANK },
    { label: CDG.Label, productCode: "7D-K004", yearPrint: CDG_YEAR_BLANK },
    { label: CDG.Label, productCode: "OC-K004", yearPrint: CDG_YEAR_BLANK },
    { label: CDG.Label, productCode: "AZT026", yearPrint: "2005" },
    { label: CDG.Label, productCode: "AZT026", yearPrint: "2006" },
    { label: CDG.Label, productCode: "DTK9210", yearPrint: "2006" },
    { label: CDG.Label, productCode: "EP-C002", yearPrint: "1986" },
    { label: CDG.Label, productCode: "FW09123", yearPrint: CDG_YEAR_BLANK },
    { label: CDG.Label, productCode: "FW09123", yearPrint: "2001" },
    { label: CDG.Label, productCode: "HB-08123M", yearPrint: CDG_YEAR_BLANK },
    { label: CDG.Label, productCode: "HB-08123M", yearPrint: CDG_YEAR_UNKNOWN },
    { label: CDG.Label, productCode: "PB-02123M", yearPrint: CDG_YEAR_UNCLEAR },
    { label: CDG.Label, productCode: "HB-02123M", yearPrint: CDG_YEAR_UNCLEAR },
    { label: CDG.Label, productCode: "PB-05123M", yearPrint: CDG_YEAR_UNCLEAR },
    { label: CDG.Label, productCode: "HB-05123M", yearPrint: CDG_YEAR_UNCLEAR },
    { label: CDG.Label, productCode: "PB-08123M", yearPrint: CDG_YEAR_UNCLEAR },
    { label: CDG.Label, productCode: "HB-08123M", yearPrint: CDG_YEAR_UNCLEAR },
    { label: CDG.Label, productCode: "PB-11123M", yearPrint: CDG_YEAR_UNCLEAR },
    { label: CDG.Label, productCode: "HB-11123M", yearPrint: CDG_YEAR_UNCLEAR },
    { label: CDG.Label, productCode: "OP-K402", yearPrint: CDG_YEAR_BLANK },
    { label: CDG.Label, productCode: "GU-05004S", yearPrint: "1989" },
    { label: CDG.Label, productCode: "1P-P002", yearPrint: "2005" },
    { label: CDG.Label, productCode: "", yearPrint: "" },
    { label: CDG.Label, productCode: "DTK9210", yearPrint: "2006" },
    { label: CDG.Label, productCode: "GB-N004", yearPrint: "2008" },
    { label: CDG.Label, productCode: "AZT026", yearPrint: "2005" },
    { label: CDG.Label, productCode: "SE-T902", yearPrint: CDG_YEAR_BLANK },
    { label: CDG.Label, productCode: "XB-08000M", yearPrint: "1994" },
    { label: CDG.Label, productCode: "CDG_TITLES", yearPrint: "1994" },
];

const YY_CODE_BLANK = YY.NoProductCode.BLANK;
const YY_CODE_INDEFINITE = YY.NoProductCode.INDEFINITE;
const YY_CODE_UNKNOWN = YY.NoProductCode.UNKNOWN;

const YY_LOGO_YY_1 = YY.LogoStyle.YY[1];
const YY_LOGO_YY_2 = YY.LogoStyle.YY[2];
const YY_LOGO_YY_3 = YY.LogoStyle.YY[3];
const YY_LOGO_ELSE = YY.LogoStyle.ELSE;

const YY_SIZING_ALPHABETICAL = YY.SizingSystem.ALPHABETICAL;
const YY_SIZING_NUMERICAL = YY.SizingSystem.NUMERICAL;
const YY_SIZING_UNKNOWN = YY.SizingSystem.UNKNOWN;

const YY_FONT_SERIF = YY.FontType.SERIF;
const YY_FONT_SANS_SERIF = YY.FontType.SANS_SERIF;
const YY_FONT_UNKNOWN = YY.FontType.UNKNOWN;

const YY_LAUNDRY_ABOVE = YY.LaundryPosition.ABOVE;
const YY_LAUNDRY_BELOW = YY.LaundryPosition.BELOW;
const YY_LAUNDRY_UNKNOWN = YY.LaundryPosition.UNKNOWN;

const inputYY = [
    { label: YY.Label, productCode: "HZ-B10-104", logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_ALPHABETICAL, fontType: YY_FONT_SERIF,
                    laundryPosition: YY_LAUNDRY_BELOW },
    { label: YY.Label, productCode: YY_CODE_BLANK, logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_ALPHABETICAL, fontType: YY_FONT_SERIF,
                    laundryPosition: YY_LAUNDRY_BELOW },
    { label: YY.Label, productCode: YY_CODE_BLANK, logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_ALPHABETICAL, fontType: YY_FONT_SANS_SERIF,
                    laundryPosition: YY_LAUNDRY_BELOW },
    { label: YY.Label, productCode: "FY-C10-104", logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_ALPHABETICAL, fontType: YY_FONT_SERIF,
                    laundryPosition: YY_LAUNDRY_BELOW },
    { label: YY.Label, productCode: "FY-C10-104", logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_NUMERICAL, fontType: YY_FONT_SERIF,
                    laundryPosition: YY_LAUNDRY_BELOW },
    { label: YY.Label, productCode: "FY-C10-104", logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_UNKNOWN, fontType: YY_FONT_SERIF,
                    laundryPosition: YY_LAUNDRY_BELOW },
    { label: YY.Label, productCode: "HO-K27-037", logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_ALPHABETICAL, fontType: YY_FONT_SERIF,
                    laundryPosition: YY_LAUNDRY_BELOW },
    { label: YY.Label, productCode: "HG-C21-035", logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_ALPHABETICAL, fontType: YY_FONT_SERIF,
                    laundryPosition: YY_LAUNDRY_BELOW },
    { label: YY.Label, productCode: "HN-Y01-003", logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_NUMERICAL, fontType: YY_FONT_SANS_SERIF,
                    laundryPosition: YY_LAUNDRY_ABOVE },
    { label: YY.Label, productCode: "FD-J17-135", logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_NUMERICAL, fontType: YY_FONT_SANS_SERIF,
                    laundryPosition: YY_LAUNDRY_BELOW },
    { label: YY.Label, productCode: "FD-J17-135", logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_NUMERICAL, fontType: YY_FONT_SANS_SERIF,
                    laundryPosition: YY_LAUNDRY_ABOVE },
    { label: YY.Label, productCode: YY_CODE_UNKNOWN, logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_NUMERICAL, fontType: YY_FONT_SANS_SERIF,
                    laundryPosition: YY_LAUNDRY_ABOVE },
    { label: YY.Label, productCode: YY_CODE_UNKNOWN, logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_NUMERICAL, fontType: YY_FONT_SANS_SERIF,
                    laundryPosition: YY_LAUNDRY_UNKNOWN },
    { label: YY.Label, productCode: YY_CODE_UNKNOWN, logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_NUMERICAL, fontType: YY_FONT_UNKNOWN,
                    laundryPosition: YY_LAUNDRY_UNKNOWN },
    { label: YY.Label, productCode: YY_CODE_UNKNOWN, logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_ALPHABETICAL, fontType: YY_FONT_UNKNOWN,
                    laundryPosition: YY_LAUNDRY_UNKNOWN },
    { label: YY.Label, productCode: YY_CODE_INDEFINITE, logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_ALPHABETICAL, fontType: YY_FONT_UNKNOWN,
                    laundryPosition: YY_LAUNDRY_UNKNOWN },
    { label: YY.Label, productCode: "HV-C00-000", logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_NUMERICAL, fontType: YY_FONT_UNKNOWN,
                    laundryPosition: YY_LAUNDRY_UNKNOWN },
    { label: YY.Label, productCode: "HW-Y11-701", logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_NUMERICAL, fontType: YY_FONT_SANS_SERIF,
                    laundryPosition: YY_LAUNDRY_ABOVE },
    { label: YY.Label, productCode: "HJ-C37-146-1-01", logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_NUMERICAL, fontType: YY_FONT_SANS_SERIF,
                    laundryPosition: YY_LAUNDRY_ABOVE },
    { label: YY.Label, productCode: YY_CODE_UNKNOWN, logoStyle: YY_LOGO_YY_2,
                    sizingSystem: YY_SIZING_NUMERICAL, fontType: YY_FONT_SANS_SERIF,
                    laundryPosition: YY_LAUNDRY_ABOVE },
    { label: YY.Label, productCode: YY_CODE_UNKNOWN, logoStyle: YY_LOGO_YY_2,
                    sizingSystem: YY_SIZING_NUMERICAL, fontType: YY_FONT_SERIF,
                    laundryPosition: YY_LAUNDRY_ABOVE },
    { label: YY.Label, productCode: YY_CODE_UNKNOWN, logoStyle: YY_LOGO_YY_2,
                    sizingSystem: YY_SIZING_NUMERICAL, fontType: YY_FONT_SERIF,
                    laundryPosition: YY_LAUNDRY_BELOW },
    { label: YY.Label, productCode: YY_CODE_UNKNOWN, logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_ALPHABETICAL, fontType: YY_FONT_SANS_SERIF,
                    laundryPosition: YY_LAUNDRY_ABOVE },
    { label: YY.Label, productCode: YY_CODE_UNKNOWN, logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_ALPHABETICAL, fontType: YY_FONT_SERIF,
                    laundryPosition: YY_LAUNDRY_ABOVE },
    { label: YY.Label, productCode: YY_CODE_UNKNOWN, logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_ALPHABETICAL, fontType: YY_FONT_SERIF,
                    laundryPosition: YY_LAUNDRY_BELOW },
    { label: YY.Label, productCode: YY_CODE_UNKNOWN, logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_NUMERICAL, fontType: YY_FONT_SERIF,
                    laundryPosition: YY_LAUNDRY_ABOVE },
    { label: YY.Label, productCode: "HB-T00-000", logoStyle: YY_LOGO_ELSE,
                    sizingSystem: YY_SIZING_UNKNOWN, fontType: YY_FONT_UNKNOWN,
                    laundryPosition: YY_LAUNDRY_UNKNOWN },
    { label: YY.Label, productCode: "SJ-T00-000", logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_ALPHABETICAL, fontType: YY_FONT_UNKNOWN,
                    laundryPosition: YY_LAUNDRY_UNKNOWN },
    { label: YY.Label, productCode: YY_CODE_BLANK, logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_ALPHABETICAL, fontType: YY_FONT_SERIF,
                    laundryPosition: YY_LAUNDRY_BELOW },
    { label: YY.Label, productCode: YY_CODE_BLANK, logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_NUMERICAL, fontType: YY_FONT_SANS_SERIF,
                    laundryPosition: YY_LAUNDRY_ABOVE },
    { label: YY.Label, productCode: "HB-T00-000", logoStyle: YY_LOGO_YY_1,
                    sizingSystem: YY_SIZING_ALPHABETICAL, fontType: YY_FONT_SERIF,
                    laundryPosition: YY_LAUNDRY_ABOVE },
    { label: YY.Label, productCode: "HW-Y11-701", logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_NUMERICAL, fontType: YY_FONT_SANS_SERIF,
                    laundryPosition: YY_LAUNDRY_ABOVE },
    { label: YY.Label, productCode: "HB-T00-000", logoStyle: YY_LOGO_YY_2,
                    sizingSystem: YY_SIZING_ALPHABETICAL, fontType: YY_FONT_SERIF,
                    laundryPosition: YY_LAUNDRY_ABOVE },
    { label: YY.Label, productCode: "HV-B00-000", logoStyle: YY_LOGO_YY_2,
                    sizingSystem: YY_SIZING_ALPHABETICAL, fontType: YY_FONT_SERIF,
                    laundryPosition: YY_LAUNDRY_BELOW },
    { label: YY.Label, productCode: "HV-B00-000", logoStyle: "wrong",
                    sizingSystem: YY_SIZING_ALPHABETICAL, fontType: YY_FONT_SERIF,
                    laundryPosition: YY_LAUNDRY_BELOW },
    { label: YY.Label, productCode: "HE-B00-000", logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_ALPHABETICAL, fontType: YY_FONT_SERIF,
                    laundryPosition: YY_LAUNDRY_BELOW },
    { label: YY.Label, productCode: YY_CODE_UNKNOWN, logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_ALPHABETICAL, fontType: YY_FONT_SERIF,
                    laundryPosition: YY_LAUNDRY_ABOVE },
    { label: YY.Label, productCode: YY_CODE_UNKNOWN, logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_ALPHABETICAL, fontType: YY_FONT_SERIF,
                    laundryPosition: YY_LAUNDRY_BELOW },
    { label: YY.Label, productCode: YY_CODE_UNKNOWN, logoStyle: YY.LogoStyle.NO_ENTRY,
                    sizingSystem: YY_SIZING_NUMERICAL, fontType: YY_FONT_SERIF,
                    laundryPosition: YY_LAUNDRY_BELOW },
];

let input = inputCDG;

let count = 1;
for (let test of input) {
    console.log(`----------------\nTEST #${count}\n----------------\n`
                + identify(test));
    ++count;
}
