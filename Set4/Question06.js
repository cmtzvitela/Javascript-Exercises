const str = 'January February March January February March';
const months = 'January February March April May June July August September October November December';
const monthArray = months.split(' ');

function fillMonths(string) {
  const stringArray = string.split(' ');
  for (let i = 0; i < stringArray.length; i++) {
    const foundMonth = monthArray.indexOf(stringArray[i]);
    console.log(stringArray[i]);
    if (stringArray[foundMonth + 1] !== monthArray[foundMonth + 1]) {
      stringArray.splice([i + 1], 0, monthArray[foundMonth + 1]);
      stringArray.push(monthArray[foundMonth + 1]);
      break;
    }
  }
  return stringArray.toString();
}

// function completeMonths(string) {
//   const stringArray = string.split(' ');
//   for (let i = 0; i < stringArray.length; i++) {
//     if (stringArray[i] !== monthArray[i]) {
//       stringArray.splice([i], 0, monthArray[i]);
//     }
//   }
//   return stringArray.toString();
// }

//console.log(completeMonths(str));
console.log(fillMonths(str));
