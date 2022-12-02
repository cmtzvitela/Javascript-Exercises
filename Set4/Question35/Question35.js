const button = document.getElementById("button");
button.addEventListener("click", sortTable);

function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementsByTagName("table")[0];
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    console.log("🚀 ~ rows", rows);
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[1];
      console.log("🚀 ~ x", x);
      y = rows[i + 1].getElementsByTagName("TD")[1];
      if (x.textContent > y.textContent) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
