import React from 'react'
import Navbar from './Navbar'
import TypingAnimation from './TYpingAnimation'


const Hero = () => {

  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col items-center'>
      <div className='md:h-[410px] h-[470px] w-[360px] bg-gradient-to-r absolute from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] transform rotate-45 z-0 right-2 top-28 rounded-3xl'>
      </div>
      <Navbar />
      <main id='home' className='flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:pb-23 md:pt-28 pt-24 mt-14 md:mt-0 z-10'>
        <section className='flex-1 md:text-left mt-6 md:mt-0 relative md:pl-20'  data-aos='fade-right' data-aos-delay='300'>
          <div className='absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 -left-12'></div>
            <header>
              <h1 className='text-4xl sm:text-4xl md:text-5xl font-bold text-white'>Yash Verma</h1>
              <h2 className='text-xl sm:text-3xl md:text-2xl font-bold text-[#g169ec] sm:text-[#c744ec] md-2'>I'm a <TypingAnimation /> </h2>
            </header>
            <p className='text-base sm:text-lg md:text-lg text-gray-200 md-6'>
            I am a B-Tech graduate from ABESIT College, committed to continuously enhancing my technical skills to contribute effectively and create meaningful impact in the industry.
            </p>
          <div className='flex items-center gap-6 mb-3'>
            <a href="https://github.com/Yashverma-i" target='_blank'>
              <img src="./Github.png" alt=""  className='md:w-22 w-16'/>
            </a>
            <a href="https://leetcode.com/u/Yash_203/" target='_blank'>
              <img src="./Leetcode.png" alt=""  className='md:w-16 w-13 rounded-[50%]'/>
            </a>
            <a href="https://www.linkedin.com/in/yash-verma-8451bb262/" target='_blank' >
              <img src="./linkdin.png" alt="" 
              className='md:w-28 w-20' />
            </a>
            <a href="https://www.instagram.com/its_yash.vr/?igsh=MW4wY3k2anJkcDZ1dQ%3D%3D#" target='_blank'>
              <img src="./Instagram.png" alt=""  className='md:w-28 w-22'/>
            </a>
          </div>
          <a href="./yash_resume.pdf" download>
          <button className='inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg cursor-pointer'>Download CV</button>
          </a>
        </section>
        
<figure data-aos='fade-up' data-aos-delay='400' className='flex flex-1 md:justify-center'>
  <img 
    src='./yash.jpg' 
    alt="" 
    className='h-auto w-full max-w-[320px] md:max-w-[400px] rounded-full object-cover'
  />
</figure>


      </main>
    </div>
  )
}

export default Hero
