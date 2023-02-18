function findStringLength(stringValue, minLength) {
  return String(stringValue).length >= minLength;
}

findStringLength('house', 5);

function isPalindrome(stringValue) {
  stringValue = stringValue.toLowerCase();
  stringValue = stringValue.replaceAll(' ', '');
  return stringValue === stringValue.split('').reverse().join('');
}

isPalindrome('Лёша на полке клопа нашёл ');

function findNumber(stringValue) {
  let onlyNumbers = '';
  for(const char of stringValue) {
    if(!isNaN(parseInt(char, 10))) {
      onlyNumbers += char;
    }
  }return parseInt(onlyNumbers, 10);
}

findNumber('-2023 year 0.3');
findNumber('а я томат');

function createString(stringValue, minLength, symbols) {
  while(stringValue.length < minLength) {
    if(symbols.length <= minLength - stringValue) {
      stringValue = symbols + stringValue;
    }else {
      const cutSymbols = minLength - stringValue.length;
      stringValue = symbols.slice(0, cutSymbols) + stringValue;
    }
  }
  return stringValue;
}

createString('q', 4, 'werty');
