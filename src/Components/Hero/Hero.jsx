import React from 'react'
import './Hero.css'
import profile_img from '../../assets/my_picture.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {

  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1>
        Hi, I'm <span>Latha Kumari</span>, looking for a
        <span style={{ color: 'yellow' }}> Frontend Developer</span> Roles.
      </h1>
      <p>
        Passionate about building responsive and interactive web applications using HTML, CSS, Bootstrap, JavaScript, and React.js.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume"><AnchorLink className='anchor-link' offset={50} href='#resume'>My Resume</AnchorLink></div>
      </div>

    </div>
  )
}

export default Hero
