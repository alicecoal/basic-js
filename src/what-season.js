const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date==null) return 'Unable to determine the time of year!';
  if ((Object.getOwnPropertyNames(date).length>0) || (isNaN(Date.parse(date)))) throw new Error("Invalid date!");
  let m = date.getMonth();
  if (((m>=0) && (m<2)) || (m==11)) return 'winter';
  else if ((m>1) && (m<5)) return 'spring';
  else if ((m>4) && (m<8)) return 'summer';
  else return 'autumn';
}

module.exports = {
  getSeason
};
