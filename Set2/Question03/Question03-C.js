const palindrome = "_@12345!54321@_";

function checkPalindrome(string) {
  let tempString = string.match(/.+/gi).join("").toLowerCase();
  let secondString = tempString.split("").reverse().join("");
  return tempString === secondString;
}

console.log(checkPalindrome(palindrome));
//console.log(palindrome.match(/^(.)\w+\1$/));
