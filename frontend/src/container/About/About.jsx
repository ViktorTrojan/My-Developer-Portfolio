import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import TypeWriterEffect from 'react-typewriter-effect';
import Lottie from 'react-lottie';

// TODO: merge this with the one in Contact
const Console = (text) => {
  return (
    <div className='flex flex-col w-full h-full bg-whiteblue rounded-2xl px-4'>
      {/* Indicator close buttons */}
      <div className='flex gap-2 py-3'>
        <div className='bg-consolered rounded-full w-4 h-4 sm:w-5 sm:h-5' />
        <div className='bg-consoleyellow rounded-full w-4 h-4 sm:w-5 sm:h-5' />
        <div className='bg-consolegreen rounded-full w-4 h-4 sm:w-5 sm:h-5' />
      </div>
      <div className='flex flex-col h-full sm:justify-center'>
        <p className='font-bold text-3xl sm:text-4xl'>Greetings 👋</p>
        <p className='text-base sm:text-xl'>I'm <span className='text-darkerBlue font-semibold'
        >Viktor Trojan</span>. Student Developer</p>

        <TypeWriterEffect
          textStyle={{
            fontSize: '20px',
          }}
          cursorColor="#0A28AA"
          multiText={[
            "UI/UX Developer",
            "Backend Developer",
            "React-Native Developer",
            "Always Learning",
          ]}
          multiTextDelay={1200}
          multiTextLoop='true'
          typeSpeed={60}
        />
      </div>
    </div>

  );
}

const AboutInfo = () => {

  return (
    <div className='flex justify-center items-center'>
      <div className='flex w-[350px] h-[140px] sm:w-[450px] sm:h-[200px]'>
        <Console />
      </div>
    </div>
  );
}

const About = () => {

  return (
    <div name="home" className='flex w-full flex-col md:flex-row pt-32 md:pt-20 gap-10 md:gap-0 sm:justify-around'>
      <AboutInfo />
      <div className='flex justify-center items-center'>
        <div className='w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]'>
          <Lottie options={{ animationData: images.coding }} />
        </div>
      </div>
    </div>
  )
}

export default About