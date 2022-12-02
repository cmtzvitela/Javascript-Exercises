function matchingStrings(str1, str2) {
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] != str2[i]) {
      if (str1[i] == "*" || str2[i] == "*") {
      } else {
        return new Error(`The strings didn't match on position ${[i + 1]}`);
      }
    }
  }
  return true;
}

console.log(matchingStrings("Hello", "Hello"));
console.log(matchingStrings("Hello", "Helo"));
console.log(matchingStrings("Hello", "Helho"));
console.log(matchingStrings("Hello", "He*lo"));
console.log(matchingStrings("Hello", "He*llo"));
