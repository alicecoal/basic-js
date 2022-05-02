const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function compareNumbers(a, b) {
  return a - b;
}

function sortByHeight(height) {
  let arr = [];
  for (let i = 0; i < height.length; i++) 
  {
    if (height[i] != -1) 
    {
      arr.push(height[i]);
    }
  }
  arr.sort(compareNumbers);
  for (let i = 0; i < height.length; i++) 
  {
    if (height[i] == -1) {
     arr.splice(i, 0, -1);
    }
  }

  return arr;
}

module.exports = {
  sortByHeight
};
