const germanHolidays = {
  ["05/01"]: "Maifeiertag",
  ["10/03"]: "Tag der Deutschen Einheit",
  ["10/31"]: "Reformationstag",
};

function changeDateFormat(date) {
  let formattedDate = date.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$3/$1/$2");
  console.log(`US date format: ${date}`);
  console.log(`Germany date format: ${formattedDate}`);
  let splittingDate = formattedDate.split("");
  console.log("🚀 ~ file: Question02.js ~ line 8 ~ changeDateFormat ~ splittingDate", splittingDate);
  let monthDay = splittingDate[5] + splittingDate[6] + splittingDate[7] + splittingDate[8] + splittingDate[9];
  console.log("🚀 ~ file: Question02.js ~ line 10 ~ changeDateFormat ~ monthDay", monthDay);
  console.log(typeof monthDay);
  if (monthDay in germanHolidays === false) {
    return;
  } else {
    console.log("That's the German Holiday: ", germanHolidays[monthDay]);
  }
}

changeDateFormat("05/01/2025");
changeDateFormat("10/03/2012");
