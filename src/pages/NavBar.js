// src/NavBar.js
import React from 'react';
import './NavBar.css';
import logo from '../assets/HomePageLogo.png'; // Import the image


const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
            <img src={logo} alt="Shree Ram Transports" width="250" height="500" /> {/* Use the imported image */}
        </div>
        <div className="company">Products</div>
        <div className="company">Solutions</div>
        <div className="services">Our Services</div>
      </div>
      <div className="navbar-right">
        <div className="login">Login</div>
        <div className="location">Current Location</div>
        <div className="track-shipment">Track Shipment</div>
        <div className="search-bar">
          <input type="text" placeholder="Search nearby location" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
