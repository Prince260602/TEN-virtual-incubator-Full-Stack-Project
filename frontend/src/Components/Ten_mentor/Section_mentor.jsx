import React from 'react'
import image from '../Our_Works/assets/Ten_mentor.png';
import './Section_mentor.css'

const Section = () => {
  return (
    <>
      <div className='Section-page-simple'>
        <div className='Section-page-p'>
            <p>TEN Mentors empower individuals by providing personalized guidance, fostering growth, and unlocking potential through knowledge, support, and experience-sharing</p>
            
            <div className='Section-page-btn'>
                <button><a href='https://mentor.entrepreneurshipnetwork.net/'>Explore More</a></button>
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
