import React, { useState } from "react";
import "./navbar.css";
import NavlinkMobile from "./NavlinkMobile";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);

  function toggle() {
    setMenuState(!menuState);
  }

  return (
    <section>
      <nav className="nav">
        <ul className="navlinks">
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
        <div className="hamburger">
          <GiHamburgerMenu className="icon" onClick={toggle} size="2em" />
        </div>
        <div className="mobile-nav">
          {menuState && <NavlinkMobile toggle={toggle} />}
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
