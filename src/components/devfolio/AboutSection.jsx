import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';

const AboutSection = ({ about, basic }) => {
  const photoSrc = basic?.photo ? `/${basic.photo}` : '/images/photos/mohit.jpeg';
  const resumeUrl = basic?.resume || '/images/Mohit_Chavda_Resume.pdf';
  const paragraphs = about?.paragraphs || [about?.description];
  const [activeCategory, setActiveCategory] = useState('All');

  const stats = [
    { number: '1,600+', label: 'Organic Installs (TaskMate)', icon: 'fa-solid fa-download' },
    { number: '1.5 Yrs', label: 'Flutter Experience', icon: 'fa-solid fa-briefcase' },
    { number: '4.8★', label: 'Play Store Rating', icon: 'fa-solid fa-star' },
    { number: '4+', label: 'Production Store Apps', icon: 'fa-solid fa-mobile-screen-button' }
  ];

  const pillars = [
    {
      icon: 'fa-brands fa-flutter',
      title: 'Android & iOS Production Apps',
      desc: 'Building and deploying responsive, smooth 60fps mobile apps on Google Play Store and Apple App Store.'
    },
    {
      icon: 'fa-solid fa-cubes-stacked',
      title: 'BLoC, Riverpod & Clean Architecture',
      desc: 'Maintainable, scalable codebases built with BLoC, Riverpod, Provider, GetX, MVVM, and Dependency Injection.'
    },
    {
      icon: 'fa-solid fa-bolt-lightning',
      title: 'Real-Time Chat, Networking & Payments',
      desc: 'Firebase Auth, Firestore, FCM push notifications, speed networking, payment gateways, and subscription billing.'
    },
    {
      icon: 'fa-solid fa-wand-magic-sparkles',
      title: 'Gemini AI & CI/CD Automation',
      desc: 'AI-powered smart task suggestions using the Gemini API and automated CI/CD pipelines for store releases.'
    }
  ];

  const techCategories = [
    { name: 'All', items: about?.tech || [] },
    { name: 'Mobile & Languages', items: ['Flutter', 'Dart (Primary)', 'Android', 'iOS', 'Responsive UI', 'Animations', 'Java/Kotlin Basics'] },
    { name: 'State & Architecture', items: ['BLoC', 'Riverpod', 'Provider', 'GetX', 'Clean Architecture', 'MVVM', 'Dependency Injection'] },
    { name: 'Backend, DB & DevOps', items: ['REST APIs (Dio, Retrofit)', 'Firebase (Auth, Firestore, FCM, Crashlytics)', 'Hive & SQLite', 'Shared Preferences', 'In-App Purchases & Subscriptions', 'Payment Gateway Integration', 'Gemini API', 'CI/CD', 'Git & GitHub', 'Postman', 'Play Store & App Store Deployment'] }
  ];

  const displayedTech = techCategories.find(c => c.name === activeCategory)?.items || about?.tech || [];

  return (
    <section className="about-me-section modern-about-section" id="about">
      <div className="section-title-wrap reveal-fade-up">
        <span className="section-pill">
          <i className="fa-solid fa-sparkles"></i> ARCHITECTURE & CRAFT
        </span>
        <h2 className="title">About Me</h2>
        <span className="subtitle">High-performance engineering with real store impact</span>
      </div>

      <div className="about-bento-grid">
        {/* Left Column: Interactive 3D Profile Card */}
        <div className="profile-column-wrap reveal-fade-left">
          <Tilt
            className="parallax-tilt-profile"
            perspective={1000}
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareColor="#10b981"
            glarePosition="all"
            tiltMaxAngleX={6}
            tiltMaxAngleY={6}
            scale={1.01}
            transitionSpeed={1000}
          >
            <div className="about-card profile-showcase-card">
              <div className="profile-image-wrap">
                <div className="profile-glow-ring"></div>
                <img
                  src={photoSrc}
                  alt={`${basic?.firstName || 'Mohit'} ${basic?.lastName || 'Chavda'}`}
                  className="about-profile-img"
                />
                <div className="status-badge">
                  <span className="status-dot"></span>
                  <span>Available for Opportunities</span>
                </div>
              </div>

              <div className="profile-info-block">
                <h3 className="profile-name">
                  {basic?.firstName || 'Mohit'}{' '}
                  <span className="highlight-text">{basic?.lastName || 'Chavda'}</span>
                </h3>
                <span className="profile-role">
                  <i className="fa-brands fa-flutter role-icon"></i> {basic?.role || 'Flutter Developer'}
                </span>

                <div className="profile-quick-details">
                  <div className="detail-item">
                    <i className="fa-solid fa-location-dot detail-icon"></i>
                    <div className="detail-meta">
                      <span className="detail-label">Location</span>
                      <span className="detail-val">{basic?.address || 'Ahmedabad, India'}</span>
                    </div>
                  </div>

                  <div className="detail-item">
                    <i className="fa-solid fa-graduation-cap detail-icon"></i>
                    <div className="detail-meta">
                      <span className="detail-label">Education</span>
                      <span className="detail-val">BCA — MKBU (2022–2025 | CGPA 8.15/10)</span>
                    </div>
                  </div>

                  <div className="detail-item">
                    <i className="fa-solid fa-briefcase detail-icon"></i>
                    <div className="detail-meta">
                      <span className="detail-label">Experience ({basic?.experience || '1.5 Years'})</span>
                      <span className="detail-val">{basic?.company || 'Aequitas Infotech Pvt. Ltd'} ({basic?.period || 'May 2025 – Present'})</span>
                    </div>
                  </div>

                  <div className="detail-item">
                    <i className="fa-solid fa-phone detail-icon"></i>
                    <div className="detail-meta">
                      <span className="detail-label">Phone</span>
                      <a
                        href="tel:+919023022212"
                        className="detail-val detail-link"
                      >
                        {basic?.phone || '+91 9023022212'}
                      </a>
                    </div>
                  </div>

                  <div className="detail-item">
                    <i className="fa-solid fa-envelope detail-icon"></i>
                    <div className="detail-meta">
                      <span className="detail-label">Email</span>
                      <a
                        href={`mailto:${basic?.email || 'mohitchavda1230@gmail.com'}`}
                        className="detail-val detail-link"
                      >
                        {basic?.email || 'mohitchavda1230@gmail.com'}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="profile-card-actions">
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Mohit_Chavda_Resume.pdf"
                    className="app-button download-cv-btn"
                  >
                    <i className="fa-solid fa-file-arrow-down"></i>
                    <span>Download CV</span>
                  </a>
                  <a href="#contact" className="contact-quick-btn">
                    <span>Let's Talk</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </Tilt>
        </div>

        {/* Right Column: Bio, Metrics, Pillars & Tech */}
        <div className="about-main-content">
          {/* Bio & Philosophy */}
          <div className="about-card bio-card reveal-fade-right">
            <h3 className="about-headline">
              {about?.heading || 'Crafting fluid, high-performance mobile apps for Android & iOS.'}
            </h3>

            <div className="about-story">
              {paragraphs.map((p, idx) => (
                <p key={idx} className="story-paragraph">
                  {p}
                </p>
              ))}
            </div>

            {/* Impact Metrics Strip */}
            <div className="impact-metrics-row">
              {stats.map((item, idx) => (
                <div className={`metric-chip reveal-scale delay-${(idx + 1) * 100}`} key={idx}>
                  <div className="metric-icon-wrap">
                    <i className={item.icon}></i>
                  </div>
                  <div className="metric-text-wrap">
                    <span className="metric-number">{item.number}</span>
                    <span className="metric-label">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pillars of Engineering */}
          <div className="pillars-grid">
            {pillars.map((pillar, idx) => (
              <div className={`pillar-card reveal-fade-up delay-${(idx + 1) * 100}`} key={idx}>
                <div className="pillar-header">
                  <div className="pillar-icon-box">
                    <i className={pillar.icon}></i>
                  </div>
                  <h4 className="pillar-title">{pillar.title}</h4>
                </div>
                <p className="pillar-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>

          {/* Categorized Tech Stack */}
          <div className="about-card tech-card reveal-fade-up delay-200">
            <div className="tech-header-row">
              <span className="tech-heading-label">
                <i className="fa-solid fa-layer-group"></i> Technologies & Ecosystem
              </span>
              <div className="category-filter-chips">
                {techCategories.map((cat, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`filter-chip ${activeCategory === cat.name ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat.name)}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="tech-badge-container">
              {displayedTech.map((t, idx) => (
                <div className="modern-tech-pill" key={idx}>
                  <i className="fa-solid fa-circle-check pill-check-icon"></i>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
