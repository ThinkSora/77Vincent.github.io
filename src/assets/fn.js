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
  }
};