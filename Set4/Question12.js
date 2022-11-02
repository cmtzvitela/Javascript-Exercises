const date1 = new Date();
console.log(date1);

function modifyDate(date) {
  let modifiedDate = new Date(`${date.getFullYear() + 6} ${date.getMonth() - 5} ${date.getDay() + 16} UTC`);
  return modifiedDate.toLocaleString();
}

console.log(modifyDate(date1));
