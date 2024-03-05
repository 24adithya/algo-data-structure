/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    const timePromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('Time Limit Exceeded');
        // console.log('Time Limit Exceeded');
      }, t);

      const result = fn(...args);
      result.then(res => resolve(res)).catch(err => reject(err));
    });
    return timePromise;
  };
};

const limited = timeLimit(async n => {
  await new Promise(res => setTimeout(res, 100));
  return n * n;
}, 150);

limited(5)
  .then(res => console.log(res))
  .catch(err => console.log(err)); // "Time Limit Exceeded" at t=100ms
