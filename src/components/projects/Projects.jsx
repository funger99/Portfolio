import React from "react";
import safe from "../../img/safe.png";
import todo from "../../img/todo.png";
import website from "../../img/website.png";
import soonmoo from "../../img/soonmoo.png";
import runway from "../../img/runway.png";
import { FaGithub } from "react-icons/fa";
import "./projects.css";

const Projects = () => {
  return (
    <section id="projects">
      <div className="grid-container-p">
        <div className="grid-item grid-item-1p">
          <h1 className="projects-title">Projects</h1>
        </div>

        <div className="grid-item grid-item-2p">
          <img src={safe} alt="" className="project-img" />
          <p className="project-title">
            <b>Package Protection Device</b>
          </p>
          <a
            href="https://github.com/funger99/ESP8266-Arduino"
            target="_blank"
            className="github"
          >
            <FaGithub size="2em" />
          </a>
          <p className="project-tech">Arduino, WiFi Module, REST API, C++</p>
          <p className="project-content">
            A smart safe that automatically locks in delivered packages and
            notifies users when a package has arrived through a web app. I
            implemented an Arduino script that automatically connects the device
            to a local network and makes requests to the web app's API.
          </p>
        </div>
        <div className="grid-item grid-item-3p">
          <img src={todo} alt="" className="project-img" />
          <p className="project-title">
            <b>Task Organizer</b>
          </p>
          <a
            href="https://github.com/funger99/Task-Organizer"
            target="_blank"
            className="github"
          >
            <FaGithub size="2em" />
          </a>
          <p className="project-tech">
            HTML, CSS, Flask, Flask-SQLAlchemy, Python
          </p>
          <p className="project-content">
            A CRUD web application for managing task deadlines which features
            task editing and greying out completed tasks. Task information is
            stored in a database table and manipulated with an object relational
            mapper.
          </p>
        </div>

        <div className="grid-item grid-item-4p">
          <img src={website} alt="" className="project-img" />
          <p className="project-title">
            <b>This Website</b>
          </p>
          <a
            href="https://github.com/funger99/Portfolio"
            target="_blank"
            className="github"
          >
            <FaGithub size="2em" />
          </a>
          <p className="project-tech">HTML, CSS, Javascript, React</p>
          <p className="project-content">
            A website that features a more extensive list of my projects
            compared to my resume. I learned to implement grid, flexbox, react
            hooks, responsive web design and more.
          </p>
        </div>

        <div className="grid-item grid-item-5p">
          <img src={soonmoo} alt="" className="project-img" />
          <p className="project-title">
            <b>Cat Defender</b>
          </p>
          <p className="project-tech">Python, Pygame</p>
          <p className="project-content">
            A 2D space shooter inspired game developed with the Pygame module.
            The game was developed using OOP principles and features different
            enemies, power-ups, and levels of difficulty; and high score saving.
          </p>
        </div>

        <div className="grid-item grid-item-6p">
          <img src={runway} alt="" className="project-img" />
          <p className="project-title">
            <b>Image Line Extraction</b>
          </p>
          <a
            href="https://github.com/funger99/DIP-line-extraction"
            target="_blank"
            className="github"
          >
            <FaGithub size="2em" />
          </a>
          <p className="project-tech">MATLAB - Image Processing Toolbox</p>
          <p className="project-content">
            Applied the Sobel operator to the target image to find the edge map,
            and then used the Hough transform to detect the most prominent
            straight lines of the image.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
