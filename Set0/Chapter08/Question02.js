function thisIsA() {
  console.log("I set fire to the rain");
}

function thisIsB() {
  console.log("Hello from the other side");
}

function thisIsC() {
  console.log("Should I give up or should I just keep chasing pavements");
}
const sentences = printSentences();

setInterval(sentences, 15000);

function printSentences() {
  let counter = 1;
  return function incrementCounter() {
    counter++;
    if (counter % 2 === 0 && counter % 4 === 0 && counter % 5 === 0) {
      thisIsA();
      thisIsB();
      thisIsC();
    } else if (counter % 2 === 0 && counter % 4 === 0) {
      thisIsA();
      thisIsB();
    } else if (counter % 2 === 0 && counter % 5 === 0) {
      thisIsA();
      thisIsC();
    } else if (counter % 4 === 0 && counter % 5 === 0) {
      thisIsB();
      thisIsC();
    } else if (counter % 2 === 0) {
      thisIsA();
    } else if (counter % 4 === 0) {
      thisIsB();
    } else if (counter % 5 === 0) {
      thisIsC();
    }
    console.log(counter);
    return counter;
  };
}

// const start = Date.now();
// console.log("The timer has started");

// setInterval(printSentences, 1000);

// function printSentences() {
//   const timeElapsed = Date.now() - start;
//   if (timeElapsed % 30000 < 999 && timeElapsed % 60000 < 999 && timeElapsed % 75000 < 999) {
//     thisIsA();
//     thisIsB();
//     thisIsC();
//     return;
//   } else if (timeElapsed % 30000 < 999 && timeElapsed % 60000 < 999) {
//     thisIsA();
//     thisIsB();
//     return;
//   } else if (timeElapsed % 30000 < 999 && timeElapsed % 75000 < 999) {
//     thisIsA();
//     thisIsC();
//     return;
//   } else if (timeElapsed % 60000 < 999 && timeElapsed % 75000 < 999) {
//     thisIsB();
//     thisIsC();
//     return;
//   } else if (timeElapsed % 30000 < 999) {
//     return thisIsA();
//   } else if (timeElapsed % 60000 < 999) {
//     return thisIsB();
//   } else if (timeElapsed % 75000 < 999) {
//     return thisIsC();
//   }
// }
