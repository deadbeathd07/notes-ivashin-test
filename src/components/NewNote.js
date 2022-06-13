import React, { useState } from "react";
import { TbCirclePlus } from "react-icons/tb";
import Button from "./Button";
import { nanoid } from "nanoid";

function NewNote({ addNote }) {
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let hashteg = /(?<=(?<!\S)#)[A-Z]+/gi.exec(value);
    value &&
      addNote({
        id: nanoid(4),
        teg: hashteg === null ? "" : hashteg[0],
        title: value,
        isEdit: false,
      });
    setValue("");
  }

  return (
    <li className="new-note">
      <form
        className="new-note__form"
        name="new-note__form"
        onSubmit={handleSubmit}
      >
        <input
          className="new-note__input"
          type="text"
          placeholder="Enter a note..."
          value={value}
          onChange={handleChange}
        />
        <Button icon={<TbCirclePlus />} />
      </form>
    </li>
  );
}

export default NewNote;
