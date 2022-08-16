addEventListener("click", (event) => {
  const tdClick = document.getElementById(event.target.id);
  //console.log("🚀 ~ file: Question01.js ~ line 3 ~ addEventListener ~ tdClick", tdClick);

  let tdValue = tdClick.getAttribute("value");
  //console.log("🚀 ~ file: Question01.js ~ line 6 ~ addEventListener ~ tdValue", tdValue);
  alert(`You clicked on number ${tdValue}`);
});

// window.onclick = (e) => {
//   console.log(e.target); // to get the element
//   alert(`You just clicked on number ${e.target.id}`); // to get the element tag name alone
// };
