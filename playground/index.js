const { addUpTo, addUpToOptimized } = require("./big-o-notation/addUpTo");

// Log Time
let time_1, time_2;

time_1 = performance.now();
addUpTo(1000000000);
time_2 = performance.now();
console.log(`Time Elapsed 1: ${(time_2 - time_1) / 1000} seconds`);

time_1 = performance.now();
addUpToOptimized(100000000);
time_2 = performance.now();
console.log(`Time Elapsed 2: ${(time_2 - time_1) / 1000} seconds`);
