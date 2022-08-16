const numObj = {
  num: 0,
  get number() {
    return this.num;
  },
  set newNumber(num) {
    if (typeof num === "number") {
      numObj.num = num;
    } else {
      console.log("This is not a number, try again");
    }
  },
};

numObj.newNumber = "Hello";
console.log(numObj.num);
numObj.newNumber = [];
console.log(numObj.num);
numObj.newNumber = 8;
console.log(numObj.num);
