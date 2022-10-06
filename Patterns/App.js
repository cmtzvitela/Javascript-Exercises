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
searchInput.addEventListener("input", (e) => {
  searchTerm = e.target.value;
  searchNote(searchTerm);
});

addTrash();
blurNote();
dragNote();
// dropNote();

const noteSection = document.getElementById("note-space");
let sortable = new Sortable(noteSection, {});

const undoButton = document.getElementById("undo-button");
undoButton.addEventListener("click", (e) => {
  const undo = commandManager();
  undo.undo();
});
