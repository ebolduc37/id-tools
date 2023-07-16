/**
 * Initialization of SEASON_ID.
 *
 * Initialization of the season IDs and their corresponding conditional function on collections
 * to use as a filter on possible candidates.
 *
 * @author Etienne Bolduc
 */

import { Seasons, Collection } from "../../utils/index.js";

// Setting preliminary functions to simplify the notation below
const REG = (col, lastDigit) => col.isAfterOrIn(new Collection(2003, Seasons.W)) && col.year % 10 === lastDigit;
const REG_S = (col, lastDigit) => REG(col, lastDigit) && col.isS();
const REG_W = (col, lastDigit) => REG(col, lastDigit) && col.isW();

/**
 * @callback lambda
 * @param {Collection} col - Collection to evaluate a condition on.
 * @return {boolean} True if the collection satisfies the condition; false otherwise.
 */

/**
 * Enum for the season IDs and conditional functions to filter accordingly.
 * @constant
 * @readonly
 * @enum {lambda}
 */
const SEASON_ID = Object.freeze({

  /** @param {Collection} col @return {boolean} */
  A: col => REG_S(col, 8),
  /** @param {Collection} col @return {boolean} */
  B: col => REG_W(col, 8),
  /** @param {Collection} col @return {boolean} */
  C: col => REG_S(col, 9) || col.isEqualTo(new Collection(2001, Seasons.W)),
  /** @param {Collection} col @return {boolean} */
  D: col => REG_W(col, 9) || col.isEqualTo(new Collection(2001, Seasons.W)),
  /** @param {Collection} col @return {boolean} */
  E: col => REG_S(col, 0) || col.isEqualTo(new Collection(2002, Seasons.S)),
  /** @param {Collection} col @return {boolean} */
  F: col => REG_W(col, 0) || col.isEqualTo(new Collection(2002, Seasons.S)),
  /** @param {Collection} col @return {boolean} */
  G: col => REG_S(col, 1) || col.isEqualTo(new Collection(2002, Seasons.W)),
  /** @param {Collection} col @return {boolean} */
  H: col => REG_W(col, 1) || col.isEqualTo(new Collection(2002, Seasons.W)),
  /** @param {Collection} col @return {boolean} */
  I: col => REG_S(col, 2) || col.isEqualTo(new Collection(2003, Seasons.S)),
  /** @param {Collection} col @return {boolean} */
  J: col => REG_W(col, 2) || col.isEqualTo(new Collection(2003, Seasons.S)),
  /** @param {Collection} col @return {boolean} */
  K: col => REG_S(col, 3) || col.isEqualTo(new Collection(2003, Seasons.W)),
  /** @param {Collection} col @return {boolean} */
  L: col => REG_W(col, 3),
  /** @param {Collection} col @return {boolean} */
  M: col => REG_S(col, 4),
  /** @param {Collection} col @return {boolean} */
  N: col => REG_W(col, 4),
  /** @param {Collection} col @return {boolean} */
  O: col => REG_S(col, 5),
  /** @param {Collection} col @return {boolean} */
  P: col => REG_W(col, 5),
  /** @param {Collection} col @return {boolean} */
  Q: col => REG_S(col, 6),
  /** @param {Collection} col @return {boolean} */
  R: col => REG_W(col, 6),
  /** @param {Collection} col @return {boolean} */
  S: col => REG_S(col, 7),
  /** @param {Collection} col @return {boolean} */
  T: col => REG_W(col, 7),
  /** @param {Collection} col @return {boolean} */
  U: col => col.isProductionYear(),
  /** @param {Collection} col @return {boolean} */
  Z: col => col.isProductionYear(),
});

export default SEASON_ID;
