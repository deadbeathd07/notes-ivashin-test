import React from "react";
import { TbCirclePlus } from "react-icons/tb";
import Button from "./Button";

function Creator({ goToCreateANote }) {
  return (
    <li className="notes__creator">
      <Button icon={<TbCirclePlus />} onClick={goToCreateANote} />
    </li>
  );
}

export default Creator;