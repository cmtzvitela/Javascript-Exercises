import { getAllNotes, searchNote } from "./noteFunctions.js";
import { displayNotes, blurNote, createNote, addTrash } from "./noteView.js";

const initialNotes = getAllNotes();
displayNotes(initialNotes);
const createNoteButton = document.getElementById("create-note-button");
createNoteButton.addEventListener("click", () => {
  createNote();
});

const searchInput = document.getElementById("search");
let searchTerm = "";
searchInput.addEventListener("input", (e) => {
  searchTerm = e.target.value;
  searchNote(searchTerm);
});

addTrash();
blurNote();
