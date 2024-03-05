/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  if (n === 0) return arr;

  //if n >= 1
  let maxFlat = true;
  const res = [];
  arr.forEach(element => {
    if (Array.isArray(element)) {
      res.push(...element);
      maxFlat = false;
    } else {
      res.push(element);
    }
  });

  if (maxFlat) n = 1;
  return flat(res, n - 1);
};

console.log(flat([1, [4, 5], [[9, 10], 11], [13]], 2));
