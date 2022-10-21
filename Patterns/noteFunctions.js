import { displayNotes, addTrash, blurNote, dragNote } from "./noteView.js";

export function getAllNotes() {
  const notes = JSON.parse(localStorage.getItem("notes") || "[]");

  return notes.sort((a, b) => {
    return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
  });
}

export function deleteNote(noteID) {
  const notes = getAllNotes();
  const newNotes = notes.filter((note) => note.id != noteID);

  localStorage.setItem("notes", JSON.stringify(newNotes));
  const noteSection = document.getElementById("note-space");
  while (noteSection.firstChild) {
    noteSection.removeChild(noteSection.firstChild);
  }
  displayNotes(newNotes);
  addTrash();
  blurNote();
  dragNote();
}

export function updatedDate(existingNote) {
  const noteToUpdate = document.getElementById(existingNote.id);
  const span = noteToUpdate.getElementsByTagName("span");
  const date = existingNote.updated;
  span[0].textContent = `Last updated ${date.toLocaleString()}`;
}

export function editNote(noteToEdit) {
  const notes = getAllNotes();
  const existing = notes.find((note) => note.id == noteToEdit.id);
  if (existing) {
    existing.title = noteToEdit.title;
    existing.body = noteToEdit.body;
    existing.updated = new Date();
    updatedDate(existing);
  }

  localStorage.setItem("notes", JSON.stringify(notes));
}

export function searchNote(searchTerm) {
  let notes = getAllNotes();
  const lowerSearch = searchTerm.toLowerCase();
  const newNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(lowerSearch) || note.body.toLowerCase().includes(lowerSearch);
  });
  const noteSection = document.getElementById("note-space");
  while (noteSection.firstChild) {
    noteSection.removeChild(noteSection.firstChild);
  }
  displayNotes(newNotes);
}
