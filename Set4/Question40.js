const numberArray = [3, 2, 1, 0, -3, 2, 2, -2];

function findTriplets(arr) {
  let found = false;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          found = true;
          console.log(`${arr[i]} ${arr[j]} ${arr[k]}`);
        }
      }
    }
    if (found === false) {
      return new Error("A valid combination doesn't exist in the array");
    }
  }
}
findTriplets(numberArray);
