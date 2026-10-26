import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../hooks/themeHook/themeContext';

const Navbar = ({ resumeUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { dark, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'services', 'projects', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}>
        <a href="#home" className="brand-wrap">
          <span className="code-bracket">&lt; </span>
          <span className="brand">Mohit</span>
          <span className="code-bracket"> /&gt;</span>
        </a>

        <div className="labels">
          <a
            href="#home"
            className={`navbar-label ${activeSection === 'home' ? 'active' : ''}`}
          >
            HOME
          </a>
          <a
            href="#about"
            className={`navbar-label ${activeSection === 'about' ? 'active' : ''}`}
          >
            ABOUT
          </a>
          <a
            href="#services"
            className={`navbar-label ${activeSection === 'services' ? 'active' : ''}`}
          >
            WHAT I DO
          </a>
          <a
            href="#projects"
            className={`navbar-label ${activeSection === 'projects' ? 'active' : ''}`}
          >
            PROJECTS
          </a>
          <a
            href="#contact"
            className={`navbar-label ${activeSection === 'contact' ? 'active' : ''}`}
          >
            CONTACT
          </a>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle-btn"
            title={dark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            aria-label="Toggle Theme"
          >
            <i className={`fa-solid ${dark ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>

          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="app-button"
            style={{ padding: '8px 18px', minWidth: '95px' }}
          >
            RESUME
          </a>
        </div>

        <div className="nav-right-mobile">
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle-btn"
            title={dark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            aria-label="Toggle Theme"
          >
            <i className={`fa-solid ${dark ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>

          <button
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="mobile-drawer">
          <a href="#home" className="navbar-label" onClick={closeMenu}>
            HOME
          </a>
          <a href="#about" className="navbar-label" onClick={closeMenu}>
            ABOUT
          </a>
          <a href="#services" className="navbar-label" onClick={closeMenu}>
            WHAT I DO
          </a>
          <a href="#projects" className="navbar-label" onClick={closeMenu}>
            PROJECTS
          </a>
          <a href="#contact" className="navbar-label" onClick={closeMenu}>
            CONTACT
          </a>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="app-button"
            onClick={closeMenu}
          >
            RESUME
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
