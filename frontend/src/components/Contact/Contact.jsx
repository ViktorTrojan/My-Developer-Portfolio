import React from 'react'
import { useState } from 'react';

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
  const [sendMail, setSendMail] = useState({ mail: '', subject: '', msg: '' });
  const setMail = (e) => setSendMail({ ...sendMail, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent reloading website

    // await axios.post('http://localhost:4000/sendmail', sendMail)
    //   .then((res) => {
    //     alert(res.data)
    //   }).catch((err) => {
    //     console.log(err)
    //     console.log(err.code)
    //   });
  }

  return (
    <div className='flex w-full justify-center mt-16'>
      <div className='flex flex-col pt-2 p-5 h-full bg-whiteblue rounded-2xl w-[95%] sm:w-[550px]'>
        {/* Indicator close buttons */}
        <div className='flex gap-2 py-3'>
          <div className='bg-consolered rounded-full w-4 h-4 sm:w-5 sm:h-5' />
          <div className='bg-consoleyellow rounded-full w-4 h-4 sm:w-5 sm:h-5' />
          <div className='bg-consolegreen rounded-full w-4 h-4 sm:w-5 sm:h-5' />
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col max-w-xl w-full gap-5'>
          <div>
            <p className='text-3xl font-bold'>Contact Me</p>
            <p className='text-gray-800'>Use the form below to send me an E-Mail.</p>
          </div>
          <input value={sendMail.mail} onChange={setMail} className='rounded-md p-2 border focus:outline-none focus:ring-2' type="email" placeholder='E-Mail' name='mail'></input>
          <input value={sendMail.subject} onChange={setMail} className='rounded-md p-2 border focus:outline-none focus:ring-2' placeholder='Subject' name='subject'></input>
          <textarea value={sendMail.msg} onChange={setMail} className='rounded-md p-2 border focus:outline-none focus:ring-2' name='msg' rows="10" placeholder='Message'></textarea>

          <Btn name='Send Mail' />
        </form>
      </div>

      {/* <div className='flex flex-col w-[600px] rounded-xl bg-lightblue px-5 py-5'>
        
        <div className='flex flex-col gap-2 my-5'>
          <InputBox className={'flex flex-col w-full h-16 bg-white rounded-2xl border p-2'} title='E-Mail' inp='Max.mustermann@gmail.com' />
          <InputBox className={'flex flex-col w-full h-16 bg-white rounded-2xl border p-2'} title='Subject' inp='Subject goes here' />
          <InputBox className={'flex flex-col w-full h-[250px] bg-white rounded-2xl border p-2'} title='Message' inp='Message goes here' />
        </div>
        <Btn name='Send Mail'/>
      </div> */}

    </div >
  )
}

export default Contact