const vowels = ["a", "e", "i", "o", "u"];

function countVowelOrDigits(argument) {
  let count = 0;
  if (typeof argument == "string") {
    for (let letter of argument.toLowerCase()) {
      if (vowels.includes(letter)) {
        count++;
      }
    }
    return count;
  }
  if (typeof argument == "number") {
    return Math.ceil(Math.log10(argument));
  }
}

console.log(countVowelOrDigits(25632));
console.log(countVowelOrDigits("hypotenuse"));
