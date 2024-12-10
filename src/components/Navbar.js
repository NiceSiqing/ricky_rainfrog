import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ onThemeChange, theme }) {
  const handleThemeSwitch = () => {
    const nextTheme = theme === 'frog' ? 'christmas' : theme === 'christmas' ? 'halloween' : 'frog';
    onThemeChange(nextTheme);
  };

  const getIcon = () => {
    if (theme === 'frog') return '🐸';
    if (theme === 'christmas') return '🎄';
    if (theme === 'halloween') return '😈';
  };

  return (
    <nav>
      <div className="logo">
        <h1>Ricky Rain Frog</h1>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dialog">Dialog</Link>
        <Link to="/cartoon">Cartoon</Link>
      </div>

      <div className="theme-button-container">
        <button className="theme-button" onClick={handleThemeSwitch}>
          {getIcon()}
        </button>
      </div>

      <div className="shop-button-container">
        <Link to="/shop" className="shop-button">
          Take Ricky Home
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
