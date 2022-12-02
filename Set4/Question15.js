var foo = function () {
  function privateFunction() {
    return "This is private";
  }
  return {
    bar() {
      return "This is bar";
    },
    test() {
      return "This is a test";
    },
  };
};

let foo2 = new foo();
console.log(foo2.test());
console.log(foo2.bar());
console.log(foo2.private());
