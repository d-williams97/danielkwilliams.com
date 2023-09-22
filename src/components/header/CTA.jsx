import React from 'react'
import CV from '../../assets/developerCV.pdf'
import "./Header.css";

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} className='btn' download>Download CV</a> {/*imported PDF to change*/}
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA