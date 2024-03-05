/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = (arr, fn) => {
  for (const elem in arr) {
    arr[elem] = fn(arr[elem], parseInt(elem));
  }

  return arr;
};

console.log(
  map([1, 2, 3], function plusone(n) {
    return n + 1;
  })
);

console.log(
  map([1, 2, 3], function plusI(n, i) {
    return n + i;
  })
);
