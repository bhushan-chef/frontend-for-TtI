import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const GenerateBtn = () => {
  const { user, setShowlogin } = useContext(AppContext);

  const navigate = useNavigate();

  const onclickHandler = () => {
    if (user) {
        navigate("/result");
    }
    else {
        setShowlogin(true);
    }
  };
  return (
    <motion.div className='pb-16 text-center'
     initial={{opacity:0.2,y:100}}
     transition={{duration:1}}
     whileInView={{opacity:1,y:0}}
     viewport={{once:true}}
    
    >
        <h1 className='text-2xl md:text-3xl font-semibold text-neutral-800 mt-4 lg:text-4xl py-6 md:py-6'>
            See the magiic . Click the button below to generate your first image!
        </h1>
        <button onClick={onclickHandler} className='inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white m-auto hover-scale-105 transition-all duration-500'>
            Generate Images
            <img src={assets.star_group} className='h-6'></img>
        </button>
    </motion.div>
  )
}

export default GenerateBtn