/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let firstCall = true;
  return function () {
    if (firstCall) {
      n -= 1;
      firstCall = false;
    }

    n += 1;
    return n;
  };
};

const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
