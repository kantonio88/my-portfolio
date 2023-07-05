import React from 'react';

const Experience = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center display-4 text-light mb-5">Experience</h1>

      <div className="card mb-5">
        <div className="card-body">
          <h5 className="card-title">Download Resume</h5>
          <a href="/resume.pdf" className="btn btn-primary" download>
            Download PDF
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Certificate 1</h5>
              <a href="/certificate1.pdf" className="btn btn-primary" download>
                Download PDF
              </a>
              <img src="/certificate1.jpg" alt="Certificate 1" className="img-fluid mt-3" />
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Certificate 2</h5>
              <a href="/certificate2.pdf" className="btn btn-primary" download>
                Download PDF
              </a>
              <img src="/certificate2.jpg" alt="Certificate 2" className="img-fluid mt-3" />
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Certificate 3</h5>
              <a href="/certificate3.pdf" className="btn btn-primary" download>
                Download PDF
              </a>
              <img src="/certificate3.jpg" alt="Certificate 3" className="img-fluid mt-3" />
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Certificate 4</h5>
              <a href="/certificate4.pdf" className="btn btn-primary" download>
                Download PDF
              </a>
              <img src="/certificate4.jpg" alt="Certificate 4" className="img-fluid mt-3" />
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-5">
        <div className="card-body">
          <h5 className="card-title">Skills</h5>
          <h6 className="card-subtitle mb-3 text-muted">Web Development</h6>
          <ul>
            <li>HTML</li>
            <li>CSS/SCSS</li>
            <li>JavaScript</li>
            <li>Ruby</li>
          </ul>

          <h6 className="card-subtitle mb-3 text-muted">Frameworks & Libraries</h6>
          <ul>
            <li>Rails</li>
            <li>React</li>
            <li>Stimulus</li>
            <li>Bootstrap</li>
          </ul>

          <h6 className="card-subtitle mb-3 text-muted">Node.js</h6>
          <ul>
            <li>APIs</li>
            <li>JSON</li>
            <li>VSCode</li>
            <li>GitHub</li>
          </ul>

          <h6 className="card-subtitle mb-3 text-muted">Design & Collaboration</h6>
          <ul>
            <li>Figma</li>
            <li>Airtable</li>
            <li>SharePoint</li>
            <li>Microsoft Dynamics</li>
            <li>Microsoft Suite</li>
            <li>Asana</li>
            <li>Jira</li>
          </ul>

          <h6 className="card-subtitle mb-3 text-muted">Personal</h6>
          <ul>
            <li>Project Management</li>
            <li>Problem Solving</li>
            <li>Adaptability</li>
            <li>Teamwork</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
