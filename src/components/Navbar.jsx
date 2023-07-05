import React from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

// Add the globe icon to the library
library.add(faGlobe);

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: '#5C88DAFF',
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={navbarStyle}>
      <div className="container">
        <Link to="/" className="navbar-brand text-white font-medium text-lg uppercase">
          <FontAwesomeIcon icon="globe" className="fa-lg" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse fs-5" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/about" className="nav-link text-gray-600 hover-text-white">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link text-gray-600 hover-text-white">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/experience" className="nav-link text-gray-600 hover-text-white">
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-gray-600 hover-text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
