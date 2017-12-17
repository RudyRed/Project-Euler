// 10001st prime
//
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13,
// we can see that the 6th prime is 13.
//
// What is the 10 001st prime number?

function isPrime(num) {
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }
  const max = Math.floor(Math.sqrt(num));
  for (let i = 3; i <= max; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function primeAtN(n) {
  if (n === 1) return 2;
  let primeCount = 1;
  let currentPrime = 2;
  for (let i = 3; i < Number.MAX_SAFE_INTEGER; i += 2) {
    if (isPrime(i)) {
      primeCount++;
      currentPrime = i;
    }
    if (primeCount === n) {
      break;
    }
  }
  return currentPrime;
}

console.log(primeAtN(10001))

// Answer: 104743
