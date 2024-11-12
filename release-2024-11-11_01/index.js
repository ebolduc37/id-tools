/**
 * Identification index.
 *
 * Barrel file to ____ across the codebase.
 *
 * @author Etienne Bolduc
 */

import Input from "./utils/classes/Input.js";
import { InputCDG } from "./labels/CommeDesGarcons/utils/index.js";
import { InputIM } from "./labels/IsseyMiyake/utils/index.js";
import { InputMM } from "./labels/MaisonMargiela/utils/index.js";
import { InputYY } from "./labels/YohjiYamamoto/utils/index.js";

// CDG
export const CDG = {
    Label: Input.Label.CDG,
    NoYearPrint: InputCDG.NoYearPrint
};

// IM
export const IM = {
    Label: Input.Label.IM,
    LogoStyle: InputIM.LogoStyle,
    Manufacturer: InputIM.Manufacturer,
    SizingSystem: InputIM.SizingSystem,
    FontType: InputIM.FontType
};

// MM
export const MM = {
    Label: Input.Label.MM,
    NoProductCode: InputMM.NoProductCode,
    LabelNotation: InputMM.LabelNotation,
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
