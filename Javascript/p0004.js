// Largest palindrome product
// Problem 4
// A palindromic number reads the same both ways. The largest palindrome made from
// the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.

function isPalindrome(num) {
  let arr = num.toString().split('');
  let reverse = [];
  for (let i = arr.length -1; i >= 0; i--) {
    reverse.push(arr[i]);
  }
  if (arr.join('') === reverse.join('')) return true;
  return false;
}

function largestProductPalindrome() {
  let largestNum = 0;
  for (let i = 999; i >= 100; i--) {
    for (let j = 999; j >= 100; j--) {
      if (isPalindrome(j * i) && j * i > largestNum) {
        largestNum = j * i;
      }
    }
  }
  return largestNum;
}

console.log(largestProductPalindrome());

// Answer: 906609
