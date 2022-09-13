function CustomObject(a, b) {
  this.a = a;
  this.b = b;
}

CustomObject.prototype.c = function () {
  return this.a + this.b;
};

const obj = new CustomObject(1, 2);

function printObjProp(obj, onlyBelongs) {
  if (onlyBelongs === true) {
    console.log(Object.getOwnPropertyNames(obj));
  } else {
    for (const key in obj) {
      console.log(key);
    }
  }
}
printObjProp(obj);
printObjProp(obj, true);
printObjProp(obj, false);

// function printObjProp(object, onlyBelongs) {
//   if (onlyBelongs == true) {
//     return Object.getOwnPropertyNames(object);
//   } else {
//     return Object.getOwnPropertyNames(object).concat(Object.getOwnPropertyNames(object.__proto__));
//   }
// }
