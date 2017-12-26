// Power digit sum
// Problem 16
// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
//
// What is the sum of the digits of the number 2^1000?
const BigNumber = require('bignumber.js');

function powerDigitSum(base, power) {
  return BigNumber(base).toPower(1000).c
    .map(x => x.toString().split('').reduce((a,i) => a + Number(i), 0))
    .reduce((a, i) => a + i, 0);
}

console.log(powerDigitSum(2, 1000));
