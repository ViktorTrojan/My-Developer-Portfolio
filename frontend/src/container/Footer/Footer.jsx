import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { images } from '../../constants';
import lottie from 'lottie-web';
import Lottie from 'react-lottie';
import { useOnDraw } from './CanvasDraw';

const SocialLinks = () => {

  const SocialLink = ({ bg, link, icon }) => {
    return (
      <div className={`${bg} p-3 rounded-full m-4 hover:bg-opacity-70 duration-150`}>
        <a className='flex justify-between items-center w-full text-gray-300' href={link} target="_blank">{icon}</a>
      </div>
    );
  }

  return (
    <div className='flex'>
      <SocialLink bg='bg-blue-600' link='https://hereuwu' icon={<FaLinkedin size={34} />} />
      <SocialLink bg='bg-[#772f9d]' link='https://github.com/ViktorTrojan' icon={<FaGithub size={34} />} />
      <SocialLink bg='bg-teal-600' link='mailto:viktor.trojann@gmail.com' icon={<HiOutlineMail size={34} />} />
    </div>
  );
}

const Footer = () => {

  const [hue, setHue] = useState(0);
  const [ppts, setPpts] = useState([]);

  function onDraw(ctx, point, prevPoint) {
    if (!prevPoint) return;
    setHue((hue + 1) % 360);
    // setPpts(prev => [...prev, { x: offsetX, y: offsetY }]);
    ctx.strokeStyle = `hsl(${hue}, 100%, 45%)`;
    ctx.lineCap = "round";
    ctx.lineJoin = 'round';
    ctx.lineWidth = 20;

    ctx.beginPath();
    ctx.moveTo(prevPoint.x, prevPoint.y);
    ctx.lineTo(point.x, point.y);
    ctx.stroke();
    ctx.closePath();
  }

  const catContainer = React.useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: catContainer.current, // the DOM element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: images.cat // the path to the animation data file
    });
  }, []);


  const { setCanvasRef, onCanvasMouseDown } = useOnDraw(onDraw);

  return (
    <div name='contact' className='relative pt-40'>
      <canvas ref={setCanvasRef} onMouseDown={onCanvasMouseDown} className='absolute left-0 top-0 w-full h-full cursor-crosshair' />
      <div className='flex flex-col items-center'>
        <div className='relative pointer-events-none flex flex-col items-center gap-5 bg-grayBlue py-4 px-10 rounded-3xl mx-2'>
          <div className='flex'>
            <h1 className='select-none text-2xl md:text-6xl text-center'>Let’s Build something <br />Truly Amazing. <span className='text-xl md:text-5xl text-[#0A2864]'>Shall We?</span></h1>
          </div>
          <p className='text-center pointer-events-auto relative md:text-xl text-gray-700 bg-black/10 rounded-full px-4'>Want to Contact me? Say <a className='underline' href="mailto:viktor.trojann@gmail.com">viktor.trojann@gmail.com</a></p>
        </div>


        <div className='relative my-4'>
          <SocialLinks />
        </div>


        <p className='relative pointer-events-none select-none text-gray-700 mx-auto'>©Copyright, 2022</p>
        <div className='absolute right-0 bottom-0 pointer-events-none w-20 h-20 sm:w-[200px] sm:h-[200px]'>
          <Lottie options={{ animationData: images.cat }} />
        </div>
      </div>
    </div>
  )
}

export default Footer;