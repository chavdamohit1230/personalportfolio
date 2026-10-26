import React from 'react';

const Footer = ({ name }) => {
  return (
    <footer className="foot">
      <div className="footer-content-wrap">
        <div className="foot-brand">
          <span className="brand-logo-symbol">M</span>
          <span className="brand-name">{name || 'Mohit Chavda'}</span>
          <span className="brand-tag">Flutter & Mobile Engineer</span>
        </div>

        <div className="foot-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#services">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
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

