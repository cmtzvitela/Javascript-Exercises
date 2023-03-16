function getRandomNumber(min, max) {
  const m = 25;
  const a = 11;
  const c = 17;

  let z = 3;
  return function () {
    z = (a * z + c) % m;
    return Math.floor(min + (z / m) * max);
  };
}

const random = getRandomNumber(1, 50);

console.log(random());
console.log(random());
console.log(random());
console.log(random());
console.log(random());
console.log(random());
console.log(random());
console.log(random());
