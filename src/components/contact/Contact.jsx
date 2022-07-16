import React from "react";
import { FaEnvelope } from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h1 className="contact-title">Contact Me</h1>
      <p className="message">
        I'm currently looking for opportunities in software development and
        would love to chat! You can reach me at{" "}
        <a href="mailto:anthony.fung1999@gmail.com" className="email">
          <FaEnvelope size="1em" /> anthony.fung1999@gmail.com
        </a>{" "}
        or complete the form below.
      </p>
      <div className="form-container">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeRbDqN304jXQmlT2Q9xqP6YDWB1qoWolsNq9Zl2PikGqoRJA/viewform?embedded=true"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          className="form"
        >
          Loading…
        </iframe>
      </div>
    </section>
  );
};

export default Contact;
