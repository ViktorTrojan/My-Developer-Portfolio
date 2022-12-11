import React from 'react'
import { images } from '../../constants'
import Marquee from "react-fast-marquee";

const Card = ({ name, icon }) => {
  return (
    <div className='min-w-[100px] h-[100px] rounded-2xl bg-whiteblue shadow-shskill hover:scale-110 duration-300 my-10 mx-1 md:mx-4 md:min-w-[150px] md:h-[150px]'>
      <div className='flex flex-col h-full justify-center items-center md:gap-3'>
        <img className='h-[60%]' src={icon} />
        <p className='text-base md:text-2xl'>{name}</p>
      </div>
    </div>
  );
}

const Skills = () => {
  return (
    <div name='skills' className='flex flex-col mx-4 sm:mx-10'>
      <div className='flex items-center gap-2'>
        {/* ICON */}
        <div className='flex rounded-full shadow-md w-12 h-12 justify-center items-center'>
          <img className='w-8 h-8' src={images.skills}></img>
        </div>
        <p className='text-orange text-2xl font-bold'>SKILLS</p>
      </div>
      <div className='flex'>
        <Marquee gradient={false} speed={120} pauseOnClick={true} pauseOnHover={true} delay={0} play={true} direction="left">
          <Card name='React' icon={images.react} />
          <Card name='Node JS' icon={images.nodejs} />
          <Card name='Javascript' icon={images.javascript} />
          <Card name='CSS' icon={images.css} />
          <Card name='HTML' icon={images.html} />
          <Card name='Tailwind' icon={images.tailwind} />
          <Card name='Figma' icon={images.figma} />
          <Card name='Java' icon={images.java} />
          <Card name='C#' icon={images.csharp} />
          <Card name='C++' icon={images.cpp} />
          <Card name='MySQL' icon={images.mysql} />
          <Card name='Python' icon={images.python} />
        </Marquee>
      </div>
    </div>
  )
}

export default Skills