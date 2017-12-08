// Largest prime factor
//
// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

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

function largestPrimeFactor(num) {
  const max = Math.floor(Math.sqrt(num));
  let maxPrime = false;
  for (let i = 1; i < max; i++) {
    if (num % i === 0) {
      if(isPrime(num/i)) {
        return num/i;
      }
      if(isPrime(i)) {
        maxPrime = i;
      }
    }
  }
  return maxPrime;
}

console.log(largestPrimeFactor(600851475143))

// Answer: 6857
