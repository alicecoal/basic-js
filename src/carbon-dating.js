const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(x) {
  if ((typeof(x)!='string')  || (isNaN(x)) || (x===null) || (Number(x)<1) || (Number(x)>15)) {return false;}
  x = Number(x);
  let time = 0;
  time = Math.ceil((Math.log(15/x))/(0.693/5730));
  return time;
}

module.exports = {
  dateSample
};
