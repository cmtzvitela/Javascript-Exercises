function myPowerFn(base) {
  return function toTheN(power) {
    return Math.pow(base, power);
  };
}

const n = myPowerFn(3);
console.log(n(2));
