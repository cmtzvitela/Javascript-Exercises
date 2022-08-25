class Shape {
  constructor(pEdges) {
    this.pEdges = pEdges;
  }
  display() {
    console.log(`This shape has ${this.pEdges} sides`);
  }
}

class Quadrilateral extends Shape {
  constructor(pEdges, name, side1, side2, side3, side4) {
    super(pEdges);
    this.name = name;
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.side4 = side4;
  }
  fnArea() {
    let area = 0;
    area = this.side1 * this.side2 * 1.0;
    console.log(`The area is ${area}`);
    return area;
  }
  fnPerimeter() {
    let perimeter = this.side1 + this.side2 + this.side3 + this.side4;
    console.log(`The perimeter is ${perimeter}`);
    return perimeter;
  }
}

class Square extends Quadrilateral {
  constructor(pEdges, name, side) {
    super(pEdges);
    this.name = name;
    this.side = side;
  }
  fnPerimeter() {
    let perimeter = this.side * 4;
    console.log(`The perimeter is ${perimeter}`);
  }
  fnArea() {
    let area = 0;
    area = this.side * this.side * 1.0;
    console.log(`The area is ${area}`);
    return area;
  }
}

class Triangle extends Shape {
  constructor(pEdges, name, side1, side2, side3) {
    super(pEdges);
    this.name = name;
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }
  fnArea() {
    let semiperimeter = (this.side1 + this.side2 + this.side3) / 2;
    let area = Math.sqrt(
      semiperimeter * ((semiperimeter - this.side1) * (semiperimeter - this.side2) * (semiperimeter - this.side3))
    );
    console.log(`The area is ${area}`);
    return area;
  }
  fnPerimeter() {
    let perimeter = this.side1 + this.side2 + this.side3;
    console.log(`The perimeter is ${perimeter}`);
    return perimeter;
  }
}

let square = new Square(4, "square1", 7);
square.fnArea();
square.fnPerimeter();
square.display();

let trian = new Triangle(3, "shape2", 6, 5, 4);
trian.fnArea();
trian.fnPerimeter();
trian.display();

let rectangle = new Quadrilateral(4, "rec1", 3, 4, 3, 4);
rectangle.fnArea();
rectangle.fnPerimeter();
rectangle.display();
class Organism {
  constructor(name) {
    this.name = name;
  }
  introduction() {
    console.log(`That is a ${this.name}`);
  }
}

class Mammal extends Organism {
  constructor(name, numberOfLegs, feedingType) {
    super(name);
    this.numberOfLegs = numberOfLegs;
    this.feedingType = feedingType;
  }
  eatingHabits() {
    console.log(`The ${this.name} is ${this.feedingType}`);
  }
  walking() {
    console.log(`The ${this.name} uses its ${this.numberOfLegs} legs to walk`);
  }
}

class Human extends Mammal {
  constructor(name, numberOfLegs, feedingType, occupation) {
    super(name, numberOfLegs, feedingType);
    this.occupation = occupation;
  }
  working() {
    console.log(`This is ${this.name}, working as a ${this.occupation}`);
  }
}

let animal = new Mammal("tiger", 4, "carnivorous");
console.log("🚀 ~ file: Question01.js ~ line 90 ~ animal", animal);

animal.introduction();
animal.eatingHabits();
animal.walking();

let being = new Human("Peter", 2, "omnivorous", "policeman");
being.working();
