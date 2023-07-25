import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>Explore</h2>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/">Games</a></li>
            <li><a href="/">PlayStation Plus</a></li>
            <li><a href="/">Deals</a></li>
            <li><a href="/">Hardware</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">News</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Legal</h2>
          <ul className="footer-links">
            <li><a href="/">Terms of Use</a></li>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Cookie Policy</a></li>
            <li><a href="/">Trademark Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Support</h2>
          <ul className="footer-links">
            <li><a href="/">Support Center</a></li>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">System Software License Agreement</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-icons">
            {/* Add social media icons here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
