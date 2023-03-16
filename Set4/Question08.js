const numberArray = [0, 3, 5, 0, 8, 0, 16, 2, 0, 9];

function zerosToTheRight(arr) {
  let n = arr.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] != 0) {
      arr[count++] = arr[i];
    }
  }

  while (count < n) {
    arr[count++] = 0;
  }
  return arr;
}

console.log(zerosToTheRight(numberArray));
