import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer className='container footer'>
      <p>Designed and Developed by Sumaiya </p>
      <p className="copyright-text">Copyright © {year}</p>
      <div className='fiicons-container'>
        <a className='fisocial-icons' href='https://www.instagram.com/_smiley_sumaiya___/' target='_blank' rel="noreferrer">
          <FaInstagram />
        </a>
        <a className='fisocial-icons' href='https://github.com/sksumaiya191' target='_blank' rel="noreferrer">
          <FaGithub />
        </a>
        <a className='fisocial-icons' href='https://linkedin.com/in/sumaiyashaik' target='_blank' rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
