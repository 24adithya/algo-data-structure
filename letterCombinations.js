// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]

// Constraints:

// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  const outputStringArray = [];
  if (digits.length === 0) return outputStringArray;

  const numberLetterMap = [
    '0',
    '1',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz'
  ];

  outputStringArray.push('');
  for (let i = 0; i < digits.length; i++) {
    const currentDigit = digits.charAt(i);

    console.log(`i = ${i}`);
    while (outputStringArray[0].length === i) {
      const currentElement = outputStringArray.splice(0, 1);
      console.log(`currentElement = ${currentElement}`);
      for (let currentChar of numberLetterMap[currentDigit]) {
        console.log(`currentElement + char = ${currentElement}+${currentChar}`);
        outputStringArray.push(currentElement + currentChar);
      }
    }
  }

  return outputStringArray;
};

console.log(letterCombinations('23'));
