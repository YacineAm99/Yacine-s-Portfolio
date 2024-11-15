// src/pages/Project2.js
import React from 'react';
import Navbar from '../components/Navbar';
import './TPs.css';
import TpImage from './Tp2.png';
import TpVideo from './TP2Vid.mp4';

function Project2() {
    return (
        <div>
          <Navbar />
          <section className="project-about-section">
            <div className="project-details">
              <h2 className="project-title">TP-2</h2>
              <p className="project-description">
              A detailed look at the TP, including an image and a 3D model.
              </p>
            </div>
          </section>
          
          <h2>TP Image</h2>
          <section className="project-image-section">
            <div className="project-image-box">
            <img src={TpImage} alt="Tp2" className="project-image" />
            </div>
          </section>

          <h2>3D Model</h2>
          <section className="project-3d-section">
            <div className="project-3d-box">
            <video 
                src={TpVideo}
                className="project-video" 
                controls 
                autoPlay 
                loop 
                muted 
              />
            </div>
          </section>

          <section id="contact" className="contact-section">
        <p className="contact-text">Contact me on: <a href="mailto:amaroucheyacine3@gmail.com">amaroucheyacine3@gmail.com</a></p>
      </section>
        </div>
      );
    }

export default Project2;
