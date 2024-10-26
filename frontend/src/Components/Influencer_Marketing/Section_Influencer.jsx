import React from 'react'
import image from '../Our_Works/assets/Influencer_Marketing.png';
import './Section_Influencer.css'

const Section = () => {
  return (
    <>
      <div className='Section-page-simple'>
        <div className='Section-page-p'>
            <p>We have helped over 500 Brands across 30 different niches to streamline and scale their influencer marketing</p>
            
            <div className='Section-page-btn'>
                <button><a href='https://marketing.entrepreneurshipnetwork.net/'>Explore More</a></button>
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
