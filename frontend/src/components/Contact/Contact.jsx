import React from 'react'

const InputBox = ({ title, inp, className }) => {
  return (
    <div className={className}>
      <p className='text-gray-500 text-sm font-semibold'>{title}</p>
      <p>{inp}</p>
    </div>
  );
}

// TODO: make Btn component and remove the one in work.jsx
const Btn = ({ name }) => {
  return (
    <button className="flex w-full p-4 bg-[#084d93] rounded-xl items-center justify-center">
      <p className="text-[#ffffff] font-bold">{name}</p>
    </button>
  );
}

function Contact() {
  return (
    <div className='flex w-full justify-center mt-16 '>

      <div className='flex flex-col w-[600px] rounded-xl bg-lightblue px-5 py-5'>
        <p className='text-3xl font-bold'>Contact Me</p>
        <p className='text-gray-800'>Use the form below to send me an E-Mail.</p>
        <div className='flex flex-col gap-2 my-5'>
          <InputBox className={'flex flex-col w-full h-16 bg-white rounded-2xl border p-2'} title='E-Mail' inp='Max.mustermann@gmail.com' />
          <InputBox className={'flex flex-col w-full h-16 bg-white rounded-2xl border p-2'} title='Subject' inp='Subject goes here' />
          <InputBox className={'flex flex-col w-full h-[250px] bg-white rounded-2xl border p-2'} title='Message' inp='Message goes here' />
        </div>
        <Btn name='Send Mail'/>
      </div>
      
    </div>
  )
}

export default Contact