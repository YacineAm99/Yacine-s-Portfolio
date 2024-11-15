// src/pages/Project1.js
import React from 'react';
import Navbar from '../components/Navbar';
import ModelViewer from './ModelViewer';
import './TPs.css';
import TpImage from './Tp1.png';

function Project1() {
  return (
    <div>
      <Navbar />
      <section className="project-about-section">
        <div className="project-details">
          <h2 className="project-title">TP-1</h2>
          <p className="project-description">
          A detailed look at the TP, including an image and a 3D model.
          </p>
        </div>
      </section>

      <h2>TP Image</h2>
      <section className="project-image-section">
        <div className="project-image-box">
        <img src={TpImage} alt="Tp1" className="project-image" />
        </div>
      </section>

      <h2>3D Model</h2>
      <section className="project-3d-section">
        <div className="project-3d-box">
        <ModelViewer modelPath="/3D/table.glb" />
        </div>
      </section>

      <section id="contact" className="contact-section">
        <p className="contact-text">Contact me on: <a href="mailto:amaroucheyacine3@gmail.com">amaroucheyacine3@gmail.com</a></p>
      </section>
    </div>
  );
}


export default Project1;
