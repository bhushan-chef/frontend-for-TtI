import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
        <img src={assets.logo2} alt="" className='h-15 rounded-lg ' width={150}></img>
        <p className='flex-1 border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>
            Copyright © 2023 All rights reserved | This template is made with <span className='text-red-500'>❤</span> by <a href="" className='text-blue-500 hover:underline' target='_blank'>Team AI</a>
        </p>
        <div className='flex gap-2.5 '>
            <img src={assets.facebook_icon} alt="" className='h-8 inline-block mx-2'></img>
            <img src={assets.instagram_icon} alt="" className='h-8 inline-block mx-2'></img>
            <img src={assets.twitter_icon} alt="" className='h-8 inline-block mx-2' ></img>
        </div>
    </div>
  )
}

export default Footer