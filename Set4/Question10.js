class Person {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
  fullName() {
    return this.name + " " + this.lastName;
  }
}

class Medic extends Person {
  constructor(name, lastName, specialty) {
    super(name, lastName);
    this.specialty = specialty;
  }
  doctorInfo() {
    return `Doctor ${this.name} ${this.lastName} works in ${this.specialty}`;
  }
}

const person1 = new Person("Jonh", "Williams");
console.log(person1.fullName());
const doc1 = new Medic("Sarah Jessica", "Parker", "Cardiology");
console.log(doc1.fullName());
console.log(doc1.doctorInfo());

const http = new XMLHttpRequest();
const url = "http://www.someurl.com";
http.open("GET", url);
http.send();

http.onreadystatechange = function () {
  if (this.readyState === 4 && this.status == 200) {
    console.log(http.responseText);
  }
};
