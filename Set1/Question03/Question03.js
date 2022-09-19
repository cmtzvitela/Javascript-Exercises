const bigTitle = document.getElementById("big-title-change");
const bigTitle2 = document.getElementById("big-title-default");

bigTitle.addEventListener("click", function () {
  changeH1.call(this, "blue", "96px", "red");
});
bigTitle2.addEventListener("click", changeH1.bind(bigTitle2));

function changeH1(color = "green", fontSize = "12px", backgroundColor = "yellow") {
  this.style.color = color;
  this.style.fontSize = fontSize;
  this.style.backgroundColor = backgroundColor;
}
