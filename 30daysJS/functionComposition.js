/**
 * @param {Function[]} functions
 * @return {Function}
 */

const compose = function (functions) {
  if (!functions)
    return function (x) {
      return x;
    };

  return function (x) {
    let result = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }

    return result;
  };
};

const composeUsingLambdaExpr = functions => {
  if (!functions) return x => x;

  return x => {
    let result = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }

    return result;
  };
};

// const reducer = (prevFunc, currentFunc) => {
//   return prevFunc(currentFunc);
// };

const composeUsingReduce = function (functions) {
  return functions.reduceRight((prevFunc, currentFunc) => {
    return value => currentFunc(prevFunc(value));
  });
};

const compose1 = function (functions) {
  if (!functions) {
    return x => x;
  }

  return function (x) {
    let result = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }

    return result;
  };
};

// console.log(composeUsingReduce([x => x + 1, x => 2 * x]));

const fn = compose1([x => x + 1, x => 2 * x]);
console.log(fn(4)); // 9
