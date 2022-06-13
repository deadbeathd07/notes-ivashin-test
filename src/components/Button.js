import React from "react";
import { IconContext } from "react-icons";

function Button({ icon, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      <IconContext.Provider value={{ className: "button__icon" }}>
        {icon}
      </IconContext.Provider>
    </button>
  );
}

export default Button;
