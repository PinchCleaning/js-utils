// Utils
const isObject = require("./utils/isObject");
const classnames = require("./utils/classnames");
const capitalize = require("./utils/capitalize");
const createList = require("./utils/createList");
const getCurrentDate = require("./utils/getCurrentDate");
const generateUniqueId = require("./utils/generateUniqueId");
const convertFileToBase64 = require("./utils/convertFileToBase64");

const jsUtils = {
  isObject: isObject,
  classnames: classnames,
  capitalize: capitalize,
  createList: createList,
  getCurrentDate: getCurrentDate,
  generateUniqueId: generateUniqueId,
  convertFileToBase64: convertFileToBase64,
};

module.exports = jsUtils;
