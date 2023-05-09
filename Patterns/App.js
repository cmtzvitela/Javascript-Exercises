import { getAllNotes, searchNote } from './noteFunctions.js';
import { displayNotes, blurNote, dragNote, addTrash } from './noteView.js';
import { commandManager } from './undoFunction.js';

const initialNotes = getAllNotes();
displayNotes(initialNotes);
const createNoteButton = document.getElementById('create-note-button');
createNoteButton.addEventListener('click', () => {
  const createNewNote = commandManager();
  createNewNote.doCommand('NOTECREATION');
  //createNote();
});

const searchInput = document.getElementById('search');
let searchTerm = '';
searchInput.addEventListener('change', (e) => {
  searchTerm = e.target.value;
  searchNote(searchTerm);
});

const noteSection = document.getElementById('note-space');
let sort = new Sortable(noteSection, {
  group: 'noteOrder',
  store: {
    get: function (sortable) {
      console.log('🚀 ~ sortable', sortable);
      var order = localStorage.getItem(sortable.options.group.name);
      console.log('🚀 ~ order', order);
      return order ? order.split('|') : [];
    },
    set: function set(sortable) {
      console.log('🚀 ~ sortable', sortable);
      var order = sortable.toArray();
      console.log('🚀 ~ order', order);
      localStorage.setItem(sortable.options.group.name, order.join('|'));
    },
  },
});
addTrash();
blurNote();
dragNote();

const undoButton = document.getElementById('undo-button');
undoButton.addEventListener('click', (e) => {
  const undo = commandManager();
  undo.undo();
});
