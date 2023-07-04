import React from 'react';
import myPhoto from '../image/portrait.jpg';

const Home = () => {
  return (
    <div className="text-center pt-4">
      <div className="container">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Website</h1>
        <img src={myPhoto} alt="Keston's Profile" className="w-25 rounded-circle mb-4 mx-auto" />
      </div>
      <p className="fs-5">
        Hello, I'm a frontend developer seeking new opportunities. Feel free to
        explore my projects and get in touch.
      </p>
    </div>
  );
};

export default Home;
