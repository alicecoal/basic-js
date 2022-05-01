const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str,options) {
  if (!options.hasOwnProperty('additionSeparator')) options.additionSeparator='|';
  if (!options.hasOwnProperty('separator')) options.separator='+';
  if (!options.hasOwnProperty('addition')) options.addition='';
  if (!options.hasOwnProperty('additionRepeatTimes')) options.additionRepeatTimes=1;
  if (!options.hasOwnProperty('repeatTimes')) options.repeatTimes=1;
  options.addition=String(options.addition);
  str=String(str);
  let add = '';
  let ans = '';
    if (options.additionRepeatTimes>=1){
      add = options.addition;
      for (let i = 0; i < options.additionRepeatTimes-1; i++){
        add += options.additionSeparator;
        add += options.addition;
      }
  }
    if (options.repeatTimes>=1){
      ans = str;
      for (let i = 0; i < options.repeatTimes-1; i++){
        ans += add;
        ans += options.separator;
        ans += str;
      }
      ans += add;
  }
  return ans; 
}

module.exports = {
  repeater
};
