/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

// your code here
// https://medium.com/weekly-webtips/step-by-step-guide-to-array-permutation-using-recursion-in-javascript-4e76188b88ff
const permutations = (arr) => {
  let result = [];
  if (arr.length === 0) {
    return [];
  }
  if (arr.length === 1) {
    return [arr];
  }
  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i];
    let remainingValues = arr.slice(0, i).concat(arr.slice(i + 1));
    let remainingPermutations = permutations(remainingValues);
    for (let j = 0; j < remainingPermutations.length; j++) {
      const permutedArr = [currentValue].concat(remainingPermutations[j]);
      result.push(permutedArr);
    }
  }
  return result;
};
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
