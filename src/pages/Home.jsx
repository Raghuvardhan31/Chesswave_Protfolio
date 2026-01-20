import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="main-home">
      <div className="home">
        <div className="part1">
          <h1>60% Faster Website Launches</h1>
          <h2>50% Lower Development Costs</h2>
          <h3>99% Secure & Reliable Websites</h3>
          <p>Turn Your Website Into a Digital Growth Engine</p>
          <button>Get a Free Demo</button>
          <button>View Our Work</button>
        </div>
        <div className="part2">
          <img src="/chesswave.png" alt="ChessWave Logo" />
        </div>
      </div>
      <div className="profile-section">
        <div className="profile-desc">
          <h1>ChessWave</h1>
          <h2>Professional Web Development Company</h2>
          <p>
            ChessWave is a professional web development company that builds modern, secure, and easy-to-manage websites for schools, colleges, and businesses.
            We handle everything from design and development to deployment and yearly maintenance, so you can focus on growth, not technology.
          </p>
        </div>
        <div className="profile-pic">
          <img src="/chesswave.png" alt="ChessWave" />
        </div>
      </div>
    </div>
  );
}

export default Home;

