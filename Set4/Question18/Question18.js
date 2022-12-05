let candidates = [
  {
    name: {
      firstName: "John",
      lastName: "Galt",
      phone: "123-456-7890",
    },
  },
  {
    name: {
      firstName: "Carrie",
      lastName: "Bradshaw",
      phone: "985-632-1478",
    },
  },
  {
    name: {
      firstName: "Samantha",
      lastName: "Jones",
      phone: "415-785-3025",
    },
  },
  {
    name: {
      firstName: "Charlotte",
      lastName: "York",
      phone: "025-741-8946",
    },
  },
  {
    name: {
      firstName: "Miranda",
      lastName: "Hobbes",
      phone: "360-258-9410",
    },
  },
];

const template = document.getElementById("candidates");
const tableContent = document.getElementById("table-content");
const addButton = document.getElementById("add-button");
addButton.addEventListener("click", addNewCandidate);

function addCandidates() {
  //const candidate = genCan.next().value;
  for (let i = 0; i < candidates.length; i++) {
    const clonedTemplate = template.content.cloneNode(true);
    const tr = clonedTemplate.getElementById("table-row");
    tr.setAttribute("name", [i]);
    const name = clonedTemplate.getElementById("name");
    name.textContent = candidates[i].name.firstName;
    const lastName = clonedTemplate.getElementById("last-name");
    lastName.textContent = candidates[i].name.lastName;
    const phone = clonedTemplate.getElementById("phone");
    phone.textContent = candidates[i].name.phone;
    tableContent.appendChild(clonedTemplate);
  }
  deleteCandidate();
  editOrDelete();
}

addCandidates();

function addNewCandidate() {
  const firstName = window.prompt("Write the candidate's name");
  console.log(firstName);
  const lastName = window.prompt("Write the candidate's last name");
  const phone = window.prompt("Write the candidate's phone number");
  if ((firstName !== null) & (lastName !== null) & (phone !== null)) {
    candidates.push({ name: { firstName, lastName, phone } });
  }
  cleanTable();
  addCandidates();
}

function cleanTable() {
  while (tableContent.childElementCount > 2) {
    tableContent.removeChild(tableContent.lastChild);
  }
}
function deleteCandidate() {
  const deleteCan = Array.from(document.getElementsByClassName("delete"));
  deleteCan.forEach((element) => {
    element.addEventListener("click", (e) => {
      tableContent.removeChild(e.currentTarget.parentNode.parentNode);
    });
  });
}

function editOrDelete() {
  const editCan = Array.from(document.getElementsByTagName("tr"));
  editCan.forEach((element) => {
    element.addEventListener(
      "click",
      (e) => {
        console.log(e.currentTarget.children);
        if (e.target.id == "edit") {
          const tr = Array.from(e.currentTarget.children);
          const firstName = window.prompt("Write the candidate's name");
          const lastName = window.prompt("Write the candidate's last name");
          const phone = window.prompt("Write the candidate's phone number");
          tr[0].textContent = firstName;
          tr[1].textContent = lastName;
          tr[2].textContent = phone;
          candidates[e.currentTarget.getAttribute("name")] = { name: { firstName, lastName, phone } };
        } else if (e.target.id == "delete") {
          remove(e.currentTarget);
        }
      },
      false
    );
  });
}

function getInfo() {
  fetch("http://candidates.com/database").then((response) =>
    response.json().then((data) => {
      return data;
    })
  );
}

function postCandidate(candidateObj) {
  fetch("http://candidates.com/database", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(candidateObj),
  }).then((res) => res.json());
}

function deleteCandidateFromServer(name) {
  fetch(`http://candidates.com/database/${name}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
}

function editCandidateOnServer(candidateObj) {
  fetch(`http://candidates.com/database/${candidateObj.name}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(candidateObj),
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
}
