const findStringLength = (string, minLength) => String(string).length >= minLength;

const isPalindrome = (string) => {
  string = String(string).toLowerCase().replaceAll(' ', '');
  return string === string.split('').reverse().join('');
};

const findNumber = (string) => {
  const onlyNumbers = String(string).replace(/\D/g, '');
  return parseInt(onlyNumbers, 10);
};

const createString = (string, length, symbols) => {
  while(string.length < length) {
    const cutSymbols = length - string.length;
    string = symbols.slice(0, cutSymbols) + string;
  }
  return string;
};

export {findStringLength, isPalindrome, findNumber, createString};
