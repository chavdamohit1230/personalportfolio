import React, { useState, useEffect } from 'react';

const OriginalImagesShowcase = ({ images, title, onOpenLightbox }) => {
  const [viewMode, setViewMode] = useState('fan'); // 'fan' or 'grid'
  const [hoveredIdx, setHoveredIdx] = useState(null);

  if (!images || images.length === 0) return null;

  const total = images.length;

  return (
    <div className="original-images-showcase">
      {/* Ambient backdrop glow */}
      <div className="showcase-ambient-glow" />

      {/* Top Header Controls: Screen count & Fan / Grid toggle */}
      <div className="showcase-top-bar">
        <span className="showcase-screen-tag">
          <i className="fa-solid fa-images"></i> {total} Original Screens
        </span>
        <div className="showcase-view-toggles">
          <button
            className={`view-toggle-btn ${viewMode === 'fan' ? 'active' : ''}`}
            onClick={() => setViewMode('fan')}
            title="Fanned Deck View"
            type="button"
          >
            <i className="fa-solid fa-layer-group"></i> Fan View
          </button>
          <button
            className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
            title="Grid View (All Screens Visible)"
            type="button"
          >
            <i className="fa-solid fa-table-cells"></i> Grid View ({total})
          </button>
        </div>
      </div>

      {/* Fanned Spread View (All 5-6 original screenshot cards in curved arc) */}
      {viewMode === 'fan' ? (
        <div className="fan-stage-container">
          <div className="fan-cards-track">
            {images.map((img, idx) => {
              const mid = (total - 1) / 2;
              const ratio = mid > 0 ? (idx - mid) / mid : 0; // -1 to +1
              const rotateDeg = ratio * 8.5; // -8.5deg to +8.5deg
              const translateY = Math.abs(ratio) * 12; // gentle arc
              const leftPercent = 50 + ratio * 38; // spread out across width

              const isHovered = hoveredIdx === idx;

              return (
                <div
                  key={idx}
                  className={`fan-card-item ${isHovered ? 'is-hovered' : ''}`}
                  style={{
                    left: `${leftPercent}%`,
                    transform: isHovered
                      ? 'translate(-50%, -22px) scale(1.1) rotate(0deg)'
                      : `translate(-50%, ${translateY}px) rotate(${rotateDeg}deg) scale(0.96)`,
                    zIndex: isHovered ? 40 : 10 + idx,
                  }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  onClick={() => onOpenLightbox(idx)}
                  role="button"
                  tabIndex={0}
                  title={`Click to view Screen ${idx + 1} fullscreen`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onOpenLightbox(idx);
                    }
                  }}
                >
                  <div className="original-card-frame">
                    <img
                      src={img}
                      alt={`${title} Screen ${idx + 1}`}
                      loading="lazy"
                      className="original-screen-img"
                    />
                    <div className="card-glare" />
                    <div className="card-hover-overlay">
                      <span className="card-zoom-badge">
                        <i className="fa-solid fa-magnifying-glass-plus"></i>
                      </span>
                    </div>
                  </div>
                  <span className="card-screen-pill">Screen {idx + 1}</span>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Grid View: All 5-6 original screens visible side-by-side */
        <div className="grid-stage-container">
          <div className="grid-cards-wrap">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="grid-card-item"
                onClick={() => onOpenLightbox(idx)}
                role="button"
                tabIndex={0}
                title={`Click to view Screen ${idx + 1} fullscreen`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onOpenLightbox(idx);
                  }
                }}
              >
                <div className="original-card-frame">
                  <img
                    src={img}
                    alt={`${title} Screen ${idx + 1}`}
                    loading="lazy"
                    className="original-screen-img"
                  />
                  <div className="card-hover-overlay">
                    <span className="card-zoom-badge">
                      <i className="fa-solid fa-magnifying-glass-plus"></i>
                    </span>
                  </div>
                </div>
                <span className="card-screen-pill">Screen {idx + 1}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Screen Selector Bottom Bar */}
      <div className="showcase-bottom-bar">
        <span className="showcase-hint">
          <i className="fa-solid fa-hand-pointer"></i> Click any screen to view fullscreen
        </span>
        <div className="screen-indicators-row">
          {images.map((_, dotIdx) => (
            <button
              key={dotIdx}
              className="screen-indicator-btn"
              onClick={() => onOpenLightbox(dotIdx)}
              title={`View Screen ${dotIdx + 1}`}
              aria-label={`Screen ${dotIdx + 1}`}
            >
              {dotIdx + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectDisplayBlock = ({ project, index, onOpenLightbox }) => {
  const images = project.images || [project.banner];

  return (
    <div className="project-display-block reveal-fade-up">
      {/* LEFT SIDE: Original Images Showcase (More than 4 images, no mockups) */}
      <div className="project-mockup-showcase-column">
        <OriginalImagesShowcase
          images={images}
          title={project.title}
          onOpenLightbox={(imgIndex) => onOpenLightbox(project, imgIndex)}
        />
      </div>

      {/* RIGHT SIDE: Project Information & Details */}
      <div className="project-content-column">
        <div className="project-meta-top">
          <span className="project-badge">{project.badge || `0${index + 1}`}</span>
          <span className="project-category">{project.category}</span>
          <span className="project-screen-count">
            <i className="fa-solid fa-mobile-screen"></i> {images.length} Screens
          </span>
        </div>

        <h3 className="project-title">{project.title}</h3>
        {project.tagline && (
          <p className="project-tagline">
            <i className="fa-solid fa-quote-left"></i> {project.tagline}
          </p>
        )}

        <div className="project-description-wrap">
          {project.description.split('\n\n').map((paragraph, pIdx) => (
            <p key={pIdx} className="project-description">
              {paragraph}
            </p>
          ))}
        </div>

        {project.highlights && project.highlights.length > 0 && (
          <div className="project-highlights-box">
            <h4 className="highlights-title">
              <i className="fa-solid fa-star"></i> Key Features ({project.highlights.length})
            </h4>
            <ul className="highlights-list">
              {project.highlights.map((item, hIdx) => {
                const parts = typeof item === 'string' ? item.split(': ') : [item];
                return (
                  <li key={hIdx}>
                    <i className="fa-solid fa-circle-check"></i>
                    {parts.length > 1 ? (
                      <span>
                        <strong className="feature-name">{parts[0]}:</strong>{' '}
                        <span className="feature-desc">{parts.slice(1).join(': ')}</span>
                      </span>
                    ) : (
                      <span>{item}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <div className="project-tech-stack">
          {project.technologies?.map((tech, tIdx) => (
            <span className="project-tech-pill" key={tIdx}>
              #{tech}
            </span>
          ))}
        </div>

        <div className="project-cta-row">
          {project.playStoreUrl && (
            <a
              href={project.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-play-store"
              title={`View ${project.title} on Google Play Store`}
            >
              <i className="fa-brands fa-google-play"></i>
              <span>Get on Google Play</span>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          )}
          <button
            className="btn-view-gallery"
            onClick={() => onOpenLightbox(project, 0)}
          >
            <i className="fa-solid fa-images"></i>
            <span>View All {images.length} Screens</span>
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </button>
        </div>

        {/* Quick Thumbnails Strip */}
        <div className="project-mini-thumbnails">
          <span className="mini-label">Quick Jump to Screen:</span>
          <div className="mini-thumbs-row">
            {images.map((img, thumbIdx) => (
              <button
                key={thumbIdx}
                className="mini-thumb-item"
                onClick={() => onOpenLightbox(project, thumbIdx)}
                title={`Open ${project.title} - Screen ${thumbIdx + 1}`}
              >
                <img src={img} alt={`Screen ${thumbIdx + 1}`} />
                <span className="mini-num">{thumbIdx + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const LightboxModal = ({ project, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex || 0);
  const images = project?.images || [];

  useEffect(() => {
    setCurrentIndex(initialIndex || 0);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev(e);
      if (e.key === 'ArrowRight') handleNext(e);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, images.length]);

  if (!project) return null;

  const handlePrev = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-header">
          <div className="lightbox-title-box">
            <h4>{project.title}</h4>
            <span className="lightbox-counter">
              Screen {currentIndex + 1} of {images.length}
            </span>
          </div>
          <button className="lightbox-close-btn" onClick={onClose} aria-label="Close Gallery">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="lightbox-image-stage">
          {images.length > 1 && (
            <button className="lightbox-nav-btn prev" onClick={handlePrev} aria-label="Previous">
              <i className="fa-solid fa-chevron-left"></i>
            </button>
          )}

          <img
            src={images[currentIndex]}
            alt={`${project.title} screen ${currentIndex + 1}`}
            className="lightbox-main-img"
          />

          {images.length > 1 && (
            <button className="lightbox-nav-btn next" onClick={handleNext} aria-label="Next">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          )}
        </div>

        <div className="lightbox-thumbnails">
          {images.map((img, idx) => (
            <button
              key={idx}
              className={`lightbox-thumb ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
            >
              <img src={img} alt={`Thumbnail ${idx + 1}`} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = ({ projects }) => {
  const [lightboxData, setLightboxData] = useState(null);

  const handleOpenLightbox = (project, imgIndex) => {
    setLightboxData({ project, index: imgIndex });
  };

  const handleCloseLightbox = () => {
    setLightboxData(null);
  };

  if (!projects || projects.length === 0) return null;

  return (
    <section className="projects-section" id="projects">
      <div className="section-title-wrap reveal-fade-up">
        <h2 className="title">Featured Projects</h2>
        <span className="subtitle">
          Original mobile application screenshots, UI flows & architectural highlights
        </span>
      </div>

      <div className="projects-display-list">
        {projects.map((project, index) => (
          <ProjectDisplayBlock
            key={project.id || index}
            project={project}
            index={index}
            onOpenLightbox={handleOpenLightbox}
          />
        ))}
      </div>

      {lightboxData && (
        <LightboxModal
          project={lightboxData.project}
          initialIndex={lightboxData.index}
          onClose={handleCloseLightbox}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
