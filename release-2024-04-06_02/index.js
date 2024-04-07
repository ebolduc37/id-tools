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
    NoYearPrint: InputCDG.NoYearPrint
};

// YY
export const YY = {
    Label: Input.Label.YY,
    NoProductCode: InputYY.NoProductCode,
    LogoStyle: InputYY.LogoStyle,
    SizingSystem: InputYY.SizingSystem,
    FontType: InputYY.FontType,
    LaundryPosition: InputYY.LaundryPosition
};

export { default as identify } from "./identify.js";
export { default as extract } from "./extract.js";
