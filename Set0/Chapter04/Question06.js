function distance(...coordinates) {
  if (coordinates.length === 2 && Array.isArray(coordinates[0]) && Array.isArray(coordinates[1])) {
    return pointArray(coordinates);
  } else {
    switch (coordinates.length) {
      case 4:
        return distance2Points();
      case 6:
        return distance3Points();
      default:
        return "Invalid number of arguments, submit four or six arguments";
    }
  }
}

// distance(1, 2, 1, 2, 2, 4);

let x1 = 1,
  y1 = 2,
  z1 = 1;
let x2 = 2,
  y2 = 2,
  z2 = 4;
let delta1 = distance(x1, y1, x2, y2); // delta = 1
console.log("The distance between those points is ", delta1);
let delta2 = distance(x1, y1, z1, x2, y2, z2); // delta = 3.1622…
console.log("The distance between those points is ", delta2);
let delta3 = distance([8, 2], [45, 6]); // delta = 1
console.log("The distance between those points is ", delta3);
let delta4 = distance([x1, y1, z1], [x2, y2, z2]);
console.log("The distance between those points is ", delta4);
let delta5 = distance(x1, x2);
console.log(delta5);

function distance3Points() {
  let dist = 0;
  dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2) * 1.0);
  return dist;
}

function distance2Points() {
  let dist = 0;
  dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) * 1.0);
  return dist;
}

function pointArray(coordinates) {
  if ((coordinates[0].length === 2) & (coordinates[1].length === 2)) {
    function distance2PointsArray() {
      let dist = 0;
      dist = Math.sqrt(
        Math.pow(coordinates[1][0] - coordinates[0][0], 2) + Math.pow(coordinates[1][1] - coordinates[0][1], 2) * 1.0
      );
      return dist;
    }
    return distance2PointsArray();
  } else if ((coordinates[0].length === 3) & (coordinates[1].length === 3)) {
    function distance3PointsArray() {
      let dist = 0;
      dist = Math.sqrt(
        Math.pow(coordinates[1][0] - coordinates[0][0], 2) +
          Math.pow(coordinates[1][1] - coordinates[0][1], 2) +
          Math.pow(coordinates[1][2] - coordinates[0][2], 2) * 1.0
      );
      return dist;
    }
    return distance3PointsArray();
  } else {
    return "Invalid arguments, please enter two arrays of equal length";
  }
}
