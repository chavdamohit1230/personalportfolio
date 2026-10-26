import React from 'react';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

const HeroSection = ({ basic, socials }) => {
  const photoSrc = basic?.photo ? `/${basic.photo}` : '/images/photos/mohit.jpeg';

  return (
    <section className="info-section modern-hero-section" id="home">
      <div className="info">
        <div className="hero-announcement-tag reveal-fade-up">
          <span className="tag-pulse"></span>
          <span>Open for High-Impact Mobile Engineering</span>
          <i className="fa-solid fa-arrow-right tag-arrow"></i>
        </div>

        <div className="welcome reveal-fade-up delay-100">
          <span className="welcome-text">HELLO, I'M</span>
          <img
            className="wave"
            src="/images/hi.gif"
            alt="Waving Hand"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        <h1 className="first-name reveal-fade-up delay-150">{basic?.firstName || 'Mohit'}</h1>
        <h1 className="last-name reveal-fade-up delay-200">
          <span className="gradient-name">{basic?.lastName || 'Chavda'}</span>
        </h1>

        <div className="subtitle reveal-fade-up delay-250">
          <span className="terminal-symbol">&gt;</span>
          <span className="dynamic-subtitles">
            <Typewriter
              options={{
                strings: [
                  'Flutter Mobile Specialist',
                  'Android & iOS Architect',
                  'Production Mobile Apps',
                  'AI & Firebase Integrations',
                  'BLoC & Clean Architecture'
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </span>
        </div>

        <p className="hero-bio-pitch reveal-fade-up delay-300">
          Engineering fluid, high-performing mobile applications from napkin sketch to Google Play Store & Apple App Store releases.
        </p>

        <div className="socials reveal-fade-up delay-350">
          {socials?.map((item, index) => (
            <a
              key={index}
              className="social-icon"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              title={item.label || item.icon}
            >
              <i className={item.icon}></i>
            </a>
          ))}
        </div>

        <div className="hero-actions reveal-fade-up delay-400">
          <a
            href={basic?.resume || '/images/Mohit_Chavda_Resume.pdf'}
            target="_blank"
            rel="noopener noreferrer"
            download="Mohit_Chavda_Resume.pdf"
            className="app-button hero-main-btn"
          >
            <i className="fa-solid fa-file-arrow-down"></i>
            <span>DOWNLOAD CV</span>
          </a>
          <a
            href="#projects"
            className="app-button app-button-secondary hero-secondary-btn"
          >
            <span>VIEW PROJECTS</span>
            <i className="fa-solid fa-arrow-down-long"></i>
          </a>
        </div>
      </div>

      <div className="main-image-wrap reveal-scale delay-200">
        <div className="hero-glow-backdrop"></div>
        <Tilt
          className="parallax-tilt-hero"
          perspective={1000}
          glareEnable={true}
          glareMaxOpacity={0.2}
          glareColor="#10b981"
          glarePosition="all"
          tiltMaxAngleX={8}
          tiltMaxAngleY={8}
          scale={1.02}
          transitionSpeed={1200}
        >
          <div className="main-image-container">
            <img
              className="hero-mohit-img"
              src={photoSrc}
              alt={`${basic?.firstName || 'Mohit'} ${basic?.lastName || 'Chavda'}`}
            />


          </div>
        </Tilt>
      </div>
    </section>
  );
};

export default HeroSection;
