// src/components/SearchBox.js
import React from 'react';
import './SearchBox.css';

const SearchBox = () => {
  return (
    <div className="search-box">
      <input type="text" className="search-input" placeholder="Search..." />
      <button className="search-button">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 22L15 15" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

export default SearchBox;
