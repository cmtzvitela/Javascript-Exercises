const str = "{prop1: 42, myFn: function(a, b) { return a+b+this.prop1;}}";

function evalString(string) {
  return function (...arg) {
    const obj = eval("(" + string + ")");
    return obj.myFn(...arg);
  };
}

const evaluatedString = evalString(str);
console.log(evaluatedString(3, 4));
