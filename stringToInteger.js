// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

// The algorithm for myAtoi(string s) is as follows:

// Read in and ignore any leading whitespace.
// Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
// Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
// Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
// If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
// Return the integer as the final result.
// Note:

// Only the space character ' ' is considered a whitespace character.
// Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.

// Example 1:

// Input: s = "42"
// Output: 42
// Explanation: The underlined characters are what is read in, the caret is the current reader position.
// Step 1: "42" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "42" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "42" ("42" is read in)
//            ^
// The parsed integer is 42.
// Since 42 is in the range [-231, 231 - 1], the final result is 42.
// Example 2:

// Input: s = "   -42"
// Output: -42
// Explanation:
// Step 1: "   -42" (leading whitespace is read and ignored)
//             ^
// Step 2: "   -42" ('-' is read, so the result should be negative)
//              ^
// Step 3: "   -42" ("42" is read in)
//                ^
// The parsed integer is -42.
// Since -42 is in the range [-231, 231 - 1], the final result is -42.
// Example 3:

// Input: s = "4193 with words"
// Output: 4193
// Explanation:
// Step 1: "4193 with words" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "4193 with words" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "4193 with words" ("4193" is read in; reading stops because the next character is a non-digit)
//              ^
// The parsed integer is 4193.
// Since 4193 is in the range [-231, 231 - 1], the final result is 4193.

// Constraints:

// 0 <= s.length <= 200
// s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.

/**
 * @param {string} s
 * @return {number}
 */

// var myAtoi = function (input) {
//   let sign = 1;
//   let result = 0;
//   let index = 0;
//   let n = input.length;

//   let INT_MAX = Math.pow(2, 31) - 1;
//   let INT_MIN = -Math.pow(2, 31);

//   // Discard all spaces from the beginning of the input string.
//   while (index < n && input[index] == ' ') {
//     index++;
//   }

//   // sign = +1, if it's positive number, otherwise sign = -1.
//   if (index < n && input[index] == '+') {
//     sign = 1;
//     index++;
//   } else if (index < n && input[index] == '-') {
//     sign = -1;
//     index++;
//   }

//   // Traverse next digits of input and stop if it is not a digit.
//   // End of string is also non-digit character.
//   while (index < n && input[index] >= '0' && input[index] <= '9') {
//     let digit = input[index] - '0';

//     // Check overflow and underflow conditions.
//     if (
//       result > Math.floor(INT_MAX / 10) ||
//       (result == Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)
//     ) {
//       // If integer overflowed return 2^31-1, otherwise if underflowed return -2^31.
//       return sign == 1 ? INT_MAX : INT_MIN;
//     }

//     // Append current digit to the result.
//     result = 10 * result + digit;
//     index++;
//   }

//   // We have formed a valid number without any overflow/underflow.
//   // Return it after multiplying it with its sign.
//   return sign * result;
// };

const myAtoi = s => {
  const INT_MAX = Math.pow(2, 31) - 1;
  const INT_MIN = -Math.pow(2, 31);

  let isNegative = undefined;
  let number = 0;

  let index = 0;

  //remove leading white spaces
  while (index < s.length && s[index] === ' ') {
    index++;
  }

  //check sign
  if (s[index] === '-') {
    isNegative = true;
    index++;
  } else if (s[index] === '+') {
    isNegative = false;
    index++;
  }

  while (index < s.length && s[index] >= '0' && s[index] <= '9') {
    let digit = s[index] - '0';
    if (
      number > Math.floor(INT_MAX / 10) ||
      (number === Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)
    ) {
      return isNegative ? INT_MIN : INT_MAX;
    }
    number = number * 10 + digit;
    index++;
  }

  return isNegative ? -number : number;
};

// console.log(myAtoi('   -42'));
// console.log(myAtoi('42'));
// console.log(myAtoi('0032'));
// console.log(myAtoi('words and 987'));
// console.log(myAtoi('4193 with words'));
// console.log(myAtoi('-91283472332'));
// console.log(myAtoi('+1'));
// console.log(myAtoi('-+1')); //should return '0' as ' (another sign after one sign is considered as non-digit character) => from leetcode solution'
// console.log(myAtoi('-+12')); //should return '0' as ' (another sign after one sign is considered as non-digit character) => from leetcode solution'
// console.log(myAtoi('0-1'));
console.log(myAtoi('2147483648'));

// const attemptedMyAtoi = (s) => {
//   const INT_MAX = Math.pow(2, 31) - 1;
//   const INT_MIN = -Math.pow(2, 31);

//   let isNegative = undefined;
//   let number = 0;

//   for (let char of s) {
//     if (char !== " ") {
//       if (char === "-" || char === "+") {
//         if (isNegative !== undefined) {
//           return 0;
//         }

//         if (char === "-") {
//           isNegative = true;
//         } else {
//           isNegative = false;
//         }
//       } else if (!isNaN(char)) {
//         number = number * 10 + (char - "0");
//       } else {
//         return number;
//       }
//     }
//   }

//   if (isNegative) {
//     number = -number;
//   }

//   if (number > INT_MAX) {
//     number = INT_MAX;
//   } else if (number < INT_MIN) {
//     number = INT_MIN;
//   }

//   return number;
// };
