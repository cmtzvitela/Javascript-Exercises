var myLib = {
  math: {
    real: {
      add: function (a, b) {
        /*code goes here*/
      },
      sub: function (a, b) {
        /*code goes here*/
      },
      mul: function (a, b) {
        /*code goes here*/
      },
    },
    complex: {
      Num: function (real, img) {
        /*code goes here*/
      },
      add: function (a, b) {
        /*code goes here*/
      },
      sub: function (a, b) {
        /*code goes here*/
      },
      mul: function (a, b) {
        /*code goes here*/
      },
    },
    matrix: {
      add: function (a, b) {
        /*matrix addition*/
      },
      sub: function (a, b) {
        /*matrix subtraction*/
      },
      mul: function (a, b) {
        /*matrix multiplication*/
      },
      eye: function (size) {
        /*identity matrix*/
      },
      dot: function (m, a) {
        /*dot product*/
      },
      times: function (a, b) {
        /*element-wise multiplication*/
      },
    },
  },
};

var answer1 = myLib.math.real.sub(myLib.math.real.add(20, 22), myLib.math.real.mul(2, 5));

var ans2 = myLib.math.matrix.times(
  myLib.math.matrix.eye(4),
  myLib.math.complex.sub(new myLib.math.complex.Num(myLib.math.real.add(5, 2), -3), new myLib.math.complex.Num(3, 4))
);

//With 'with' statement
with (myLib.math.real) {
  var answer3 = sub(add(20, 22), mul(2, 5));
}

with (myLib.math) {
  var ans4 = matrix.times(matrix.eye(4), complex.sub(new complex.Num(real.add(5, 2), -3), new complex.Num(3, 4)));
}

//Without 'with' statement
let path = myLib.math.real;
var answer5 = path.sub(path.add(20, 22), path.mul(2, 5));
console.log("🚀 ~ file: Question01.js ~ line 70 ~ answer", answer5);

let secondPath = myLib.math;
var ans6 = secondPath.matrix.times(
  secondPath.matrix.eye(4),
  secondPath.complex.sub(new secondPath.complex.Num(secondPath.real.add(5, 2), -3), new secondPath.complex.Num(3, 4))
);
