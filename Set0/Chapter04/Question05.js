function distance(...coordinates) {
  switch (coordinates.length) {
    case 4:
      return distance2Points(...coordinates);
    case 6:
      return distance3Points(...coordinates);
    default:
      throw new Error("Invalid number of arguments, submit four or six arguments");
  }
}

// distance(1, 2, 1, 2, 2, 4);

const delta1 = distance(1, 2, 2, 2); // delta = 1
console.log("The distance between those points is ", delta1);
const delta2 = distance(1, 2, 1, 2, 2, 4); // delta = 3.1622…
console.log("The distance between those points is ", delta2);
const delta3 = distance(1, 2, 2, 2, 1);
console.log(delta3);

function distance2Points(x1, y1, x2, y2) {
  let dist = 0;
  dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) * 1.0);
  return dist;
}

function distance3Points(x1, y1, z1, x2, y2, z2) {
  let dist = 0;
  dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2) * 1.0);
  return dist;
}
