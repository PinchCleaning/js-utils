/**
 * Capitalize string
 * @param {string} str String
 * @returns {string} String capitalized
 */
function capitalize(str) {
  // Validate string
  if (typeof str !== "string") return "";

  // Capitalize string
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = capitalize;
