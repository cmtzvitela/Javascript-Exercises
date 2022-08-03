function addRec(arr) {
  if (arr.length == 0) {
    return 0;
  } else {
    return arr.shift() + addRec(arr);
  }
}

let arr = [1, 4, 6, 7, 48];
let sum = addRec(arr);
console.log("🚀 ~ file: Question02.js ~ line 11 ~ sum", sum);
