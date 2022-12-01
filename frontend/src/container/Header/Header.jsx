import React from 'react'
import { motion } from 'framer-motion';
import { images } from '../../constants';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div name="home" className="flex flex-col w-full pt-28 justify-center md:flex-row
    bg-cover bg-repeat bg-center"
      style={{ backgroundImage: `url(${images.bgIMG})` }}>
      <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }}
        className='flex flex-col items-end pr-4 md:pr-0'>

        {/* About Me */}
        <div className='flex px-8 py-4 items-center mb-10
        rounded-xl border-2 shadow-[-5px_-5px_20px_rgba(0,0,0,0.2),_5px_5px_20px_rgba(45,78,255,0.35)] hover:shadow-[-5px_-5px_30px_rgba(0,0,0,0.3),_5px_5px_30px_rgba(45,78,255,0.45)] duration-500'>
          <span className='text-4xl'>👋</span>
          <div className='ml-5'>
            <p className='text-gray-600'>Hello, I am</p>
            <h1 className='text-4xl font-bold'>Viktor</h1>
          </div>
        </div>

        {/* Short Description */}
        <div className='flex flex-col px-4 py-2 text-gray-600 uppercase text-right
        rounded-xl border-2 shadow-[-5px_-5px_20px_rgba(0,0,0,0.2),_5px_5px_20px_rgba(45,78,255,0.35)] hover:shadow-[-5px_-5px_30px_rgba(0,0,0,0.3),_5px_5px_30px_rgba(45,78,255,0.45)] duration-500'>
          <p >Web Developer</p>
          <p>Freelancer</p>
        </div>
      </motion.div>

      <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex relative items-center justify-center">
        <img src={images.profile} alt="profile_bg"
          className='z-10' />
        <motion.img whileInView={{ scale: [0, 1] }} transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle} alt="profile_cirlce"
          className='absolute left-0 right-0 bottom-0 w-full h-[90%]' />
      </motion.div>

      <motion.div variants={scaleVariants} whileInView={scaleVariants.whileInView}
        className="flex justify-between px-4 py-10 md:py-20 md:pl-10 md:flex-col">
        <div className='flex justify-center items-center w-24 h-24 bg-white
        rounded-full border-2 shadow-[-5px_-5px_20px_rgba(0,0,0,0.2),_5px_5px_20px_rgba(45,78,255,0.35)]'>
          <img className='w-[60%] h-[60%]' src={images.flutter} alt="circle"></img>
        </div>
        <div className='flex justify-center items-center w-48 h-48 bg-white
        rounded-full border-2 shadow-[-5px_-5px_20px_rgba(0,0,0,0.2),_5px_5px_20px_rgba(126,87,194,0.55)]'>
          <img className='w-[60%] h-[60%]' src={images.redux} alt="circle"></img>
        </div>
        <div className='flex justify-center items-center w-20 h-20 bg-white
        rounded-full border-2 shadow-[-5px_-5px_20px_rgba(0,0,0,0.2),_5px_5px_20px_rgba(240,98,146,0.35)]'>
          <img className='w-[60%] h-[60%]' src={images.sass} alt="circle"></img>
        </div>

      </motion.div>
    </div>
  )
}

export default Header