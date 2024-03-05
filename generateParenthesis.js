// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]

// Constraints:

// 1 <= n <= 8

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
  const outputStringArray = [];
  determineOutputStrings(outputStringArray, '', 0, 0, n);
  return outputStringArray;
};

const determineOutputStrings = (
  outputStringArray,
  currentString,
  open,
  close,
  max
) => {
  if (max * 2 === currentString.length) {
    outputStringArray.push(currentString);
    return;
  }

  if (open < max)
    determineOutputStrings(
      outputStringArray,
      currentString + '(',
      open + 1,
      close,
      max
    );
  if (close < open)
    determineOutputStrings(
      outputStringArray,
      currentString + ')',
      open,
      close + 1,
      max
    );
};

console.log(generateParenthesis(3));
