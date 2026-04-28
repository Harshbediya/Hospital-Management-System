import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="hero-section">
        <h1>About CarePlus Hospital Management System</h1>
        <p>Your trusted partner in transforming healthcare management through cutting-edge technology.</p>
      </section>

      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            To empower hospitals and healthcare providers by delivering reliable, intuitive, and scalable management solutions that enhance patient care and operational efficiency.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            To be a global leader in healthcare technology, driving innovation that improves outcomes for hospitals, clinicians, and patients worldwide.
          </p>
        </div>
      </section>

      <section className="values">
        <h2>Our Core Values</h2>
        <ul>
          <li><strong>Integrity:</strong> We uphold the highest standards of privacy and security for patient data.</li>
          <li><strong>Innovation:</strong> Continuous advancement to meet evolving healthcare needs.</li>
          <li><strong>Collaboration:</strong> Partnering closely with healthcare professionals to deliver effective solutions.</li>
          <li><strong>Excellence:</strong> Commitment to quality and superior user experience.</li>
        </ul>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose CarePlus?</h2>
        <p>
          Our platform offers seamless integration, real-time patient data access, and advanced analytics — designed to streamline workflows and improve decision-making for better healthcare delivery.
        </p>
      </section>

      <footer className="about-footer">
        <p>© 2025 CarePlus Hospital Management. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
