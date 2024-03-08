import React from 'react';
import { BiDownload } from 'react-icons/bi'; 
import './Resume.css'; 
import Slideshow from './slides';

const Resume = () => {
  const handleDownload = () => {
    const resumePdfUrl = process.env.PUBLIC_URL + '/Resume.pdf';

    const link = document.createElement('a');
    link.href = resumePdfUrl;
    link.download = 'YourResumeFileName.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    
    <div className="resume-container">
       <Slideshow/>
      <div className="resume-title">
     
        <h2>My Resume</h2>
        
      </div>
      <div>
        <button className="resume-button" onClick={handleDownload}>
          <BiDownload /> Download Resume
        </button>
      </div>
    </div>
  );
};

export default Resume;
