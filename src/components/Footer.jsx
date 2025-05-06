import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>EKTA SAJWAN</h3>
        <p>Made with ❤️ using React. Let's connect!</p>

        <div className="social-icons">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub style={{ color: '#333' }} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={{ color: '#0077b5' }} />
          </a>
          <a href="mailto:johndoe@example.com">
            <FaEnvelope style={{ color: '#d44638' }} />
          </a>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <p className="copyright">
          &copy; 2025 EKTA . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
