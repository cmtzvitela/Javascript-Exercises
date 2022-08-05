const obj = {
  a: 45,
  b: "A String",
  c: true,
  d: [1, 2, 3],
  e: true,
  f: false,
};

function objBoolKeys(object, boolean) {
  if (object && boolean) {
    let keyArray = Object.keys(object).filter(function (key) {
      return object[key] === boolean;
    });
    console.log(keyArray);
  } else if (object && !boolean) {
    let keyArray = Object.keys(object).filter(function (key) {
      return object[key] === boolean;
    });
    console.log(keyArray);
  } else if (object) {
    console.log(Object.keys(obj));
  }
}

objBoolKeys(obj, true);
objBoolKeys(obj, false);
