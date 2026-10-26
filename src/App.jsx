import React from 'react';
import './styles/devfolio.scss';
import devfolioData from './data/devfolioData';
import Navbar from './components/devfolio/Navbar';
import HeroSection from './components/devfolio/HeroSection';
import AboutSection from './components/devfolio/AboutSection';
import ServicesSection from './components/devfolio/ServicesSection';
import ProjectsSection from './components/devfolio/ProjectsSection';
import ContactSection from './components/devfolio/ContactSection';
import Footer from './components/devfolio/Footer';
import ScrollToTop from './components/devfolio/ScrollToTop';
import useScrollReveal from './hooks/useScrollReveal';
import InteractiveBackground from './components/devfolio/InteractiveBackground';

function App() {
  const { basic, socials, about, services, projects, contact } = devfolioData;
  useScrollReveal();

  return (
    <div className="devfolio-app">
      <InteractiveBackground />
      <Navbar resumeUrl={basic.resume} />
      <main>
        <HeroSection basic={basic} socials={socials} />
        <AboutSection about={about} basic={basic} />
        <ServicesSection services={services} />
        <ProjectsSection projects={projects} />
        <ContactSection contacts={contact} />
      </main>
      <Footer name={`${basic.firstName} ${basic.lastName}`} />
      <ScrollToTop />
    </div>
  );
}

export default App;
