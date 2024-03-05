/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = (arr, fn) => {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], parseInt(i))) {
      filteredArr.push(arr[i]);
    }
  }

  return filteredArr;
};

console.log(
  filter([0, 10, 20, 30], function greaterThan10(n) {
    return n > 10;
  })
);

console.log(
  filter([1, 2, 3], function firstIndex(n, i) {
    return i === 0;
  })
);

console.log(
  filter([1, 2, 3, 4, 5, 6, 7, 8, 9], function evenNum(n) {
    return n % 2 == 0;
  })
);

console.log(
  filter([1, 2, 3, 4, 5, 6, 7, 8, 9], function squareI(n, i) {
    return Math.pow(i, 2);
  })
);
