// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = s => {
  if (s === null || s.length < 1) {
    return '';
  }

  let i = 0,
    start = 0,
    end = 0,
    maxLen = 0;

  while (i < s.length) {
    let oddLen = expandFromMiddle(i, i, s);
    let evenLen = expandFromMiddle(i, i + 1, s);

    maxLen = Math.max(oddLen, evenLen);

    if (maxLen > end - start) {
      //found a new maxLen
      start = i - (maxLen - 1) / 2; //to include the 1st char we subtract '1'
      end = i + maxLen / 2 + 1; //to include the last char we add '1'
    }
    i++;
  }

  return s.substring(start, end);
};

const expandFromMiddle = (i, j, s) => {
  while (i >= 0 && j < s.length && s.charAt(i) === s.charAt(j)) {
    i--;
    j++;
  }

  return j - i - 1;
};

console.log(longestPalindrome(`a`));
console.log(longestPalindrome(`aabbaa`));
console.log(longestPalindrome(`racecar`));
