//Functions to reverse a string and adding it to the prototype

String.prototype.reverse = function () {
  let newString = "";
  for (let i = this.length - 1; i >= 0; i--) {
    newString += this[i];
  }
  return newString;
};

String.prototype.reverseWords = function () {
  let newString = "";
  let wordArray = this.split(" ");
  wordArray.forEach((e) => {
    newString += e.reverse() + " ";
  });
  return newString;
};

console.log("hello".reverse());
console.log("hello world".reverseWords());
