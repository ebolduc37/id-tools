/**
 * Initialization of function deepFreeze.
 *
 * Initialization of a function to freeze all properties of an object or function.
 *
 * @author Etienne Bolduc
 */

/**
 * Freeze an item and all its properties.
 * @param {(object|function)} item - Item to freeze with its properties.
 * @return {(object|function)} Frozen item.
 */
function deepFreeze(item) {
  Object.freeze(item); // shallow freeze the top level
  Object.getOwnPropertyNames(item).forEach(function (prop) {
    if (item[prop] != null && typeof item[prop] === "object" || typeof item[prop] === "function") {
      deepFreeze(item[prop]);
    }
  });
  return item;
}

export default deepFreeze;
