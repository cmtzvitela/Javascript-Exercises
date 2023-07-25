const template = document.getElementById('candidates');
const editTemplate = document.getElementById('edit-candidates');
const tableContent = document.getElementById('table-content');
const addButton = document.getElementById('add-button');
addButton.addEventListener('click', addNewCandidate);

const API_URL = 'http://localhost:3000/candidates';
async function getCandidates() {
  await fetch(`${API_URL}`)
    .then((response) => response.json())
    .then((candidates) => {
      addCandidates(candidates);
      deleteCandidate();
    });
}

getCandidates();

tableContent.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e.target.parentNode.parentNode);
  if (e.target.id == 'edit') {
    const clonedTemplate = editTemplate.content.cloneNode(true);
    const rowID = e.target.parentNode.parentNode.getAttribute('name');
    const row = document.getElementsByName(rowID)['0'];
    console.log('🚀 ~ row:', row);
    tableContent.replaceChild(clonedTemplate, row);
    editCandidate(rowID);
  }
});

function addCandidates(candidates) {
  for (let i = 0; i < candidates.length; i++) {
    const clonedTemplate = template.content.cloneNode(true);
    const tr = clonedTemplate.getElementById('table-row');
    tr.setAttribute('name', candidates[i].id);
    const name = clonedTemplate.getElementById('name');
    name.textContent = candidates[i].name.firstName;
    const lastName = clonedTemplate.getElementById('last-name');
    lastName.textContent = candidates[i].name.lastName;
    const phone = clonedTemplate.getElementById('phone');
    phone.textContent = candidates[i].name.phone;
    tableContent.appendChild(clonedTemplate);
  }
}

async function addNewCandidate() {
  const clonedTemplate = editTemplate.content.cloneNode(true);
  tableContent.appendChild(clonedTemplate);
  const firstName = document.getElementById('input-first-name');
  let firstNameInput = '';
  firstName.oninput = (e) => {
    firstNameInput = e.target.value;
  };
  const lastName = document.getElementById('input-last-name');
  let lastNameInput = '';
  lastName.oninput = (e) => {
    lastNameInput = e.target.value;
  };
  const phone = document.getElementById('input-phone');
  let phoneInput = '';
  phone.oninput = (e) => {
    phoneInput = e.target.value;
  };
  const button = document.getElementById('edit-button');
  button.addEventListener('click', async (e) => {
    e.preventDefault();
    const candidate = { name: { firstName: firstNameInput, lastName: lastNameInput, phone: phoneInput } };
    postCandidate(candidate);
  });
}

function cleanTable() {
  while (tableContent.childElementCount > 2) {
    tableContent.removeChild(tableContent.lastChild);
  }
}

function deleteCandidate() {
  const deleteCan = Array.from(document.getElementsByClassName('delete'));
  deleteCan.forEach((element) => {
    element.addEventListener('click', async (e) => {
      await deleteCandidateFromServer(e.currentTarget.parentNode.parentNode.getAttribute('name'));
      cleanTable();
      getCandidates();
    });
  });
}

async function editCandidate(id) {
  // const clonedTemplate = editTemplate.content.cloneNode(true);
  // tableContent.appendChild(clonedTemplate);
  const firstName = document.getElementById('input-first-name');
  let firstNameInput = '';
  firstName.oninput = (e) => {
    firstNameInput = e.target.value;
  };
  const lastName = document.getElementById('input-last-name');
  let lastNameInput = '';
  lastName.oninput = (e) => {
    lastNameInput = e.target.value;
  };
  const phone = document.getElementById('input-phone');
  let phoneInput = '';
  phone.oninput = (e) => {
    phoneInput = e.target.value;
  };
  const button = document.getElementById('edit-button');
  button.addEventListener('click', async (e) => {
    e.preventDefault();
    const candidate = { name: { firstName: firstNameInput, lastName: lastNameInput, phone: phoneInput } };
    await editCandidateOnServer(id, candidate);
  });
}

async function postCandidate(candidate) {
  await fetch(`${API_URL}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(candidate),
  }).then((res) => res.json());
}

async function deleteCandidateFromServer(name) {
  await fetch(`${API_URL}/${name}`, {
    method: 'DELETE',
  });
}

async function editCandidateOnServer(id, candidate) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(candidate),
  });
  const json = await res.json();
  console.log(json);
}
