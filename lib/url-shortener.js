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

// function decode(str) {}