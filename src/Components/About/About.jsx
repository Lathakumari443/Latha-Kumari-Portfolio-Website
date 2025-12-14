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
                            I'm passionate about Frontend Development and enjoy creating clean, building responsive, interactive, and engaging user interfaces that enhance user experiences.
                            by using HTML, CSS, Bootstrap, JavaScript, and React.js. 
                            <br />
                            <br />

                            <li>I focus on building engaging web experiences that enhance usability and performance.</li><br />
                            <li>I enjoy learning new frontend concepts and applying them through hands-on projects.</li><br />
                            <li>I’m eager to grow as a frontend developer and contribute to real-world applications.</li>

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
                    <h4>Frontend Developer</h4><br/>
                    <p>Fresher | Entry-Level</p>
                </div>
                <div className="experience-details">
                    <h4>Skills & Learning</h4>
                    <p>Seeking an entry-level Frontend Developer role where I can apply my knowledge of HTML, CSS, Bootstrap, JavaScript, and React.js while continuing to learn through real-world projects.</p>
                </div>
            </div>

        </div>
    );
};

export default About;
