// const arr1 = [1, 2, 1];

// const result = arr1.map(num => (num === 2 ? [2, 2] : 1));

// console.log(result);
// Expected output: Array [1, 2, 2, 1]

function mapper(elem) {
  if (elem instanceof Array) return [...elem];
  return elem;
}

const flatMap = function (arr, fn) {
  return arr.reduce((acc, cur, i) => {
    return acc.concat(fn(cur));
  }, []);
};

const arr = [
  { red: 10, amber: 20, green: 30 },
  { red: 11, amber: 21, green: 31 },
  { red: 12, amber: 22, green: 32 }
];

console.log(flatMap(arr, mapper));

console.log(arr.flatMap(obj => [obj.red, obj.amber, obj.green]));
