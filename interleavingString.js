// Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.

// An interleaving of two strings s and t is a configuration where s and t are divided into n and m non-empty substrings respectively, such that:

// s = s1 + s2 + ... + sn
// t = t1 + t2 + ... + tm
// |n - m| <= 1
// The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...
// Note: a + b is the concatenation of strings a and b.

// Example 1:

// Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
// Output: true
// Explanation: One way to obtain s3 is:
// Split s1 into s1 = "aa" + "bc" + "c", and s2 into s2 = "dbbc" + "a".
// Interleaving the two splits, we get "aa" + "dbbc" + "bc" + "a" + "c" = "aadbbcbcac".
// Since s3 can be obtained by interleaving s1 and s2, we return true.
// Example 2:

// Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
// Output: false
// Explanation: Notice how it is impossible to interleave s2 with any other string to obtain s3.
// Example 3:

// Input: s1 = "", s2 = "", s3 = ""
// Output: true

// Constraints:

// 0 <= s1.length, s2.length <= 100
// 0 <= s3.length <= 200
// s1, s2, and s3 consist of lowercase English letters.

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
const isInterleave = (s1, s2, s3) => {
  if (s1 === '' && s2 === '' && s3 === '') {
    return true;
  }

  let result = priorityComparison(s1, s2, s3); //compare with s1 first

  if (!result) {
    result = priorityComparison(s2, s1, s3); //compare with s2 next
  }

  return result;
};

const priorityComparison = (s1, s2, s3) => {
  let i = 0,
    j = 0,
    k = 0;

  let priority = true;

  while (k < s3.length) {
    if (priority) {
      if (s1.charAt(i) === s3.charAt(k)) {
        i++;
        k++;
        priority = true;
      } else if (s2.charAt(j) === s3.charAt(k)) {
        j++;
        k++;
        priority = false;
      } else {
        return false;
      }
    } else {
      if (s2.charAt(j) === s3.charAt(k)) {
        j++;
        k++;
        priority = false;
      } else if (s1.charAt(i) === s3.charAt(k)) {
        i++;
        k++;
        priority = true;
      } else {
        return false;
      }
    }
  }

  if (i === s1.length && j === s2.length && k === s3.length) return true;
  else return false;
};

console.log(isInterleave('aabcc', 'dbbca', 'aadbbcbcac'));
console.log(isInterleave('aabcc', 'dbbca', 'aadbbbaccc'));
console.log(isInterleave('a', 'b', 'a'));

console.log(isInterleave('aa', 'ab', 'aaba'));

console.log(isInterleave('aabcc', 'dbbca', 'aadbcbbcac'));
