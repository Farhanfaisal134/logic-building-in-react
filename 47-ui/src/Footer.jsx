import React from 'react'
import { FaBehance, FaDribbble, FaFacebook, FaPaperPlane, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-[#0a0f2b] text-white pt-12 pb-6 relative'>
      <div className='absolute inset-0 bg-no-repeat bg-cover opacity-20' style={{ backgroundImage: "url('img3.jpg')" }}></div>
      <div className='container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10'>
        <div>
          <h2 className='text-xl font-bold text-blue-400'>We are <span className='text-blue-600'>DigiBal</span></h2>
          <p className='mt-3 text-gray-300 text-sm'>We are very happy for
            client's reviews.</p>

        </div>

        <div>
          <h2 className='text-xl font-bold text-blue-400'>Newsletter</h2>
          <p className='mt-4 text-gray-300 text-sm'>We are very happy for
            client's reviews.</p>
          <div className='mt-4 flex items-center border border-gray-600 overflow-hidden'>
            <input placeholder="Your mail address" className='w-full px-4 py-2 bg-transparent text-white placeholder=gray-400'></input>
            <button className='bg-blue-600 px-4 py-2 '><FaPaperPlane /></button>
          </div>

          <div className='mt-4 flex gap-3 text-gray-400'>
            <FaFacebook />
            <FaTwitter />
            <FaDribbble />
            <FaBehance />
          </div>
        </div>

        <div>
          <h2 className='text-xl font-bold text-blue-400'>Official Info</h2>
          <p className='mt-3 flex items-center text-gray-300 text-sm'>Address: 30 ffkllk Road, India</p>
          <p className='mt-3 flex items-center text-gray-300 text-sm'>Phone: (+9876543210)</p>
          <p className='mt-3 flex items-center text-gray-300 text-sm'>Email:abc@gmail.com</p>
          <p className='mt-3 flex items-center text-gray-300 text-sm'>Mail To:info@gmail.com</p>

        </div>

        <div>
          <h2 className='text-xl font-bold text-blue-400'> Instagrams</h2>
          <div className='grid grid-cols-3 gap-2 mt-4'>
            <img src="img1.jpg" className='w-full h-10 object-cover'></img>
            <img src="img1.jpg" className='w-full h-10 object-cover'></img>
            <img src="img1.jpg" className='w-full h-10 object-cover'></img>
            <img src="img1.jpg" className='w-full h-10 object-cover'></img>
            <img src="img1.jpg" className='w-full h-10 object-cover'></img>
            <img src="img1.jpg" className='w-full h-10 object-cover'></img>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer
