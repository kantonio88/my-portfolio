import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white fixed-bottom">
      <div className="container py-4">
        <div className="d-flex justify-content-center align-items-center">
          <div className="me-4">&copy; {currentYear} Your Company</div>
          <div className="d-flex">
            <a
              href="https://www.linkedin.com/your-linkedin-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white me-3"
            >
              <i className="fab fa-linkedin fa-3x"></i>
            </a>
            <a
              href="https://www.instagram.com/your-instagram-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white me-3"
            >
              <i className="fab fa-instagram fa-3x"></i>
            </a>
            <a
              href="https://www.github.com/your-github-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <i className="fab fa-github fa-3x"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
