const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(arr) {
  let res = {};
  for (let i = 0; i < arr.length; i++) 
  {
    let d = [];
    let domain = arr[i].split('.');
    for (let j = domain.length-1; j >= 0; j--) 
    {
      d.push(`.${domain[j]}`);
      const cur = d.join('');
      if (res[cur]) res[cur] = res[cur]+1;
      else res[cur] = 1;
    }
  }
  return res;
}

module.exports = {
  getDNSStats
};
