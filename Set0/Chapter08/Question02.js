function thisIsA() {
  console.log("I set fire to the rain");
}

function thisIsB() {
  console.log("Hello from the other side");
}

function thisIsC() {
  console.log("Should I give up or should I just keep chasing pavements");
}

const start = Date.now();
console.log("The timer has started");

// let timer = setTimeout(function globalTimer() {
//   printSentences();
//   setTimeout(globalTimer, 1000);
// }, 1000);

setInterval(printSentences, 1000);

function printSentences() {
  const timeElapsed = Date.now() - start;
  console.log(timeElapsed);
  if (timeElapsed % 30000 < 999 && timeElapsed % 60000 < 999 && timeElapsed % 75000 < 999) {
    thisIsA();
    thisIsB();
    thisIsC();
    return;
  } else if (timeElapsed % 30000 < 999 && timeElapsed % 60000 < 999) {
    thisIsA();
    thisIsB();
    return;
  } else if (timeElapsed % 30000 < 999 && timeElapsed % 75000 < 999) {
    thisIsA();
    thisIsC();
    return;
  } else if (timeElapsed % 60000 < 999 && timeElapsed % 75000 < 999) {
    thisIsB();
    thisIsC();
    return;
  } else if (timeElapsed % 30000 < 999) {
    return thisIsA();
  } else if (timeElapsed % 60000 < 999) {
    return thisIsB();
  } else if (timeElapsed % 75000 < 999) {
    return thisIsC();
  }
}

// function globalTimer() {
//   setInterval(thisIsA, 1000 * 5);
//   setInterval(thisIsB, 1000 * 7);
//   setInterval(thisIsC, 1000 * 10);
// }

// globalTimer();
