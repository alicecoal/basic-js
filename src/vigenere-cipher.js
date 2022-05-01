const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 function repeatstr(key,mes) {
  let res = "";
  let alph='abcdefghijklmnopqrstuvwxyz';
  let len = key.length;
  let j = 0;
  let i=0;
  while (i<mes.length) {
      if (j % len === 0) {
          j = 0;
      }
      let x = alph.indexOf(mes[i].toLowerCase());
      if (x!=-1) {res += key[j];j++;}
      i++;
      
  }
  return res;
}

class VigenereCipheringMachine {
  constructor(name){
    if (name==null || name==true) this.name='direct';
    else this.name='reverse';
    this.square=[];
    this.alphabet='abcdefghijklmnopqrstuvwxyz';
  }
  generateSquare() {
    for (let i = 0; i < this.alphabet.length; i++) {
        let row = this.alphabet.slice(i);
        row += this.alphabet.slice(0, i);
        this.square.push(row);
    }
}
encrypt(message, key) {
  if (message==null ||key==null) throw new Error("Incorrect arguments!");
    let str = "";
    let newKey = repeatstr(key, message);
    newKey+='a';
    this.generateSquare();
    let k = 0;
    for (let it = 0; it < message.length; it++) {
        let i = this.alphabet.indexOf(message[it].toLowerCase());
        let j = this.alphabet.indexOf(newKey[k].toLowerCase());
        if (i!=-1){
          str += this.square[i][j];
          k++;
        } else str += message[it];
    }
    str=str.toUpperCase();
    if (this.name=='direct') return str;
    else return str.split("").reverse().join("");
}
decrypt(message, key) {
    if (message==null ||key==null) throw new Error("Incorrect arguments!");
    let str = "";
    let newKey = repeatstr(key, message);
    this.generateSquare();
    let k = 0;
    newKey+='a';
    for (let it = 0; it < message.length; it++) {
        let i = this.alphabet.indexOf(newKey[k].toLowerCase());
        let j = this.square[i].indexOf(message[it].toLowerCase());
        if (j!=-1){
          str += this.alphabet[j];
          k++;
        }
        else str += message[it];
    }
    if (this.name=='direct') return str.toUpperCase();
    else return str.toUpperCase().split("").reverse().join("");
}
}

module.exports = {
  VigenereCipheringMachine
};
