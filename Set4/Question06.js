const str = "January February March January February March";
function addApril(string) {
  return str.replace(/March/g, "March April");
}

console.log(addApril(str));
