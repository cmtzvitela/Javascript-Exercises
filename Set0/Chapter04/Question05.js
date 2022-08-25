function distance(...coordinates) {
  switch (coordinates.length) {
    case 4:
      function distance2Points() {
        let dist = 0;
        dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) * 1.0);
        console.log("The distance between those points is ", dist);
        return dist;
      }
      distance2Points();
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
    default:
      console.error("Invalid number of arguments, submit four or six arguments");
      break;
  }
}

// distance(1, 2, 1, 2, 2, 4);

var x1 = 1,
  y1 = 2,
  z1 = 1;
var x2 = 2,
  y2 = 2,
  z2 = 4;
var delta1 = distance(x1, y1, x2, y2); // delta = 1
var delta2 = distance(x1, y1, z1, x2, y2, z2); // delta = 3.1622…
var delta3 = distance(x1, y1, x2, y2, z1);
