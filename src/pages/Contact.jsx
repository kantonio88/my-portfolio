import React from 'react';

const Contact = () => {
  const formStyle = {
    backgroundColor: '#FFCD00FF',
  };

  const buttonStyle = {
    backgroundColor: '#000000',
  };

  return (
    <div>
      <div className="text-light text-center mt-4">
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <p className="fs-5">
          Feel free to get in touch with me. You can reach me via email or through the social media links below:
        </p>
      </div>
      <div className="container d-flex justify-content-center align-items-center h-100 pt-4">
        <div className="card w-50">
          <div className="card-body" style={formStyle}>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="5"></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={buttonStyle}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
