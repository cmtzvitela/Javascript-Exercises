Date.prototype.nextDay = function () {
  let date = this;
  return date.getDay() + 1;
};

const date1 = new Date();
console.log(date1.nextDay());
