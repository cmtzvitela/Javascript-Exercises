const qwertyOrder = "qwertyuiopasdfghjklzxcvbnm1234567890";
const qwertyOrderBackwards = "0987654321mnbvcxzlkjhgfdsapoiuytrewq";

const qwertyArray = qwertyOrder.split("");
const qwertyBackwardsArray = qwertyOrderBackwards.split("");

function validateString(string) {
  let counter = 0;
  const stringArray = string.split("");
  for (let i = 0; i < string.length; i++) {
    const index = qwertyArray.indexOf(stringArray[i]);
    if (stringArray[i + 1] === qwertyArray[index + 1]) {
      counter++;
      if (counter === 3) {
        return "That sequence cannot be used";
      }
    }
  }
  for (let i = 0; i < string.length; i++) {
    const index = qwertyBackwardsArray.indexOf(stringArray[i]);
    if (stringArray[i + 1] === qwertyBackwardsArray[index + 1]) {
      counter++;
      if (counter === 3) {
        return "That sequence cannot be used";
      }
    }
  }
  return true;
}

console.log(validateString("wert"));
console.log(validateString("1234"));
console.log(validateString("asdf"));
console.log(validateString("trew"));
console.log(validateString("hello"));
console.log(validateString("9485630"));
