let candidate = {
  name: {
    firstName: 'John',
    lastName: 'Galt',
    phone: '123-456-7890',
  },
  printName() {
    return this.name.firstName + ' ' + this.name.lastName;
  },
};

function addNames(candidate) {
  const info = document.querySelector('#body .info');
  info.firstElementChild.textContent = candidate.name.firstName;
  info.lastElementChild.textContent = candidate.printName();
}

addNames(candidate);
