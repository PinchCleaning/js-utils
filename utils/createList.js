/**
 * Create a list with 'x' items
 * @param {number} len Array length
 * @returns {Array} Array of numbers
 */
function createList(len) {
  if (typeof len !== "number") return [];
  return Array.from({ length: len }, (_, i) => i + 1);
}

module.exports = createList;
