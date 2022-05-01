const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr1) {
  if (!(arr1 instanceof Array)) throw new Error("\'arr\' parameter must be an instance of the Array!");
  let arr2=arr1.slice(0);
  let len = arr2.length;
  let i = 0;
  while (i<len) {
    if ((arr2[i]=='--double-prev' || arr2[i]=='--discard-prev') && arr2[i-2]=='--discard-next')
    {
        arr2.splice(i,1);
        len--;
    }
    i++;
  }
  let arr=arr2.slice(0);
  i=0;
  while (i<len) {
    switch (arr[i]){
      case '--discard-next':
        if (i!=len-1){
            arr.splice(i,2);
            len-=2;
        }
        else {
            arr.splice(i,1);
            len--;
        }
        break;
      case '--discard-prev':
        if (i!=0){
            arr.splice(i-1,2);
            len-=2;
        }
        else { 
            arr.splice(i,1);
            len--;
        }
        break;
      case '--double-next':
        if (i!=len-1){
            arr.splice(i,1,arr[i+1]);
        }
        else {
            arr.splice(i,1);
            len--;
        }
        break;
      case '--double-prev':
        if (i!=0){
            arr.splice(i,1,arr[i-1]);
        }
        else {
            arr.splice(i,1);
            len--;
        }
        break;
    }
    i++;
  }
  return arr;
}

module.exports = {
  transform
};
