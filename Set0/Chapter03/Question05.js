function CustomObject(a, b) {
  this.a = a;
  this.b = b;
}

CustomObject.prototype.c = function () {
  return this.a + this.b;
};

const obj = new CustomObject(1, 2);

function printObjProp(object, onlyBelongs) {
  if (onlyBelongs == true) {
    return Object.getOwnPropertyNames(object);
  } else {
    return Object.getOwnPropertyNames(object).concat(Object.getOwnPropertyNames(object.__proto__));
  }
}

console.log(printObjProp(obj));
console.log(printObjProp(obj, false));
console.log(printObjProp(obj, true));

// const obj = {
//   a: 45,
//   b: "A String",
//   c: true,
//   d: [1, 2, 3],
//   e: true,
//   f: false,
// };

// function objBoolKeys(object, boolean) {
//   if (object && boolean) {
//     let keyArray = Object.keys(object).filter(function (key) {
//       return object[key] === boolean;
//     });
//     return keyArray;
//   } else if (object && !boolean) {
//     let keyArray = Object.keys(object).filter(function (key) {
//       return object[key] === boolean;
//     });
//     return keyArray;
//   } else {
//     return Object.keys(obj);
//   }
// }

// objBoolKeys(obj, true);
// objBoolKeys(obj, false);
// objBoolKeys(obj);
