const numberArray = [0, 3, 5, 0, 8, 0, 16, 2, 0];

function zerosToTheRight(array) {
  let counter = 0;
  array.forEach((element) => {
    if (element === 0) {
      counter++;
    }
  });
  for (let j = counter; j <= array.length - counter && j > 0; j--) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === 0 && array[i + 1] > 0) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
  return array;
}

console.log(zerosToTheRight(numberArray));
