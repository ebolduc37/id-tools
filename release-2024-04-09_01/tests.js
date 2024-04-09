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
const CDG_YEAR_UNSPECIFIED = CDG.NoYearPrint.UNSPECIFIED;

const inputCDG = [
    { label: CDG.Label, productCode: "S18B001", yearPrint: CDG_YEAR_BLANK },
    { label: CDG.Label, productCode: "CDGS2ST", yearPrint: CDG_YEAR_BLANK },
    { label: CDG.Label, productCode: "FO01B601", yearPrint: CDG_YEAR_BLANK },
    { label: CDG.Label, productCode: "S11001", yearPrint: CDG_YEAR_BLANK },
    { label: CDG.Label, productCode: "W23001", yearPrint: CDG_YEAR_BLANK },
    { label: CDG.Label, productCode: "FW-01001", yearPrint: "1994" },
    { label: CDG.Label, productCode: "HB-08000M", yearPrint: CDG_YEAR_UNSPECIFIED },
    { label: CDG.Label, productCode: "PB-11001M", yearPrint: "1994" },
    { label: CDG.Label, productCode: "PP-C002", yearPrint: CDG_YEAR_BLANK },
    { label: CDG.Label, productCode: "EP-C002", yearPrint: CDG_YEAR_BLANK },
    { label: CDG.Label, productCode: "AB-35003", yearPrint: CDG_YEAR_UNSPECIFIED },
    { label: CDG.Label, productCode: "KK-27003", yearPrint: CDG_YEAR_UNSPECIFIED },
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
    { label: CDG.Label, productCode: "HB-08123M", yearPrint: CDG_YEAR_UNSPECIFIED },
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
const YY_CODE_UNSPECIFIED = YY.NoProductCode.UNSPECIFIED;

const YY_LOGO_YY_1 = YY.LogoStyle.YY[1];
const YY_LOGO_YY_2 = YY.LogoStyle.YY[2];
const YY_LOGO_YY_3 = YY.LogoStyle.YY[3];
const YY_LOGO_UNSPECIFIED = YY.LogoStyle.UNSPECIFIED;

const YY_SIZING_ALPHABETICAL = YY.SizingSystem.ALPHABETICAL;
const YY_SIZING_NUMERICAL = YY.SizingSystem.NUMERICAL;
const YY_SIZING_UNSPECIFIED = YY.SizingSystem.UNSPECIFIED;

const YY_FONT_SERIF = YY.FontType.SERIF;
const YY_FONT_SANS_SERIF = YY.FontType.SANS_SERIF;
const YY_FONT_UNSPECIFIED = YY.FontType.UNSPECIFIED;

const YY_LAUNDRY_ABOVE = YY.LaundryPosition.ABOVE;
const YY_LAUNDRY_BELOW = YY.LaundryPosition.BELOW;
const YY_LAUNDRY_UNSPECIFIED = YY.LaundryPosition.UNSPECIFIED;

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
                    sizingSystem: YY_SIZING_UNSPECIFIED, fontType: YY_FONT_SERIF,
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
    { label: YY.Label, productCode: YY_CODE_UNSPECIFIED, logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_NUMERICAL, fontType: YY_FONT_SANS_SERIF,
                    laundryPosition: YY_LAUNDRY_ABOVE },
    { label: YY.Label, productCode: YY_CODE_UNSPECIFIED, logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_NUMERICAL, fontType: YY_FONT_SANS_SERIF,
                    laundryPosition: YY_LAUNDRY_UNSPECIFIED },
    { label: YY.Label, productCode: YY_CODE_UNSPECIFIED, logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_NUMERICAL, fontType: YY_FONT_UNSPECIFIED,
                    laundryPosition: YY_LAUNDRY_UNSPECIFIED },
    { label: YY.Label, productCode: YY_CODE_UNSPECIFIED, logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_ALPHABETICAL, fontType: YY_FONT_UNSPECIFIED,
                    laundryPosition: YY_LAUNDRY_UNSPECIFIED },
    { label: YY.Label, productCode: YY_CODE_INDEFINITE, logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_ALPHABETICAL, fontType: YY_FONT_UNSPECIFIED,
                    laundryPosition: YY_LAUNDRY_UNSPECIFIED },
    { label: YY.Label, productCode: "HV-C00-000", logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_NUMERICAL, fontType: YY_FONT_UNSPECIFIED,
                    laundryPosition: YY_LAUNDRY_UNSPECIFIED },
    { label: YY.Label, productCode: "HW-Y11-701", logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_NUMERICAL, fontType: YY_FONT_SANS_SERIF,
                    laundryPosition: YY_LAUNDRY_ABOVE },
    { label: YY.Label, productCode: "HJ-C37-146-1-01", logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_NUMERICAL, fontType: YY_FONT_SANS_SERIF,
                    laundryPosition: YY_LAUNDRY_ABOVE },
    { label: YY.Label, productCode: YY_CODE_UNSPECIFIED, logoStyle: YY_LOGO_YY_2,
                    sizingSystem: YY_SIZING_NUMERICAL, fontType: YY_FONT_SANS_SERIF,
                    laundryPosition: YY_LAUNDRY_ABOVE },
    { label: YY.Label, productCode: YY_CODE_UNSPECIFIED, logoStyle: YY_LOGO_YY_2,
                    sizingSystem: YY_SIZING_NUMERICAL, fontType: YY_FONT_SERIF,
                    laundryPosition: YY_LAUNDRY_ABOVE },
    { label: YY.Label, productCode: YY_CODE_UNSPECIFIED, logoStyle: YY_LOGO_YY_2,
                    sizingSystem: YY_SIZING_NUMERICAL, fontType: YY_FONT_SERIF,
                    laundryPosition: YY_LAUNDRY_BELOW },
    { label: YY.Label, productCode: YY_CODE_UNSPECIFIED, logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_ALPHABETICAL, fontType: YY_FONT_SANS_SERIF,
                    laundryPosition: YY_LAUNDRY_ABOVE },
    { label: YY.Label, productCode: YY_CODE_UNSPECIFIED, logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_ALPHABETICAL, fontType: YY_FONT_SERIF,
                    laundryPosition: YY_LAUNDRY_ABOVE },
    { label: YY.Label, productCode: YY_CODE_UNSPECIFIED, logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_ALPHABETICAL, fontType: YY_FONT_SERIF,
                    laundryPosition: YY_LAUNDRY_BELOW },
    { label: YY.Label, productCode: YY_CODE_UNSPECIFIED, logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_NUMERICAL, fontType: YY_FONT_SERIF,
                    laundryPosition: YY_LAUNDRY_ABOVE },
    { label: YY.Label, productCode: "HB-T00-000", logoStyle: YY_LOGO_UNSPECIFIED,
                    sizingSystem: YY_SIZING_UNSPECIFIED, fontType: YY_FONT_UNSPECIFIED,
                    laundryPosition: YY_LAUNDRY_UNSPECIFIED },
    { label: YY.Label, productCode: "SJ-T00-000", logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_ALPHABETICAL, fontType: YY_FONT_UNSPECIFIED,
                    laundryPosition: YY_LAUNDRY_UNSPECIFIED },
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
    { label: YY.Label, productCode: YY_CODE_UNSPECIFIED, logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_ALPHABETICAL, fontType: YY_FONT_SERIF,
                    laundryPosition: YY_LAUNDRY_ABOVE },
    { label: YY.Label, productCode: YY_CODE_UNSPECIFIED, logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_ALPHABETICAL, fontType: YY_FONT_SERIF,
                    laundryPosition: YY_LAUNDRY_BELOW },
    { label: YY.Label, productCode: YY_CODE_UNSPECIFIED, logoStyle: YY_LOGO_UNSPECIFIED,
                    sizingSystem: YY_SIZING_NUMERICAL, fontType: YY_FONT_SERIF,
                    laundryPosition: YY_LAUNDRY_BELOW },
    { label: YY.Label, productCode: YY_CODE_UNSPECIFIED, logoStyle: YY_LOGO_UNSPECIFIED,
                    sizingSystem: YY_SIZING_ALPHABETICAL, fontType: YY_FONT_UNSPECIFIED,
                    laundryPosition: YY_LAUNDRY_ABOVE },
    { label: YY.Label, productCode: YY_CODE_UNSPECIFIED, logoStyle: YY_LOGO_UNSPECIFIED,
                    sizingSystem: YY_SIZING_UNSPECIFIED, fontType: YY_FONT_UNSPECIFIED,
                    laundryPosition: YY_LAUNDRY_UNSPECIFIED },
];

const IM_LOGO_ROUND = IM.LogoStyle.ROUND;
const IM_LOGO_BRUSH = IM.LogoStyle.BRUSH;
const IM_LOGO_IM_BW = IM.LogoStyle.IM["BW"];
const IM_LOGO_IM_WB = IM.LogoStyle.IM["WB"];
const IM_LOGO_ME_BW = IM.LogoStyle.ME["BW"];
const IM_LOGO_ME_WB = IM.LogoStyle.ME["WB"];
const IM_LOGO_UNSPECIFIED = IM.LogoStyle.UNSPECIFIED;

const IM_MANUFACTURER_IMI = IM.Manufacturer.IMI;
const IM_MANUFACTURER_IMII = IM.Manufacturer.IMII;
const IM_MANUFACTURER_ON_LIMITS = IM.Manufacturer.ON_LIMITS;
const IM_MANUFACTURER_UNSPECIFIED = IM.Manufacturer.UNSPECIFIED;

const IM_SIZING_ALPHABETICAL = IM.SizingSystem.ALPHABETICAL;
const IM_SIZING_NUMERICAL = IM.SizingSystem.NUMERICAL;
const IM_SIZING_UNSPECIFIED = IM.SizingSystem.UNSPECIFIED;

const IM_FONT_SLAB_SERIF = IM.FontType.SLAB_SERIF;
const IM_FONT_SANS_SERIF = IM.FontType.SANS_SERIF;
const IM_FONT_UNSPECIFIED = IM.FontType.UNSPECIFIED;

const inputIM = [
    { label: IM.Label, productCode: "ME13FA026", logoStyle: IM_LOGO_IM_WB,
        manufacturer: IM_MANUFACTURER_IMI, sizingSystem: IM_SIZING_ALPHABETICAL,
        fontType: IM_FONT_SLAB_SERIF },
    { label: IM.Label, productCode: "ME81JK648", logoStyle: IM_LOGO_ME_BW,
        manufacturer: IM_MANUFACTURER_IMI, sizingSystem: IM_SIZING_ALPHABETICAL,
        fontType: IM_FONT_SLAB_SERIF },
    { label: IM.Label, productCode: "ME03JK471", logoStyle: IM_LOGO_ME_BW,
        manufacturer: IM_MANUFACTURER_IMI, sizingSystem: IM_SIZING_ALPHABETICAL,
        fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "ME46-FF095", logoStyle: IM_LOGO_IM_WB,
        manufacturer: IM_MANUFACTURER_IMI, sizingSystem: IM_SIZING_NUMERICAL,
        fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "IM71-FF027", logoStyle: IM_LOGO_IM_BW,
        manufacturer: IM_MANUFACTURER_IMI, sizingSystem: IM_SIZING_ALPHABETICAL,
        fontType: IM_FONT_SLAB_SERIF },
    { label: IM.Label, productCode: "IM54-FD509", logoStyle: IM_LOGO_IM_BW,
        manufacturer: IM_MANUFACTURER_IMI, sizingSystem: IM_SIZING_NUMERICAL,
        fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "ME11FD021", logoStyle: IM_LOGO_ME_WB,
        manufacturer: IM_MANUFACTURER_IMI, sizingSystem: IM_SIZING_NUMERICAL,
        fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "ME78-JK180", logoStyle: IM_LOGO_ME_WB,
        manufacturer: IM_MANUFACTURER_IMI, sizingSystem: IM_SIZING_NUMERICAL,
        fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "PP64-JH732", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_IMI, sizingSystem: IM_SIZING_NUMERICAL,
        fontType: IM_FONT_SLAB_SERIF },
    { label: IM.Label, productCode: "IM13JK077", logoStyle: IM_LOGO_IM_WB,
        manufacturer: IM_MANUFACTURER_IMI, sizingSystem: IM_SIZING_ALPHABETICAL,
        fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "JY14230", logoStyle: IM_LOGO_IM_BW,
        manufacturer: IM_MANUFACTURER_IMII, sizingSystem: IM_SIZING_ALPHABETICAL,
        fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "RY81446", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_IMII, sizingSystem: IM_SIZING_ALPHABETICAL,
        fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "LH14759", logoStyle: IM_LOGO_ROUND,
        manufacturer: IM_MANUFACTURER_IMII, sizingSystem: IM_SIZING_ALPHABETICAL,
        fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "LH14759", logoStyle: IM_LOGO_ROUND,
        manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_ALPHABETICAL,
        fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "ME81JK648", logoStyle: IM_LOGO_ME_BW,
        manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_ALPHABETICAL,
        fontType: IM_FONT_SLAB_SERIF },
    { label: IM.Label, productCode: "BY84446", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_ALPHABETICAL,
        fontType: IM_FONT_SLAB_SERIF },
    { label: IM.Label, productCode: "0CL24002", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_UNSPECIFIED,
        fontType: IM_FONT_UNSPECIFIED },
    { label: IM.Label, productCode: "OCL24002", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_UNSPECIFIED,
        fontType: IM_FONT_UNSPECIFIED },
    { label: IM.Label, productCode: "0AJ14007", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_UNSPECIFIED,
        fontType: IM_FONT_UNSPECIFIED },
    { label: IM.Label, productCode: "9AL31053", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_UNSPECIFIED,
        fontType: IM_FONT_UNSPECIFIED },
    { label: IM.Label, productCode: "XM38511DD", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_UNSPECIFIED,
        fontType: IM_FONT_UNSPECIFIED },
    { label: IM.Label, productCode: "KL37801", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_UNSPECIFIED,
        fontType: IM_FONT_UNSPECIFIED },
    { label: IM.Label, productCode: "XZ17261AC", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_UNSPECIFIED,
        fontType: IM_FONT_UNSPECIFIED },
    { label: IM.Label, productCode: "MP63220", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_ON_LIMITS, sizingSystem: IM_SIZING_UNSPECIFIED,
        fontType: IM_FONT_UNSPECIFIED },
    { label: IM.Label, productCode: "FK53344", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_ON_LIMITS, sizingSystem: IM_SIZING_UNSPECIFIED,
        fontType: IM_FONT_UNSPECIFIED },
    { label: IM.Label, productCode: "MY32108", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_ON_LIMITS, sizingSystem: IM_SIZING_UNSPECIFIED,
        fontType: IM_FONT_UNSPECIFIED },
    { label: IM.Label, productCode: "LG23088", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_ON_LIMITS, sizingSystem: IM_SIZING_UNSPECIFIED,
        fontType: IM_FONT_UNSPECIFIED },
    { label: IM.Label, productCode: "LG63088", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_ON_LIMITS, sizingSystem: IM_SIZING_UNSPECIFIED,
        fontType: IM_FONT_UNSPECIFIED },
    { label: IM.Label, productCode: "LG63088", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_ON_LIMITS, sizingSystem: IM_SIZING_UNSPECIFIED,
        fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "MB04116", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_UNSPECIFIED,
        fontType: IM_FONT_UNSPECIFIED },
    { label: IM.Label, productCode: "IM54-FD509", logoStyle: IM_LOGO_IM_BW,
        manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_UNSPECIFIED,
        fontType: IM_FONT_UNSPECIFIED },
    { label: IM.Label, productCode: "LH14759", logoStyle: IM_LOGO_ROUND,
        manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_ALPHABETICAL,
        fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "PP05JK004", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_UNSPECIFIED,
        fontType: IM_FONT_UNSPECIFIED },
    { label: IM.Label, productCode: "PP87JK004", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_NUMERICAL,
        fontType: IM_FONT_UNSPECIFIED },
    { label: IM.Label, productCode: "IS21FD012", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_UNSPECIFIED,
        fontType: IM_FONT_UNSPECIFIED },
    { label: IM.Label, productCode: "IS13FD012", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_UNSPECIFIED,
        fontType: IM_FONT_UNSPECIFIED },
    { label: IM.Label, productCode: "FH01FD012", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_ALPHABETICAL,
        fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "FH55FD012", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_UNSPECIFIED,
        fontType: IM_FONT_SLAB_SERIF },
    { label: IM.Label, productCode: "PP55-FD012/4", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_UNSPECIFIED,
        fontType: IM_FONT_UNSPECIFIED },
    { label: IM.Label, productCode: "IM04-FD012", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_UNSPECIFIED,
        fontType: IM_FONT_UNSPECIFIED },
];

let input = inputIM;

let count = 1;
for (let test of input) {
    console.log(`----------------\nTEST #${count}\n----------------\n`
                + identify(test));
    ++count;
}

let readme = false;

if (readme) {
    console.log(identify({
        label: CDG.Label,
        productCode: "GJ-10009S",
        yearPrint: "1994"
    }));
    console.log(JSON.stringify(extract({
        label: CDG.Label,
        productCode: "GJ-10009S",
        yearPrint: "1994"
    })));
    console.log(identify({
        label: CDG.Label,
        productCode: "GJ-10009S",
        yearPrint: CDG.NoYearPrint.UNREADABLE
    }));
    console.log(identify({
        label: YY.Label,
        logoStyle: YY.LogoStyle.YY[3],
        productCode: "FY-C10-104",
        sizingSystem: YY.SizingSystem.ALPHABETICAL,
        fontType: YY.FontType.SERIF,
        laundryPosition: YY.LaundryPosition.BELOW
    }));
}
