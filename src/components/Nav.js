import React from 'react'; //import React Component
import {NavLink} from 'react-router-dom';

export function Nav() {
  return (
    <nav className="nav">
         <div id="hamburger-menu"><a href="#"><i className="fa fa-bars" aria-label="menu"></i></a></div>
            <ul id="nav-links">
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/calendar">Calendar</NavLink></li>
                <li><NavLink to="/graph">Data Visualization</NavLink></li>
                <li><NavLink to="/form">Form</NavLink></li>
            </ul>
    </nav>
  );
}