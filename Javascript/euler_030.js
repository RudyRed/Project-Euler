// Problem 30
// ==========
//
// Surprisingly there are only three numbers that can be written as the sum
// of fourth powers of their digits:
//
//   1634 = 1^4 + 6^4 + 3^4 + 4^4
//   8208 = 8^4 + 2^4 + 0^4 + 8^4
//   9474 = 9^4 + 4^4 + 7^4 + 4^4
//
// As 1 = 1^4 is not a sum it is not included.
//
// The sum of these numbers is 1634 + 8208 + 9474 = 19316.
//
// Find the sum of all the numbers that can be written as the sum of fifth
// powers of their digits.


function powersSum(power) {
  let arr = [];

  for (let i = 2; i < 1000000; i++) {
    let iArr = i.toString().split('').map(x => Number(x));
    let compare = 0;
    for (let num of iArr) {
      compare += Math.pow(num, power);
    }
    if (i === compare) {
      arr.push(i);
    }
  }
  let output = 0;
  for (let i of arr) {
    output += i;
  }
  return output;
}

return powersSum(5);
