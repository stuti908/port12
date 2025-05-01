import React from 'react';
import './Hero.css';

const Hero = () => {
  const handleResumeClick = () => {
    window.open('/resume.pdf', '_blank');
  };

  const handleProjectsClick = () => {
    window.scrollTo({ top: 800, behavior: 'smooth' });
  };

  const handleContactClick = () => {
    window.scrollTo({ top: 1500, behavior: 'smooth' });
  };

  const handleHireClick = () => {
    alert("Let's get in touch!");
  };

  return (
    <section className="hero">
      <div className="top-right">
        <button className="resume-btn animate-delay-1" onClick={handleResumeClick}>
          RESUME
        </button>
        <button className="resume-btn animate-delay-2" onClick={handleProjectsClick}>
          PROJECTS
        </button>
        <button className="resume-btn animate-delay-3" onClick={handleContactClick}>
          CONTACT ME
        </button>
        <button className="resume-btn animate-delay-4" onClick={handleHireClick}>
          HIRE ME
        </button>
      </div>

      <h1>
        Hello, I'm <span className="highlight">EKTA SAJWAN</span>
      </h1>
      <p>A passionate Web Developer creating modern web experiences.</p>
      <p>Working at PPS INTERNATIONAL as a GET (R&D)</p>
    </section>
  );
};

export default Hero;
