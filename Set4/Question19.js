function includesString(input, pattern) {
  const inputString = input.split('');
  const patternString = pattern.split('');
  let output = '';
  const letterExists = (element) => element === patternString[0];
  let exists = inputString.findIndex(letterExists);
  console.log('🚀 ~ exists:', exists);
  if (exists === -1) {
    return null;
  }

  if (patternString.length > inputString.length) {
    return null;
  }

  for (let i = 0; i < patternString.length; i++) {
    console.log('🚀 ~ i:', i);
    if (patternString[i] == '*' && exists <= inputString.length) {
      output += inputString[exists];
      exists++;
    } else if (inputString[exists] == patternString[i] && exists <= inputString.length) {
      output += inputString[exists];
      exists++;
    }
  }

  return output;
}
console.log(includesString('Hello', 'ello'));
console.log(includesString('Hello', 'e*'));
console.log(includesString('Hello', 'e*lo'));
console.log(includesString('Hello', 'Helho'));
console.log(includesString('Hello', 'Hell*'));
console.log(includesString('Hello', 'llo'));

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
