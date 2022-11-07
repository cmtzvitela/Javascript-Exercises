const anchor = document.getElementById("id1");
const div = Array.from(document.getElementsByTagName("div"));

anchor.addEventListener("click", (e) => {
  div[0].style.display = "block";
});
