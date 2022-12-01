function getRandomNumber() {
  const m = 25;
  const a = 11;
  const c = 17;

  let z = 3;
  return function (min, max) {
    z = (a * z + c) % m;
    return Math.floor(min + (z / m) * max);
  };
}

const random = getRandomNumber();

console.log(random(2, 45));
console.log(random(2, 45));
console.log(random(2, 45));
console.log(random(2, 45));
console.log(random(2, 45));
console.log(random(2, 45));
console.log(random(2, 45));
console.log(random(2, 45));
