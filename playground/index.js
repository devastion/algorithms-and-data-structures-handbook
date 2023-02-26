const { addUpTo, addUpToOptimized } = require("./utilities/addUpTo");

// Log Time
// let time_1, time_2;

// time_1 = performance.now();
// addUpTo(1000000000);
// time_2 = performance.now();
// console.log(`Time Elapsed 1: ${(time_2 - time_1) / 1000} seconds`);

// time_1 = performance.now();
// addUpToOptimized(100000000);
// time_2 = performance.now();
// console.log(`Time Elapsed 2: ${(time_2 - time_1) / 1000} seconds`);

// ? O(n^2)
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// ? Optimized O(n)
const twoSumOptimized = function (nums, target) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];

    if (hash[target - n] !== undefined) {
      return [hash[target - n], i];
    }
    hash[n] = i;
  }
  return [];
};

// console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
// console.log(twoSum([3, 2, 4], 6)); // [1,2]
// console.log(twoSum([3, 3], 6)); // [0,1]
// console.log(twoSum([2, 5, 5, 11], 10)); // [1,2]
// console.log(twoSum([3, 2, 3], 6)); // [0,2]
// console.log(twoSum([0, 4, 3, 0], 0)); // [0,3]
// console.log(twoSum([-1, -2, -3, -4, -5], -8)); // [2,4]

const lengthOfLongestSubstring = function (s) {
  let longest = 0;
  let seen = {};
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }
  return longest;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
