function dataType(...arguments) {
  arguments.forEach((element) => {
    console.log(typeof element);
  });
}

dataType(1, 6.2831, "pi*2", [function () {}, 1], {}, function () {});
