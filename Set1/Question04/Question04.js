const objA = {
  name: "Sarah",
  age: 36,
  nationality: "Swedish",
};

const objB = {
  occupation: "Accountant",
  hobby: "painting",
};

function copy(obj1, obj2, propertyArray) {
  if (obj1 && obj2 && propertyArray) {
    //If an array of properties is provided, it will reduce the object to only have only the asked components
    return Object.keys(obj2).reduce((target, k) => {
      if (propertyArray.indexOf(k) > -1) {
        target[k] = obj2[k];
      }
      //And then assing them to the other object
      return Object.assign(target, obj1);
    }, {});
  } else if (obj1 && obj2) {
    //If an array is not provided, it will just put the objects together
    const obj = Object.assign(obj1, obj2);
    return obj;
  }
}
console.log(copy(objA, objB, ["occupation"]));
console.log(copy(objA, objB));

// function copyObj(obj1, obj2, propertyArray) {
//   if (obj1 && obj2 && propertyArray) {
//     let res = Object.keys(obj2).reduce(function (obj, k) {
//       if ((k = propertyArray)) obj[k] = obj2[k];
//       return obj;
//     }, {});
//     const obj = Object.assign(obj1, res);
//     return obj;
//   } else if (obj1 && obj2) {
//     const obj = Object.assign(obj1, obj2);
//     return obj;
//   }
// }
