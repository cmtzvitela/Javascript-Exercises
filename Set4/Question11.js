//Function that returns the different properties between two objects

function checkDifferences(a, b) {
  return Object.keys(a)
    .concat(Object.keys(b))
    .reduce(function (map, k) {
      if (a[k] !== b[k]) {
        map[k] = b[k];
      }
      return map;
    }, {});
}

const ob1 = {
  a: 45,
  b: "Hi",
  c: [1, 2, 3],
};
const ob2 = {
  a: 32,
  b: "Hi",
  c: "Hello",
  d: [6, 72, 33],
};

console.log(checkDifferences(ob1, ob2));

// function checkDifferences(obj1, obj2) {
//   const obj1keys = Object.keys(obj1);
//   const obj2keys = Object.keys(obj2);
//   let differences = [];
//   obj1keys.forEach((element) => {
//     if (!obj2keys.includes(element)) {
//       differences.push(element);
//     }
//   });
//   obj2keys.forEach((element) => {
//     if (!obj1keys.includes(element)) {
//       differences.push(element);
//     }
//   });
//   return differences;
// }
