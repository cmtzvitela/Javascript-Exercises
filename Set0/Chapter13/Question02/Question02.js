const button = document.querySelector("button");
const button2 = document.getElementById("reset");
const meter = document.querySelector("meter");

let amountOfClicks = 0;

button.addEventListener("click", (event) => {
  amountOfClicks++;
  meter.value = amountOfClicks;
  if (amountOfClicks <= 2) {
    button.textContent = `Click count: ${amountOfClicks}`;
  } else if (amountOfClicks === 3) {
    button.textContent = `Click count: ${amountOfClicks}`;
    button.classList.add("offbutton");
  }
});

button2.addEventListener("click", (event) => {
  amountOfClicks = 0;
  meter.value = 0;
  button.textContent = `Click Me`;
  button.classList.remove("offbutton");
});
