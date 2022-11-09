const letterArray = ["a", "c", "x", "w", "p"];

function removeFromArray(array, value) {
  const index = array.indexOf(value);
  const x = array.splice(index, 1);
  return array;
}

console.log(removeFromArray(letterArray, "x"));
