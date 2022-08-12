const twoColumns = document.getElementsByClassName("2-col")[0];
twoColumns.addEventListener("click", () => {
  const element = document.getElementsByClassName("text-columns")[0];
  element.style.columnCount = "2";
});

const threeColumns = document.getElementsByClassName("3-col")[0];
threeColumns.addEventListener("click", () => {
  const element = document.getElementsByClassName("text-columns")[0];
  element.style.columnCount = "3";
});

const fourColumns = document.getElementsByClassName("4-col")[0];
fourColumns.addEventListener("click", () => {
  const element = document.getElementsByClassName("text-columns")[0];
  element.style.columnCount = "4";
});
