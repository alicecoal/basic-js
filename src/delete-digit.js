const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(x) {
  let s = String(x);
  let max = 0;
  for (let i = 0; i < s.length; i++){
    let n = s.replace(s[i],'');
    if (max<Number(n)) max = Number(n);
  }
  return max;
}

module.exports = {
  deleteDigit
};
