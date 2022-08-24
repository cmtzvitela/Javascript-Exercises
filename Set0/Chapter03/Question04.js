function Data(height, width) {
  let newArray = [];
  for (let i = 0; i < height; i++) {
    newArray.push([]);
    newArray[i].push(i);
    for (let j = 0; j < width; j++) {
      newArray[i][j] = j;
    }
  }
  console.log(newArray);
  return newArray
}

function Image(data, height, width, name) {
  this.pixelData = data;
  this.height = height;
  this.width = width;
  this.name = name;
}
let data = new Data(40, 40);
let img = new Image(data, 40, 40, "ImageName");

console.log(img.pixelData[37][15]);
console.log(img.name);
console.log(img.height);
console.log(img.width);
