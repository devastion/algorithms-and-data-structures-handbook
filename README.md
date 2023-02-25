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
  - [Problem Solving Approach](#problem-solving-approach)
    - [Understand the problem](#understand-the-problem)
    - [Concrete examples](#concrete-examples)
    - [Break it down](#break-it-down)
    - [Solve or Simplify](#solve-or-simplify)
    - [Look back and refactor](#look-back-and-refactor)

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

### Understand the problem

1. Can I restate the problem in my own words?
2. What are the inputs that go into the problem?
3. What are the outputs that should come from the solution to the problem?
4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's okay, it's still worth considering the question at this early stage.)
5. How should I label the important pieces of data that are a part of the problem?

### Concrete examples

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

### Break it down

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

### Look back and refactor

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
