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
    const keyArray = Object.keys(obj2);
    for (let i = 0; i < keyArray.length; i++) {
      if (propertyArray.includes(keyArray[i])) {
        obj1[keyArray[i]] = obj2[keyArray[i]];
      }
    }
    return obj1;
    //If an array of properties is provided, it will reduce the object to have only the asked components
    // return Object.keys(obj2).reduce((target, k) => {
    //   if (propertyArray.indexOf(k) > -1) {
    //     target[k] = obj2[k];
    //   }
    //   //And then assing them to the other object
    //   return Object.assign(target, obj1);
    // }, {});
  } else if (obj1 && obj2) {
    //If an array is not provided, it will just put the objects together
    return Object.assign(obj1, obj2);
  }
}
console.log(copy(objA, objB, ["occupation"]));
console.log(copy(objA, objB));
