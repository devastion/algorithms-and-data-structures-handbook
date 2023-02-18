# Algorithms and Data Structures Handbook

My personal notes while taking algorithms and data structures knowledge refresh course.

- [Algorithms and Data Structures Handbook](#algorithms-and-data-structures-handbook)
  - [Big O Notation](#big-o-notation)
    - [Simplify Big O Notation (Time Complexity)](#simplify-big-o-notation-time-complexity)
    - [Space Complexity](#space-complexity)
    - [Examples](#examples)
  - [Analyzing performance of Arrays and Objects](#analyzing-performance-of-arrays-and-objects)
    - [The Big O of Objects](#the-big-o-of-objects)
    - [The Big O of Arrays](#the-big-o-of-arrays)

## Big O Notation

- Analyze performance of an algorithm
- Big O Notation can give us high level understanding of the time or space complexity of an algorithm
- Big O doesn't care about precision, it's all about general trends (linear?, quadratic?, constant?)
- The time or space complexity (measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm

### Simplify Big O Notation (Time Complexity)

1. **Constants don't matter**
   - O(2n) => O(n)
   - O(500) => O(1)
   - O(13n^2) => O(n^2)
   - O(n^2 + 5n + 8) => O(n^2)
2. Arithmetic operations are constant
3. Variable assignment is constant
4. Accessing elements in an array (by index) or object (by key) is constant
5. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop

### Space Complexity

1. Auxiliary space complexity refer to space required by the algorithm, not including the space taken up by the inputs
2. Most primitives (booleans, numbers, undefined, null) are constant space
3. Strings require O(n) space (n = string length)
4. Reference types are generally O(n), where n is the length (for arrays) or numbers of keys (for objects)

### Examples

Time Complexity:

```javascript
// The loop is going to run n times so we have O(n)
function logAtLeastFive(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}
```

```javascript
// The loop is going to run maximum 5 times so we have O(1)
function logAtMostFive(n) {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}
```

Space Complexity:

```javascript
// Space Complexity is O(1), because we are adding to the number variable, but don't create new variable
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
```

```javascript
// Space Complexity is O(n), because array grows proportionally to the input
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
```

## Analyzing performance of Arrays and Objects

- Understand how objects and arrays work, through lens of Big O
- Explain why adding elements to the beginning of an array is costly
- Compare and contrast the runtime for arrays and objects, as well as built-in methods

### The Big O of Objects

1. **When to use objects**
   - When you don't need order
   - When you need fast access (O(1)), insertion (O(1)), removal (O(1)) and seraching (O(n))
2. Object methods (Object.keys/values/entries are O(n) and hasOwnProperty is O(1))

### The Big O of Arrays

1. **When to use arrays**
   - When you need order (ordered lists)
   - Access (O(1)), searching (O(n)), insertion / removal (O(it depends))
   - Inserting in the end of the array is O(1), but inserting at the begining is O(n). Same goes for removal.
2. Array methods like push and pop are O(1), because they only modify the end of the array, but other methods like shift, concat, slice, forEach, map etc. are O(n), because they reindex the array or go through every item in the array. Sort is O(n\*log n)
