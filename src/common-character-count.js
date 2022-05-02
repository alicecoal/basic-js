const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(a,b) {
  let kol=0;
  for (let i = 0; i < a.length; i++) {
    let x = b.indexOf(a[i]);
    if (x!=-1) {
      kol++;
      b = b.replace(b[x],'');
    }
  }
  return kol;
}

module.exports = {
  getCommonCharacterCount
};
