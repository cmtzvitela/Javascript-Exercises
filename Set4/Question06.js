const str = 'January February January February';
const months = 'January February March April May June July August September October November December';
const monthArray = months.split(' ');

function fillMonths(string) {
  const stringArray = string.split(' ');
  for (let i = 0; i < stringArray.length; i++) {
    const foundMonth = monthArray.indexOf(stringArray[i]);
    if (stringArray[foundMonth + 1] !== monthArray[foundMonth + 1]) {
      stringArray.splice([i + 1], 0, monthArray[foundMonth + 1]);
      stringArray.push(monthArray[foundMonth + 1]);
      break;
    }
  }

  return stringArray.toString();
}

console.log(fillMonths(str));

// let counter = 0;
// do {
//   const foundMonth = monthArray.indexOf(stringArray[counter]);
//   console.log(stringArray[counter]);
//   if (stringArray[foundMonth + 1] !== monthArray[foundMonth + 1]) {
//     stringArray.splice([counter + 1], 0, monthArray[foundMonth + 1]);
//     stringArray.push(monthArray[foundMonth + 1]);
//     counter = 0;
//   }
//   counter += 1;
// } while (counter < stringArray.length);
