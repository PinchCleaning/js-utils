/**
 * Convert object 'File' to Base64
 * @param {File} file File
 * @returns {Promise<string>} Base64
 */
async function convertFileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader(); // Create Reader object
    reader.readAsDataURL(file); // Read url

    // Resolve file
    reader.onload = () => {
      resolve(reader.result);
    };

    // There are error to convert file to base64
    reader.onerror = (error) => {
      reject(error);
    };
  });
}

module.exports = convertFileToBase64;
