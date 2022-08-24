function addNumbers(...args) {
  //console.log(args);
  const initialValue = 0;
  const sum = args.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
  //console.log(sum);
  return sum;
}
var answer = addNumbers(1, 2) + addNumbers(1, 4, 6, 7, 2);
console.log("🚀 ~ file: Question02.js ~ line 9 ~ answer", answer);

//addNumbers(5, 9, 6, 15, 20);
