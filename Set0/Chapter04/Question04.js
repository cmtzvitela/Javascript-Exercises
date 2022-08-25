function dataType(...arguments) {
  arguments.forEach((element) => {
    switch (typeof element) {
      case "string":
        console.log("string");
        break;
      case "number":
        if (Number.isInteger(element)) {
          console.log("integer");
          break;
        } else {
          console.log("float");
          break;
        }
      case "function":
        console.log("function");
        break;
      case "object":
        if (element.length) {
          console.log("array");
          break;
        } else if (Object.keys(element)) {
          console.log("object");
          break;
        }
      default:
        break;
    }
  });
}

dataType(1, 6.2831, "pi*2", [function () {}, 1], {}, function () {});
