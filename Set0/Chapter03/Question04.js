function createPixelData(numberOfPixels) {
  let pixelArray = [];
  for (let i = 0; i < numberOfPixels; i++) {
    pixelArray.push(colorArray[Math.floor(Math.random() * colorArray.length)]);
  }
  return pixelArray;
}

const colorArray = ["yellow", "green", "red", "blue", "brown", "white", "black", "purple", "pink"];

const data = createPixelData(400);

function Image(data, height, width, name) {
  this.pixelData = function getPixelData(indexX, indexY) {
    if (indexX > this.width || indexY > this.height) {
      throw new Error(`Out of range. Max X = ${this.width} and max Y = ${this.height}`);
    }
    const index = indexX * this.width + indexY;
    const pixelInfo = data[index];
    return pixelInfo;
  };
  this.height = height;
  this.width = width;
  this.name = name;
}

let img = new Image(data, 20, 20, "ImageName");

console.log(img.pixelData(0, 2));
console.log(img.name);
console.log(img.height);
console.log(img.width);
