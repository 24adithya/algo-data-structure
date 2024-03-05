/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  let res = [],
    stack = [];

  stack.push(...arr.map(element => [element, n]));

  while (stack.length > 0) {
    let [element, n] = stack.pop();

    if (Array.isArray(element) && n >= 1) {
      n--;
      stack.push(...element.map(element => [element, n]));
    } else res.push(element);
  }

  return res.reverse();
};

console.log(
  flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1)
);
