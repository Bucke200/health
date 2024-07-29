// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Explore</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Services</h3>
        <ul>
          <li><a href="/services/short-term">Short-term</a></li>
          <li><a href="/services/long-term">Long-term</a></li>
          <li><a href="/services/wellness-partner">Wellness partner</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Follow us</h3>
        <ul className="social-links">
          <li><a href="https://twitter.com"><i className="fab fa-twitter"></i> Twitter</a></li>
          <li><a href="https://instagram.com"><i className="fab fa-instagram"></i> Instagram</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Get in touch</h3>
        <ul>
          <li><i className="fas fa-envelope"></i> sanyogverma07@gmail.com</li>
          <li><i className="fas fa-phone"></i> +91 8827275229</li>
        </ul>
      </div>
      <div className="footer-section disclaimer">
        <h3>Disclaimer</h3>
        <p>We are not a medical service or suicide prevention helpline. If you are feeling suicidal, call a suicide prevention helpline or seek medical help.</p>
      </div>
      <div className="footer-bottom">
        <p>Copyright © HealthUP™</p>
        <p>Powered by <a href="https://www.odoo.com">odoo</a> - <a href="https://www.odoo.com">Create a free website</a></p>
      </div>
    </footer>
  );
};

export default Footer;
