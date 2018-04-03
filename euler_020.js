// Problem 20
// ==========
//
// n! means n * (n - 1) * ... * 3 * 2 * 1
//
// Find the sum of the digits in the number 100!

const ListNode = function (val) {
  this.val = val;
  this.next = null;
};

const factorialDigitSum = function (n) {
  let head = new ListNode (1);

  for (let i = 2; i <= n; i++) {
    let curr = head;
    let prev;
    let carry = 0;

    while (curr) {
      let nextCarry = 0;
      curr.val *= i;

      if (curr.val >= 10000) {
        nextCarry = Math.floor(curr.val / 10000);
      }

      curr.val += carry - (nextCarry * 10000);
      carry = nextCarry;
      prev = curr;
      curr = curr.next;
    }

    if (carry) prev.next = new ListNode(carry);
  }

  let digitSum = 0;

  while (head) {
    digitSum = head.val.toString().split``.reduce((a, i) => a + Number(i) , digitSum);
    head = head.next;
  }

  return digitSum;
};

return factorialDigitSum(100);
