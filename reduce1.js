/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = (nums, fn, init) => {
  let res = init;
  for (let i = 0; i < nums.length; i++) {
    res = fn(res, nums[i]);
  }

  return res;
};

function sum(accum, curr) {
  return accum + curr;
}

function sum1(accum, curr) {
  return accum + curr * curr;
}

console.log(reduce([1, 2, 3, 4], sum, 0));
console.log(reduce([1, 2, 3, 4], sum1, 100));
