function dataType(...arguments) {
  let resultString = "";
  arguments.forEach((element) => {
    switch (typeof element) {
      case "string":
        resultString = resultString + "string, ";
        break;
      case "number":
        if (Number.isInteger(element)) {
          resultString = resultString + "integer, ";
          break;
        } else {
          resultString = resultString + "float, ";
          break;
        }
      case "function":
        resultString = resultString + "function, ";
        break;
      case "object":
        if (element.length) {
          resultString = resultString + "array, ";
          break;
        } else if (Object.keys(element)) {
          resultString = resultString + "object, ";
          break;
        }
      default:
        break;
    }
  });
  return resultString.replace(/,\s\B/, " ");
}

console.log(dataType(1, 6.2831, "pi*2", [function () {}, 1], {}, function () {}));
