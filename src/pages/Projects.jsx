import React from 'react';

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-8 pt-4">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <div className="row">
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card">
            <img src="https://via.placeholder.com/300" className="card-img-top" alt="Project 1" />
            <div className="card-body">
              <h5 className="card-title">Project 1</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor nunc vel sagittis feugiat.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card">
            <img src="https://via.placeholder.com/300" className="card-img-top" alt="Project 2" />
            <div className="card-body">
              <h5 className="card-title">Project 2</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor nunc vel sagittis feugiat.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card">
            <img src="https://via.placeholder.com/300" className="card-img-top" alt="Project 3" />
            <div className="card-body">
              <h5 className="card-title">Project 3</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor nunc vel sagittis feugiat.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card">
            <img src="https://via.placeholder.com/300" className="card-img-top" alt="Project 4" />
            <div className="card-body">
              <h5 className="card-title">Project 4</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor nunc vel sagittis feugiat.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
