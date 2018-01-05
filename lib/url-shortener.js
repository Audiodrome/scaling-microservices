const alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ";
const base = alphabet.length;

function encode(num) {
  let encoded = '';
  while (num) {
    let remainder = num % base;
    num = Math.floor(num / base);
    encoded = alphabet[remainder].toString() + encoded;
  }

  return encoded;
}

function decode(str) {
  let decoded = 0;
  while (str) {
    let index = alphabet.indexOf(str[0]);
    let power = str.length - 1;
    decoded += index * (Math.pow(base, power));
    str = str.substring(1);
  }
  return decoded;
}

const dec = decode('www.google.com');
console.log('dec', dec);
// const enc = encode();
// console.log('enc', enc);


module.exports = {
  encode: encode,
  decode: decode,
}
