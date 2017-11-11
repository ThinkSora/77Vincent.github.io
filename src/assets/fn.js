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
  },
  /**
   * 从某个方向修剪数组
   * @param {Array} 待修剪的数组
   * @param {Number} 修剪终点
   * @param {Boolean} [direction=true] 修剪方向，默认从头
   * @return {Array} 修剪后的数组
   */
  trimArray(array, toIndex = 0, direction = true) {
    if (direction) {
      return array.slice(toIndex, array.length);
    } else {
      return array.slice(0, array.length - toIndex);
    }
  }
};