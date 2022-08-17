const vowels = ["a", "e", "i", "o", "u"];

function countVowelOrDigits(something) {
  let count = 0;
  if (typeof something == "string") {
    for (let letter of something.toLowerCase()) {
      if (vowels.includes(letter)) {
        count++;
      }
    }

    console.log(count);
  }
  if (typeof something == "number") {
    console.log(Math.ceil(Math.log10(something)));
  }
}

countVowelOrDigits(25632);
countVowelOrDigits("hypotenuse");
