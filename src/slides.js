import React, { useState, useEffect } from 'react';
import './slides.css'; 

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const quotes = [
    "SELF MOTIVATION IS MY STRENGTH",
    "Design Is My Passion",
    "Creative Thinking Is My Expression."
  ];

  const colors = ["White", "skyblue", "White"]; 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % quotes.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className="slideshow">
      <div className="quote" style={{ color: colors[currentSlide] }}>
        <span className="cracked-text">{quotes[currentSlide]}</span>
      </div>
    </div>
  );
};

export default Slideshow;
