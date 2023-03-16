var foo = function () {
  function privateFunction() {
    const num = 2;
    return `This is private number ${num}`;
  }

  return {
    somethingPrivate() {
      return privateFunction();
    },
    bar() {
      return 'This is bar';
    },
    test() {
      return 'This is a test';
    },
  };
};

let foo2 = new foo();
console.log(foo2.test());
console.log(foo2.bar());
console.log(foo2.somethingPrivate());
