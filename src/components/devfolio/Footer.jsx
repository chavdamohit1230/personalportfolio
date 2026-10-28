import React from 'react';

const Footer = ({ name, resumeUrl }) => {
  return (
    <footer className="foot">
      <div className="footer-content-wrap">
        <div className="foot-brand">
          <span className="brand-logo-symbol">M</span>
          <span className="brand-name">{name || 'Mohit Chavda'}</span>
          <span className="brand-tag">Flutter Developer | Mobile App Developer</span>
        </div>

        <div className="foot-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a
            href={resumeUrl || '/images/Mohit_Chavda_Resume.pdf'}
            target="_blank"
            rel="noopener noreferrer"
            download="Mohit_Chavda_Resume.pdf"
          >
            Resume
          </a>
        </div>

        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} {name || 'Mohit Chavda'}. Crafted with passion & precision.</span>
          <span className="foot-location">
            <i className="fa-solid fa-location-dot"></i> Ahmedabad, India
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

