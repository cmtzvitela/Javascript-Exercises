function generateTable() {
  //Checking first if there is a table already, if there is, delete it
  const deleteTable = !!document.getElementById("generated-table");
  if (deleteTable == true) {
    const deleteTable = document.getElementById("generated-table");
    deleteTable.remove();
  }
  //Taking the values from user input and creatinf a div to contain the table
  const numberOfRows = document.getElementById("row-number").value;
  const numberOfColumns = document.getElementById("column-number").value;
  const tableSpace = document.getElementById("table-space");
  const tableHolder = document.createElement("div");
  tableSpace.appendChild(tableHolder);
  tableHolder.setAttribute("id", "generated-table");
  //Create rows and columns accordingly
  for (let rows = 0; rows < numberOfRows; rows++) {
    const tableRow = document.createElement("tr");
    tableHolder.appendChild(tableRow);
    for (let columns = 0; columns < numberOfColumns; columns++) {
      tableRow.appendChild(document.createElement("td"));
    }
  }
}

// function deleteTable() {
//   const deleteTable = document.getElementById("generated-table");
//   deleteTable.remove();
// }