import { getAllNotes, searchNote } from "./noteFunctions.js";
import { displayNotes, blurNote, dragNote, addTrash } from "./noteView.js";
import { commandManager } from "./undoFunction.js";

const initialNotes = getAllNotes();
displayNotes(initialNotes);
const createNoteButton = document.getElementById("create-note-button");
createNoteButton.addEventListener("click", () => {
  const createNewNote = commandManager();
  createNewNote.doCommand("NOTECREATION");
  //createNote();
});

const searchInput = document.getElementById("search");
let searchTerm = "";
searchInput.addEventListener("change", (e) => {
  searchTerm = e.target.value;
  searchNote(searchTerm);
});

addTrash();
blurNote();
dragNote();
// dropNote();

const noteSection = document.getElementById("note-space");
let sort = new Sortable(noteSection, {
  group: "noteOrder",
  store: {
    get: function (sortable) {
      var order = localStorage.getItem(sortable.options.group.name);
      return order ? order.split("|") : [];
    },
    set: function (sortable) {
      var order = sortable.toArray();
      localStorage.setItem(sortable.options.group.name, order.join("|"));
    },
  },
});

const undoButton = document.getElementById("undo-button");
undoButton.addEventListener("click", (e) => {
  const undo = commandManager();
  undo.undo();
});
