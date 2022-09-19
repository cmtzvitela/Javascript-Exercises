const wordArray = ["Egg", "cat", "glass", "zoom", "library"];
const wordArray2 = ["Aa", "B", "Ccc", "Dddd", "Eeeee"];

function sorting(sortingMethod, array) {
  switch (sortingMethod) {
    case "ascending":
      return array.sort(compareUnicodeAscending);
      break;
    case "descending":
      return array.sort(compareUnicodeDescending);
      break;
    case "lenghtAscending":
      array.sort(function (a, b) {
        if (a.length > b.length) {
          return 1;
        }
        if (b.length > a.length) {
          return -1;
        }
        return 0;
      });
      return array;
      break;
    case "lenghtDescending":
      array.sort(function (a, b) {
        if (a.length > b.length) {
          return -1;
        }
        if (b.length > a.length) {
          return 1;
        }
        return 0;
      });
      return array;
      break;
    case "consonantAscending":
      array.sort(function (a, b) {
        if (consonants(a) > consonants(b)) {
          return 1;
        }
        if (b.length > a.length) {
          return -1;
        }
        return 0;
      });
      return array;
      break;
    case "consonantDescending":
      array.sort(function (a, b) {
        if (consonants(a) > consonants(b)) {
          return -1;
        }
        if (b.length > a.length) {
          return 1;
        }
        return 0;
      });
      return array;
      break;
    default:
      array.sort();
      array;
      break;
  }
}

console.log(sorting("ascending", wordArray));
console.log(sorting("descending", wordArray2));
console.log(sorting("lenghtDescending", wordArray2));
console.log(sorting("lenghtAscending", wordArray));
console.log(sorting("consonantAscending", wordArray2));
console.log(sorting("consonantDescending", wordArray));

function consonants(str) {
  var countConsonants = 0;

  for (var i = 0; i < str.length; i++) {
    if (!"aeiouAEIOU".includes(str[i])) {
      countConsonants++;
    }
  }
  return countConsonants;
}

function compareUnicodeAscending(a, b) {
  return a.toLowerCase().charCodeAt() - b.toLowerCase().charCodeAt();
}

function compareUnicodeDescending(a, b) {
  return b.toLowerCase().charCodeAt() - a.toLowerCase().charCodeAt();
}
