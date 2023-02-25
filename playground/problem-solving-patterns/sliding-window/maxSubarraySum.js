/** EXAMPLE
 * Write a function called maxSubarraySum which accepts an
 * array of integers and a number called n. The function
 * should calculate the maximum sum of n consecutive
 * elements in the array.
 * maxSubarraySum([1,2,5,2,8,1,5], 2) // 10
 * maxSubarraySum([1,2,5,2,8,1,5], 4) // 17
 * maxSubarraySum([4,2,1,6], 1) // 6
 * maxSubarraySum([4,2,1,6,2],, 4) // 13
 * maxSubarraySum([], 4) // null
 */

// ? Time Complexity - O(n^2)
function maxSubarraySum(arr, num) {
  if (num > arr.length) return null;
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null

// ? Time Complexity - O(n)
function maxSubarraySumOptimized(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    // maxSum = Math.max(maxSum, tempSum)
    if (tempSum > maxSum) maxSum = tempSum;
  }
  return maxSum;
}

console.log(maxSubarraySumOptimized([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySumOptimized([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySumOptimized([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySumOptimized([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySumOptimized([], 4)); // null
