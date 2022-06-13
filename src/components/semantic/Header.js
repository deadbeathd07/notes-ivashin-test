import React from "react";

function Header({ children }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">{children}</div>
      </div>
    </header>
  );
}

export default Header;