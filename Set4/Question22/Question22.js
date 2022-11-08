const colorArray = ["blue", "red", "yellow", "brown", "black", "purple", "green", "white", "gray", "pink", "orange"];

const button = document.getElementById("button");
button.addEventListener("click", changeColor);
const div = document.getElementById("div");
function changeColor() {
  div.style.backgroundColor = colorArray[Math.floor(Math.random() * colorArray.length)];
}
