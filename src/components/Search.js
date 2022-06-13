import React, { useState } from "react";

function Search({ filter, onBlur }) {
  const [value, setValue] = useState("");

  function handleChange(event) {
    let input = event.target.value;
    input.charAt(0) === "#"
      ? setValue(input.slice(1, input.length))
      : setValue(input);
  }
  function handleSubmit(event) {
    event.preventDefault();
    filter(value);
  }
  function handleBlur() {
    setValue("");
    onBlur();
  }

  return (
    <li className="search">
      <form className="search__form" name="search" onSubmit={handleSubmit}>
        <input
          className="search__input"
          type="search"
          placeholder="Enter hashtag..."
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </form>
    </li>
  );
}

export default Search;
