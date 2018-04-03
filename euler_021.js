// Problem 21
// ==========
//
// Let d(n) be defined as the sum of proper divisors of n (numbers less than
// n which divide evenly into n).
// If d(a) = b and d(b) = a, where a =/= b, then a and b are an amicable pair
// and each of a and b are called amicable numbers.
//
// For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22,
// 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1,
// 2, 4, 71 and 142; so d(284) = 220.
//
// Evaluate the sum of all the amicable numbers under 10000.


const sumOfAmicableNumbers = function (max) {
  const amicableNumbers = {};

  for (let num = 1; num <= max; num++) {
    if (amicableNumbers[num]) continue;
    const divisors = [1];

    for (let i = 2; i <= num / 2; i++) {
      if (num % i == 0) divisors.push(i);
    }

    const sum = divisors.reduce((a, i) => a + i, 0);

    if (sum === num) continue;

    const sumDivisors = [1];

    for (let i = 2; i <= sum / 2; i++) {
      if (sum % i == 0) sumDivisors.push(i);
    }

    const sumsDivisorsSum = sumDivisors.reduce((a, i) => a + i, 0);


    if (sumsDivisorsSum === num) {
      amicableNumbers[num] = true;
      amicableNumbers[sum] = true;
    }

  }

  return Object.keys(amicableNumbers).reduce((a, i) => a + Number(i), 0);
}


return sumOfAmicableNumbers(10000);
