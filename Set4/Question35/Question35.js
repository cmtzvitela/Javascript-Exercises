const button = document.getElementById('button');
button.addEventListener('click', sortTable);

function sortTable() {
  let table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementsByTagName('table')[0];
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName('TD')[1];
      y = rows[i + 1].getElementsByTagName('TD')[1];
      if (x.textContent * 1 > y.textContent * 1) {
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
