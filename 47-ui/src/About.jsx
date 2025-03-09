import React from 'react'

const About = () => {
  return (
    <div className='w-full py-28 px-6 md:px-16 flex flex-col md:flex-row items-center gap-10'>
      <div className='relative'>
        <img src="img1.jpg" className='w-full rounded-lg shadow-lg'></img>
        <div className='absolute top-6 -right-5 md:-right-10 bg-blue-600 text-white px-5 py-3 rounded-lg shadow-lg'>
          <div className='flex items-center gap-2'>
            <span className='text-3xl font-bold'>12+</span>
          </div>
          <p className='text-lg'>Years <br /> Experience</p>
        </div>

      </div>

      <div className='w-full md:w-1/2 text-left ml-10'>
        <h3 className='text-blue-600 font-bold uppercase text-sm '>About Cleaning Agency</h3>
        <h2 className='text-4xl font-extrabold uppercase text-blue-900 mt-2'>You can depend on us <br /> to get a good  services</h2>
        <p className='text-lg font-bold mt-4 '>We are DigiBal, cleaning service provider.</p>
        <p className='text-gray-600 text-lg mt-4'>
          As a web crawler expert, I help otganizations adjust to the expanding significance.
          As a web crawler expert, I help otganizations adjust to the expanding significance.
          As a web crawler expert, I help otganizations adjust to the expanding significance.
        </p>
        <button className=' mt-6  mx-6 mb-6 bg-blue-600 text-white font-bold px-6 py-2 rounded-lg'>About Us</button>



      </div>
    </div>
  )
}

export default About
