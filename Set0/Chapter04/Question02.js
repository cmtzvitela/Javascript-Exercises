function addRec(array, acc = 0, index = 0) {
  if (index === array.length) {
    return acc;
  } else {
    return addRec(array, (acc += array[index]), ++index);
  }
}

let numberArray = [1, 4, 6, 7, 48];
let sum = addRec(numberArray);
console.log("🚀 ~ file: Question02.js ~ line 11 ~ numberArray", numberArray);
console.log("🚀 ~ file: Question02.js ~ line 11 ~ sum", sum);

// function addRec(arr) {
//   if (arr.length === 1) {
//     return arr[0];
//   } else {
//     return arr[arr.length - 1] + addRec(arr.splice(0, arr.length - 1));
//   }
// }
