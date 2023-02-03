import React from 'react';
import '../CSS/Pokemon.css';
import logo from '../Assets/github-logo.png';

export default function Footer() {
  return (
    <div className="footer">
      <p>Built by Ziga Macele</p>
      <a href="https://github.com/zigamacele" target="_blank" rel="noreferrer">
        <img
          className="footer-logo"
          alt="github-logo"
          src={logo}
          target="_blank"
        />
      </a>
    </div>
  );
}
