const noteFunctions = {
  getAllNotes() {
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');

    return notes.sort((a, b) => {
      return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
    });
  },

  displayNotes() {
    const notes = this.getAllNotes();
    const noteTemplate = document.getElementById('new-note');
    const noteSection = document.getElementById('note-space');
    notes.forEach((note) => {
      const clonedTemplate = noteTemplate.content.cloneNode(true);
      const noteDiv = clonedTemplate.getElementById('note-body');
      noteDiv.id = `${note.id}`;
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
  },

  deleteNote(noteID) {
    const notes = this.getAllNotes();
    const newNotes = notes.filter((note) => note.id != noteID);

    localStorage.setItem('notes', JSON.stringify(newNotes));
    const noteSection = document.getElementById('note-space');
    while (noteSection.firstChild) {
      noteSection.removeChild(noteSection.firstChild);
    }
    this.displayNotes();
    this.addTrash();
  },
  updatedDate(existingNote) {
    const noteToUpdate = document.getElementById(existingNote.id);
    const span = noteToUpdate.getElementsByTagName('span');
    const date = existingNote.updated;
    span[0].textContent = `Last updated ${date.toLocaleString()}`;
  },

  editNote(noteToEdit) {
    const notes = noteFunctions.getAllNotes();
    const existing = notes.find((note) => note.id == noteToEdit.id);
    if (existing) {
      existing.title = noteToEdit.title;
      existing.body = noteToEdit.body;
      existing.updated = new Date();
      this.updatedDate(existing);
    }

    localStorage.setItem('notes', JSON.stringify(notes));
  },

  blurNote() {
    const inpTitle = document.getElementsByClassName('note-title');
    const inpBody = document.getElementsByClassName('note-text');
    for (let i = 0; i < inpTitle.length; i++) {
      inpTitle[i].addEventListener('input', (event) => {
        const updatedTitle = inpTitle[i].value;
        const updatedBody = inpBody[i].value;
        const noteID = event.currentTarget.parentNode.id;
        this.editNote({ id: noteID, title: updatedTitle, body: updatedBody });
      });
      inpBody[i].addEventListener('input', (event) => {
        const updatedTitle = inpTitle[i].value;
        const updatedBody = inpBody[i].value;
        const noteID = event.currentTarget.parentNode.id;
        this.editNote({ id: noteID, title: updatedTitle, body: updatedBody });
      });
    }
  },

  createNote() {
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
    const noteText = clonedTemplate.getElementById('note-text');
    noteText.addEventListener('keydown', (e) => {
      if (e.keyCode === 9) {
        e.preventDefault();
        noteText.setRangeText('\t ', noteText.selectionStart, noteText.selectionEnd, 'end');
      }
    });
    noteSection.appendChild(clonedTemplate);
    this.addTrash();
    this.blurNote();
  },

  addTrash() {
    const trashButton = document.getElementsByClassName('note-delete');

    for (let i = 0; i < trashButton.length; i++) {
      trashButton[i].addEventListener('click', (event) => {
        const confirmation = confirm('The note will be deleted');
        if (confirmation) {
          noteFunctions.deleteNote(event.currentTarget.parentNode.id);
        }
      });
    }
  },
};

noteFunctions.displayNotes();
const createNoteButton = document.getElementById('create-note-button');
createNoteButton.addEventListener('click', () => {
  noteFunctions.createNote();
});

noteFunctions.addTrash();
noteFunctions.blurNote();
