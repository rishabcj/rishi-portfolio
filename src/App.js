import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <h1>John Doe</h1>
          <p>Frontend Developer</p>
        </div>
      </header>

      <section id="about">
        <div className="container">
          <h2>About Me</h2>
          <p>I am a passionate frontend developer with experience in creating responsive web applications.</p>
        </div>
      </section>

      <section id="skills">
        <div className="container">
          <h2>Skills</h2>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <h2>Projects</h2>
          <div className="project">
            <h3>Project 1</h3>
            <p>Description of project 1.</p>
          </div>
          <div className="project">
            <h3>Project 2</h3>
            <p>Description of project 2.</p>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <h2>Contact Me</h2>
          <p>Email: john@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </section>
    </div>
  );
}

export default App;
