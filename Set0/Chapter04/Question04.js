function dataType(...arguments) {
  let resultString = "";
  arguments.forEach((element) => {
    switch (typeof element) {
      case "number":
        if (Number.isInteger(element)) {
          resultString = resultString + "integer, ";
          break;
        } else {
          resultString = resultString + "float, ";
          break;
        }
      case "object":
        if (element.length) {
          resultString = resultString + "array, ";
          break;
        } else if (Object.keys(element)) {
          resultString = resultString + "object, ";
          break;
        }
      default:
        resultString = resultString + `${typeof element}, `;
        break;
    }
  });
  return resultString.replace(/,\s\B/, " ");
}

console.log(dataType(1, 6.2831, "pi*2", [function () {}, 1], {}, function () {}));
