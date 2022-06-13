import React, { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { VscIssueReopened } from "react-icons/vsc";
import Button from "./Button";

function Note({ note, removeNote, startEdit, editNote, endEdit }) {
  const [isComplete, setIsComplete] = useState(false);

  function completeNote() {
    setIsComplete(!isComplete);
  }

  function result() {
    return note.title.split(" ").map((str, index) =>
      str === "#" + note.teg ? (
        <span key={index} className="note__text-teg">
          {str + " "}
        </span>
      ) : (
        str + " "
      )
    );
  }

  return (
    <li className={!isComplete ? "note" : "note note_complete"}>
      {!note.isEdit ? (
        <div className="note__text-box">
          <p className="note__text" onClick={completeNote}>
            {result()}
          </p>
          {note.teg && <p className="note__teg">{note.teg}</p>}
        </div>
      ) : (
        <input
          className="note__input"
          value={note.title}
          onChange={(event) => editNote(note.id, event)}
          onBlur={() => endEdit(note.id)}
        />
      )}
      <div className="note__icons-box">
        <Button
          icon={<VscIssueReopened />}
          onClick={() => startEdit(note.id)}
        />
        <Button
          icon={<TiDeleteOutline />}
          onClick={() => removeNote(note.id)}
        />
      </div>
    </li>
  );
}

export default Note;
