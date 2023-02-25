/**
 * Write a function called sameFrequency. Given two
 * positive integers, find out if the two numbers have the
 * same frequency of digits.
 * sameFrequency(182,281) // true
 * sameFrequency(34,14) // false
 * sameFrequency(3589578, 5879385) // true
 * sameFrequency(22,222) // false
 */

function sameFrequency(x, y) {
  const lookup = {};
  const arr1 = x.toString().split("");
  const arr2 = y.toString().split("");

  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    let num = arr1[i];
    lookup[num] ? (lookup[num] += 1) : (lookup[num] = 1);
  }

  for (let i = 0; i < arr2.length; i++) {
    let num = arr2[i];
    if (!lookup[num]) return false;
    else lookup[num] -= 1;
  }

  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
