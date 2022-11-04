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
const genCan = generateCandidate(candidates);
addButton.addEventListener("click", addCandidate);

function addCandidate() {
  const candidate = genCan.next().value;
  const clonedTemplate = template.content.cloneNode(true);
  const name = clonedTemplate.getElementById("name");
  name.textContent = candidate.name.firstName;
  const lastName = clonedTemplate.getElementById("last-name");
  lastName.textContent = candidate.name.lastName;
  const phone = clonedTemplate.getElementById("phone");
  phone.textContent = candidate.name.phone;
  tableContent.appendChild(clonedTemplate);
  deleteCandidate();
  editCandidate();
}

function* generateCandidate(candidateArray) {
  for (let i = 0; i < candidateArray.length; i++) {
    yield candidateArray[i];
  }
  return alert("There are no more candidates to load");
}

function deleteCandidate() {
  const deleteCan = Array.from(document.getElementsByClassName("delete"));
  deleteCan.forEach((element) => {
    element.addEventListener("click", (e) => {
      tableContent.removeChild(e.currentTarget.parentNode.parentNode);
    });
  });
}
function editCandidate() {
  const editCan = Array.from(document.getElementsByClassName("edit"));
  console.log("🚀 ~ editCan", editCan);
  editCan.forEach((element) => {
    element.addEventListener(
      "click",
      (e) => {
        alert("Window to edit");
      },
      false
    );
  });
}

const httpRequest = new XMLHttpRequest();
const url = "http://www.getcandidates.com";

function getInfo() {
  httpRequest.onload = function () {
    console.log(this.response);
  };
  httpRequest.open("GET", url);
  httpRequest.send();
}

function postCandidate(candidateObj) {
  const data = JSON.stringify(candidateObj);
  httpRequest.open("POST", url, true);
  httpRequest.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  httpRequest.send(data);

  httpRequest.onload = function () {
    if (httpRequest.status === 201) {
      console.log("Post successfully created!");
    }
  };
}

function deleteCandidateFromServer(name) {
  httpRequest.open("DELETE", url);
  httpRequest.send(name);
}

function editCandidateOnServer(candidateObj) {
  const data = JSON.stringify(candidateObj);
  httpRequest.open("PUT", url, true);
  httpRequest.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  httpRequest.send(data);

  httpRequest.onload = function () {
    if (httpRequest.status === 201) {
      console.log("Post successfully edited!");
    }
  };
}
