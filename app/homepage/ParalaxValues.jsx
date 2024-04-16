import React from 'react'
import '../Styles/Homepage.css'
import backgroundImage from '../imgs/DIGI.png'

function ParalaxValues() {
  return (
    <div className='paraValues ' style={{ backgroundImage: `url(${backgroundImage.src})`}}>
      <div className='paraVal'>
        <div className='valDiv '> <h1> Values </h1> </div>
        <div className='apsturnDiv'> <p>APSTURN TECHNOLOGIES</p> </div>
      <div className='p-5'>
      <p className='textDiv'>
      our core values are the bedrock of our operations. 
      Integrity, Innovation, Collaboration, Excellence, 
      and Customer Satisfaction are ingrained in everything we do. 
      These principles drive us to deliver bespoke solutions, ensuring 
      we exceed expectations and empower our clients to thrive in an ever-evolving 
      digital landscape.
        </p>
      </div>
      </div>
     
    </div>
  )
}

export default ParalaxValues

/*

*/