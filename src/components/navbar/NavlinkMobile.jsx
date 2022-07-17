import React, { useState } from "react";
import "./navbarMobile.css";

const NavlinkMobile = ({ toggle }) => {
  return (
    <section>
      <nav className="nav-mobile">
        <ul className="navlinks-mobile">
          <li>
            <a href="#overview" onClick={toggle}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggle}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggle}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggle}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default NavlinkMobile;
