//Write a function that accepts a string and an array of strings
//it should return  a 2D array containing all of the ways that the 'target' can be
//constructed by concatening elements of the 'wordbank' array. Each element of the 2D array should represent
//one combination that constructs the 'target'

const allConstruct = (target, wordBank, memo = {}) => {
  // if (target in memo) return memo[target];
  if (target === '') return [[]];

  const result = [];
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);

      const suffixWays = allConstruct(suffix, wordBank, memo);
      const targetWays = suffixWays.map(ways => [word, ...ways]);
      result.push(...targetWays);
    }
  }

  // memo[target] = count;
  return result;
};

console.log(
  allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])
); // 4
// [
//   ['ab','cd','ef'],
//   ['ab','c','def'],
//   ['abcd','ef']
//   ['abc','def']
// ]

// console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
// [
//   ['purp', 'le']
//   ['p', 'ur', 'p', 'le']
// ]

// console.log(
//   allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
// ); // []

// console.log(
//   allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
// );
// [
//   ['enter', 'a', 'p', 'ot', 'ent', 'p', 'ot']
// ]

// console.log(
//   allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
//     'e',
//     'ee',
//     'eee',
//     'eeee',
//     'eeeee',
//     'eeeeee',
//   ])
// ); // []
