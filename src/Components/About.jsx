import React from 'react'

const About = () => {
  return (
    <div id='about' className='relative min-h-[820px] overflow-hidden sm:min-h-[790px] md:min-h-[740px] lg:min-h-[700px] flex items-center justify-center text-white px-20 pt-30 pb-4 sm:pt-17 md:pt-0'>
        <div className='absolute w-40 h-40 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-60 md:right-40 right-20 z-0'></div>
        <div className='absolute w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-40 -left-50 z-0'></div>

        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-28 items-center'>

      <figure
         data-aos="fade-right" 
         data-aos-delay="200" 
         className="flex items-center justify-center relative z-12">
     {/* Background Shape */}
    <div 
    className="absolute bg-gradient-to-l from-[#6c95f5] sm:w-140 sm:h-80 md:w-120 lg:w-130 w-110 h-67 rounded-full rotate-[22deg] z-10"
    ></div>

  {/* Rocket Image */}
  <img 
    src="./Rocket.png" 
    alt="Rocket" 
    className="absolute scale-x-[-1] w-30 h-25 rounded-3xl z-10 transform -translate-x-35 -translate-y-38 sm:-translate-x-47 sm:-translate-y-45 md:-translate-x-36 md:-translate-y-45"
  />

  {/* About Image */}
  <img 
    src="./About_Yash.png" 
    alt="yash_about" 
    className="relative z-10 w-44 h-44 sm:w-56 sm:h-62 -top-6 rounded-lg" />

  {/* Smily */}
  <img 
    src="./Smily.png" 
    alt="smily" 
    className="absolute w-20 h-20 rounded-3xl z-20 transform translate-x-34 translate-y-40 sm:translate-x-46 sm:translate-y-50  md:translate-x-36 md:translate-y-45"
  />
      </figure>

        <article className='top-3 md:top-0 relative -mx-10 md:mx-0 text-center md:text-left' data-aos="fade-up" data-aos-delay="200" >
            <header>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4' >About Me</h1>
            </header>
            <p className='text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed'>
             I live in Ghaziabad and completed my schooling under the ICSE board, which helped me build a strong academic foundation. Over time, I developed a keen interest in frontend development, where I enjoy creating user-friendly interfaces and enhancing user experiences. I’m passionate about solving problems through code and continuously seek opportunities to improve my skills by tackling real-world challenges.
            </p>
             <a href="./yash_resume.pdf" target='_blank'>
            <footer className='inline-flex text-white border-2 py-2 px-4 sm:px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-sm sm:text-lg cursor-pointer'>View CV ! 😊</footer></a>
         </article>
        </div>

    </div>
  )
}

export default About
