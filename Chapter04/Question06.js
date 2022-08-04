function distance(...coordinates) {
  console.log(coordinates);
  if (coordinates.length == 2 && Array.isArray(coordinates[0]) == true && Array.isArray(coordinates[1]) == true) {
    if ((coordinates[0].length == 2) & (coordinates[1].length == 2)) {
      function distance2Points() {
        let dist = 0;
        dist = Math.sqrt(
          Math.pow(coordinates[1][0] - coordinates[0][0], 2) + Math.pow(coordinates[1][1] - coordinates[0][1], 2) * 1.0
        );
        console.log("The distance between those points is ", dist);
        return dist;
      }
      distance2Points();
    } else if ((coordinates[0].length == 3) & (coordinates[1].length == 3)) {
      function distance3Points() {
        let dist = 0;
        dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2) * 1.0);
        console.log("The distance between those points is ", dist);
        return dist;
      }
      distance3Points();
    } else {
      console.log("Invalid arguments, please enter two arrays of equal length");
    }
  } else {
    switch (coordinates.length) {
      case 0:
        console.log("You need at least four arguments");
        break;
      case 1:
        console.log("You need at least four arguments");
        break;
      case 2:
        console.log("You need at least four arguments");
        break;
      case 3:
        console.log("You need at least four arguments");
        break;
      case 4:
        function distance2Points() {
          let dist = 0;
          dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) * 1.0);
          console.log("The distance between those points is ", dist);
          return dist;
        }
        distance2Points();
        break;
      case 5:
        console.log("Invalid number of arguments, submit four or six arguments");
        break;
      case 6:
        function distance3Points() {
          let dist = 0;
          dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2) * 1.0);
          console.log("The distance between those points is ", dist);
          return dist;
        }
        distance3Points();
        break;
      case 7:
        console.log("Invalid number of arguments, submit four or six arguments");
        break;
      default:
        break;
    }
  }
}

// distance(1, 2, 1, 2, 2, 4);

var x1 = 1,
  y1 = 2,
  z1 = 1;
var x2 = 3,
  y2 = 8,
  z2 = 5;
var delta1 = distance(x1, y1, x2, y2); // delta = 1
var delta2 = distance(x1, y1, z1, x2, y2, z2); // delta = 3.1622…
var delta3 = distance([x1, y1], [x2, y2]); // delta = 1
var delta4 = distance([x1, y1, z1], [x2, y2, z2]);
