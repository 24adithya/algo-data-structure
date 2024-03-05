/**
 * @param {number} millis
 * @return {Promise}
 */
function sleep(millis) {
  let sleepId;
  const promise = new Promise(resolve => {
    sleepId = setTimeout(() => resolve('Timeout completed'), millis);
  });

  return { promise, sleepId };
}

let t = Date.now();
const { promise, sleepId } = sleep(100);
promise.then(() => {
  console.log(Date.now() - t);
  clearTimeout(sleepId);
}); // 100
