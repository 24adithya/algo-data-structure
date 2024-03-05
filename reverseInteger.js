// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

// Constraints:

// -231 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
  if (x === null) {
    return 0;
  }

  const isNegative = x < 0;

  x = Math.abs(x);

  let reverseNumber = 0;

  let i = x;
  while (i != 0) {
    reverseNumber = reverseNumber * 10 + (i % 10);
    i = Math.floor(i / 10);
  }

  if (isNegative) {
    reverseNumber = -reverseNumber;
  }

  return reverseNumber > 0x7fffffff
    ? 0
    : reverseNumber < -0x7fffffff
      ? 0
      : reverseNumber;
};

console.log(reverse(-123));
console.log(reverse(1534236469));
console.log(reverse(-2147483648));
