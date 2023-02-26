const sumRage = (n) => {
  if (n === 1) return 1;
  return n + sumRage(n - 1);
};

console.log(sumRage(5));
