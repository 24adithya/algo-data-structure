// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Constraints:

// -231 <= x <= 231 - 1

// Follow up: Could you solve it without converting the integer to a string?

// const isPalindrome = (num) => {
//   //num = 123
//   let originalNum = num, isPalindrome = false, count=0;
//   let reversedNum = 0, lastDigit;

//   while(count<=3) {
//     count++;
//     lastDigit = num % 10; //3
//     reversedNum = reversedNum * 10 + lastDigit; //3
//     num = Math.floor(num / 10); //12
//   }

//   if(reversedNum === originalNum) {
//     isPalindrome = true;
//   }

//   return isPalindrome;

// };

const isPalindrome = num => {
  if (num < 0)
    //x=123
    return false;

  let reverse = 0;

  for (let i = num; i != 0; i = Math.floor(i / 10))
    reverse = reverse * 10 + (i % 10);

  return num === reverse;
};

//console.log(isPalindrome(1001));
//console.log(isPalindrome(121));
//console.log(isPalindrome(0000));
// console.log(isPalindrome(123));
console.log(isPalindrome(-121));
