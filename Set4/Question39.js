const qwertyOrder = 'qwertyuiop asdfghjkl zxcvbnm 1234567890';
const qwertyOrderBackwards = '0987654321 mnbvcxz lkjhgfdsa poiuytrewq';

const qwertyArray = qwertyOrder.split('');
const qwertyBackwardsArray = qwertyOrderBackwards.split('');

function validateString(string) {
  let counter = 0;
  const stringArray = string.split('');
  for (let i = 0; i < string.length; i++) {
    const index = qwertyArray.indexOf(stringArray[i]);
    if (stringArray[i + 1] === qwertyArray[index + 1]) {
      counter++;
      if (counter === 3) {
        return 'That sequence cannot be used';
      }
    } else {
      counter = 0;
    }
  }
  for (let i = 0; i < string.length; i++) {
    const index = qwertyBackwardsArray.indexOf(stringArray[i]);
    if (stringArray[i + 1] === qwertyBackwardsArray[index + 1]) {
      counter++;
      if (counter === 3) {
        return 'That sequence cannot be used';
      }
    } else {
      counter = 0;
    }
  }
  return true;
}

console.log(validateString('wer2t'));
console.log(validateString('p1mm234'));
console.log(validateString('asdf84jif'));
console.log(validateString('584236trew'));
console.log(validateString('hello'));
console.log(validateString('90qw'));
console.log(validateString('opas'));
