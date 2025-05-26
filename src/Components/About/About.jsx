import React from 'react';
import './About.css';
import profile_img from '../../assets/my_picture.png';

const About = () => {
    //js
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1> About Me</h1>
            </div>

            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt='Profile' />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>
                            I specialize in Frontend Technologies like  HTML, CSS, Bootstrap, JavaScript, and the React.js library. And I have over 2.9 years experience on web development.
                        </p>
                        <p>
                            I am passionate about building responsive, interactive, and engaging user interfaces that enhance user experiences.
                        </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>Programming Language: JavaScript</p></div>
                        <div className="about-skill"><p>Library: React.js</p></div>
                        <div className="about-skill"><p>Markup Language: HTML</p></div>
                        <div className="about-skill"><p>Styling: CSS & Bootstrap Framework</p></div>
                    </div>
                </div>
            </div>

            <div className="about-experience">
                <div className="experience-summary">
                    <h4>2.9</h4>
                    <p>Years of Experience</p>
                </div>
                <div className="experience-details">
                    <h4>Health Insurance System (HIS)</h4>
                    <p>Contributed to frontend development using React.js, JavaScript, HTML, CSS, and Bootstrap</p>
                </div>
            </div>
        </div>
    );
};

export default About;
