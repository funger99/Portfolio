import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./intro.css";
import me from "../../img/me.jpg";
import Resume from "../../documents/Resume.pdf";

const Intro = () => {
  return (
    <section className="introPage" id="overview">
      <div className="grid-container">
        <div className="grid-item grid-item-1">
          <h2 className="welcome">Hi, I'm</h2>
          <h1 className="name">Anthony Fung</h1>
          <h2 className="role">I'm a Software Developer and Engineer </h2>
          <p className="degree">
            {" "}
            Mechatronics Engineering @ Western University{" "}
          </p>
          <div className="logos">
            <a
              href="https://www.linkedin.com/in/anthony-fung29/"
              target="_blank"
              className="logo-style"
            >
              <FaLinkedin size="2em" />
            </a>
            <a
              href="https://github.com/funger99"
              target="_blank"
              className="logo-style"
            >
              <FaGithub size="2em" />
            </a>
            <a href="mailto:anthony.fung1999@gmail.com" className="logo-style">
              <FaEnvelope size="2em" /> anthony.fung1999@gmail.com
            </a>
          </div>
        </div>

        <div className="grid-item grid-item-2">
          <img src={me} alt="" className="img" />
        </div>

        <div className="grid-item grid-item-3">
          <div className="button-container">
            <a href={Resume} target="_blank">
              <button className="resume-button">Resume</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
