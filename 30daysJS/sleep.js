/**
 * @param {number} millis
 */
async function sleep(millis) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('time out complete');
      resolve();
    }, millis);
  });
}

let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); // 100
