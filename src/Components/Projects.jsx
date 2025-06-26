import React from 'react'

const ProjectList = [
  {
    id: 1,
    image: './Screen_size_simulator.gif',
    title: 'Screen-Size-Simulator',
    description: 'A tool to simulate various device screen sizes, helping developers test responsive designs in real-time.',
    link: 'https://screen-size-simulator.vercel.app'
  },
  {
    id: 2,
    image: './Memory_Game.gif',
    title: 'Memory Game',
    description: 'A fun and interactive memory card game built with React to test concentration skills.',
    link: 'https://memory-game-rose-two.vercel.app'
  },
  {
    id: 3,
    image: './Text_Pad.gif',
    title: 'Text-Pad',
    description: 'A simple, lightweight online text editor that allows users to write and format text easily.',
    link: 'https://text-pad.vercel.app'
  },
  {
    id: 4,
    image: './TaskFlow.gif',
    title: 'TaskFlow Manager',
    description: 'A task management system for assigning, tracking and organizing project tasks efficiently.',
    link: 'https://github.com/Yashverma-i/TaskFlow-Manager'
  },
  {
    id: 5,
    image: './PC_Component.gif',
    title: 'PC Component Market',
    description: 'A marketplace platform where users can explore and manage PC components using Php and MySQL.',
    link: 'https://github.com/Yashverma-i/pc_component'
  },
  {
    id: 6,
    image: './Current_Affair.gif',
    title: 'Current Affair',
    description: 'A responsive news and current affairs web page built using React JS, designed to display trending headlines.',
    link: 'https://github.com/Yashverma-i/News_currentAffair'
  }
];

const ProjectBox = ({ image, title, description,link }) => (
  <article
    className='bg-zinc-600 md:h-84 md:w-70 sm:h-83 w-65 h-80 rounded-lg shadow-lg text-center hover:bg-purple-700 hover:scale-[1.06] transition-all duration-300 overflow-hidden flex flex-col cursor-pointer'
    title='open project'
    rel="noopener noreferrer"
    onClick={() => window.open(link, '_blank')}>
      <figure className='flex justify-center items-center w-full h-48 bg-gray-700'>
        <img src={image} alt='error' className='w-full h-full object-cover' />
      </figure>
      <h3 className='md:text-xl text-xl font-semibold pt-2'>{title}</h3>
      <p className='text-gray-400 px-3 text-sm sm:text-base'>{description}</p>
  </article>
)

const Projects = () => {
  return (
    <div id='projects' className='min-h-[700px] relative pt-14 pb-15'>
     <div className='absolute sm:w-40 sm:h-36 w-33 h-28 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 z-0 lg:left-160 md:left-130 sm:left-100 left-50'></div>
      <div className='absolute sm:w-40 sm:h-36 w-33 h-28 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 z-0 lg:top-130 md:top-100 sm:top-60'></div>

     <h1 className='text-[#801b9c] text-3xl md:text-4xl lg:text-5xl font-bold text-center pb-5 text-white leading-15' data-aos='fade-down' data-aos-delay='200'>All Projects</h1>

  <div className="flex justify-center" data-aos='fade-right' data-aos-delay='200'>
  <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15 z-10' >
    {ProjectList.map((project) => (
      <ProjectBox
        key={project.id}
        image={project.image}
        title={project.title}
        description={project.description}
        link={project.link}
      />
    ))}
  </section>
</div>
     
    </div>
  )
}

export default Projects
