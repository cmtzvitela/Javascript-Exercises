function thisIsA() {
  console.log("Everyday I'm shuffling");
}

function thisIsB() {
  console.log("Both could have fit on the door");
}

function thisIsC() {
  console.log("Should I give up or should I just keep chasing pavements");
}

function globalTimer() {
  setInterval(thisIsA, 1000 * 5);
  setInterval(thisIsB, 1000 * 7);
  setInterval(thisIsC, 1000 * 10);
}

globalTimer();
