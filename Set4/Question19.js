function includesString(input, pattern) {
  const inputString = input.split('');
  const patternString = pattern.split('');
  let newString = '';
  if (patternString.length > inputString.length) {
    return null;
  }
  for (let i = 0; i < patternString.length; i++) {
    if (patternString[i] == '*') {
      newString += inputString[i];
    } else if (inputString[i] == patternString[i]) {
      newString += inputString[i];
    }
  }

  return newString;
}
console.log(includesString('Hello', 'Hello'));
console.log(includesString('Hello', 'e*'));
console.log(includesString('Hello', 'e*lo'));
console.log(includesString('Hello', 'Helho'));
console.log(includesString('Hello', 'Hell*'));
console.log(includesString('Hello', '*ello'));
console.log(includesString('Hello', 'Aello'));

// for (let i = 0; i < inputString.length; i++) {
//   if (inputString[i] == '*' || patternString[i] == '*') {
//     newString += inputString[i];
//   } else {
//     if (inputString[i] == patternString[i]) {
//       newString += inputString[i];
//     } else {
//       return newString;
//     }
//   }
// }
