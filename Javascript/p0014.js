// Problem 14: Longest Collatz sequence
// The following iterative sequence is defined for the set of positive integers:
//
// n → n/2 (n is even)
// n → 3n + 1 (n is odd)
//
// Using the rule above and starting with 13, we generate the following sequence:
//
// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains
// 10 terms. Although it has not been proved yet (Collatz Problem), it is thought
// that all starting numbers finish at 1.
//
// Which starting number, under one million, produces the longest chain?
//
// NOTE: Once the chain starts the terms are allowed to go above one million.

function longestCollatzChain(n) {
  let maxChainLength = 0;
  let responsiableNum = 0;
  for (let i = 1; i < n; i++) {
    let num = i;
    for (let j = 2; j < 10 ** 10; j++) {
      if (num % 2) {
        num = 3 * num + 1;
      } else {
        num /= 2;
      }
      if (num === 1) {
        if (j > maxChainLength) {
          maxChainLength = j;
          responsiableNum = i;
        }
        break;
      }
    }
  }
  return responsiableNum;
}

console.log(longestCollatzChain(1000000))

// Answer: 837799
