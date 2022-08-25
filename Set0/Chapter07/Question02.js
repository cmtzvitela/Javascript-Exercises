const germanHolidays = {
  ["05/01"]: "Maifeiertag",
  ["10/03"]: "Tag der Deutschen Einheit",
  ["10/31"]: "Reformationstag",
};

function changeDateFormat(date) {
  let formattedDate = date.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$3/$1/$2");
  let monthDay = date.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$1/$2");
  // console.log(`US date format: ${date}`);
  // console.log(`Germany date format: ${formattedDate}`);
  if (monthDay in germanHolidays === false) {
    return;
  } else {
    return [
      `US date format: ${date}`,
      `Germany date format: ${formattedDate}`,
      `That is the German Holiday: ${germanHolidays[monthDay]}`,
    ];
  }
}

changeDateFormat("05/01/2025");
console.log(changeDateFormat("10/03/2012"));

//let splittingDate = formattedDate.split("");
//console.log("🚀 ~ file: Question02.js ~ line 8 ~ changeDateFormat ~ splittingDate", splittingDate);
//let monthDay = splittingDate[5] + splittingDate[6] + splittingDate[7] + splittingDate[8] + splittingDate[9];
