import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="premium-home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">ChessWave</h1>
            <p className="hero-subtitle">Professional Web Development Company</p>
            <p className="hero-description">
              We build modern, secure, and easy-to-manage websites for schools, colleges, and businesses.
              From design to deployment and maintenance — focus on growth, not technology.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Get a Free Demo</button>
              <button className="btn-secondary">View Our Work</button>
            </div>
          </div>
          <div className="hero-image">
            <img src="/chesswave.png" alt="ChessWave" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-card">
            <h2>60%</h2>
            <p>Faster Website Launches</p>
          </div>
          <div className="stat-card">
            <h2>50%</h2>
            <p>Lower Development Costs</p>
          </div>
          <div className="stat-card">
            <h2>99%</h2>
            <p>Secure & Reliable Websites</p>
          </div>
        </div>
        <p className="stats-tagline">Turn Your Website Into a Digital Growth Engine</p>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-item">
            <h3>Web Development</h3>
            <p>Modern, responsive websites built with the latest technologies for schools, colleges, and businesses.</p>
          </div>
          <div className="service-item">
            <h3>Design & UI/UX</h3>
            <p>Stunning designs that captivate your audience and provide an exceptional user experience.</p>
          </div>
          <div className="service-item">
            <h3>Maintenance & Support</h3>
            <p>Ongoing support and maintenance to keep your website secure, updated, and performing optimally.</p>
          </div>
        </div>
      </section>

      {/* Pricing Highlight */}
      <section className="pricing-highlight">
        <h2>Pricing </h2>
        <p>Standard | Professional | Premium</p>
        <p>Starting from ₹20,000</p>
        <button className="btn-primary">View Plans</button>
      </section>

      {/* Call to Action */}
      <section className="call-to-action">
        <h2>Want a professional website for your institution?</h2>
        <p>Get a free consultation today</p>
      </section>
    </div>
  );
}

export default Home;

