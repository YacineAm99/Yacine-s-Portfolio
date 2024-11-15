// src/components/Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  const handleNavigation = (sectionId) => {
    navigate('/'); // Navigate to home
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0); // Delay scrolling to ensure navigation happens first
  };

  return (
    <nav className="navbar">
      <a href="/" className="brand" >Yacine's Portfolio</a>
      <ul className="nav-links">
        <li>
          <button className="nav-link-button" onClick={() => handleNavigation('about')}>
            About Me
          </button>
        </li>
        <li>
          <button className="nav-link-button" onClick={() => handleNavigation('projects')}>
            Projects
          </button>
        </li>
        <li>
          <button className="nav-link-button" onClick={() => handleNavigation('contact')}>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
