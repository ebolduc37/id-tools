/**
 * Identification index.
 *
 * Barrel file to ____ across the codebase.
 *
 * @author Etienne Bolduc
 */

import Input from "./utils/classes/Input.js";
import { InputCDG } from "./labels/CommeDesGarcons/utils/index.js";
import { InputYY } from "./labels/YohjiYamamoto/utils/index.js";

// CDG
export const CDG = {
    Label: Input.Label.CDG,
    NoYearPrintType: InputCDG.NoYearPrintType
};

// YY
export const YY = {
    Label: Input.Label.YY,
    NoProductCodeType: InputYY.NoProductCodeType,
    LogoStyle: InputYY.LogoStyle,
    SizingSystem: InputYY.SizingSystem,
    FontType: InputYY.FontType,
    LaundryLocation: InputYY.LaundryLocation
};

export { default as identify } from "./identify.js";
export { default as idList } from "./idList.js";
