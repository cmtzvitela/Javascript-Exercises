const objA = {
  name: "Sarah",
  age: 36,
  nationality: "Swedish",
};

const objB = {
  occupation: "Accountant",
  hobby: "painting",
};

function copyObj(obj1, obj2, propertyArray) {
  if (obj1 && obj2 && propertyArray) {
    const obj3 = Object.assign(obj1, obj2);
    const obj4 = propertyArray.filter((key) => key in obj3).reduce((obj2, key) => ((obj2[key] = obj3[key]), obj2), {});
    return obj4;
  } else if (obj1 && obj2) {
    const obj3 = Object.assign(obj1, obj2);
    return obj3;
  }
}

console.log(copyObj(objA, objB, ["name", "occupation", "hobby"]));
