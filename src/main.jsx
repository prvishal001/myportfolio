import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';

// Import all component-specific CSS files here
import './styles/header.css';
import './styles/hero.css';
import './styles/projects.css';
import './styles/skills.css';
import './styles/contact.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
