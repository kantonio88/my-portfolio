import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <video
          src="https://thumbs.gfycat.com/ClumsyWhiteFirebelliedtoad-mobile.mp4" // Replace with the URL of your video
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline // Add this attribute for mobile devices
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover', // Set objectFit to 'cover' to make the video fit inside the screen
            zIndex: -1,
            transition: 'opacity 0.5s ease-in', // Add a fade-in transition
          }}
        />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/experience" component={Experience} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
