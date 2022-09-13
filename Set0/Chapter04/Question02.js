function addRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return arr[arr.length - 1] + addRec(arr.slice(0, arr.length - 1));
  }
}

let numberArray = [1, 4, 6, 7, 48];
let sum = addRec(numberArray);
console.log("🚀 ~ file: Question02.js ~ line 11 ~ numberArray", numberArray);
console.log("🚀 ~ file: Question02.js ~ line 11 ~ sum", sum);
