const str = "7890xyz*=XYaZ`[";

function moveByOne(str) {
  var result = [];

  str.split("").forEach(function (i) {
    if (/[A-Z]/.test(i)) {
      i = i.replace(/[A-Z]/, String.fromCharCode(65 + ((i.charCodeAt() - 65 + 1) % 26)));
    }
    if (/[a-z]/.test(i)) {
      i = i.replace(/[a-z]/, String.fromCharCode(97 + ((i.charCodeAt() - 97 + 1) % 26)));
    }
    if (/[0-9]/.test(i)) {
      i = i.replace(/[0-9]/, String.fromCharCode(48 + ((i.charCodeAt() - 48 + 1) % 10)));
    }
    result.push(i);
  });
  return result.join("");
}

console.log(moveByOne(str));

// function moveByOne(str) {
//   var result = [];

//   str.split("").forEach(function (i) {
//     if (/[A-Z]/.test(i)) {
//       i = String.fromCharCode(65 + ((i.charCodeAt(0) - 65 + 1) % 26));
//     }
//     if (/[a-z]/.test(i)) {
//       i = String.fromCharCode(97 + ((i.charCodeAt(0) - 97 + 1) % 26));
//     }
//     if (/[0-9]/.test(i)) {
//       i = String.fromCharCode(48 + ((i.charCodeAt(0) - 48 + 1) % 10));
//     }
//     result.push(i);
//   });

//   return result.join("");
// }
