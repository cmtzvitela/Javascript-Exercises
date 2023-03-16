class Person {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
  fullName() {
    return this.name + ' ' + this.lastName;
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

const person1 = new Person('Jonh', 'Williams');
console.log(person1.fullName());
const doc1 = new Medic('Sarah', 'Parker', 'Cardiology');
console.log('🚀 ~ doc1:', doc1);
console.log(doc1.fullName());
console.log(doc1.doctorInfo());

function makeURLquery(object) {
  return new URLSearchParams(object).toString();
}

async function getPerson(paramObject) {
  await fetch(`http://www.getperson.com/${makeURLquery(paramObject)}`, { method: 'GET' })
    .then((response) => {
      response.json();
    })
    .then((data) => {
      return data;
    });
}

console.log(getPerson(doc1));
