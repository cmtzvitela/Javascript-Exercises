import { deleteNote, editNote, searchNote } from "./noteFunctions.js";

export function displayNotes(noteArray = []) {
  noteArray.forEach((note) => {
    const noteTemplate = document.getElementById("new-note");
    const clonedTemplate = noteTemplate.content.cloneNode(true);
    const noteDiv = clonedTemplate.getElementById("note-body");
    noteDiv.id = `${note.id}`;
    const noteSection = document.getElementById("note-space");
    const noteTitle = clonedTemplate.getElementById("note-title");
    noteTitle.value = `${note.title}`;
    const noteText = clonedTemplate.getElementById("note-text");
    noteText.value = `${note.body}`;
    const noteToUpdate = clonedTemplate.getElementById(`${note.id}`);
    const span = noteToUpdate.getElementsByTagName("span");
    const updatedDate = note.updated ? new Date(note.updated) : new Date(note.creationDate);
    span[0].textContent = `Last updated ${updatedDate.toLocaleString()}`;
    noteSection.appendChild(clonedTemplate);
  });
}

export function blurNote() {
  const inpTitle = document.getElementsByClassName("note-title");
  const inpBody = document.getElementsByClassName("note-text");
  for (let i = 0; i < inpTitle.length; i++) {
    inpTitle[i].addEventListener("blur", (event) => {
      const updatedTitle = inpTitle[i].value;
      const updatedBody = inpBody[i].value;
      const noteID = event.currentTarget.parentNode.id;
      editNote({ id: noteID, title: updatedTitle, body: updatedBody });
    });
    inpBody[i].addEventListener("blur", (event) => {
      const updatedTitle = inpTitle[i].value;
      const updatedBody = inpBody[i].value;
      const noteID = event.currentTarget.parentNode.id;
      editNote({ id: noteID, title: updatedTitle, body: updatedBody });
    });
  }
}

export function createNote() {
  const newNote = {
    id: Math.floor(Math.random() * 1000000),
    title: "New Note",
    body: "Take note...",
    creationDate: new Date(),
  };
  if (!localStorage.getItem("notes")) {
    localStorage.setItem("notes", JSON.stringify([]));
  }
  const notes = JSON.parse(localStorage.getItem("notes"));
  notes.push(newNote);
  localStorage.setItem("notes", JSON.stringify(notes));
  const noteTemplate = document.getElementById("new-note");
  const clonedTemplate = noteTemplate.content.cloneNode(true);
  const noteSection = document.getElementById("note-space");
  noteSection.appendChild(clonedTemplate);
  addTrash();
  blurNote();
}

export function addTrash() {
  const trashButton = document.getElementsByClassName("note-delete");

  for (let i = 0; i < trashButton.length; i++) {
    trashButton[i].addEventListener("click", (event) => {
      deleteNote(event.currentTarget.parentNode.id);
    });
  }
}

