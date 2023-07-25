function getRandomNumber(min, max) {
  const m = Math.pow(2, 32);
  const a = 1664525;
  const c = 1013904223;

  let z = 42;
  return function () {
    z = (a * z + c) % m;
    return Math.trunc(min + (z / m) * max);
  };
}

const min = 1;
const max = 50;
const random = getRandomNumber(min, max);

const arr = [];
for (let i = min; i <= max; i++) {
  arr.push(random());
}
//arr.sort((a, b) => a - b);
console.log(arr);
