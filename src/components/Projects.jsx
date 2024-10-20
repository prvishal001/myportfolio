import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        <div className="project-item">
          <h3>Personal Portfolio</h3>
          <p>A responsive personal portfolio website built with React, showcasing my skills and projects.</p>
          <a href="https://github.com/prvishal001/myportfolio" target="_blank" rel="noopener noreferrer">
            View Code
          </a>
        </div>
        <div className="project-item">
          <h3>E-Commerce Store</h3>
          <p>An e-commerce store built with MERN stack, featuring product pages, shopping cart, and payment gateway integration.</p>
          <a href="https://github.com/yourusername/ecommerce-store" target="_blank" rel="noopener noreferrer">
            View Code
          </a>
        </div>
        <div className="project-item">
          <h3>Weather App</h3>
          <p>A weather forecasting app built with React and OpenWeather API, providing real-time weather updates and forecasts.</p>
          <a href="https://github.com/prvishal001/weatherapp" target="_blank" rel="noopener noreferrer">
            View Code
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
