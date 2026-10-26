import React from 'react';
import Tilt from 'react-parallax-tilt';

const ServicesSection = ({ services }) => {
  return (
    <section className="services-section" id="services">
      <div className="section-title-wrap reveal-fade-up">
        <span className="section-eyebrow">
          <i className="fa-solid fa-microchip"></i> Core Competencies
        </span>
        <h2 className="title">What I Can Do</h2>
        <span className="subtitle">
          Specialized mobile engineering, reactive state architectures, cloud backends & AI integrations.
        </span>
      </div>

      <div className="services-grid">
        {services?.map((service, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={6}
            tiltMaxAngleY={6}
            scale={1.02}
            transitionSpeed={1200}
            className={`service-card-tilt reveal-fade-up delay-${((index % 3) + 1) * 150}`}
          >
            <div className="service-card">
              <div className="service-card-header">
                <span className="service-badge">{service.badge || `0${index + 1}`}</span>
                <div className="service-icon-wrap">
                  <i className={`${service.icon} service-fa-icon`}></i>
                </div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-card-footer">
                <span className="service-status-pill">
                  <span className="service-dot"></span> Production Grade
                </span>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

