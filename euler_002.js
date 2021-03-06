// Problem 2
// =========
//
// Each new term in the Fibonacci sequence is generated by adding the
// previous two terms. By starting with 1 and 2, the first 10 terms will be:
//
//                   1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//
// Find the sum of all the even-valued terms in the sequence which do not
// exceed four million.


function fibEvenSumBelow(max) {
  let sum = 2;
  let secondLastNum = 1;
  let lastNum = 2
  let num = 3;

  while (num < max) {
    if (num % 2 === 0) {
      sum += num;
    }
    secondLastNum = lastNum;
    lastNum = num;
    num = secondLastNum + lastNum;
  }
  return sum;
}

return fibEvenSumBelow(4000000);
