import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="#overview">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
