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
  const info = document.getElementsByClassName("info");
  info[1].childNodes[3].textContent = candidate.name.firstname;
  info[1].childNodes[4].textContent = candidate.printName();
}

addNames(candidate);
