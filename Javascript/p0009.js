// Special Pythagorean triplet
// Problem 9
// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
//
// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.
//
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

function pythagoreanTriplet(n) {
  let a = 0;
  let b = 1;
  for (let a = 1; a < n; a++) {
    for (let b = a + 1; b < n; b++) {
      let c = Math.sqrt((a ** 2) + (b ** 2));
      if (Math.floor(c) === c) {
        if (a + b + c === n) {
          return a * b * c;
        }
      }
      if (a + b + c > n) break;
    }
  }
}

console.log(pythagoreanTriplet(1000))
