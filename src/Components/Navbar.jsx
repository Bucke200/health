// src/components/Navbar.js
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure to create a corresponding CSS file
import SearchBox from '../Components/SearchBox';

const Navbar = () => {
  const [isBool, setIsBool] = useState(false);
  const searchBoxRef = useRef(null);

  const handleOnclick = () => {
    setIsBool(!isBool);
  };

  const handleClickOutside = (event) => {
    if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
      setIsBool(false);
    }
  };

  useEffect(() => {
    if (isBool) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isBool]);

  return (
    <nav className="navbar">
      <div style={{ position: 'absolute', left: '30%', top: '15%' }} ref={searchBoxRef}>
        {isBool && <SearchBox />}
      </div>
      <div className="navbar-logo">
        <Link to="/">HEALTHUP</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      <div>
        <button onClick={handleOnclick}>click</button>
      </div>
      <div className="navbar-contact">
        <button className="contact-button">Contact Us</button>
      </div>
    </nav>
  );
};

export default Navbar;
