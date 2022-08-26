const table = document.getElementsByTagName("table")[0];

table.addEventListener("click", (event) => {
  let tdValue = event.target.id;
  alert(`You clicked on number ${tdValue}`);
});

// const tdClick = document.getElementById(event.target.id);
// let tdValue = tdClick.getAttribute("value");
