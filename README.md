# Algorithms and Data Structures Handbook

My personal notes while taking algorithms and data structures knowledge refresh course.

- [Algorithms and Data Structures Handbook](#algorithms-and-data-structures-handbook)
  - [Big O Notation](#big-o-notation)
    - [Simplify Big O Notation (Time Complexity)](#simplify-big-o-notation-time-complexity)
    - [Space Complexity](#space-complexity)
    - [Examples](#examples)
  - [Analyzing Performance of Arrays and Objects](#analyzing-performance-of-arrays-and-objects)
    - [The Big O of Objects](#the-big-o-of-objects)
    - [The Big O of Arrays](#the-big-o-of-arrays)
  - [Problem Solving Approach](#problem-solving-approach)
    - [Understand the Problem](#understand-the-problem)
    - [Concrete Examples](#concrete-examples)
    - [Break it Down](#break-it-down)
    - [Solve or Simplify](#solve-or-simplify)
    - [Look Back and Refactor](#look-back-and-refactor)
  - [Problem Solving Patterns](#problem-solving-patterns)
    - [Frequency Counter Pattern](#frequency-counter-pattern)
    - [Multiple Pointers](#multiple-pointers)
    - [Sliding Window](#sliding-window)
    - [Divide and Conquer](#divide-and-conquer)

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

## Analyzing Performance of Arrays and Objects

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

## Problem Solving Approach

- Define what an algorithm is
- Devise a plan to solve algorithms
- Compare and contrast problem solving patterns including frequency counters, two pointer problems and divide and conquer

1. **Algorithm** - a process or set of steps to accomplish a certain task
2. How to improve?
   - **Devise** a plan for solving problems
   - **Master** common problem solving patterns
3. **Problem Solving**
   - Understand the problem
   - Explore concrete examples
   - Break it down
   - Solve / Simplify
   - Look back and refactor

### Understand the Problem

1. Can I restate the problem in my own words?
2. What are the inputs that go into the problem?
3. What are the outputs that should come from the solution to the problem?
4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's okay, it's still worth considering the question at this early stage.)
5. How should I label the important pieces of data that are a part of the problem?

### Concrete Examples

1. Start with simple examples
2. Progress to more complex examples
3. Explore examples with empty inputs
4. Explore examples with invalid inputs

```javascript
/**
 * Write a function which takes in a string and
 * returns counts of each characters in the string
 */
charCount("aaaa"); // {a:4}
// Should it just returns the letters in there?
// Or it should return {a:0, b:0 ...}
charCount("hello"); // {h:1, e:1, l:2, o:1}
// Should we count spaces and separate uppercase and lowercase letters
charCount("My phone number is 123456");
// What if someone doesn't pass anything? Or doesn't pass a string?
charCount();
```

### Break it Down

1. Explicitly write out the steps you need to take.
   - This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (e.g. language syntax) as well.

```javascript
function charCount(str) {
  // make object
  // loop over the string, for each char
  /// if the char is a number/letter AND is key in object, add one to count
  /// if char is a number/letter AND not in the object, add it to object and set value to 1
  /// if char is something else (space, period, etc.) don't do anything
  //return object at end
}
```

### Solve or Simplify

**Solve the problem** and if you can't ... **Solve a simpler problem**

1. Simplify
   - Find the core difficulty in what you're trying to do
   - Temporarily ignore that difficulty
   - Write a simplified solution
   - Then incorporate that difficulty back in

```javascript
function charCount(str) {
  // make object
  const result = {};
  // loop over the string, for each char
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
     /// if char is something else (space, period, etc.) don't do anything
    if(/[a-z0-9].test(char)){
      /// if the char is a number/letter AND is key in object, add one to count
    if (result[char] > 0) {
      result[char]++;
    }
    /// if char is a number/letter AND not in the object, add it to object and set value to 1
    else {
      result[char] = 1;
    }
    }
  }

  //return object at end
  return result;
}
```

### Look Back and Refactor

Probably most important step for improving as a developer. Ask yourself these questions:

1. Can you check the results?
2. Can you derive the result differently?
3. Can you understand it at a glance?
4. Can you use the result or method for some other problem?
5. Can you improve the performance of your solution?
6. Can you think of other ways to refactor?
7. How have other people solved this problem?

```javascript
function charCount(str) {
  const result = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (isAlphaNumeric(char)) {
      result[char] = ++result[char] || 1;
    }
  }
  return result;
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  ) {
    return false;
  }
  return true;
}
```

## Problem Solving Patterns

- Frequency Counter
- Multiple Pointers
- Sliding Window
- Divide and Conquer
- Dynamic Programming
- Greedy Algorithms
- Backtracking
- Many more!

### Frequency Counter Pattern

This patter uses objects or sets to collect values/frequencies of values. This can often avoid the need for nested loops or O(n^2) operatins with arrays / strings.

```javascript
/** EXAMPLE
 * Write a function called same, which accepts two arrays.
 * The function should return true if every value in the array
 * has it's corresponding value squared in the second array.
 * The frequency of values must be the same.
 * same([1,2,3], [4,1,9]) // true
 * same([1,2,3], [1,9]) // false
 * same([1,2,3], [4,4,1]) // false (must be same frequency)
 */

// ? Time Complexity - O(n^2)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    // ! index of is another loop, so now we have nested loops
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) return false;
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// ? Time Complexity - O(n)
// ? Two loops are better than two nested loops
function sameOptimized(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return false;

    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }

  return true;
}
```

### Multiple Pointers

Creating **pointers** or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.  
It is **very** efficient for solving problems with minimal space complexity as well.

```javascript
/** EXAMPLE
 * Write a function called sumZero which accepts a sorted array of integers.
 * The function should find the first pair where the sum is 0.
 * Return an array that includes both values that sum to zero or undefined if
 * a pair does not exists.
 * sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
 * sumZero([-2,0,1,3]) // undefined
 * sumZero([1,2,3]) // undefined
 */

// ? Time Complexity - O(n^2)
// ? Space Complexity - O(1)
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// ? Time Complexity - O(n)
// ? Space Complexity - O(1)
function sumZeroOptimized(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    if (sum > 0) right--;
    else left++;
  }
}
```

### Sliding Window

This pattern involves creating window which can either be an array or number from one position to another.  
Depending on a certain condition, the window either increases or closes (and a new window is created).  
Very useful for keeping track of a subset of data in an array/string etc.

```javascript
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
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
```

### Divide and Conquer

This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data. This pattern can tremendously **decrease time complexity**! It is used in many sorting algorithms. For example quick and merge sort, binary search tree etc.
