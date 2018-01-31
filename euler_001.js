// Problem 1
// =========
//
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.


function multiplesOf3And5Sum() {
  let sum = 0;
  let num = 3;

  while (num < 1000) {
    sum += num;
    num += 3;
  }

  num = 5;
  while (num < 1000) {
    sum += num;
    num += 5;
  }

  num = 15;
  while (num < 1000) {
    sum -= num;
    num += 15;
  }

  return sum;
}

return multiplesOf3And5Sum();
