const data = {
  a: [{ a: 10, b: 20 }],
  b: [{ c: 10, d: 20 }]
};

const values = Object.entries(data).flatMap(([key, value]) => value);
console.log(values);
