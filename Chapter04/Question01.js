function fibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

function getSequence(num) {
  for (let i = 0; i < num; i++) {
    console.log(fibonacci(i));
  }
}

getSequence(15);
