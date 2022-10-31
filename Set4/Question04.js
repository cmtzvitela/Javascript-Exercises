//Function that flattens an array
const nestedArray = [1, 2, 3, [4, 5, [6, 7]], 8, 9];

function flattenArray(array) {
  var flatArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flatArray = flatArray.concat(flattenArray(array[i]));
    } else {
      flatArray.push(array[i]);
    }
  }
  return flatArray;
}

console.log(flattenArray(nestedArray));
