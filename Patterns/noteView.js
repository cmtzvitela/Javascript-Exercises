import { editNote, getAllNotes } from './noteFunctions.js';
import { commandManager } from './undoFunction.js';

export function displayNotes(noteArray) {
  noteArray.forEach((note) => {
    const noteTemplate = document.getElementById('new-note');
    const clonedTemplate = noteTemplate.content.cloneNode(true);
    const noteDiv = clonedTemplate.getElementById('note-body');
    noteDiv.id = `${note.id}`;
    const noteSection = document.getElementById('note-space');
    const noteTitle = clonedTemplate.getElementById('note-title');
    noteTitle.value = `${note.title}`;
    const noteText = clonedTemplate.getElementById('note-text');
    noteText.addEventListener('keydown', (e) => {
      if (e.keyCode === 9) {
        e.preventDefault();
        noteText.setRangeText('\t ', noteText.selectionStart, noteText.selectionEnd, 'end');
      }
    });
    noteText.value = `${note.body}`;
    const noteToUpdate = clonedTemplate.getElementById(`${note.id}`);
    const span = noteToUpdate.getElementsByTagName('span');
    const updatedDate = note.updated ? new Date(note.updated) : new Date(note.creationDate);
    span[0].textContent = `Last updated ${updatedDate.toLocaleString()}`;
    noteSection.appendChild(clonedTemplate);
  });
}

export function blurNote() {
  const notes = getAllNotes();
  const inpTitle = document.getElementsByClassName('note-title');
  const inpBody = document.getElementsByClassName('note-text');
  for (let i = 0; i < inpTitle.length; i++) {
    inpTitle[i].addEventListener('input', (event) => {
      const updatedTitle = inpTitle[i].value;
      const updatedBody = inpBody[i].value;
      const noteID = event.currentTarget.parentNode.id;
      const editTitle = commandManager(notes[i]);
      editTitle.doCommand('NOTEEDIT');
      editNote({ id: noteID, title: updatedTitle, body: updatedBody });
    });
    inpBody[i].addEventListener('input', (event) => {
      const updatedTitle = inpTitle[i].value;
      const updatedBody = inpBody[i].value;
      const noteID = event.currentTarget.parentNode.id;
      const editBody = commandManager(notes[i]);
      console.log('🚀 ~ editBody', editBody);
      editBody.doCommand('NOTEEDIT');
      editNote({ id: noteID, title: updatedTitle, body: updatedBody });
    });
  }
}

export function addTrash() {
  const trashButton = document.getElementsByClassName('note-delete');

  for (let i = 0; i < trashButton.length; i++) {
    trashButton[i].addEventListener('click', (event) => {
      const confirmation = confirm('The note will be deleted');
      if (confirmation) {
        const deleteNote = commandManager(event.currentTarget.parentNode.id);
        deleteNote.doCommand('NOTEDELETION');
      }
    });
  }
}

export function dragNote() {
  const draggedNote = document.getElementsByClassName('note-body');
  const notes = getAllNotes();
  for (let i = 0; i < draggedNote.length; i++) {
    draggedNote[i].addEventListener('dragstart', (e) => {
      const dragNote = commandManager(notes);
      dragNote.doCommand('NOTEDRAG');
    });
  }
}
