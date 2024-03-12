import React, { useState } from 'react';
import { IoLogoHtml5, IoLogoCss3, IoLogoReact } from 'react-icons/io5';
import { FaJava, FaDatabase, FaPython, FaJsSquare } from 'react-icons/fa';
import './About.css';

function About() {
  const [htmlSkill, setHtmlSkill] = useState(85);
  const [cssSkill, setCssSkill] = useState(80);
  const [reactSkill, setReactSkill] = useState(50);
  const [javaSkill, setJavaSkill] = useState(70);
  const [SQLSkill, setSQLSkill] = useState(80);
  const [pythonSkill, setPythonSkill] = useState(60);
  const [jsSkill, setJsSkill] = useState(70);

  return (
    <div className="container mt-5 about-container">
      <img src="/image/DEV.jpeg" alt="My profile" className="my-image"    width="316" height="316"  />
      <h2>About Me___</h2>
      <p>
        I am an aspiring developer proficient in HTML, CSS, JavaScript, React, Java, SQL, and Python, eager to leverage my technical knowledge and passion for problem-solving to contribute effectively to innovative projects.
      </p>
      <div className="bio-section">
  <h2>Personal Details:</h2>
  <div className="details">
    <p><strong>Name:</strong> Sumaiya Shaik</p>
    <p><strong>DOB:</strong> 26/02/2000</p>
    <p><strong>Location:</strong> Nellore, Andhra Pradesh, INDIA</p>
    <p><strong>Email:</strong> <a href="mailto:sksumaiya191@gmail.com">sksumaiya191@gmail.com</a></p>
  </div>
</div>

      <div className="bio-section">
        <h2>Education:</h2>
        <ul>
          <li>Master's in Computer Application, VSU University, 2023</li>
          <li>Bachelor of Computer Science (B.Sc. MSCS), Rao's Degree college, 2021</li>
        </ul>
      </div>
      <div className="bio-section">
        <h2>Work Experience:</h2>
        <ul>
          <li>Intern as a front-end developer at <span className="colored-word">'Epireum Consultancy & services'</span> Oy,finland(Remote)</li>
         
            <p style={{ fontStyle: 'normal', color: 'smokewhite' }}>
              ---As a front-end developer intern, My responsibilities would likely involve tasks related to designing, developing, and implementing the user interface and user experience aspects of web applications or websites under the guidance of experienced professionals within the company.
            </p>
          
        </ul>
      </div>
      <div>
        <h2>Skills:</h2>
        <div className="row">
          <div className="icon-box col-md-4">
            <IoLogoHtml5 className="skill-icon" />
            <label>HTML</label>
            <div className="box-around">
              <input
                type="range"
                min="0"
                max="100"
                value={htmlSkill}
                onChange={(e) => setHtmlSkill(e.target.value)}
                className="form-range"
              />
            </div>
          </div>

          <div className="icon-box col-md-4">
            <IoLogoCss3 className="skill-icon" />
            <label>CSS</label>
            <div className="box-around">
              <input
                type="range"
                min="0"
                max="100"
                value={cssSkill}
                onChange={(e) => setCssSkill(e.target.value)}
                className="form-range"
              />
            </div>
          </div>

          <div className="icon-box col-md-4">
            <IoLogoReact className="skill-icon" />
            <label>React</label>
            <div className="box-around">
              <input
                type="range"
                min="0"
                max="100"
                value={reactSkill}
                onChange={(e) => setReactSkill(e.target.value)}
                className="form-range"
              />
            </div>
          </div>

          <div className="icon-box col-md-4">
            <FaJava className="skill-icon" />
            <label>Java</label>
            <div className="box-around">
              <input
                type="range"
                min="0"
                max="100"
                value={javaSkill}
                onChange={(e) => setJavaSkill(e.target.value)}
                className="form-range"
              />
            </div>
          </div>

          <div className="icon-box col-md-4">
            <FaDatabase className="skill-icon" />
            <label>SQL</label>
            <div className="box-around">
              <input
                type="range"
                min="0"
                max="100"
                value={SQLSkill}
                onChange={(e) => setSQLSkill(e.target.value)}
                className="form-range"
              />
            </div>
          </div>

          <div className="icon-box col-md-4">
            <FaPython className="skill-icon" />
            <label>Python</label>
            <div className="box-around">
              <input
                type="range"
                min="0"
                max="100"
                value={pythonSkill}
                onChange={(e) => setPythonSkill(e.target.value)}
                className="form-range"
              />
            </div>
          </div>

          <div className="icon-box col-md-4">
            <FaJsSquare className="skill-icon" />
            <label>JavaScript</label>
            <div className="box-around">
              <input
                type="range"
                min="0"
                max="100"
                value={jsSkill}
                onChange={(e) => setJsSkill(e.target.value)}
                className="form-range"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
