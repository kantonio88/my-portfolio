import React from 'react';
import myPhoto from '../image/portrait.jpg';

const Home = () => {
  const paragraphStyle = {
    color: '#FFCD00FF',
  };

  return (
    <div className="text-light text-center pt-4">
      <div className="container">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Website</h1>
        <img src={myPhoto} alt="Keston's Profile" className="w-25 rounded-circle mb-4 mx-auto" />
      </div>
      <p className="fs-4" style={paragraphStyle}>
        Hello, I'm a frontend developer seeking new opportunities. Feel free to
        explore my projects and get in touch.
      </p>
    </div>
  );
};

export default Home;
