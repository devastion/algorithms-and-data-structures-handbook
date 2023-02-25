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

const isAlphaNumeric = require("./isAlphaNumeric");

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

charCountSecond("I am very happy! This is 123456.");
