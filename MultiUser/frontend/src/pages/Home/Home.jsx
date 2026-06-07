import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to IkAIris</h1>
          <p className="hero-subtitle">Experience the future of AI conversations</p>
          <p className="hero-description">
            IkAIris is your intelligent companion designed to help you with tasks, answer questions, and engage in meaningful conversations anytime, anywhere.
          </p>
          
          <div className="cta-buttons">
            <Link to="/register" className="cta-btn primary-btn">Get Started</Link>
            <Link to="/login" className="cta-btn secondary-btn">Sign In</Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="ai-icon">🤖</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose IkAIris?</h2>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>Get instant responses to your queries with our optimized AI engine</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure & Private</h3>
            <p>Your conversations are encrypted and kept completely private</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🧠</div>
            <h3>Smart AI</h3>
            <p>Advanced machine learning models for accurate and helpful responses</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🌐</div>
            <h3>Always Available</h3>
            <p>Access IkAIris anytime from any device, anywhere in the world</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Personalized</h3>
            <p>AI learns your preferences and provides customized recommendations</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Multi-Device</h3>
            <p>Seamlessly switch between your phone, tablet, and desktop</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Experience IkAIris?</h2>
        <p>Join thousands of users who are already enjoying smarter conversations</p>
        <div className="cta-buttons">
          <Link to="/register" className="cta-btn primary-btn">Create Account</Link>
        </div>
      </section>
    </div>
  );
}
