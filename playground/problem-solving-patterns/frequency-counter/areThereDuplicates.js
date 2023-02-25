/**
 * Implement a function called, areThereDuplicates which
 * accepts a variable number of arguments, and checks
 * whether there are any duplicates among the arguments
 * passed in.  You can solve this using the frequency
 * counter pattern OR the multiple pointers pattern
 * areThereDuplicates(1, 2, 3) // false
 * areThereDuplicates(1, 2, 2) // true
 * areThereDuplicates('a', 'b', 'c', 'a') // true
 */

function areThereDuplicates(...args) {
  const lookup = {};
  for (let i = 0; i < args.length; i++) {
    let char = args[i];
    if (lookup[char]) return true;
    lookup[char] = 1;
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
