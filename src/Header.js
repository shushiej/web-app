import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="header">
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo center">
            <span> That Joshi </span>
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/about">About me</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
