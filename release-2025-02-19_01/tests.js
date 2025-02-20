/**
 * Identification string.
 *
 * Return the string representation of a garment identification.
 *
 * @author Etienne Bolduc
 */

import { identify, extract, CDG, IM, MM, YY } from "./index.js";

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
    { label: CDG.Label, productCode: "PB-B018", yearPrint: "2017" },
    { label: CDG.Label, productCode: "S9OP15", yearPrint: CDG_YEAR_BLANK },
    { label: CDG.Label, productCode: "GB-J024", yearPrint: "2017" },
    { label: CDG.Label, productCode: "W11SC03", yearPrint: CDG_YEAR_BLANK },
    { label: CDG.Label, productCode: "OO-K001", yearPrint: CDG_YEAR_BLANK },
    { label: CDG.Label, productCode: "AZT026", yearPrint: CDG_YEAR_BLANK },
    { label: CDG.Label, productCode: "AZB001", yearPrint: "AD2016/12" },
    { label: CDG.Label, productCode: "WI-C001", yearPrint: CDG_YEAR_BLANK },
    { label: CDG.Label, productCode: "DR-2005-01", yearPrint: "2004" },
];

const YY_CODE_BLANK = YY.NoProductCode.BLANK;
const YY_CODE_UNREADABLE = YY.NoProductCode.UNREADABLE;
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
    { label: YY.Label, productCode: YY_CODE_UNREADABLE, logoStyle: YY_LOGO_YY_3,
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
    { label: YY.Label, productCode: "FE-H02-180-1M", logoStyle: YY_LOGO_YY_2,
                    sizingSystem: YY_SIZING_UNSPECIFIED, fontType: YY_FONT_SERIF,
                    laundryPosition: YY_LAUNDRY_UNSPECIFIED },
    { label: YY.Label, productCode: "FE-H02-180-111", logoStyle: YY_LOGO_YY_2,
                    sizingSystem: YY_SIZING_UNSPECIFIED, fontType: YY_FONT_SERIF,
                    laundryPosition: YY_LAUNDRY_UNSPECIFIED },
    { label: YY.Label, productCode: "HF-B06-933", logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_ALPHABETICAL, fontType: YY_FONT_SERIF,
                    laundryPosition: YY_LAUNDRY_BELOW },
    { label: YY.Label, productCode: "HF-B06-933", logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_ALPHABETICAL, fontType: YY_FONT_SANS_SERIF,
                    laundryPosition: YY_LAUNDRY_BELOW },
    { label: YY.Label, productCode: "HE-B23-288", logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_NUMERICAL, fontType: YY_FONT_SERIF,
                    laundryPosition: YY_LAUNDRY_BELOW },
    { label: YY.Label, productCode: "K-T11-045", logoStyle: YY_LOGO_YY_3,
                    sizingSystem: YY_SIZING_NUMERICAL, fontType: YY_FONT_SERIF,
                    laundryPosition: YY_LAUNDRY_BELOW },
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
const IM_MANUFACTURER_ANET = IM.Manufacturer.ANET;
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
    { label: IM.Label, productCode: "CF007KG020", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_UNSPECIFIED,
        fontType: IM_FONT_UNSPECIFIED },
    { label: IM.Label, productCode: "AT55KF420/1", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_UNSPECIFIED,
        fontType: IM_FONT_UNSPECIFIED },
    { label: IM.Label, productCode: "GG13AG151-19", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_UNSPECIFIED,
        fontType: IM_FONT_UNSPECIFIED },
    { label: IM.Label, productCode: "PP24AG151", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_UNSPECIFIED,
        fontType: IM_FONT_UNSPECIFIED },
    { label: IM.Label, productCode: "TM63AG151", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_UNSPECIFIED,
        fontType: IM_FONT_UNSPECIFIED },
    { label: IM.Label, productCode: "ME34AD151", logoStyle: IM_LOGO_IM_WB,
        manufacturer: IM_MANUFACTURER_IMI, sizingSystem: IM_SIZING_NUMERICAL,
        fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "ME62FF102", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_IMI, sizingSystem: IM_SIZING_NUMERICAL,
        fontType: IM_FONT_SLAB_SERIF },
    { label: IM.Label, productCode: "ZU47FF102", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_IMI, sizingSystem: IM_SIZING_NUMERICAL,
        fontType: IM_FONT_SLAB_SERIF },
    { label: IM.Label, productCode: "IM13FF102", logoStyle: IM_LOGO_IM_WB,
        manufacturer: IM_MANUFACTURER_IMI, sizingSystem: IM_SIZING_NUMERICAL,
        fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "CZ94FF102", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_NUMERICAL,
        fontType: IM_FONT_UNSPECIFIED },
    { label: IM.Label, productCode: "CZ94FF102", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_ALPHABETICAL,
        fontType: IM_FONT_UNSPECIFIED },
    { label: IM.Label, productCode: "TC94FF102", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_NUMERICAL,
        fontType: IM_FONT_UNSPECIFIED },
    { label: IM.Label, productCode: "LG51419", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_IMII, sizingSystem: IM_SIZING_UNSPECIFIED,
        fontType: IM_FONT_UNSPECIFIED },
    { label: IM.Label, productCode: "GG13079", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_IMII, sizingSystem: IM_SIZING_UNSPECIFIED,
        fontType: IM_FONT_UNSPECIFIED },
    { label: IM.Label, productCode: "ME01FJ000", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_IMI, sizingSystem: IM_SIZING_UNSPECIFIED,
        fontType: IM_FONT_UNSPECIFIED },
    { label: IM.Label, productCode: "ME63FJ000", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_UNSPECIFIED,
        fontType: IM_FONT_UNSPECIFIED },
    { label: IM.Label, productCode: "CL43FJ000", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_UNSPECIFIED,
        fontType: IM_FONT_UNSPECIFIED },
    { label: IM.Label, productCode: "CL43FJ000", logoStyle: IM_LOGO_IM_WB,
        manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_UNSPECIFIED,
        fontType: IM_FONT_UNSPECIFIED },
    { label: IM.Label, productCode: "CL63FJ000", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_UNSPECIFIED,
        fontType: IM_FONT_UNSPECIFIED },
    { label: IM.Label, productCode: "ME63FJ000", logoStyle: IM_LOGO_UNSPECIFIED,
        manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_NUMERICAL,
        fontType: IM_FONT_SLAB_SERIF },
    { label: IM.Label, productCode: "EG36395", logoStyle: IM_LOGO_BRUSH,
        manufacturer: IM_MANUFACTURER_ON_LIMITS, sizingSystem: IM_SIZING_ALPHABETICAL,
        fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "ZC36103", logoStyle: IM_LOGO_ROUND,
        manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_ALPHABETICAL,
        fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "0GH11025", logoStyle: IM_LOGO_IM_WB,
        manufacturer: IM_MANUFACTURER_ON_LIMITS, sizingSystem: IM_SIZING_ALPHABETICAL,
        fontType: IM_FONT_SLAB_SERIF },
    { label: IM.Label, productCode: "ME63-FC460", logoStyle: IM_LOGO_ME_BW,
        manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_ALPHABETICAL,
        fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "JY11097", logoStyle: IM_LOGO_BRUSH,
        manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_ALPHABETICAL,
        fontType: IM_FONT_SLAB_SERIF },
    { label: IM.Label, productCode: "PL04-FA713", logoStyle: null,
            manufacturer: IM_MANUFACTURER_ANET, sizingSystem: IM_SIZING_ALPHABETICAL,
            fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "PP06-JF595", logoStyle: null,
            manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_ALPHABETICAL,
            fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "IM19-JO556", logoStyle: IM_LOGO_IM_BW,
            manufacturer: IM_MANUFACTURER_IMI, sizingSystem: IM_SIZING_ALPHABETICAL,
            fontType: IM_FONT_SLAB_SERIF },
    { label: IM.Label, productCode: "PP56-JT994", logoStyle: IM_LOGO_IM_BW,
            manufacturer: IM_MANUFACTURER_IMI, sizingSystem: IM_SIZING_ALPHABETICAL,
            fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "IF34-FD102", logoStyle: IM_LOGO_UNSPECIFIED,
            manufacturer: IM_MANUFACTURER_IMI, sizingSystem: IM_SIZING_NUMERICAL,
            fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "SS61211", logoStyle: IM_LOGO_BRUSH,
            manufacturer: IM_MANUFACTURER_ON_LIMITS, sizingSystem: IM_SIZING_ALPHABETICAL,
            fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "EG36395", logoStyle: IM_LOGO_BRUSH,
            manufacturer: IM_MANUFACTURER_ON_LIMITS, sizingSystem: IM_SIZING_ALPHABETICAL,
            fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "EG36395", logoStyle: IM_LOGO_BRUSH,
            manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_ALPHABETICAL,
            fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "0DL45536", logoStyle: IM_LOGO_IM_WB,
            manufacturer: IM_MANUFACTURER_IMI, sizingSystem: IM_SIZING_ALPHABETICAL,
            fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "0BL45536", logoStyle: IM_LOGO_IM_WB,
            manufacturer: IM_MANUFACTURER_IMI, sizingSystem: IM_SIZING_ALPHABETICAL,
            fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "9DL45536", logoStyle: IM_LOGO_IM_WB,
            manufacturer: IM_MANUFACTURER_IMI, sizingSystem: IM_SIZING_ALPHABETICAL,
            fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "0DL45536", logoStyle: IM_LOGO_IM_WB,
            manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_ALPHABETICAL,
            fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "LG51419", logoStyle: IM_LOGO_IM_BW,
            manufacturer: IM_MANUFACTURER_IMI, sizingSystem: IM_SIZING_ALPHABETICAL,
            fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "EG53410", logoStyle: IM_LOGO_IM_BW,
            manufacturer: IM_MANUFACTURER_IMI, sizingSystem: IM_SIZING_ALPHABETICAL,
            fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "EG53410", logoStyle: IM_LOGO_IM_BW,
            manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_ALPHABETICAL,
            fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "EG53410", logoStyle: IM_LOGO_UNSPECIFIED,
            manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_ALPHABETICAL,
            fontType: IM_FONT_SANS_SERIF },
    { label: IM.Label, productCode: "RG34140", logoStyle: IM_LOGO_UNSPECIFIED,
            manufacturer: IM_MANUFACTURER_UNSPECIFIED, sizingSystem: IM_SIZING_ALPHABETICAL,
            fontType: IM_FONT_SANS_SERIF },
];

const MM_CODE_BLANK = MM.NoProductCode.BLANK;
const MM_CODE_UNREADABLE = MM.NoProductCode.UNREADABLE;
const MM_CODE_UNSPECIFIED = MM.NoProductCode.UNSPECIFIED;

const MM_LABEL_NOTATION_BLANK = MM.LabelNotation["BLANK"];
const MM_LABEL_NOTATION_0 = MM.LabelNotation['0'];
const MM_LABEL_NOTATION_0_10 = MM.LabelNotation['0-10'];
const MM_LABEL_NOTATION_1 = MM.LabelNotation['1'];
const MM_LABEL_NOTATION_1_10 = MM.LabelNotation['1-10'];
const MM_LABEL_NOTATION_3 = MM.LabelNotation['3'];
const MM_LABEL_NOTATION_4 = MM.LabelNotation['4'];
const MM_LABEL_NOTATION_4_14 = MM.LabelNotation['4-14'];
const MM_LABEL_NOTATION_6 = MM.LabelNotation['6'];
const MM_LABEL_NOTATION_6_BLANK = MM.LabelNotation['6_BLANK'];
const MM_LABEL_NOTATION_6_BIG = MM.LabelNotation['6_BIG'];
const MM_LABEL_NOTATION_MM6_MMM = MM.LabelNotation['MM6_MMM'];
const MM_LABEL_NOTATION_MM6_MM = MM.LabelNotation['MM6_MM'];
const MM_LABEL_NOTATION_8 = MM.LabelNotation['8'];
const MM_LABEL_NOTATION_10 = MM.LabelNotation['10'];
const MM_LABEL_NOTATION_11 = MM.LabelNotation['11'];
const MM_LABEL_NOTATION_12 = MM.LabelNotation['12'];
const MM_LABEL_NOTATION_13 = MM.LabelNotation['13'];
const MM_LABEL_NOTATION_14 = MM.LabelNotation['14'];
const MM_LABEL_NOTATION_15 = MM.LabelNotation['15'];
const MM_LABEL_NOTATION_20 = MM.LabelNotation['20'];
const MM_LABEL_NOTATION_22 = MM.LabelNotation['22'];
const MM_LABEL_NOTATION_REP = MM.LabelNotation['REP'];
const MM_LABEL_NOTATION_HM = MM.LabelNotation['HM'];
const MM_LABEL_NOTATION_TNF = MM.LabelNotation['TNF'];
const MM_LABEL_NOTATION_SUP = MM.LabelNotation['SUP'];

const MM_MANUFACTURER_MII = MM.Manufacturer["MII"];
const MM_MANUFACTURER_MIF = MM.Manufacturer["MIF"];
const MM_MANUFACTURER_SI = MM.Manufacturer["SI"];
const MM_MANUFACTURER_MAC = MM.Manufacturer["MAC"];
const MM_MANUFACTURER_UNSPECIFIED = MM.Manufacturer["UNSPECIFIED"];

const inputMM = [
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_1, productCode: "00324/982",
        manufacturer: MM_MANUFACTURER_UNSPECIFIED },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_BLANK, productCode: "00324/982",
        manufacturer: MM_MANUFACTURER_UNSPECIFIED },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_1, productCode: "00324/992",
        manufacturer: MM_MANUFACTURER_UNSPECIFIED },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_1, productCode: "00905/011",
        manufacturer: MM_MANUFACTURER_UNSPECIFIED }, // ss01
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_1, productCode: "00582/0012",
        manufacturer: MM_MANUFACTURER_UNSPECIFIED }, // aw01
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_1, productCode: "01592/0042",
        manufacturer: MM_MANUFACTURER_UNSPECIFIED }, // aw04
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_1, productCode: "02711/0062",
        manufacturer: MM_MANUFACTURER_UNSPECIFIED }, // aw06
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_1, productCode: "01753/03/01/0071",
        manufacturer: MM_MANUFACTURER_UNSPECIFIED }, // ss07
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_1, productCode: "00688/02/01/0101",
        manufacturer: MM_MANUFACTURER_UNSPECIFIED }, // ss10? saw ss01
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_1, productCode: "10093/01/01/0102",
        manufacturer: MM_MANUFACTURER_UNSPECIFIED }, // aw10? saw ss01
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_1, productCode: "02PR/2010/2253 - 2010 02",
        manufacturer: MM_MANUFACTURER_UNSPECIFIED }, // aw10
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_1, productCode: "02PR/2010/2253 - 2010 02",
        manufacturer: MM_MANUFACTURER_UNSPECIFIED }, // aw10
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_1, productCode: "02CC/2012/60001 - 2012 02",
        manufacturer: MM_MANUFACTURER_UNSPECIFIED }, // aw12
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_1, productCode: "02PR/2013/54 - 2013 02",
        manufacturer: MM_MANUFACTURER_UNSPECIFIED }, // aw13
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_1, productCode: "01PR/2021/3473/1 - 2021 01",
        manufacturer: MM_MANUFACTURER_UNSPECIFIED }, // ss21
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_1, productCode: "01PR/2021/3473/1 - 2021 01",
        manufacturer: MM_MANUFACTURER_UNSPECIFIED }, // ss21
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_BLANK, productCode: "01PR/2021/3473/1 - 2021 01",
        manufacturer: MM_MANUFACTURER_UNSPECIFIED }, // ss21
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_BLANK, productCode: MM_CODE_BLANK,
        manufacturer: MM_MANUFACTURER_UNSPECIFIED },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_1, productCode: MM_CODE_BLANK,
        manufacturer: MM_MANUFACTURER_UNSPECIFIED },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_0_10, productCode: MM_CODE_UNSPECIFIED,
        manufacturer: MM_MANUFACTURER_UNSPECIFIED },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_22, productCode: MM_CODE_UNSPECIFIED,
        manufacturer: MM_MANUFACTURER_UNSPECIFIED },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_12, productCode: MM_CODE_UNSPECIFIED,
        manufacturer: MM_MANUFACTURER_UNSPECIFIED },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_15, productCode: MM_CODE_UNSPECIFIED,
        manufacturer: MM_MANUFACTURER_UNSPECIFIED },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_BLANK, productCode: "00324/982",
        manufacturer: MM_MANUFACTURER_UNSPECIFIED },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_1_10, productCode: MM_CODE_UNSPECIFIED,
        manufacturer: MM_MANUFACTURER_UNSPECIFIED },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_4_14, productCode: MM_CODE_UNSPECIFIED,
        manufacturer: MM_MANUFACTURER_UNSPECIFIED },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_6_BLANK, productCode: MM_CODE_UNSPECIFIED,
        manufacturer: MM_MANUFACTURER_UNSPECIFIED },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_6, productCode: MM_CODE_UNSPECIFIED,
        manufacturer: MM_MANUFACTURER_UNSPECIFIED },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_MM6_MMM, productCode: MM_CODE_UNSPECIFIED,
        manufacturer: MM_MANUFACTURER_UNSPECIFIED },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_MM6_MM, productCode: MM_CODE_UNSPECIFIED,
        manufacturer: MM_MANUFACTURER_UNSPECIFIED },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_6_BIG, productCode: MM_CODE_UNSPECIFIED,
        manufacturer: MM_MANUFACTURER_UNSPECIFIED },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_22, productCode: "P01PR 2018 1299/3",
        manufacturer: MM_MANUFACTURER_UNSPECIFIED },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_22, productCode: "P02PR 21 774/1",
        manufacturer: MM_MANUFACTURER_UNSPECIFIED },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_22, productCode: "02PR 2017 774/1",
        manufacturer: MM_MANUFACTURER_UNSPECIFIED },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_22, productCode: "P02PR 2017 774/1",
        manufacturer: MM_MANUFACTURER_UNSPECIFIED },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_22, productCode: "02PR 2019 774/1",
        manufacturer: MM_MANUFACTURER_UNSPECIFIED },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_22, productCode: "P02PR 2019 774/1",
        manufacturer: MM_MANUFACTURER_UNSPECIFIED },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_6, productCode: "P02PR 2019 774/1",
        manufacturer: MM_MANUFACTURER_UNSPECIFIED },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_6, productCode: "02PR 2021 774/1",
        manufacturer: MM_MANUFACTURER_UNSPECIFIED },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_20, productCode: MM_CODE_UNSPECIFIED,
        manufacturer: MM_MANUFACTURER_UNSPECIFIED },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_REP, productCode: MM_CODE_UNSPECIFIED,
        manufacturer: MM_MANUFACTURER_UNSPECIFIED },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_HM, productCode: MM_CODE_UNSPECIFIED,
        manufacturer: MM_MANUFACTURER_UNSPECIFIED },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_TNF, productCode: MM_CODE_UNSPECIFIED,
        manufacturer: MM_MANUFACTURER_UNSPECIFIED },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_SUP, productCode: MM_CODE_UNSPECIFIED,
        manufacturer: MM_MANUFACTURER_UNSPECIFIED },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_1, productCode: MM_CODE_UNSPECIFIED,
            manufacturer: MM_MANUFACTURER_SI },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_1, productCode: MM_CODE_UNSPECIFIED,
            manufacturer: MM_MANUFACTURER_MAC },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_1, productCode: "01SP/2022/55348/1 - 2022 1", // SS22
            manufacturer: MM_MANUFACTURER_UNSPECIFIED },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_1, productCode: "02PR 22 5107/1 2022", // AW22
            manufacturer: MM_MANUFACTURER_UNSPECIFIED },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_BLANK, productCode: MM_CODE_UNSPECIFIED,
            manufacturer: MM_MANUFACTURER_MIF },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_0, productCode: MM_CODE_UNSPECIFIED,
        manufacturer: MM_MANUFACTURER_MIF },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_0, productCode: MM_CODE_BLANK,
        manufacturer: MM_MANUFACTURER_MIF },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_BLANK, productCode: MM_CODE_BLANK,
        manufacturer: MM_MANUFACTURER_UNSPECIFIED },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_BLANK, productCode: "02711/0062",
        manufacturer: MM_MANUFACTURER_UNSPECIFIED },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_BLANK, productCode: MM_CODE_UNSPECIFIED,
        manufacturer: MM_MANUFACTURER_UNSPECIFIED },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_BLANK, productCode: MM_CODE_UNSPECIFIED,
        manufacturer: MM_MANUFACTURER_SI },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_BLANK, productCode: MM_CODE_UNSPECIFIED,
        manufacturer: MM_MANUFACTURER_MII },
    { label: MM.Label, labelNotation: MM_LABEL_NOTATION_10, productCode: MM_CODE_UNSPECIFIED,
        manufacturer: MM_MANUFACTURER_MII },
];

let input = inputMM;

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
        label: IM.Label,
        productCode: "IM02-FD012",
        logoStyle: IM_LOGO_IM_BW,
        manufacturer: IM_MANUFACTURER_IMI,
        sizingSystem: IM_SIZING_ALPHABETICAL,
        fontType: IM_FONT_SLAB_SERIF }))
    console.log(identify({
        label: YY.Label,
        logoStyle: YY.LogoStyle.YY[3],
        productCode: "FY-C10-104",
        sizingSystem: YY.SizingSystem.ALPHABETICAL,
        fontType: YY.FontType.SERIF,
        laundryPosition: YY.LaundryPosition.BELOW
    }));
}
