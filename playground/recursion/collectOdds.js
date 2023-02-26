const collectOdds = (nums) => {
  let result = [];

  function helper(n) {
    if (n.length === 0) return;

    if (n[0] % 2 !== 0) {
      result.push(n[0]);
    }

    helper(n.slice(1));
  }

  helper(nums);
  return result;
};

console.log(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]));

const collectOddsPure = (nums) => {
  let newArr = [];
  if (nums.length === 0) return newArr;

  if (nums[0] % 2 !== 0) newArr.push(nums[0]);

  newArr = newArr.concat(collectOddsPure(nums.slice(1)));
  return newArr;
};

console.log(collectOddsPure([1, 2, 3, 4, 5, 6, 7, 8, 9]));
