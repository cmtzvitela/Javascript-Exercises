const bigTitle = document.getElementById("big-title");
console.log("🚀 ~ file: Question03.js ~ line 2 ~ bigTitle", bigTitle);

const boundedTitle = changeH1.bind(bigTitle);

boundedTitle.addEventListener("click", changeH1("blue", "96px", "yellow"));

function changeH1(color, fontSize, backgroundColor) {
  // this.style.color = "green";
  // this.style.fontSize = "12px";
  // this.style.backgroundColor = "red";

  this.style.color = color;
  this.style.fontSize = fontSize;
  this.style.backgroundColor = backgroundColor;
}
