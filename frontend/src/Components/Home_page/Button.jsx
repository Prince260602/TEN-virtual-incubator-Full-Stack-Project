import React from 'react'
import {Link} from 'react-router-dom'

const Button = ({text}) => {
  return (
    <div className='bg-[rgb(28,207,117)] w-fit py-[6px] text-white px-3 rounded-md text-xl'><Link to='/About-us'>{text}</Link></div>
  )
}

export default Button