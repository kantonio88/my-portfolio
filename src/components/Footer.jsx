import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerStyle = {
    backgroundColor: '#5C88DAFF',
  };

  return (
    <footer className="text-white fixed-bottom" style={footerStyle}>
      <div className="container py-4">
        <div className="d-flex justify-content-center align-items-center">
          <div className="me-4">&copy; {currentYear} Keston Antonio Schmidtgen</div>
          <div className="d-flex">
            <a
              href="https://www.linkedin.com/your-linkedin-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white me-3"
            >
              <i className="fab fa-linkedin fa-3x" style={{ color: "#0A66C2" }}></i>
            </a>
            <a
              href="https://www.instagram.com/your-instagram-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white me-3"
            >
              <i className="fab fa-instagram fa-3x" style={{ color: "#E4405F" }}></i>
            </a>
            <a
              href="https://www.github.com/your-github-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <i className="fab fa-github fa-3x" style={{ color: "#181717" }}></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
