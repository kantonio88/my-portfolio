import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex">
            <Link
              to="/"
              className="text-white font-bold text-lg uppercase"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="ml-8 text-gray-300 hover:text-white"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="ml-8 text-gray-300 hover:text-white"
            >
              Projects
            </Link>
            <Link
              to="/experience"
              className="ml-8 text-gray-300 hover:text-white"
            >
              Experience
            </Link>
            <Link
              to="/contact"
              className="ml-8 text-gray-300 hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
