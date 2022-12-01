import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';

const AboutInfo = () => {

  return (
    <div className='flex justify-center items-center'>
      <div className='relative w-[360px] sm:w-[400px]'>
        <motion.img src={images.console} />
        <div className='absolute top-0 left-0 ml-4 mt-8'>
          <p className='text-xl sm:text-2xl font-bold'>Greetings 👋</p>
          <p className='text-xs sm:text-base'>I'm Viktor Trojan. Student Developer. UX Developer. Always Learning</p>
        </div>
      </div>
    </div>
  );
}

const About = () => {

  return (
    <div name="about" className='flex w-full h-screen justify-around pt-20 flex-col md:flex-row'>
      <AboutInfo />
      <div className='flex justify-center'>
        <img className='w-[300px] h-[300px] sm:w-[500px] sm:h-[500px]' src={images.hero1}></img>
      </div>

      {/* <h2 className="text-4xl my-4 text-center">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2> */}
    </div>
  )
}

export default About