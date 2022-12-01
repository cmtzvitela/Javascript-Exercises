String.prototype.exclamation = function () {
  let newString = this;
  return `${newString}!`;
};

console.log("hello".exclamation());
console.log("hello world".exclamation());

function addNumbers(...num) {
  const sum = num.reduce((previousValue, currentValue) => previousValue + currentValue, (initialValue = 0));
  return sum;
}

console.log(addNumbers(3, 4, 5, 6));
console.log(addNumbers());
