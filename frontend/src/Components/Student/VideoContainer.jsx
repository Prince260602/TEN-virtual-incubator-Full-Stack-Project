import React from 'react'
import { CartPages } from './CartPages'

export const VideoContainer = () => {
  return (
    <div className=' bg-gray-50'>
      <div className=' text-center font-bold h-12 p-5' >
          Courses You're enrolled in
      </div>
      <div className='flex flex-wrap gap-4 video-container justify-center items-center'>
        
        <CartPages />
        <CartPages />
        <CartPages />
        <CartPages />
        <CartPages />
        <CartPages />
        <CartPages />
        <CartPages />
      </div>
    </div>
  )
}
