import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <nav className="header">
        <div className="nav-wrapper container">
          <a href="#" className="brand-logo">
            <img src="./tj-logo.png" alt="That Joshi"/>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">About me</a></li>
            <li><a href="badges.html">Blogs</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
