const palindrome = "_@12345!54321@_";

const palindromeFinder = /\b(.?)(.?)(.?)(.?)(.?)(.?)(.?)(.?)(.?)(.)\S?\10\9\8\7\6\5\4\3\2\1\b/g;

console.log(palindrome.match(palindromeFinder));

// function checkPalindrome(string) {
//   let tempString = string.match(/.+/gi).join("").toLowerCase();
//   let secondString = tempString.split("").reverse().join("");
//   return tempString === secondString;
// }

// console.log(checkPalindrome(palindrome));
// console.log(palindrome.match(/^(.)\w+\1$/));
