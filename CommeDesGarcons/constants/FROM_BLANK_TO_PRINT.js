/**
 * Initialization of FROM_BLANK_TO_PRINT.
 *
 * Initialization as a constant of the year and quarter that the year was printed
 * on every care label except in certain known cases.
 *
 * @author Etienne Bolduc
 */

/**
 * Year and quarter at which the year print broadly appeared on all care labels.
 * @constant
 * @readonly
 * @type {{year: number, quarter: number}}
 * @default
 */
const FROM_BLANK_TO_PRINT = Object.freeze({ year: 1988, quarter: 1 });

export default FROM_BLANK_TO_PRINT;
