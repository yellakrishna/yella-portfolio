import React from 'react'
import './add.css'

const About = () => {
  return (
    <>
    <h1 className='text-center heading mt-4'>About Me</h1>
   
    <div className='about-container mt-2  vh-50 '>
      
      <div className='imgContainer'>
        <img src='yella 1.png' alt='aboutImg' className='aboutImg'/>
      </div>
      <div className='aboutHeading'>
      <p>
      A Web Developer from Delhi. I build dynamic,
            <br /> intuitive websites with a focus on creativity.
            <br /> Explore my projects to see my work!
      </p>

      </div>
    </div>
    </>
  )
}

export default About
