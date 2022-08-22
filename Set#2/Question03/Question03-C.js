// const regex = new RegExp(/^((.)(?1)\2|.?)/);

const palindrome = "abcdefghihgfedcba";

console.log(palindrome.match(/^(.)\w+\1$/));
