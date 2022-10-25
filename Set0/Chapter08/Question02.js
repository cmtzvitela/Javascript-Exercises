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
    if (counter % 2 === 0) {
      thisIsA();
    }
    if (counter % 4 === 0) {
      thisIsB();
    }
    if (counter % 5 === 0) {
      thisIsC();
    }
    console.log(counter);
    return counter;
  };
}
