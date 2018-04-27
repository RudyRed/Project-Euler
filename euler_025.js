// Problem 25
// ==========
//
// The Fibonacci sequence is defined by the recurrence relation:
//
//   F[n] = F[n[1]] + F[n[2]], where F[1] = 1 and F[2] = 1.
//
// Hence the first 12 terms will be:
//
//   F[1] = 1
//   F[2] = 1
//   F[3] = 2
//   F[4] = 3
//   F[5] = 5
//   F[6] = 8
//   F[7] = 13
//   F[8] = 21
//   F[9] = 34
//   F[10] = 55
//   F[11] = 89
//   F[12] = 144
//
// The 12th term, F[12], is the first term to contain three digits.
//
// What is the first term in the Fibonacci sequence to contain 1000 digits?



const ListNode = function (val) {
  this.val = val;
  this.next = null;
};

const fibonacciNDigits = function (n) {
  let term = 3;
  let headLast = new ListNode(1);
  let headPrev = new ListNode(2);
  let numbOfDigits = 1;

  while (numbOfDigits < n) {
    term++;
    let currLast = headLast;
    let currPrev = headPrev;
    let carry = 0;
    let currNew = new ListNode(0);
    let currNewHead = currNew;
    let previousCurrPrevVal = 0;

    while (currPrev) {
      let sum = carry;
      carry = 0;

      if (currLast) {
        sum += currLast.val;
        currLast = currLast.next;
      }

      previousCurrPrevVal = currPrev.val;
      sum += currPrev.val;
      currPrev = currPrev.next;

      if (sum >= 10000000000) {
        carry = 1;
        sum -= 10000000000;
      }

      currNew.next = new ListNode(sum);
      currNew = currNew.next;
    }

    if (carry) {
      currNew.next = new ListNode(1);
      numbOfDigits++;
    } else if (currNew.val.toString().length > previousCurrPrevVal.toString().length) {
      numbOfDigits++;
    }

    headLast = headPrev;
    headPrev = currNewHead.next;
  }

  return term;
};

return fibonacciNDigits(1000);
