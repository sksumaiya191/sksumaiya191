import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'; 
import Home from './Home';
import About from './About'; 
import Resume from './Resume'; 
import Footer from './Footer'; 
const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
