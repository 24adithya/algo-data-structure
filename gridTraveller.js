const gridTraveller = (m, n, memo = {}) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  const key = m + ',' + n;
  if (key in memo) return memo[key];

  memo[key] = gridTraveller(m - 1, n, memo) + gridTraveller(m, n - 1, memo);

  return memo[key];
};

console.log(gridTraveller(2, 3));
console.log(gridTraveller(4, 3));
console.log(gridTraveller(18, 18));

const gridTableTraveller = (m, n) => {
  const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));
  table[1][1] = 1;
  console.log(table);

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const current = table[i][j];
      if (i + 1 <= m) table[i + 1][j] += current;
      if (j + 1 <= n) table[i][j + 1] += current;
    }
  }

  console.log(table);
  return table[m][n];
};

console.log(gridTableTraveller(2, 3));
console.log(gridTableTraveller(3, 2));
console.log(gridTableTraveller(18, 18));
