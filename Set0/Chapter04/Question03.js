const numObj = {
  num: 0,
  get number() {
    return this.num;
  },
  set number(num) {
    if (typeof num === "number") {
      numObj.num = num;
    } else {
      console.error("This is not a number, try again");
    }
  },
};

numObj.number = "Hello";
console.log(numObj.number);
numObj.number = [];
console.log(numObj.number);
numObj.number = 8;
console.log(numObj.number);
