function includesString(str1, str2) {
  const firstString = str1.split('');
  const secondString = str2.split('');
  let newString = '';
  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] == '*' || secondString[i] == '*') {
      newString += firstString[i];
    } else {
      if (firstString[i] == secondString[i]) {
        newString += firstString[i];
      } else {
        return newString;
      }
    }
  }
  return newString;
}
console.log(includesString('Hello', 'Hello'));
console.log(includesString('Hello', 'e*'))
console.log(includesString('Hello', 'He*lo'));
console.log(includesString('Hello', 'Helho'));
console.log(includesString('Hello', 'Hell*'));
console.log(includesString('Hello', '*ello'));
console.log(includesString('Hello', 'Aello'));
