// Problem 5
// =========
//
// 2520 is the smallest number that can be divided by each of the numbers
// from 1 to 10 without any remainder.
//
// What is the smallest number that is evenly divisible by all of the numbers
// from 1 to 20?


function smallestNumbDivisiableBy1toN(n) { // n must be mult of 10 for this func
  for (let num = n; n === n; num += n) {
    let countFlag = 0;
    for (let divisor = 2; divisor < n; divisor++) {
      if (num % divisor === 0) {
        countFlag++;
      }
    }
    if (countFlag === n - 2) return num;
  }
}

return smallestNumbDivisiableBy1toN(20);
