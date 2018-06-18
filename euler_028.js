// Problem 28
// ==========
//
// Starting with the number 1 and moving to the right in a clockwise
// direction a 5 by 5 spiral is formed as follows:
//
//                               21 22 23 24 25
//                               20  7  8  9 10
//                               19  6  1  2 11
//                               18  5  4  3 12
//                               17 16 15 14 13
//
// It can be verified that the sum of both diagonals is 101.
//
// What is the sum of both diagonals in a 1001 by 1001 spiral formed in the
// same way?

const spiralDiagSum = function (size) {
  let sum = 1;
  let val = 1;
  let length = 1;

  while (length < size) {
    length += 2;

    for (let i = 0; i < 4; i++) {
      val += length - 1;
      sum += val;
    }

  }

  return sum;
};

// const spiralDiagSum = function (size) { // start with top right
//   // create entire matrix method;
//   let spiral = [[1]];
//   let val = 1;
//
//   while (spiral.length < size) {
//     const nextLength = spiral.length + 2;
//
//     for (let r = 0; r <= spiral.length - 1; r++) spiral[r].push(++val);
//
//     const bottomRow = [];
//     for (let c = nextLength - 1; c >= 0; c--) bottomRow[c] = ++val;
//     spiral.push(bottomRow);
//
//     for (let r = spiral.length - 2; r >= 0; r--) spiral[r] = [++val, ... spiral[r]];
//
//     const topRow = [];
//     for (let c = 0; c < nextLength; c++) topRow.push(++val);
//     spiral = [topRow, ... spiral];
//   }
//
//   let diagonalsSum = -1; // the middle of the spiral 1 get counted twice, this offsets that
//
//   for (let i = 0; i < spiral.length; i++) {
//     diagonalsSum += spiral[i][i] + spiral[i][spiral.length - 1 - i];
//   }
//
//   return diagonalsSum;
// };




return spiralDiagSum(1001);
