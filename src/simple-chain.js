const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    let x = '';
    if (value === null) x = '( null )';
    else if (typeof value === 'undefined') x = '( )';
    else x = '( '+ value.toString() + ' )';
    this.arr.push(x);
    return this;
  },
  removeLink(pos) {
    pos--;
    if (typeof pos != 'number' || pos<0 || pos>=this.arr.length) 
    {
      this.arr = [];
      throw new Error("You can\'t remove incorrect link!");
    }
    else {
      if (!Number.isInteger(pos)) 
      {
        this.arr = [];
        throw new Error("You can\'t remove incorrect link!");
      }
      else {
        this.arr.splice(pos,1);
        return this;
      }
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let chain = this.arr.join('~~');
    this.arr=[];   
    return chain;
  }
};

module.exports = {
  chainMaker
};
