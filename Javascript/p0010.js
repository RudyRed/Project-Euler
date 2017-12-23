// Summation of primes
// Problem 10
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//
// Find the sum of all the primes below two million.


function isPrime(n) {
  if (n % 2 === 0) return false;
  for (let x = 3; x <= Math.ceil(Math.sqrt(n)); x+= 2) {
    if (n % x === 0) {
      return false
    }
  }
  return true;
}


function sumOfPrimesBelow(n) {
  let sum = 2;
  for (let num = 3; num < n; num+= 2) {
    if (isPrime(num)) {
      sum += num;
    }
  }
  return sum;
}

console.log(sumOfPrimesBelow(2000000));
