const fib = (n, memo = {}) => {
  if (n <= 2) return 1;
  if (memo[n]) return memo[n];
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

// console.log(fib(4));
console.log(fib(6));
console.log(fib(7));
console.log(fib(50));

const iterativeFib = n => {
  let n0 = 0,
    n1 = 1,
    n2 = 0,
    count = 2;

  while (count <= n) {
    n2 = n0 + n1;
    n0 = n1;
    n1 = n2;
    count++;
  }

  console.log(n2);
};

iterativeFib(6);
iterativeFib(7);
iterativeFib(50);

const iterativeTableFib = n => {
  let table = Array(n + 1).fill(0);
  table[1] = 1;

  for (let i = 0; i <= n; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }

  console.log(table);
};

iterativeTableFib(6);
// iterativeTableFib(7);
// iterativeTableFib(50);
