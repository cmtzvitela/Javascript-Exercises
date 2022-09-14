const button = document.querySelector("button");
const button2 = document.getElementById("reset");
const meter = document.querySelector("meter");

let amountOfClicks = incrementCounter();
button.addEventListener("click", (event) => {
  let clicks = amountOfClicks();
  meter.value = clicks;
  if (clicks <= 2) {
    button.textContent = `Click count: ${clicks}`;
  } else if (clicks === 3) {
    button.textContent = `Click count: ${clicks}`;
    button.classList.add("offbutton");
  }
});

function incrementCounter() {
  let amountOfClicks = 1;
  return function () {
    return amountOfClicks++;
  };
}

button2.addEventListener("click", (event) => {
  amountOfClicks = incrementCounter();
  clicks = 0;
  meter.value = 0;
  button.textContent = `Click Me`;
  button.classList.remove("offbutton");
});
