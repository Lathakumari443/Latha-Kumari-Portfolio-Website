import React from 'react'
import './Skills.css'
import Skills_Data from '../../assets/Skills_Data'

const Skills = () => {

  return (
    <div id='skills' className='skills'>
        <div className='skills-title'>
            <h1>My Skills</h1>
        </div>
        <div className='skills-container'>
            {Skills_Data.map((skill,index)=>{
                return <div key={index} className='skills-format'>
                    <h3>{skill.s_no}</h3>
                    <h2>{skill.s_name}</h2>
                    <p>{skill.s_desc}</p>
                    </div>

            })}
        </div>
      
    </div>
  )
}

export default Skills
