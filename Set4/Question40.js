const arr = [3, 2, 1, 0, -3, 2, 2, -2];
var n = arr.length;

function findTriplets(arr, n) {
  var found = false;

  for (var i = 0; i < n - 1; i++) {
    var s = new Set();
    for (var j = i + 1; j < n; j++) {
      var x = -(arr[i] + arr[j]);
      if (s.has(x)) {
        found = true;
        console.log(`[${x}, ${arr[i]}, ${arr[j]}]`);
      } else s.add(arr[j]);
    }
  }

  if (found == false) document.write(" No Triplet Found");
}

findTriplets(arr, n);
