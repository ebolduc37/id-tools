/**
 * Identification string.
 *
 * Return the string representation of a garment identification.
 *
 * @author Etienne Bolduc
 */

import { identify, extract, CDG, YY, IM } from "./index.js";

const CDG_YEAR_BLANK = CDG.NoYearPrint.BLANK;
const CDG_YEAR_UNREADABLE = CDG.NoYearPrint.UNREADABLE;
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
    { label: CDG.Label, productCode: "PB-02123M", yearPrint: CDG_YEAR_UNREADABLE },
    { label: CDG.Label, productCode: "HB-02123M", yearPrint: CDG_YEAR_UNREADABLE },
    { label: CDG.Label, productCode: "PB-05123M", yearPrint: CDG_YEAR_UNREADABLE },
    { label: CDG.Label, productCode: "HB-05123M", yearPrint: CDG_YEAR_UNREADABLE },
    { label: CDG.Label, productCode: "PB-08123M", yearPrint: CDG_YEAR_UNREADABLE },
    { label: CDG.Label, productCode: "HB-08123M", yearPrint: CDG_YEAR_UNREADABLE },
    { label: CDG.Label, productCode: "PB-11123M", yearPrint: CDG_YEAR_UNREADABLE },
    { label: CDG.Label, productCode: "HB-11123M", yearPrint: CDG_YEAR_UNREADABLE },
    { label: CDG.Label, productCode: "OP-K402", yearPrint: CDG_YEAR_BLANK },
    { label: CDG.Label, productCode: "GU-05004S", yearPrint: "1989" },
    { label: CDG.Label, productCode: "1P-P002", yearPrint: "2005" },
    { label: CDG.Label, productCode: "", yearPrint: "" },
    { label: CDG.Label, productCode: "DTK9210", yearPrint: "2006" },
    { label: CDG.Label, productCode: "GB-N004", yearPrint: "2008" },
    { label: CDG.Label, productCode: "AZT026", yearPrint: "2005" },
    { label: CDG.Label, productCode: "SE-T902", yearPrint: CDG_YEAR_BLANK },
    { label: CDG.Label, productCode: "XB-08000M", yearPrint: "1994" },
    { label: CDG.Label, productCode: "CDGHP-TITLES", yearPrint: "1994" },
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

const IM_LOGO_ROUND = IM.LogoStyle.ROUND;
const IM_LOGO_BRUSH = IM.LogoStyle.BRUSH;
const IM_LOGO_IM_BOW = IM.LogoStyle.IM["BOW"];
const IM_LOGO_IM_WOB = IM.LogoStyle.IM["WOB"];
const IM_LOGO_ME_BOW = IM.LogoStyle.ME["BOW"];
const IM_LOGO_ME_WOB = IM.LogoStyle.ME["WOB"];
const IM_LOGO_IS_3 = IM.LogoStyle.IS[3];
const IM_LOGO_ELSE = IM.LogoStyle.ELSE;

const IM_MANUFACTURER_IMI = IM.Manufacturer.IMI;
const IM_MANUFACTURER_IMII = IM.Manufacturer.IMII;
const IM_MANUFACTURER_UNKNOWN = IM.Manufacturer.UNKNOWN;

const IM_SIZING_ALPHABETICAL = IM.SizingSystem.ALPHABETICAL;
const IM_SIZING_NUMERICAL = IM.SizingSystem.NUMERICAL;
const IM_SIZING_UNKNOWN = IM.SizingSystem.UNKNOWN;

const IM_FONT_SLAB_SERIF = IM.FontType.SLAB_SERIF;
const IM_FONT_SANS_SERIF = IM.FontType.SANS_SERIF;
const IM_FONT_UNKNOWN = IM.FontType.UNKNOWN;

const inputIM = [
    { label: IM.Label, productCode: "ME13FA026", logoStyle: IM_LOGO_IM_WOB,
        manufacturer: IM_MANUFACTURER_IMI, sizingSystem: IM_SIZING_ALPHABETICAL,
        fontType: IM_FONT_SLAB_SERIF },
    { label: IM.Label, productCode: "ME81JK648", logoStyle: IM_LOGO_ME_BOW,
        manufacturer: IM_MANUFACTURER_IMI, sizingSystem: IM_SIZING_ALPHABETICAL,
        fontType: IM_FONT_SLAB_SERIF },
    { label: IM.Label, productCode: "ME03JK471", logoStyle: IM_LOGO_ME_BOW,
        manufacturer: IM_MANUFACTURER_IMI, sizingSystem: IM_SIZING_ALPHABETICAL,
        fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "ME46-FF095", logoStyle: IM_LOGO_IM_WOB,
        manufacturer: IM_MANUFACTURER_IMI, sizingSystem: IM_SIZING_NUMERICAL,
        fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "IM71-FF027", logoStyle: IM_LOGO_IM_BOW,
        manufacturer: IM_MANUFACTURER_IMI, sizingSystem: IM_SIZING_ALPHABETICAL,
        fontType: IM_FONT_SLAB_SERIF },
    { label: IM.Label, productCode: "IM54-FD509", logoStyle: IM_LOGO_IM_BOW,
        manufacturer: IM_MANUFACTURER_IMI, sizingSystem: IM_SIZING_NUMERICAL,
        fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "ME11FD021", logoStyle: IM_LOGO_ME_WOB,
        manufacturer: IM_MANUFACTURER_IMI, sizingSystem: IM_SIZING_NUMERICAL,
        fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "ME78-JK180", logoStyle: IM_LOGO_ME_WOB,
        manufacturer: IM_MANUFACTURER_IMI, sizingSystem: IM_SIZING_NUMERICAL,
        fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "PP64-JH732", logoStyle: IM_LOGO_ELSE,
        manufacturer: IM_MANUFACTURER_IMI, sizingSystem: IM_SIZING_NUMERICAL,
        fontType: IM_FONT_SLAB_SERIF },
    { label: IM.Label, productCode: "IM13JK077", logoStyle: IM_LOGO_IM_WOB,
        manufacturer: IM_MANUFACTURER_IMI, sizingSystem: IM_SIZING_ALPHABETICAL,
        fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "JY14230", logoStyle: IM_LOGO_IM_BOW,
        manufacturer: IM_MANUFACTURER_IMII, sizingSystem: IM_SIZING_ALPHABETICAL,
        fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "RY81446", logoStyle: IM_LOGO_ELSE,
        manufacturer: IM_MANUFACTURER_IMII, sizingSystem: IM_SIZING_ALPHABETICAL,
        fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "RY81446", logoStyle: IM_LOGO_IS_3,
        manufacturer: IM_MANUFACTURER_IMII, sizingSystem: IM_SIZING_ALPHABETICAL,
        fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "LH14759", logoStyle: IM_LOGO_ROUND,
        manufacturer: IM_MANUFACTURER_IMII, sizingSystem: IM_SIZING_ALPHABETICAL,
        fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "LH14759", logoStyle: IM_LOGO_ROUND,
        manufacturer: IM_MANUFACTURER_UNKNOWN, sizingSystem: IM_SIZING_ALPHABETICAL,
        fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "ME81JK648", logoStyle: IM_LOGO_ME_BOW,
        manufacturer: IM_MANUFACTURER_UNKNOWN, sizingSystem: IM_SIZING_ALPHABETICAL,
        fontType: IM_FONT_SLAB_SERIF },
];

let input = inputIM;

let count = 1;
for (let test of input) {
    console.log(`----------------\nTEST #${count}\n----------------\n`
                + identify(test));
    ++count;
}
