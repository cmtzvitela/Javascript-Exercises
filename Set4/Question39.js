const qwertyOrder = "qwertyuiopasdfghjklzxcvbnm";
const qwertyOrderBackwards = "mnbvcxzlkjhgfdsapoiuytrewq";
function validate(string){
  if(qwertyOrder.includes(string) || qwertyOrderBackwards.includes(string)){
    return new Error("That can't be used")
  }
}

console.log(validate(""))

function validateString(string) {
  const regex1 = /1234/g;
  const regex2 = /qwert/g;
  const regex3 = /asdf/g;
  const regex4 = /(^|(.)(?!\2))(\d)\3{3}(?!\3)/;
  console.log(regex3.test(string));

  if (
    regex1.test(string) ||
    regex2.test(string) ||
    regex3.test(string) ||
    regex4.test(string) ||
    validateConsecutiveSeq(string)
  ) {
    return new Error("That can't be used");
  }
  return true;
}

console.log(validateString("4123458"));
console.log(validateString("qwert"));
console.log(validateString("asdfghj"));
console.log(validateString("12444458"));
console.log(validateString("12896345"));

function validateConsecutiveSeq(string) {
  const letterArray = string.split("");
  let isConSeq = false;
  let previousAsciiCode = 0;
  let numSeqcount = 0;

  for (let i = 0; i < letterArray.length; i++) {
    let asciiCode = letterArray[i].charCodeAt();
    if (previousAsciiCode + 1 === asciiCode) {
      numSeqcount++;
      if (numSeqcount >= 2) {
        isConSeq = true;
        return false;
      }
    } else {
      numSeqcount = 0;
    }
    previousAsciiCode = asciiCode;
  }
  return true;
}
