import React from "react";

const Link = ({ active, children, onClick }) => (
  <li>
    <a
      href="#"
      className={active ? "selected" : ""}
      onClick={onClick}
      // disabled={active}
    >
      {children}
    </a>
  </li>
);

export default Link;
