import React from 'react'
import './Hero.css'
import profile_img from '../../assets/my_picture.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {

  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1>
        Hi, I'm <span>Latha Kumari</span>, Python Full Stack Developer | Specializing in
        <span style={{ color: 'yellow' }}> Frontend Development</span>
      </h1>
      <p>
        I worked as a Software Engineer at Hyderabad around 3 years of experience on Web Development.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume"><AnchorLink className='anchor-link' offset={50} href='#resume'>My Resume</AnchorLink></div>
      </div>

    </div>
  )
}

export default Hero
