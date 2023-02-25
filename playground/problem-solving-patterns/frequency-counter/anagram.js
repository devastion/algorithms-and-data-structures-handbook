function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let freqCounter1 = {};
  let freqCounter2 = {};

  for (let val of str1) {
    freqCounter1[val] = (freqCounter1[val] || 0) + 1;
  }

  for (let val of str2) {
    freqCounter2[val] = (freqCounter2[val] || 0) + 1;
  }

  for (let key in freqCounter1) {
    if (!(key in freqCounter2)) return false;
    if (freqCounter1[key] !== freqCounter2[key]) return false;
  }

  return true;
}

console.log(validAnagram(" ", " ")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("qwerty", "yetrqw")); // true

function validAnagramOptimized(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

console.log(validAnagramOptimized(" ", " ")); // true
console.log(validAnagramOptimized("aaz", "zza")); // false
console.log(validAnagramOptimized("anagram", "nagaram")); // true
console.log(validAnagramOptimized("awesome", "awesom")); // false
console.log(validAnagramOptimized("qwerty", "yetrqw")); // true
