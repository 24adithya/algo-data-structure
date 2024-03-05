/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const map = new Map();

  return function (...args) {
    const memoizedValue = map.get(JSON.stringify(args));
    if (memoizedValue !== undefined && memoizedValue !== null)
      return memoizedValue;

    // console.log(args);
    const value = fn(...args);
    console.log(value);
    map.set(JSON.stringify(args), value);
    return value;
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  //   console.log(a + b);
  return a + b;
});
memoizedFn(0, 0); // 5
memoizedFn(0, 0); // 5
// memoizedFn(2, 3); // 5
console.log(callCount); // 1
