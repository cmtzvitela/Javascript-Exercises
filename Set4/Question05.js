Array.prototype.duplicate = function () {
  let doubledArray = this;
  this.forEach((e) => {
    doubledArray.push(e);
  });
  return doubledArray;
};

console.log([1, 2, 3, 4].duplicate());
