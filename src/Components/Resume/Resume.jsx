import React,{useEffect} from 'react';
import './Resume.css';
import My_Resume from '../../assets/Resume.pdf'

const Resume = () => {
  useEffect(()=>{
    document.title = 'Latha_kumari || Portfolio'
  },[])


  return (
    <div id='resume' className="resume">
      <div className="resume-title">
        <h1>My Resume</h1>
      </div>
      <div className="resume-container">
        <div className="resume-format">
          <embed 
            src={My_Resume} 
            type="application/pdf" 
            className="resume-pdf"
          />
          <a 
            href={My_Resume} 
            download="Resume.pdf"
            className="resume-download"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
