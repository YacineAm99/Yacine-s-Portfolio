// src/pages/Home.js
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Home.css';
import './TP1.jsx';
import './TP2.jsx';

function Home() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      <Navbar onLinkClick={scrollToSection} refs={{ aboutRef, projectsRef, contactRef }} />
      <section id="about" ref={aboutRef} className="about-section">
        <h2 className="about-title">Amarouche Yacine's Portfolio</h2>
        <p className="about-description">
          Master’s student in Computer Science specializing in data engineering and web technologies.
        </p>
      </section>

      <section id="projects" ref={projectsRef} className="projects-section">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-container">
          <div className="project-box">
            <h3 className="project-title">Project 1</h3>
            <p className="project-description">Description of Project 1.</p>
            <Link to="/TP1" className="view-button">View</Link>
          </div>
          <div className="project-box">
            <h3 className="project-title">Project 2</h3>
            <p className="project-description">Description of Project 2.</p>
            <Link to="/TP2" className="view-button">View</Link>
          </div>
          <div className="project-box">
            <h3 className="project-title">Project 3</h3>
            <p className="project-description">Description of Project 3.</p>
            <button className="view-button">View</button>
          </div>
          <div className="project-box">
            <h3 className="project-title">Project 4</h3>
            <p className="project-description">Description of Project 4.</p>
            <button className="view-button">View</button>
          </div>
        </div>
      </section>

      <section id="contact" ref={contactRef} className="contact-section">
        <p className="contact-text">Contact me on: <a href="mailto:amaroucheyacine3@gmail.com">amaroucheyacine3@gmail.com</a></p>
      </section>
    </div>
  );
}

export default Home;
