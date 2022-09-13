class NumObj {
  constructor(num) {
    this.num = num;
  }
  get number() {
    return this.num;
  }
  set number(num) {
    if (typeof num === "number") {
      this.num = num;
    } else {
      console.error("This is not a number, try again");
    }
  }
}

const testNumber = new NumObj(4);

testNumber.number = "Hello";
console.log(testNumber.number);
testNumber.number = [];
console.log(testNumber.number);
testNumber.number = 8;
console.log(testNumber.number);
