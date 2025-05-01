import React from 'react';
import './Projects.css';

const projects = [
  { title: 'Portfolio Site', description: 'Personal portfolio using React.' },
  { title: 'E-Commerce App', description: 'Full-featured online store with cart and payments.' },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((proj, i) => (
          <div className="project-card" key={i}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
