/**
 * Get current date
 * @returns {object} Date string and Today Date
 */
function getCurrentDate() {
  const currentDate = new Date(); // Get current date

  const day = currentDate.getDate(); // Get day
  const month = currentDate.getMonth() + 1; // Get month
  const year = currentDate.getFullYear(); // Get year

  return {
    today: currentDate,
    dateString: `${month}/${day}/${year}`,
  };
}

module.exports = getCurrentDate;
