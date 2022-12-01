let candidate = {
  name: {
    firstname: "John",
    lastname: "Galt",
    phone: "123-456-7890",
  },
  printName() {
    return this.name.firstname + " " + this.name.lastname;
  },
};

function addNames(candidate) {
  const info = document.getElementById("body").firstElementChild;
  info.firstElementChild.textContent = candidate.name.firstname;
  info.lastElementChild.textContent = candidate.printName();
}

addNames(candidate);
