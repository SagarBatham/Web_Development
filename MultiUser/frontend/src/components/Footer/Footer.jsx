import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>IkAIris</h4>
            <p>Your AI companion for intelligent conversations</p>
          </div>

          <div className="footer-section">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h5>Legal</h5>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h5>Follow Us</h5>
            <div className="social-links">
              <a href="#twitter">Twitter</a>
              <a href="#github">GitHub</a>
              <a href="#linkedin">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 IkAIris. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
