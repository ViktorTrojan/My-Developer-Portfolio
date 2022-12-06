import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { images } from '../../constants';

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
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hue, setHue] = useState(0);
  const [ppts, setPpts] = useState([]);

  // https://codetheory.in/html5-canvas-drawing-lines-with-smooth-edges/ for the smooth experience use quadratic curves
  const Draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    setHue((hue + 1) % 360);
    const { offsetX, offsetY } = nativeEvent;
    setPpts(prev => [...prev, { x: offsetX, y: offsetY }]);
    contextRef.current.strokeStyle = `hsl(${hue}, 100%, 45%)`;

    contextRef.current.beginPath();
    contextRef.current.moveTo(ppts[ppts.length - 1].x, ppts[ppts.length - 1].y);
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    contextRef.current.closePath();

    // if (ppts.length < 3) {
    //   var b = ppts[0];
    //   contextRef.current.beginPath();
    //   contextRef.current.arc(b.x, b.y, 0, 0, Math.PI * 2, !0);
    //   contextRef.current.stroke();
    //   // contextRef.current.closePath();
    //   return;
    // }

    // contextRef.current.beginPath();
    // contextRef.current.moveTo(ppts[0].x, ppts[0].y);

    // for (var i = 1; i < ppts.length - 2; i++) {
    //   var c = (ppts[i].x + ppts[i + 1].x) / 2;
    //   var d = (ppts[i].y + ppts[i + 1].y) / 2;

    //   contextRef.current.quadraticCurveTo(ppts[i].x, ppts[i].y, c, d);
    // }

    // // For the last 2 points
    // contextRef.current.quadraticCurveTo(ppts[i].x, ppts[i].y, ppts[i + 1].x, ppts[i + 1].y);
    // contextRef.current.stroke();
  }

  const StartDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    setPpts(prev => [...prev, { x: offsetX, y: offsetY }]);

    setIsDrawing(true);
  }

  const StopDrawing = () => {
    setIsDrawing(false);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const bounding = canvasRef.current.getBoundingClientRect();
    canvas.width = bounding.width * 2;
    canvas.height = bounding.height * 2;
    canvas.style.width = `${bounding.width}px`;
    canvas.style.height = `${bounding.height}px`;

    const context = canvas.getContext("2d");
    context.scale(2, 2);
    context.lineCap = "round";
    context.lineJoin = 'round';
    context.lineWidth = 20;

    contextRef.current = context;
  }, [])

  return (
    <div className='relative pt-40'>
      <canvas onMouseDown={StartDrawing} onMouseUp={StopDrawing} onMouseMove={Draw} ref={canvasRef} className='absolute left-0 top-0 w-full h-full cursor-crosshair' />
      <div style={{ cursor: 'url(feather-pen.png), auto' }} className='flex flex-col items-center'>
        <div className='relative pointer-events-none flex flex-col items-center gap-5 bg-grayBlue py-4 px-10 rounded-3xl'>
          <div className='flex'>
            <h1 className='select-none text-6xl text-center'>Let’s Build something <br />Truly Amazing. <span className='text-5xl text-[#0A2864]'>Shall We?</span></h1>
          </div>
          <p className='pointer-events-auto relative text-xl text-gray-700 bg-black/10 rounded-full px-4'>Want to Contact me? Say <a className='underline' href="mailto:viktor.trojann@gmail.com">viktor.trojann@gmail.com</a></p>
        </div>
        <div className='relative'>
          <SocialLinks />
        </div>
        <p className='relative pointer-events-none select-none mt-10 text-gray-700'>©Copyright, 2022</p>
      </div>
    </div>
  )
}

export default Footer;