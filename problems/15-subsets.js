/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

// your code here

let isExist = (arr1, arr2) => {
  for(let i = 0; i < arr1.length; i++){
    let arr = arr1[i];
    if(arr.length === arr2.length){
      if(arr === [] && arr2 === []){
        return true;
      }
      let same = true;
      for(let j = 0; j < arr.length; j++ ){
        if(arr[j] !== arr2[j]){
          same = false;
        }
      }
      if(same === true){
        return true;
      }
    }
  }
  return false;
}

let recur = ( array, newArr, index = 0 ) => {
  if(index === array.length){
    return ;
  }
  let remaining = array.slice(0, index).concat(array.slice(index + 1))
  if(! isExist(newArr,remaining) ){
    newArr.push(remaining);
  }
  recur(remaining, newArr);
  recur(array, newArr, index+1);
}

let subsets = ( arr ) => {
  let newArr = [];
  newArr.push(arr);
  recur(arr, newArr)
  return newArr;
}

console.log(subsets([1, 2, 3]));
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
