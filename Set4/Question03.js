//Function to find the intersecting values of two arrays
const array1 = [1, 2, 5, 8, 9, 0];
const array2 = [8, 2, 7];

function intersection(a, b) {
  const intersectingArray = a.filter((value) => b.includes(value));
  return intersectingArray;
}

console.log(intersection(array1, array2));
