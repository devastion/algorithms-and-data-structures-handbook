# Algorithms and Data Structures Handbook

## Big O Notation

- Describe time complexity and space complexity of algorithms
- Help us to pick the best solution for the problem performance wise

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
