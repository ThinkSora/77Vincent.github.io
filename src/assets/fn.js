/**
 * Global custom function library
 */
import moment from "moment";

export default {
  formatDate(dateString) {
    const format = "YYYY-MM-DD";
    return moment(dateString).calendar(null, {
      sameDay: format,
      nextDay: format,
      nextWeek: format,
      lastDay: format,
      lastWeek: format,
      sameElse: format
    });
  },
  /**
   * Convert string in to numbers base on its char code 
   * @param {String} srouce string 
   * @returns {String} charcode in string
   */
  stringToNumber(string) {
    var arr = [];
    for (let i = 0; i < string.length; i++) {
      arr[i] = (string[i].charCodeAt() + "")[i];
    }
    return arr.join("");
  }
};