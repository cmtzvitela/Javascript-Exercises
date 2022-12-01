const letterArray = ["a", "c", "x", "w", "p"];

function removeFromArray(array, value) {
  const index = array.indexOf(value);
  return array.splice(index, 1);
}

console.log(removeFromArray(letterArray, "x"));
