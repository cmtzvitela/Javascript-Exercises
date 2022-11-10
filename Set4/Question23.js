function getRandomNumber() {
  const m = 25;
  const a = 11;
  const c = 17;

  let z = 3;
  return function () {
    z = (a * z + c) % m;
    return z;
  };
}

const random = getRandomNumber();

console.log(random());
console.log(random());
console.log(random());
console.log(random());
console.log(random());
console.log(random());
console.log(random());
console.log(random());
