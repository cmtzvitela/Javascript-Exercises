const str = "7890xyzXYZ";

function bringTheNextOne(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    let char = string.charCodeAt(i) + 1;
    console.log("🚀 ~ file: Question03-A.js ~ line 7 ~ bringTheNextOne ~ char", char);
    if (char == 123) {
      let newChar = String.fromCharCode(97);
      newString = newString + newChar;
    } else if (char == 91) {
      let newChar = String.fromCharCode(65);
      newString = newString + newChar;
    } else if (char == 58) {
      let newChar = String.fromCharCode(48);
      newString = newString + newChar;
    } else {
      let newChar = String.fromCharCode(char);
      newString = newString + newChar;
    }

    console.log("🚀 ~ file: Question03-A.js ~ line 9 ~ bringTheNextOne ~ newString", newString);
  }
}

bringTheNextOne(str);
