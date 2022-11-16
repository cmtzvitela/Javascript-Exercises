function distance(...coordinates) {
  if (coordinates.length === 2 && Array.isArray(coordinates[0]) && Array.isArray(coordinates[1])) {
    return pointArray(coordinates);
  } else {
    switch (coordinates.length) {
      case 4:
        return distance2Points(...coordinates);
      case 6:
        return distance3Points(...coordinates);
      default:
        throw new Error("Invalid number of arguments, submit four or six arguments");
    }
  }
}

console.log("The distance between those points is ", distance(1, 2, 2, 2));
console.log("The distance between those points is ", distance(1, 2, 1, 2, 2, 4));
console.log("The distance between those points is ", distance([8, 2], [45, 6]));
console.log("The distance between those points is ", distance([1, 2, 1], [2, 2, 4]));
console.log(distance(1, 2));

function distance3Points(x1, y1, z1, x2, y2, z2) {
  return (dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2) * 1.0));
}

function distance2Points(x1, y1, x2, y2) {
  return (dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) * 1.0));
}

function pointArray(coordinates) {
  if ((coordinates[0].length === 2) & (coordinates[1].length === 2)) {
    function distance2PointsArray() {
      return (dist = Math.sqrt(
        Math.pow(coordinates[1][0] - coordinates[0][0], 2) + Math.pow(coordinates[1][1] - coordinates[0][1], 2) * 1.0
      ));
    }
    return distance2PointsArray();
  } else if ((coordinates[0].length === 3) & (coordinates[1].length === 3)) {
    function distance3PointsArray() {
      return (dist = Math.sqrt(
        Math.pow(coordinates[1][0] - coordinates[0][0], 2) +
          Math.pow(coordinates[1][1] - coordinates[0][1], 2) +
          Math.pow(coordinates[1][2] - coordinates[0][2], 2) * 1.0
      ));
    }
    return distance3PointsArray();
  } else {
    throw new Error("Invalid arguments, please enter two arrays of equal length");
  }
}
