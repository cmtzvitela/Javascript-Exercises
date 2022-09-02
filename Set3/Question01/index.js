const noteHolder = document.getElementById("note-holder");
const createNoteButton = document.getElementById("create-note-button");
createNoteButton.addEventListener("click", () => {
  createNote();
});

function createNote() {
  const noteFragment = document.createDocumentFragment();
  const note = document.createElement("article");
  const noteTitle = document.createElement("h2");
  noteTitle.textContent = "This is a title";
  note.appendChild(noteTitle);
  const noteContent = document.createElement("p");
  noteContent.textContent = "This is a test for the content of a note, later it will be replaced";
  note.appendChild(noteContent);
  noteFragment.appendChild(note);
  noteHolder.appendChild(noteFragment);
}
