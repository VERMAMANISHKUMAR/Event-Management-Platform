import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Import icons
import '../assets/styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Social Media */}
        <div className="footer-column">
          <h2>EVENTIFY ®</h2>
          <hr />
          <p>Follow us on</p>
          <ul className="social-icons">
            <li><a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
            <li><a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
            <li><a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
            <li><a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></li>
          </ul>
        </div>

        {/* Additional Columns */}
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="/">About Us</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/about">Blog</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Upcoming Events</a></li>
            <li><a href="/services">Event Planning</a></li>
            <li><a href="/about">Ticketing</a></li>
            <li><a href="/contact">Event Locations</a></li>
            <li><a href="/contact">Speakers & Guests</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/services">Privacy Policy</a></li>
            <li><a href="/about">Terms of Service</a></li>
            <li><a href="/contact">FAQ</a></li>
            <li><a href="/contact">Sponsorship Opportunities</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Countries</h3>
          <ul>
            <li><a href="/">United States</a></li>
            <li><a href="/services">United Kingdom</a></li>
            <li><a href="/about">Canada</a></li>
            <li><a href="/contact">Australia</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Eventify. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
