import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

const Description = () => {
  return (
    <motion.div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'
     initial={{opacity:0.2,y:100}}
     transition={{duration:1}}
     whileInView={{opacity:1,y:0}}
     viewport={{once:true}}
    >
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>
            Create AI images
        </h1>
        <p className='text-gray-500 mb-8'>Turn your imagination into images</p>
        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
            <img src={assets.Cat} className='w-100 xl:w-96 h-80 rounded-lg'></img>
            <div>
                <h2 className='text-3xl max-w-lg font-medium mb-4'>
                    Introducing the AI Image Generator
                </h2>
                <p className='text-gray-600 mb-4 font-bold'>
                    Our AI image generator uses a combination of natural language processing and computer vision to create unique and personalized
                </p>
                <p className='text-gray-600 font-bold'>
                    Images based on your text input. Whether you need a custom image for your website, social media, or marketing materials, our tool can help you create stunning visuals in seconds.
                </p>
            </div>
        </div>
    </motion.div>
  )
}

export default Description