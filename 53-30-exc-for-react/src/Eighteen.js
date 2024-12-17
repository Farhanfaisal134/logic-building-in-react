import React, { useState } from "react";
import "./styles/Eighteen.css";

export default function Eighteen() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="menu-icon" onClick={toggleMenu}>
        {isOpen ? "☰" : "X"}
      </button>
      <ul className={`menu ${isOpen ? "" : "open"}`}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contacts</li>
      </ul>
    </div>
  );
}
