import React, { useState } from 'react'; // Import React Component
import { NavLink } from 'react-router-dom';

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav">
      <div id="hamburger-menu" onClick={toggleMenu}>
        <a href="#"><i className="fa fa-bars" aria-label="menu"></i></a>
      </div>
      <ul id="nav-links" className={menuOpen ? 'open' : ''}>
        <li><NavLink to="/home" onClick={toggleMenu}>Home</NavLink></li>
        <li><NavLink to="/calendar" onClick={toggleMenu}>Calendar</NavLink></li>
        <li><NavLink to="/graph" onClick={toggleMenu}>Data Visualization</NavLink></li>
        <li><NavLink to="/form" onClick={toggleMenu}>Form</NavLink></li>
      </ul>
    </nav>
  );
}
