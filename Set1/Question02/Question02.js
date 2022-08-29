function sum(...args) {
  let initialValue = 0;
  return args.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
}

function limitFunction(fn, calls) {
  let innerCount = 1;
  return function (...arg) {
    if (innerCount <= calls) {
      innerCount++;
      return fn(...arg);
    }
  };
}

const limited = limitFunction(sum, 3);
console.log(limited(3, 5));
console.log(limited(2, 9, 13));
console.log(limited(6, 7, 1, 5));
console.log(limited());
