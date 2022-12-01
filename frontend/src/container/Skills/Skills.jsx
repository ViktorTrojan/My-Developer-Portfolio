import React from 'react'
import { images } from '../../constants'

const Card = () => {
  return(
    <div className='w-[200px] h-[200px] rounded-2xl bg-whiteblue'>
      <div className='flex flex-col h-full justify-center items-center gap-3'>
        <img className='w-[60%] h-[60%]' src={images.java}/>
        <p className='text-xl'>Java</p>
      </div>
    </div>
  );
}

const Skills = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex items-center gap-2 mx-10'>
        {/* ICON */}
        <div className='flex rounded-full shadow-md w-12 h-12 justify-center items-center'>
          <img className='w-8 h-8' src={images.skills}></img>
        </div>
        <p className='text-orange text-2xl font-bold'>SKILLS</p>
      </div>
      <div className='flex my-16'>
        <Card/>
      </div>
    </div>
  )
}

export default Skills