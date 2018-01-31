// Problem 17
// ==========
//
// If the numbers 1 to 5 are written out in words: one, two, three, four,
// five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
//
// If all the numbers from 1 to 1000 (one thousand) inclusive were written
// out in words, how many letters would be used?
//
// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and
// forty-two) contains 23 letters and 115 (one hundred and fifteen) contains
// 20 letters. The use of "and" when writing out numbers is in compliance
// with British usage.

const numbers = {
  0: '',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
  100: 'hundred',
  1000: 'thousand',
};

function numbAsString(n) {
  if (n === 1000) return 'onethousand';
  let str = '';
  let nStr = n.toString();

  if (n % 100 <= 20) { // tens column
    str += numbers[n % 100]
  } else {
    str += numbers[nStr[nStr.length - 2] + '0'];
    str += numbers[n % 10];
  }
  if (n >= 100) { // hundreds column
    if (str.length) str += 'and';
    str += numbers[nStr[0]] + numbers[100];
  }
  return str;
}

function lettersSumRange(n) {
  let letterSum = 0;

  for (let i = 1; i <= n; i++) {
    letterSum += numbAsString(i).length;
  }

  return letterSum;
}

return lettersSumRange(1000);
