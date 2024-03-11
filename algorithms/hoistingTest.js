const metA = () => {
  metB('A');
};

const metB = (...args) => {
  const [param] = [...args];
  console.log(`metB called by ${param}`);
};

metA();
