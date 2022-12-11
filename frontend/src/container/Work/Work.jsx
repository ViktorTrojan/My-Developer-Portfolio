import React, { useState } from "react";
import { images } from '../../constants';
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { FaCode } from 'react-icons/fa';
import { VscDebugContinue } from 'react-icons/vsc';
import { GrFormClose } from "react-icons/gr";
import { useCallback } from "react";

const projects = [
  {
    id: 0,
    img: images.flappybird,
    title: "Flappy Bird",
    description: "A Flappy Bird clone made in Python with Pygame. Uses assets and sound effects from the original game.",
    link: 'https://github.com/ViktorTrojan/Flappy-Bird',
    demo: 'https://example.com'
  },
  {
    id: 1,
    img: images.pingponglogo,
    title: "SimplePong",
    description: `A Game Group Project based on the simple Game "Retro Pong" made in Java`,
    link: 'https://github.com/ViktorTrojan/SimplePong',
    demo: 'https://example.com'
  },
  {
    id: 2,
    img: images.connect4,
    title: "Connect4",
    description: `Connect4 is a two-player connection board game based on the Original Game "Connect4" made in Java`,
    link: 'https://github.com/ViktorTrojan/Connect4',
    demo: 'https://example.com'
  },
  // {
  //   id: 3,
  //   img: images.figma,
  //   title: "SimplePong",
  //   description: "Ping Pong Project that does this and that and is awesome",
  //   link: 'https://example.com',
  //   demo: 'https://example.com'
  // },
  // {
  //   id: 4,
  //   img: images.figma,
  //   title: "SimplePong",
  //   description: "Ping Pong Project that does this and that and is awesome",
  //   link: 'https://example.com',
  //   demo: 'https://example.com'
  // },
  // {
  //   id: 5,
  //   img: images.figma,
  //   title: "SimplePong",
  //   description: "Ping Pong Project that does this and that and is awesome",
  //   link: 'https://example.com',
  //   demo: 'https://example.com'
  // },
];

const Project = ({ id, img, title, description, link, demo, index, setIndex }) => {
  const Clicked = () => { if (index === false) setIndex(id); }

  return (
    <motion.div layoutId={`${id}`} className='flex flex-col bg-whiteblue w-[300px] h-[200px] rounded-2xl justify-center gap-4 shadow-md' onClick={Clicked}>
      <motion.img layoutId={`${id}1`} className='h-[50%] mx-auto object-contain' src={img} />
      <motion.p layoutId={`${id}2`} className='mx-[10%] whitespace-nowrap text-ellipsis overflow-hidden'>{description}</motion.p>
    </motion.div>
  );
}

const Btn = ({ name, icon, open }) => {
  return (
    <a href={open} target="_blank" className="flex w-full h-full bg-[#084d93] rounded-2xl items-center">
      {icon}
      <p className="text-[#ffffff] text-xl">{name}</p>
    </a>
  );
}

const BtnOutline = ({ name, icon, open }) => {
  return (
    <a href={open} target="_blank" className="flex w-full h-full rounded-2xl items-center border-2 border-blue-400 bg-blue-400/10">
      <FaCode size={24} className="text-[#22596b] mx-4" />
      <p className="text-[#22596b] text-xl">{name}</p>
    </a>
  );
}

const ProjectModal = ({ index, handleClose }) => {
  const item = projects.find((item) => item.id === index);
  return (
    <>
      <motion.div layoutId={`${index}`} className='absolute left-0 right-0 top-0 bottom-0 m-auto bg-whiteblue w-[350px] h-[320px] sm:w-[450px] sm:h-[260px] rounded-2xl shadow-lg'>
        <div className='flex flex-col w-full h-full px-3'>
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold pl-5 py-3">{item.title}</h1>
            <div onClick={handleClose} className="flex bg-blue-500/50 rounded-full w-8 h-8 items-center justify-center my-auto hover:bg-blue-500/70 duration-150">
              <GrFormClose size={24} />
            </div>
          </div>
          <div className='flex w-full'>
            <motion.img layoutId={`${index}1`} className='w-[100px] h-[100px] object-contain' src={item.img} />

            <div className="ml-2 p-2">
              <motion.p layoutId={`${index}2`}>{item.description}</motion.p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex h-full w-full items-end justify-between pb-3">
            <div className="w-40 h-12">
              <BtnOutline name='Source' />
            </div>
            <div className="w-40 h-12">
              <Btn open={item.link} name='DEMO' icon={<VscDebugContinue size={24} className="text-white mx-4" />} />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

const DrawTitle = ({ icon, title }) => {
  return (
    <div className='flex items-center gap-2'>
      {/* ICON */}
      <div className='flex rounded-full shadow-md w-12 h-12 justify-center items-center'>
        <img className='w-8 h-8' src={icon} alt=''></img>
      </div>
      <p className='text-orange text-2xl font-bold'>{title}</p>
    </div>
  );
}


const Work = () => {
  const [index, setIndex] = useState(false);

  const handleClose = useCallback(() => {
    setIndex(false);
  }, []);

  return (
    <div name='work' className='flex flex-col mx-4 sm:mx-10'>
      <DrawTitle icon={images.pc} title='PROJECTS' />
      <div className='relative my-5 xs:m-10'>
        <div className='flex'>
          <AnimateSharedLayout>
            {/* Grid Container */}
            <div className='grid gap-4 mx-auto lg2:grid-cols-3 md:grid-cols-2'>
              {/* Grid Items */}
              {projects.map(p => (
                <Project key={p.id} {...p} index={index} setIndex={setIndex} />
              ))}
            </div>
          </AnimateSharedLayout>
        </div>
        <AnimatePresence>
          {index !== false && <ProjectModal index={index} handleClose={handleClose} />}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Work