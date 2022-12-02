const arr = [3, 2, 1, 0, -3, 2, 2, -2];

function findTriplets(arr) {
  const n = arr.length;
  let found = false;

  for (let i = 0; i < n - 1; i++) {
    let s = new Set();
    for (let j = i + 1; j < n; j++) {
      let x = -(arr[i] + arr[j]);
      if (s.has(x)) {
        found = true;
        console.log(`[${x}, ${arr[i]}, ${arr[j]}]`);
      } else s.add(arr[j]);
    }
  }

  if (found == false) document.write(" No Triplet Found");
}

findTriplets(arr);
