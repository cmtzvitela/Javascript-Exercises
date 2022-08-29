const str = "7890xyz*=XYZ`[";

function bringTheNextOne(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    let char = string.charCodeAt(i) + 1;
    if (char < 48 || char > 123) {
      let newChar = String.fromCharCode(char - 1);
      newString = newString + newChar;
    } else if (char < 65 && char > 58) {
      let newChar = String.fromCharCode(char - 1);
      newString = newString + newChar;
    } else if (char < 98 && char > 91) {
      let newChar = String.fromCharCode(char - 1);
      newString = newString + newChar;
    } else if (char == 123) {
      //If z put a
      let newChar = String.fromCharCode(97);
      newString = newString + newChar;
    } else if (char == 91) {
      //If Z put A
      let newChar = String.fromCharCode(65);
      newString = newString + newChar;
    } else if (char == 58) {
      //If 9 put 0
      let newChar = String.fromCharCode(48);
      newString = newString + newChar;
    } else {
      let newChar = String.fromCharCode(char);
      newString = newString + newChar;
    }
  }
  return newString;
}

console.log(bringTheNextOne(str));
