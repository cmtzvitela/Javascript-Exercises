import { editNote, getAllNotes } from "./noteFunctions.js";

const NOTEEDIT = "NOTEEDIT";

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
    },
  };
};

const commands = {
  [NOTEEDIT]: commandEdit,
};

export const commandManager = (target) => {
  let history = [null];
  console.log(history);
  let position = 0;

  return {
    doCommand(commandType) {
      if (position < history.length - 1) {
        history = history.slice(0, position + 1);
      }

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
        history[position].undo();
        position -= 1;
      }
    },
  };
};
