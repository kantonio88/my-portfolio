import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="container mx-auto px-4 py-8 flex items-center justify-between">
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/your-instagram-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            Instagram
          </a>
          <a
            href="https://www.github.com/your-github-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
