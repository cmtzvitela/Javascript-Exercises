const wordArray = ["cat", "egg", "glass", "zoom", "library"];

function sorting(sortingMethod) {
  switch (sortingMethod) {
    case "ascending":
      wordArray.sort();
      console.log(wordArray);
      break;
    case "descending":
      wordArray.sort(function (a, b) {
        if (a > b) {
          return -1;
        }
        if (b > a) {
          return 1;
        }
        return 0;
      });
      console.log(wordArray);
      break;
    case "lenghtAscending":
      wordArray.sort(function (a, b) {
        if (a.length > b.length) {
          return 1;
        }
        if (b.length > a.length) {
          return -1;
        }
        return 0;
      });
      console.log(wordArray);
      break;
    case "lenghtDescending":
      wordArray.sort(function (a, b) {
        if (a.length > b.length) {
          return -1;
        }
        if (b.length > a.length) {
          return 1;
        }
        return 0;
      });
      console.log(wordArray);
      break;
    case "consonantAscending":
      wordArray.sort(function (a, b) {
        if (consonants(a) > consonants(b)) {
          return 1;
        }
        if (b.length > a.length) {
          return -1;
        }
        return 0;
      });
      console.log(wordArray);
      break;
    case "consonantDescending":
      wordArray.sort(function (a, b) {
        if (consonants(a) > consonants(b)) {
          return -1;
        }
        if (b.length > a.length) {
          return 1;
        }
        return 0;
      });
      console.log(wordArray);
      break;
    default:
      wordArray.sort();
      console.log(wordArray);
      break;
  }
}

sorting("ascending");
sorting("descending");
sorting("lenghtDescending");
sorting("lenghtAscending");
sorting("consonantAscending");
sorting("consonantDescending");
sorting();

function consonants(str) {
  var countConsonants = 0;

  for (var i = 0; i < str.length; i++) {
    if (str[i] !== "a" && str[i] !== "e" && str[i] !== "i" && str[i] !== "o" && str[i] !== "u" && str[i] !== " ") {
      countConsonants++;
    }
  }
  return countConsonants;
}
