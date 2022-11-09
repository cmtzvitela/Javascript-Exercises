const div = Array.from(document.getElementsByTagName("p"));

for (let i = 0; i < div.length; i++) {
  if (i % 2 != 0) {
    div[i].style.visibility = "hidden";
  } else {
    div[i].addEventListener("click", (e) => {
      if (div[i + 1].style.visibility == "hidden") {
        hideAll();
        div[i + 1].style.visibility = "visible";
      } else {
        div[i + 1].style.visibility = "hidden";
      }
    });
  }
}

function hideAll() {
  for (let i = 0; i < div.length; i++) {
    if (i % 2 != 0) {
      div[i].style.visibility = "hidden";
    }
  }
}
