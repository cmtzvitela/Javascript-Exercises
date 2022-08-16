var str = "{prop1: 42, myFn: function(a, b) { return a+b+this.prop1;}}";
var str2 = {
  prop1: 42,
  myFn: function (a, b) {
    return a + b + this.prop1;
  },
};
//console.log(eval(str));
//const evalu = new Function(str);
//console.log(evalu(5, 4));
str = str.slice(0, str.length - 1);
console.log(str);
str;
function dataParse(str) {
  const replacedStr = str.replace(/['"]+/g, "");
  return replacedStr;
}

function copy(x) {
  return JSON.parse(JSON.stringify(x));
}
let otherObj = copy(str);
console.log(otherObj);

otherObj.myFn();
// str = str.replace(/^"(.*)"$/, '$1');
// console.log(str)
// const anotherObj = {}
// console.log(anotherObj)
const weirdObj = {
  prop1: 42,
  myFn: function (a, b) {
    return a + b + this.prop1;
  },
};
dataParse(str);
console.log(eval(weirdObj.myFn(5, 4)));
console.log(weirdObj.myFn(5, 4));
