import React from 'react';
import TypeWriter from './TypeWriter';
import './Home.css'; 
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';


const Home = () => {
  return (
    
    <div className="home-container">
      
      <div className="background-container">
    
        <div className="content">
          <div className="text-content">
            <h1>__Welcome to My Portfolio__</h1>
            
              <div>
              <TypeWriter />
              </div>
            
            <div className="contact-me">
              <h3>Contact Me</h3>
              
             
                Email{' '}
                  <form action="mailto:sksumaiya191@gmail.com" method="post" encType="text/plain">
                  <button className="contact-button" type="submit">Click here </button>
                </form>
              
            </div>
            <div className='fiicons-container'>
              <a className='fisocial-icons' href='https://www.instagram.com/smiley_sumaiya/' target='_blank' rel="noreferrer">
                <FaInstagram />
              </a>
              <a className='fisocial-icons' href='https://github.com/sksumaiya191' target='_blank' rel="noreferrer">
                <FaGithub />
              </a>
              <a className='fisocial-icons' href='https://linkedin.com/in/sumaiyashaik' target='_blank' rel="noreferrer">
                <FaLinkedin />
              </a>
              
            </div>
            
          </div>
          
        </div>
        
      </div>
    
    </div>
  );
};

export default Home;