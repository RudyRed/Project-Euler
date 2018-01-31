// Problem 16
// ==========
//
// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
//
// What is the sum of the digits of the number 2^1000?

const ListNode = function (val) {
  this.val = val;
  this.next = null;
};

const powerDigitSum = function (base, power) {
  let list = new ListNode(1);
  let nodeLimit = 10;

  for (let i = 0; i < power; i++) {
    let curr = list;
    let prev = null;
    let carried = 0;
    while (curr) {
      curr.val *= base;
      curr.val += carried;
      carried = (curr.val - (curr.val % nodeLimit)) / nodeLimit;
      curr.val = curr.val % nodeLimit;
      prev = curr;
      curr = curr.next;
      }
      if (carried) prev.next = new ListNode(carried);
  }

  let output = 0;

  while (list) {
    output += list.val;
    list = list.next;
  }

  return output;
};

return powerDigitSum(2, 1000);
