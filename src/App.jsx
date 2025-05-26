import React from 'react'

import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills'
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact/Contact';


const App = () => {
  return (
       <div>
          <Navbar/>
          <Hero/>
          <About/>
          <Skills />
          <Resume />
          <Contact />
     
      </div>
  )
}

export default App;
