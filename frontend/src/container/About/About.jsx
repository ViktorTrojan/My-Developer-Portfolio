import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';

const AboutInfo = () => {

  return (
    <div className='bg-whiteblue w-[430px] h-[150px] rounded-xl'>
      <div className='flex'>
        <div className='bg-consolered w-5 h-5 rounded-full'></div>
      </div>
    </div>
  );
}

const About = () => {

  return (
    <div name="about" className='flex w-full h-screen'>
      <div className='flex w-full justify-between mt-20'>
        <AboutInfo/>
        <div className='bg-red-300 w-20 h-20'></div>
        {/* <h2 className="text-4xl my-4 text-center">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2> */}
      </div>
    </div>
  )
}

export default About