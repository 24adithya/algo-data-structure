//find if a combination of array of numbers can count upto the targetSum and return the shortest array amongst  all elements else return null

const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let number of numbers) {
    const remainder = targetSum - number;
    const combinationResult = bestSum(remainder, numbers, memo);
    if (combinationResult !== null) {
      const combination = [...combinationResult, number];

      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
        //we cannot do a early return here as we need to check for all possibilities even after finding a match
      }
    }
  }

  memo[targetSum] = shortestCombination;
  return shortestCombination;
};

console.log(bestSum(7, [5, 3, 4, 7])); // [3,4]
console.log(bestSum(8, [2, 3, 5])); //[3,5]
console.log(bestSum(8, [1, 4, 5])); //null
console.log(bestSum(100, [1, 2, 5, 25])); //[25,25,25,25]
