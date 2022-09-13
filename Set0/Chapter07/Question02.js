const germanHolidays = {
  ["05/01"]: "Maifeiertag",
  ["10/03"]: "Tag der Deutschen Einheit",
  ["10/31"]: "Reformationstag",
};

function changeDateFormat(date) {
  let formattedDate = date.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$3/$1/$2");
  let monthDay = date.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$1/$2");
  if (monthDay in germanHolidays === false) {
    return formattedDate;
  } else {
    return `English-US: ${date} → German-DE: ${formattedDate} (${germanHolidays[monthDay]})`;
    // usFormat: `US date format: ${date}`,
    // germanyFormat: `Germany date format: ${formattedDate}`,
    // holiday: `That is the German Holiday: ${germanHolidays[monthDay]}`,
  }
}

console.log(changeDateFormat("05/01/2025"));
console.log(changeDateFormat("10/03/2012"));
console.log(changeDateFormat("09/11/1987"));

//let splittingDate = formattedDate.split("");
//console.log("🚀 ~ file: Question02.js ~ line 8 ~ changeDateFormat ~ splittingDate", splittingDate);
//let monthDay = splittingDate[5] + splittingDate[6] + splittingDate[7] + splittingDate[8] + splittingDate[9];
