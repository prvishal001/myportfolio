import React from 'react';

// Import your local images
import portfolioImage from '../assets/images/portfolio.jpg';
import ecommerceImage from '../assets/images/ecommerce.jpg';
import weathers from '../assets/images/weather.jpg';
import todolists from '../assests/images/todolists.jpg';

const projectsData = [
  {
    name: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my skills and projects.',
    image: portfolioImage,  // Using imported local image
    link: 'https://prvishal001.netlify.app',
    isDisabled: false, // This project is clickable
  },
  {
    name: 'E-commerce Store',
    description: 'A full-fledged e-commerce platform with a shopping cart and payment gateway integration.',
    image: ecommerceImage,
    link: 'https://your-ecommerce-link.com',
    isDisabled: true,  // This project is not clickable
  },
  {
    name: 'Weather App',
    description: 'A weather forecasting app built with React and OpenWeather API, providing real-time weather updates and forecasts.',
    image: weathers,
    link: 'https://weathers001.netlify.app',
    isDisabled: false, // This project is clickable
  },
  {
    name: 'Todo List',
    description: 'A simple todolist application used to add your todo tasks for further working on that .',
    image: todolists,
    link: 'https://todolists001.netlify.app',
    isDisabled: false, // This project is clickable
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            {project.isDisabled ? (
              <div className="project-image-container">
                <img src={project.image} alt={`${project.name} screenshot`} className="project-image" />
              </div>
            ) : (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={`${project.name} screenshot`} className="project-image" />
              </a>
            )}
            <div className="project-details">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              {project.isDisabled ? (
                <span className="project-link-disabled">View Project (Coming Soon)</span>
              ) : (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
