export default class NotesView {
  constructor(root, { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = {}) {
    this.root = root;
    this.onNoteSelect = onNoteSelect;
    this.onNoteAdd = onNoteAdd;
    this.onNoteEdit = onNoteEdit;
    this.onNoteDelete = onNoteDelete;
    this.root.innerHTML = `
          <div class="notes__sidebar">
              <button class="notes__add" type="button">Add Note +</button>
              <div class="notes__list"></div>
          </div>
          <div class="notes__preview">
              <input class="notes__title" type="text" placeholder="New Note...">
              <textarea class="notes__body" placeholder="Take Note..."></textarea>
          </div>
      `;

    const btnAddNote = this.root.querySelector(".notes__add");
    const inpTitle = this.root.querySelector(".notes__title");
    const inpBody = this.root.querySelector(".notes__body");
    const textArea = this.root.querySelector(".notes__body");

    textArea.addEventListener("keydown", (e) => {
      if (e.keyCode === 9) {
        e.preventDefault();

        textArea.setRangeText("\t ", textArea.selectionStart, textArea.selectionEnd);
      }
    });

    btnAddNote.addEventListener("click", () => {
      this.onNoteAdd();
    });

    [inpTitle, inpBody].forEach((inputField) => {
      inputField.addEventListener("blur", () => {
        const updatedTitle = inpTitle.value.trim();
        const updatedBody = inpBody.value;

        this.onNoteEdit(updatedTitle, updatedBody);
      });
    });

    this.updateNotePreviewVisibility(false);
  }

  _createListItemHTML(id, title, body, updated, creationDate) {
    const MAX_BODY_LENGTH = 60;

    return `
          <div class="notes__list-item" data-note-id="${id}">
          <div title="Double click to delete" class="notes__title-delete">
            <div class="notes__small-title">${title}</div>
            <svg class= "notes__delete" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
          </div>
              <div class="notes__small-body">
                  ${body.substring(0, MAX_BODY_LENGTH)}
                  ${body.length > MAX_BODY_LENGTH ? "..." : ""}
              </div>
              <div class="notes__small-updated">
                  Last updated on ${updated.toLocaleString(undefined, { dateStyle: "short", timeStyle: "short" })}
              </div>
              <div class="notes__small-updated">
                  Created on ${creationDate.toLocaleString(undefined, { dateStyle: "short", timeStyle: "short" })}
              </div>
          </div>
      `;
  }

  updateNoteList(notes) {
    const notesListContainer = this.root.querySelector(".notes__list");

    // Empty list
    notesListContainer.innerHTML = "";

    for (const note of notes) {
      const html = this._createListItemHTML(
        note.id,
        note.title,
        note.body,
        new Date(note.updated),
        new Date(note.creationDate)
      );

      notesListContainer.insertAdjacentHTML("beforeend", html);
    }

    // Add select/delete events for each list item
    notesListContainer.querySelectorAll(".notes__list-item").forEach((noteListItem) => {
      noteListItem.addEventListener("click", () => {
        this.onNoteSelect(noteListItem.dataset.noteId);
      });

      noteListItem.addEventListener("dblclick", () => {
        const doDelete = confirm("Are you sure you want to delete this note?");

        if (doDelete) {
          this.onNoteDelete(noteListItem.dataset.noteId);
        }
      });
    });
  }

  updateActiveNote(note) {
    this.root.querySelector(".notes__title").value = note.title;
    this.root.querySelector(".notes__body").value = note.body;

    this.root.querySelectorAll(".notes__list-item").forEach((noteListItem) => {
      noteListItem.classList.remove("notes__list-item--selected");
    });

    this.root.querySelector(`.notes__list-item[data-note-id="${note.id}"]`).classList.add("notes__list-item--selected");
  }

  updateNotePreviewVisibility(visible) {
    this.root.querySelector(".notes__preview").style.visibility = visible ? "visible" : "hidden";
  }
}
