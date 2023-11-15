/**
 * Global utils index.
 *
 * Barrel file to export glabal classes, enums, and functions across the codebase.
 *
 * @author Etienne Bolduc
 */

// classes
export { default as Collection } from "./classes/Collection.js";
export { default as Identification } from "./classes/Identification.js";
export { default as Input } from "./classes/Input.js";
export { default as Line } from "./classes/Line.js";
export { default as OperationPeriod } from "./classes/OperationPeriod.js";
// enums
export { default as Labels } from "./enums/Labels.js";
// functions
export { default as deepFreeze } from "./functions/deepFreeze.js";
export { default as isNumeric } from "./functions/isNumeric.js";
export { default as standardize } from "./functions/standardize.js";



