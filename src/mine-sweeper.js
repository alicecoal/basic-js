const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(a) {
  let b = new Array(a.length);
  for (let i=0;i<b.length;i++)
  b[i]=new Array(a[i].length).fill(0);
    for(let i = 0; i < a.length; i++){
      for(let j = 0; j < a[i].length; j++){
          if (i>0){
            if (a[i-1][j]) b[i][j]++;
          }
          if (i>0 && j>0){
            if (a[i-1][j-1]) b[i][j]++;
          }
          if (j>0){
            if (a[i][j-1]) b[i][j]++;
          }
          if (i>0 && j<a[i].length-1){
            if (a[i-1][j+1]) b[i][j]++;
          }
          if (j<a[i].length-1){
            if (a[i][j+1]) b[i][j]++;
          }
          if (i<a.length-1 && j<a[i].length-1){
            if (a[i+1][j+1]) b[i][j]++;
          }
          if (i<a.length-1){
            if (a[i+1][j]) b[i][j]++;
          } 
          if (i<a.length-1 && j>0){
            if (a[i+1][j-1]) b[i][j]++;
          }
      }
    }
    return b;
  }
module.exports = {
  minesweeper
};
