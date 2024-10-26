import React from 'react'
import image from '../Our_Works/assets/Resume_Building.png';
import './Section_Resume.css'

const Section = () => {
  return (
    <>
      <div className='Section-page-simple'>
        <div className='Section-page-p'>
            <p>Create a standout resume with our intuitive builder! Choose from sleek templates, customize effortlessly, and impress employers. Elevate your job search and land your dream job today!</p>
            
            <div className='Section-page-btn'>
                <button><a href='https://resume.entrepreneurshipnetwork.net/'>Explore More</a></button>
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
