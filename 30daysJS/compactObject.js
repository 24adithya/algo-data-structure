/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
const compactObject = function (obj) {
  if (Array.isArray(obj)) {
    //
    for (let i = 0; i < obj.length; i++) {
      const element = obj[i];
      if (Array.isArray(element)) compactObject(element);
      if (element === null || !element || element === undefined)
        obj.splice(i--, 1);
    }
  } else if (typeof obj === 'object') {
    //
    for (const key of Object.keys(obj)) {
      const element = obj[key];
      if (Array.isArray(element)) compactObject(element);
      if (element !== null && typeof element === 'object')
        compactObject(element);

      if (element === null || !element || element === undefined) {
        delete obj[key];
      }
    }
  }

  return obj;
};

console.log(compactObject([null, 0, false, 1]));
console.log(compactObject([null, 0, 5, [0], [false, 16]]));
console.log(compactObject({ a: null, b: [false, 1] }));
