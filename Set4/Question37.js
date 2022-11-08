String.prototype.exclamation = function () {
  let newString = this;
  return `${newString + "!"}`;
};

console.log("hello".exclamation());
console.log("hello world".exclamation());

function addNumbers(...num) {
  const sum = num.reduce((previousValue, currentValue) => previousValue + currentValue);
  return sum;
}

console.log(addNumbers(3, 4, 5, 6));
