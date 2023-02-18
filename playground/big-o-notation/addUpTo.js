const addUpTo = (n) => {
  let total;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
};

const addUpToOptimized = (n) => {
  return (n * (n + 1)) / 2;
};

module.exports = { addUpTo, addUpToOptimized };
