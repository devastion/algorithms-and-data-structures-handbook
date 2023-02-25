// My first take of charCount

const charCount = (str) => {
  const count = {};
  const formattedString = str
    .toLowerCase()
    .trim()
    .replaceAll(/[^a-z0-9]/gi, "")
    .split("");
  formattedString.forEach((el) => {
    if (count.hasOwnProperty(el)) count[el]++;
    else count[el] = 1;
  });
  console.log(count);
  return count;
};

charCount("I am very happy! This is 123456.");

// My second take of charCount

const charCountSecond = (str) => {
  const count = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (isAlphaNumeric(char)) {
      count[char] = ++count[char] || 1;
    }
  }
  console.log(count);
  return count;
};

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

charCountSecond("I am very happy! This is 123456.");
