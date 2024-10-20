import React from 'react';
import profileImg from '../assets/profile.jpg'; // Add a profile image here

const Hero = () => {
  return (
    <section className="hero">
      <img src={profileImg} alt="Profile" />
      <h1>Hi, I'm Vishal</h1>
      <p>A Passionate Web Developer</p>
      <a href="#projects" className="cta-button">See My Work</a>
    </section>
  );
};

export default Hero;
