const myMath = {
  add: function addNumbers(...args) {
    //console.log(args);
    const initialValue = 0;
    const sum = args.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
    return sum;
  },
  mul: function mulNumbers(...args) {
    let initialValue = 1;
    for (let i = 0; i < args.length; i++) {
      let result = initialValue * args[i];
      initialValue = result;
    }
    return initialValue;
  },
  factorial: function factorial(num) {
    let f = 1;
    for (let i = num; i > 0; i--) {
      f = f * i;
    }
    return f;
  },
};

console.log(myMath.add(1, 2, 3));
console.log(myMath.mul(8, 2, 3));
console.log(myMath.factorial(7));
