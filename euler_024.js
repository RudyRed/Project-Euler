// Problem 24
// ==========
//
// A permutation is an ordered arrangement of objects. For example, 3124 is
// one possible permutation of the digits 1, 2, 3 and 4. If all of the
// permutations are listed numerically or alphabetically, we call it
// lexicographic order. The lexicographic permutations of 0, 1 and 2 are:
//
//                     012   021   102   120   201   210 // 24 / 4 = 6
//
// What is the millionth lexicographic permutation of the digits 0, 1, 2, 3,
// 4, 5, 6, 7, 8 and 9?

const factorial = n => n === 1 ? 1 : factorial(n - 1) * n;

const lexPerm = function (nums, start, set, target) {
  if (nums.length === 1) return set + nums.pop();

  const increment = factorial(nums.length - 1);
  const steps = [];

  for (let i = 1; i <= nums.length; i++) {
    steps.push(increment * i + start);
  }

  for (let i = 0; i < steps.length; i++) {
    if (target <= steps[i]) {
      set += nums[i];
      start = steps[i - 1] ? steps[i - 1] : 0;
      return lexPerm([...nums.slice(0, i), ...nums.slice(i + 1)], start, set, target);
    }
  }
};

return lexPerm([0,1,2,3,4,5,6,7,8,9], 0, '', 1000000); // sb 201
