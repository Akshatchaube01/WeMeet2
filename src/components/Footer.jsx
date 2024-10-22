import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="wemeet-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About WeMeet</h3>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">Safety Tips</a></li>
            <li><a href="#">Community Guidelines</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">Copyright Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Report an Issue</a></li>
            <li><a href="#">Feedback</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 WeMeet. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;