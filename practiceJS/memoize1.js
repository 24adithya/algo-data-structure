/**
 * @param {Function} fn
 * @return {Function}
 */

function memoize(fn) {
  const map = new Map();
  return function (...args) {
    const argKey = JSON.stringify(args);
    if (map.get(argKey) === undefined || map.get(argKey) === null) {
      console.log(`Key ${argKey} not found`);
      const result = fn(...args);
      console.log(`Result for ${argKey} is ${result}`);
      if (result !== undefined) {
        console.log(`Setting key ${argKey} with result ${result}`);
        map.set(argKey, result);
        console.log(
          `Map contents for ${argKey} after setting ${map.get(argKey)}`
        );
      }
      console.log(`Returning result for ${argKey} = ${result}`);
      return result;
    }

    console.log(`Returning cached result for ${argKey} = ${map.get(argKey)}`);
    return map.get(argKey);
  };
}

// function memoize(fn) {
//   const map = new Map();
//   return function (...args) {
//     const memoizedValue = map.get(JSON.stringify(args));
//     if (memoizedValue !== undefined && memoizedValue !== null)
//       return memoizedValue;

//     // console.log(args);
//     const value = fn(...args);
//     console.log(value);
//     map.set(JSON.stringify(args), value);
//     return value;
//   };
// }

let callCount = 0;
const sum = (a, b) => {
  callCount += 1;
  return a + b;
};

// function sum1(a, b) {
//   callCount += 1;
//   return a + b;
// }

const memoizedFn = memoize(function (args) {
  const [a, b] = [...args];
  callCount += 1;
  return a + b;
});

memoizedFn([0, 0]); //
memoizedFn([0, 0]); //
console.log(callCount); // 1
