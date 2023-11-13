/**
 * Initialization of YEAR_SEASONAL.
 *
 * Initialization as a constant containing the year and quarter
 * where the COMME des GARÇONS product code changed from
 * the monthly pattern and to the seasonal pattern.
 *
 * @author Etienne Bolduc
 */

/**
 * Year and quarter where the COMME des GARÇONS product code changed from monthly to seasonal pattern.
 * @constant
 * @readonly
 * @type {{year: number, quarter: number}}
 * @default
 */
const FROM_MONTHLY_TO_SEASONAL = Object.freeze({ year: 2001, quarter: 4 });

export default FROM_MONTHLY_TO_SEASONAL;
