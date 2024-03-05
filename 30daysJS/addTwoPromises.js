/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
const addTwoPromises = async function (promise1, promise2) {
  let result1 = await promise1;
  let result2 = await promise2;
  return new Promise(function (resolve) {
    resolve(result1 + result2);
  });
};

console.log('add Two promises');
addTwoPromises(
  new Promise(resolve => setTimeout(() => resolve(2), 60)),
  new Promise(resolve => setTimeout(() => resolve(5), 20))
).then(console.log); // 4
