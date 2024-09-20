import React from 'react';
import './Footer.css'; // External CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Company Information */}
        <div className="footer-section">
          <h4>Company Name</h4>
          <p>We provide the best services to our clients with a focus on innovation and sustainability.</p>
          <p>© 2024 Company Name. All Rights Reserved.</p>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p><strong>Location:</strong> Mumbai, Maharashtra, India</p>
          <p><strong>Email:</strong> info@companyname.com</p>
          <p><strong>Phone:</strong> +91-9876543210</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
