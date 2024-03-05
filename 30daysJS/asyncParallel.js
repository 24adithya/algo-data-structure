/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    let result = new Array(functions.length),
      count = 0;

    if (functions.length === 0) resolve(result);

    for (let i = 0; i < functions.length; i++) {
      functions[i]()
        .then(res => {
          result[i] = res;
          count++;

          if (count === functions.length) resolve(result);
        })
        .catch(() => {
          result = [];
          count++;
          reject('Error');
        });
      // tempRes = await functions[i]();
      // result.push(tempRes);
    }
  });
};

let promise;

promise = promiseAll([() => new Promise(res => res(42))]);
promise.then(console.log); // [42]

promise = promiseAll([
  () => new Promise(resolve => setTimeout(() => resolve(1), 200)),
  () => new Promise((resolve, reject) => setTimeout(() => reject('Error'), 100))
]);
promise.then(console.log); // ['Error']

promise = promiseAll([
  () => new Promise(resolve => setTimeout(() => resolve(4), 50)),
  () => new Promise(resolve => setTimeout(() => resolve(10), 150)),
  () => new Promise(resolve => setTimeout(() => resolve(16), 100))
]);
promise.then(console.log); // [4, 10, 16]
