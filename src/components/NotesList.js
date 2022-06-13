import React, { useEffect, useState } from "react";
import Creator from "./Creator";
import NewNote from "./NewNote";
import Note from "./Note";
import Search from "./Search";

function NotesList({ arr }) {
  const [isActive, setIsActive] = useState(false);
  const [notes, setNotes] = useState(arr);
  const [filteredNotes, setFilteredNotes] = useState(notes);

  useEffect(() => {
    setFilteredNotes(notes);
  }, [notes]);

  function filter(input) {
    let newFilteredNotes = notes.filter((note) => note.teg === input);
    if (!newFilteredNotes) {
      setFilteredNotes(notes);
    } else {
      setFilteredNotes(newFilteredNotes);
    }
  }

  function onBlur() {
    setFilteredNotes(notes);
  }

  function removeNote(noteId) {
    const newNotes = notes.filter((note) => note.id !== noteId);
    setNotes(newNotes);
  }

  function startEdit(noteId) {
    const newNotes = [...notes];
    newNotes.forEach((note) => note.id === noteId && (note.isEdit = true));
    setNotes(newNotes);
  }

  function editNote(noteId, event) {
    const newNotes = [...notes];
    let value = event.target.value;
    newNotes.map((note) => note.id === noteId && (note.title = value));
    let teg = /(?<=(?<!\S)#)[A-Z]+/gi.exec(value);
    newNotes.map((note) => {
      if (note.id === noteId) {
        return (note.teg = teg === null ? "" : teg[0]);
      }
    });
    setNotes(newNotes);
  }

  function endEdit(noteId) {
    const newNotes = [...notes];
    newNotes.forEach((note) => note.id === noteId && (note.isEdit = false));
    setNotes(newNotes);
  }

  function goToCreateANote() {
    setIsActive(!isActive);
  }

  function addNote(note) {
    const newNotes = [note, ...notes];
    setNotes(newNotes);
    setIsActive(!isActive);
  }

  return (
    <ul className="notes">
      <Search filter={filter} onBlur={onBlur} />
      {filteredNotes.map((note) => (
        <Note
          key={note.id}
          note={note}
          removeNote={removeNote}
          startEdit={startEdit}
          editNote={editNote}
          endEdit={endEdit}
        />
      ))}
      {!isActive ? (
        <Creator goToCreateANote={goToCreateANote} />
      ) : (
        <NewNote addNote={addNote} />
      )}
    </ul>
  );
}

export default NotesList;
