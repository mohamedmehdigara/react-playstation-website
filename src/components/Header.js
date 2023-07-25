import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src="/playstation-logo.png" alt="PlayStation Logo" className="logo" />
        </div>
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/">Games</a></li>
            <li><a href="/">PlayStation Plus</a></li>
            <li><a href="/">Deals</a></li>
            <li><a href="/">Hardware</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">News</a></li>
          </ul>
          <div className="nav-icons">
            {/* Add any navigation icons or user-related icons here */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
