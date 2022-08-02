function addNumbers(...args) {
  console.log(args);
  const initialValue = 0;
  const sum = args.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);

  console.log(sum);
}

addNumbers(5, 9, 6, 15, 20);
