import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import {images } from '../../constants';

const abouts = [
  {title: 'Web Development', description: 'I am a good web Designer', imgUrl: images.about01},
  {title: 'Web Design', description: 'I am a good web Designer', imgUrl: images.about02},
  {title: 'UI/UX', description: 'I am a good web Designer', imgUrl: images.about03},
  {title: 'Web Animations', description: 'I am a goodd Designer', imgUrl: images.about04}
]

const About = () => {

  return (
    <div name="about" className='flex flex-col w-full items-center'>
      <h2 className="text-4xl my-4 text-center">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>

      <div className="flex flex-wrap justify-center  mt-2">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="flex flex-col m-2"
            key={about.title + index}
          >
            <img className=' w-full h-[170px] rounded-xl object-cover xl:w-[370px] xl:h-[320px] xl:mx-4 xl:my-2' src={about.imgUrl} alt={about.title} />
            <h2 className="font-bold" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default About