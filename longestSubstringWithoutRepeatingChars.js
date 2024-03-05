// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
  // console.log(s);
  if (s == null || s.length == 0) {
    return 0;
  }

  let charSet = new Set();
  let i = 0,
    j = 0,
    max = 0;
  while (i < s.length) {
    const c = s.charAt(i);
    while (charSet.has(c)) {
      charSet.delete(s.charAt(j));
      j++;
    }
    charSet.add(c);
    max = Math.max(max, i - j + 1);
    i++;
  }

  // console.log("substring -> ", s.substring(i, j));

  return max;
};

// console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring('abcbcabb'));
// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("bbbbb"));
// console.log(lengthOfLongestSubstring("dvdf"));
