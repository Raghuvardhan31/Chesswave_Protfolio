import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [showPricingModal, setShowPricingModal] = useState(null);

  const closePricingModal = () => {
    setShowPricingModal(null);
  };

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

      {/* Services */}
      <section className="services-preview">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-item">
            <h3>Web Development</h3>
            <p>Modern, responsive websites built with the latest technologies.</p>
          </div>
          <div className="service-item">
            <h3>Design & UI/UX</h3>
            <p>Stunning designs with exceptional user experience.</p>
          </div>
          <div className="service-item">
            <h3>Maintenance & Support</h3>
            <p>Ongoing support to keep your site secure and fast.</p>
          </div>
        </div>
      </section>

      {/* Pricing Highlight */}
      <section className="pricing-highlight">
        <h2>Advanced Yearly Website Plans</h2>
        <p>Choose the perfect plan for your institution</p>

        <div className="pricing-plans">

          <div
            className="pricing-plan"
            onClick={() =>
              setShowPricingModal(
                showPricingModal === 'standard' ? null : 'standard'
              )
            }
          >
            <h3>Standard Advanced Plan</h3>
            <div className="plan-price">₹20,000</div>
            <p>6–8 pages</p>

            {showPricingModal === 'standard' && (
              <div className="plan-details">
                <ul>
                  <li>Professional UI design</li>
                  <li>Mobile responsiveness</li>
                  <li>Vercel deployment</li>
                  <li>Domain & SSL setup</li>
                  <li>Basic to intermediate SEO</li>
                  <li>Contact form</li>
                  <li>WhatsApp button</li>
                  <li>Google Maps</li>
                </ul>
              </div>
            )}
          </div>

          <div
            className="pricing-plan featured"
            onClick={() =>
              setShowPricingModal(
                showPricingModal === 'professional' ? null : 'professional'
              )
            }
          >
            <h3>Professional Advanced Plan</h3>
            <div className="plan-price">₹25,000</div>
            <p>10–12 pages</p>

            {showPricingModal === 'professional' && (
              <div className="plan-details">
                <ul>
                  <li>Custom UI/UX branding</li>
                  <li>SEO optimization</li>
                  <li>Performance optimization</li>
                  <li>Analytics setup</li>
                  <li>Priority updates</li>
                </ul>
              </div>
            )}
          </div>

          <div
            className="pricing-plan"
            onClick={() =>
              setShowPricingModal(
                showPricingModal === 'premium' ? null : 'premium'
              )
            }
          >
            <h3>Premium Advanced Plan</h3>
            <div className="plan-price">₹30,000</div>
            <p>15–20 pages</p>

            {showPricingModal === 'premium' && (
              <div className="plan-details">
                <ul>
                  <li>Fully customized design</li>
                  <li>Advanced SEO</li>
                  <li>High performance optimization</li>
                  <li>Analytics & monitoring</li>
                  <li>Priority support</li>
                </ul>
              </div>
            )}
          </div>

        </div>
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
