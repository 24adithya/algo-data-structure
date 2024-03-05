//find if a combination of array of numbers can count upto the targetSum and return the array of the two numbers else return null

const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let number of numbers) {
    const remainder = targetSum - number;
    const remainderResult = howSum(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, number];
      return memo[targetSum];
    }
  }

  memo[targetSum] = null;
  return null;
};

console.log(howSum(7, [2, 3])); //3,2,2
console.log(howSum(7, [5, 3, 4, 7])); //4,3
console.log(howSum(7, [2, 4])); //null
console.log(howSum(7, [2, 3, 5])); //3,2,2
console.log(howSum(300, [7, 14])); //null
