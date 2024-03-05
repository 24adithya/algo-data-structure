/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  if (arr.length === 0) return [];

  const chunkArr = [];
  if (arr.length < size) {
    chunkArr.push(arr);
    return chunkArr;
  }

  let i = 0,
    j = size;

  while (i < arr.length) {
    chunkArr.push(arr.slice(i, j));
    i = i + size;
    j = j + size;
  }

  return chunkArr;
};

let chunkRes = chunk([1, 2, 3, 4, 5], 1); // [[1],[2],[3],[4],[5]]
console.log(chunkRes);

chunkRes = chunk([1, 9, 6, 3, 2], 3); // [[1,9,6],[3,2]]
console.log(chunkRes);

chunkRes = chunk([8, 5, 3, 2, 6], 6); // [[1,9,6],[3,2]]
console.log(chunkRes);
