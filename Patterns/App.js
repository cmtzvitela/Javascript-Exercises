import { getAllNotes, searchNote } from './noteFunctions.js';
import { displayNotes, blurNote, dragNote, addTrash } from './noteView.js';
import { commandManager } from './undoFunction.js';

const initialNotes = getAllNotes();
displayNotes(initialNotes);
const createNoteButton = document.getElementById('create-note-button');
createNoteButton.addEventListener('click', () => {
  const createNewNote = commandManager();
  createNewNote.doCommand('NOTECREATION');
});

const searchInput = document.getElementById('search');
let searchTerm = '';
searchInput.addEventListener('change', (e) => {
  searchTerm = e.target.value;
  searchNote(searchTerm);
});

const noteSection = document.getElementById('note-space');
export let sort = new Sortable(noteSection, {
  group: 'noteOrder',
  onEnd: function (e) {
    sort.save();
  },
  store: {
    get: function (sortable) {
      let order = localStorage.getItem(sortable.options.group.name);
      return order ? order.split('|') : [];
    },
    set: function (sortable) {
      let order = sortable.toArray();
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
