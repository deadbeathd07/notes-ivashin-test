import React from "react";

function Footer({ children }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">{children}</div>
      </div>
    </footer>
  );
}

export default Footer;