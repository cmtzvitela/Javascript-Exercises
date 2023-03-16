String.prototype.exclamation = function () {
  let newString = this;
  return `${newString}!`;
};

console.log('hello'.exclamation());
console.log('hello world'.exclamation());

function addNumbers(...num) {
  return num.reduce((previousValue, currentValue) => previousValue + currentValue, (initialValue = 0));
}

console.log(addNumbers(3, 4, 5, 6));
console.log(addNumbers());
