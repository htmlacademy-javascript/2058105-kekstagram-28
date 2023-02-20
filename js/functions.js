const findStringLength = (string, minLength) => String(string).length >= minLength;

findStringLength('house', 5);

const isPalindrome = (string) => {
  string = String(string).toLowerCase().replaceAll(' ', '');
  return string === string.split('').reverse().join('');
};

isPalindrome('Лёша на полке клопа нашёл ');

const findNumber = (string) => {
  const onlyNumbers = String(string).replace(/\D/g, '');
  return parseInt(onlyNumbers, 10);
};

findNumber('-2023 year 0.3');
findNumber('а я томат');

const createString = (string, length, symbols) => {
  if(string.length >= length) {
    return string;
  }
  while(string.length < length) {
    const cutSymbols = length - string.length;
    string = symbols.slice(0, cutSymbols) + string;
  }
  return string;
};

createString('house', 10, 's');
