import { displayNotes, addTrash, blurNote, dragNote } from './noteView.js';

export function getAllNotes() {
  const notes = JSON.parse(localStorage.getItem('notes') || '[]');
  return notes;
  // return notes.sort((a, b) => {
  //   return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
  // });
}

export function createNote() {
  const newNote = {
    id: Math.floor(Math.random() * 1000000),
    title: 'New Note',
    body: 'Take note...',
    creationDate: new Date(),
  };
  if (!localStorage.getItem('notes')) {
    localStorage.setItem('notes', JSON.stringify([]));
  }
  const notes = JSON.parse(localStorage.getItem('notes'));
  notes.push(newNote);
  localStorage.setItem('notes', JSON.stringify(notes));
  const noteTemplate = document.getElementById('new-note');
  const clonedTemplate = noteTemplate.content.cloneNode(true);
  const noteSection = document.getElementById('note-space');
  noteSection.appendChild(clonedTemplate);
  const noteText = clonedTemplate.getElementById('note-text');
  noteText.addEventListener('keydown', (e) => {
    if (e.keyCode === 9) {
      e.preventDefault();
      noteText.setRangeText('\t ', noteText.selectionStart, noteText.selectionEnd, 'end');
    }
  });
  while (noteSection.firstChild) {
    noteSection.removeChild(noteSection.firstChild);
  }
  displayNotes(getAllNotes());
  addTrash();
  blurNote();
}

export function deleteNote(noteID) {
  const notes = getAllNotes();
  const newNotes = notes.filter((note) => note.id != noteID);

  localStorage.setItem('notes', JSON.stringify(newNotes));
  const noteSection = document.getElementById('note-space');
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
  console.log('🚀 ~ noteToUpdate', noteToUpdate);
  const span = noteToUpdate.getElementsByTagName('span');
  const date = existingNote.updated;
  span.textContent = `Last updated ${date.toLocaleString()}`;
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

  localStorage.setItem('notes', JSON.stringify(notes));
}

export function searchNote(searchTerm) {
  let notes = getAllNotes();
  const lowerSearch = searchTerm.toLowerCase();
  const newNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(lowerSearch) || note.body.toLowerCase().includes(lowerSearch);
  });
  const noteSection = document.getElementById('note-space');
  while (noteSection.firstChild) {
    noteSection.removeChild(noteSection.firstChild);
  }
  displayNotes(newNotes);
}
