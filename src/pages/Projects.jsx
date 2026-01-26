import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

function Projects() {
  const navigate = useNavigate();

  const handleGetInTouch = () => {
    navigate('/contact');
  };

  return (
    <div className="premium-projects">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Our Projects</h1>
          <p className="hero-subtitle">Showcasing Innovation in Chess and Education</p>
          <p className="hero-description">
            Explore our portfolio of web applications designed to enhance chess learning and provide exceptional online experiences.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-section">
        <div className="projects-container">
          <div className="project-card">
            <div className="project-header">
              <div className="project-logo">
                <img src="https://www.chesswave.online/chesswave.png" alt="ChessWave Logo" />
              </div>
              <div className="project-badge">Featured</div>
            </div>
            <div className="project-content">
              <h3>ChessWave</h3>
              <p className="project-type">Free Online Chess Puzzles Platform</p>
              <p className="project-description">
                A comprehensive platform offering free chess puzzle practice for players of all levels.
                Features interactive puzzles, progress tracking, and personalized learning paths to improve your chess skills.
              </p>
              <div className="project-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>PostgreSql</span>
                <span>Express</span>
                <span>Supabase</span>
              </div>
              <div className="project-links">
                <a href="https://www.chesswave.online" target="_blank" rel="noopener noreferrer" className="btn-primary">View Live</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <div className="project-logo">
                <img src="https://ramarajuchessacademy.chesswave.online/logo.png" alt="Ramaraju Chess Academy Logo" />
              </div>
              <div className="project-badge">Academy</div>
            </div>
            <div className="project-content">
              <h3>Ramaraju Chess Academy</h3>
              <p className="project-type">Educational Academy Website</p>
              <p className="project-description">
                A professional website for Ramaraju Chess Academy, providing information about courses,
                training programs, and academy services for aspiring chess players. Personal coaching and group classes available.
              </p>
              <div className="project-tech">
                <span>React</span>
                <span>NODE</span>
                <span>SEO</span>
              </div>
              <div className="project-links">
                <a href="https://ramarajuchessacademy.chesswave.online" target="_blank" rel="noopener noreferrer" className="btn-primary">View Live</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="projects-cta">
        <h2>Ready to Bring Your Ideas to Life?</h2>
        <p>Let's discuss your next project and create something amazing together.</p>
        <button className="btn-primary" onClick={handleGetInTouch}>Get In Touch</button>
      </section>
    </div>
  );
}

export default Projects;
