let foo = function () {
  private = function () {
    return "This is private";
  };
  this.bar = function () {
    return "This is bar";
  };
  this.test = function () {
    return "This is a test";
  };
};

let foo2 = new foo();
console.log(foo2.test());
console.log(foo2.bar());
console.log(foo2.private());
