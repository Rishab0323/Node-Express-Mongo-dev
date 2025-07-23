/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let largest = 0;  //largest = numbers[0]
    for(let i=0;i<numbers.length;i++){
      if(numbers[i] > largest ){
        largest = numbers[i];
      }
    }
    return largest;


}

arr = [3,3,2,6,8,6]
console.log(findLargestElement(arr));
module.exports = findLargestElement;