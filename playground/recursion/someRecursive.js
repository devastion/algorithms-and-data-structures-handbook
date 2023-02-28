const isOdd = (val) => val % 2 !== 0;

const someRecursive = (arr, isOdd) => {
  if (isOdd(arr[0])) return true;
  if (arr.length <= 1) return isOdd(arr[0]);
  if (!isOdd(arr[0])) return someRecursive(arr.slice(1, arr.length), isOdd);
};

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false
