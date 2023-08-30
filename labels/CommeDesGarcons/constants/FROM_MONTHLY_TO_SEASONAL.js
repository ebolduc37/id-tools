/**
 * Initialization of YEAR_SEASONAL.
 *
 * Initialization as a constant of the year and quarter that the product code stopped following
 * the monthly pattern and began following the seasonal pattern.
 *
 * @author Etienne Bolduc
 */

/**
 * Year and quarter at which the product code pattern changed from monthly to seasonal notation.
 * @constant
 * @readonly
 * @type {{year: number, quarter: number}}
 * @default
 */
const FROM_MONTHLY_TO_SEASONAL = Object.freeze({ year: 2001, quarter: 4 });

export default FROM_MONTHLY_TO_SEASONAL;
