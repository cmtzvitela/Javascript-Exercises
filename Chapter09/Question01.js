var str = "{prop1: 42, myFn: function(a, b) { return a+b+this.prop1;}}";

const weirdObj = {
  prop1: 42,
  prop2: 36,
  myFn(a, b) {
    return a + b + this.prop1;
  },
};
