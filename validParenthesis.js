// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
  const bracketMap = {
    '{': '}',
    '(': ')',
    '[': ']'
  };

  let stack = [];
  for (let char of s) {
    if (bracketMap[char]) {
      stack.push(bracketMap[char]);
    } else if (stack.pop() !== char) {
      return false;
    }
  }

  return !stack.length;
};

// console.log(isValid("()[]{}"));
// console.log(isValid("(]"));
// console.log(isValid("({})"));
console.log(isValid('()({[]})'));
