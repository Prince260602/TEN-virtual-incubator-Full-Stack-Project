import React from 'react'
import image from '../Our_Works/assets/ten_ai_consulting_labs.png';
import './Section_Consulting.css'

const Section = () => {
  return (
    <>
      <div className='Section-page-simple'>
        <div className='Section-page-p'>
            <p>Transforming businesses with next Ten AI Consulting that are Available, Affordable, and Accessible to all</p>
            
            <div className='Section-page-btn'>
                <button><a href='https://ten-ai-consulting-labs.vercel.app/'>Explore More</a></button>
            </div>
        </div>

        <div className='Section-page-img'>
            <img src={image} alt="" />
        </div>

      </div>
    </>
  )
}

export default Section
