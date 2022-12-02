const str = "January March April June";
const months = "January February March April May June July August September October November December";
const monthArray = months.split(" ");

function completeMonths(string) {
  const stringArray = string.split(" ");
  console.log(stringArray[0] == monthArray[0]);
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] !== monthArray[i]) {
      stringArray.splice([i], 0, monthArray[i]);
    }
  }
  return stringArray.toString();
}

console.log(completeMonths(str));
