const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

 function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}

function sortstr(str) {
  return str.split('').sort().join('');
}

function createDreamTeam(array) {
  let kol=0;
  let team='';
  if (!Array.isArray(array)) return false;
  for (let i of array){
    if (typeof(i)=='string'){
      i = i.replace(/\s/g, '');
      var first = i.charAt(0);
      if (isLetter(first))
      {
        kol++;
        team+=first.toUpperCase();
      }
    }
  }
  if ((kol==0) || (array.length==0)) {return false;}
  else {
    let dreamteam = sortstr(team);
    return dreamteam;
  }
}

module.exports = {
  createDreamTeam
};
