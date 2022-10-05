import { deleteNote, editNote, getAllNotes } from "./noteFunctions.js";
import { createNote, displayNotes } from "./noteView.js";

const NOTEEDIT = "NOTEEDIT";
const NOTECREATION = "NOTECREATION";
const NOTEDELETION = "NOTEDELETION";

const commandEdit = (noteToEdit) => {
  const notes = getAllNotes();
  const existing = notes.find((note) => note.id == noteToEdit.id);
  const previousTitle = existing.title;
  const previousBody = existing.body;
  const noteID = existing.id;
  return {
    execute() {
      editNote(noteToEdit);
    },
    undo() {
      editNote({ id: noteID, title: previousTitle, body: previousBody });
      const refreshNotes = getAllNotes();
      const noteSection = document.getElementById("note-space");
      while (noteSection.firstChild) {
        noteSection.removeChild(noteSection.firstChild);
      }
      displayNotes(refreshNotes);
    },
  };
};

const commandCreate = () => {
  return {
    execute() {
      createNote();
    },
    undo() {
      const notes = getAllNotes();
      deleteNote(notes[notes.length - 1].id);
    },
  };
};

const commandDelete = (noteID) => {
  const notes = getAllNotes();
  const existing = notes.find((note) => note.id == noteID);
  return {
    execute() {
      deleteNote(noteID);
    },
    undo() {
      const notes = JSON.parse(localStorage.getItem("notes"));
      notes.push(existing);
      localStorage.setItem("notes", JSON.stringify(notes));
      const refreshNotes = getAllNotes();
      const noteSection = document.getElementById("note-space");
      while (noteSection.firstChild) {
        noteSection.removeChild(noteSection.firstChild);
      }
      displayNotes(refreshNotes);
    },
  };
};

const commands = {
  [NOTEEDIT]: commandEdit,
  [NOTECREATION]: commandCreate,
  [NOTEDELETION]: commandDelete,
};

let history = [null];
let position = 0;
export const commandManager = (target) => {
  console.log(history);

  return {
    doCommand(commandType) {
      // if (position < history.length - 1) {
      //   history = history.slice(0, position + 1);
      // }

      if (commands[commandType]) {
        const concreteCommand = commands[commandType](target);
        history.push(concreteCommand);
        console.log("🚀 ~ history", history);
        position += 1;
        console.log("🚀 ~ position", position);

        concreteCommand.execute();
      }
    },

    undo() {
      if (position > 0) {
        const lastChange = history.pop();
        console.log("🚀 ~ lastChange", lastChange);
        lastChange.undo(target);
        //position -= 1;
      }
    },
  };
};
