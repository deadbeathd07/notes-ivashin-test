import React from "react";

function Main({ children }) {
  return (
    <main className="main">
      <div className="container">
        <div className="main__inner">{children}</div>
      </div>
    </main>
  );
}

export default Main;
