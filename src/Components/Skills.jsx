import React from 'react'

const skillList =[
  {
    id: 1,
    image: './HTML.png',
    title: 'HTML',
    description: 'Skilled in writing semantic and accessible HTML to create structured, SEO-friendly web pages.'
  },
  {
    id: 2,
    image: './CSS.png',
    title: 'CSS',
    description: 'Proficient in styling modern UI with CSS, including Flexbox, Grid, and responsive design techniques.'
  },
  {
    id: 3,
    image: './JS.png',
    title: 'JavaScript',
    description: 'Strong understanding of core JavaScript concepts used to build interactive and dynamic web features.'
  },
  {
    id: 4,
    image: './React.png',
    title: 'React',
    description: 'Experienced in building fast, reusable and component-based user interfaces using React and hooks.'
  },
  {
    id: 5,
    image: './PHP.png',
    title: 'PHP',
    description: 'Familiar with backend development using PHP for server-side scripting, form handling and MySQL integration.'
  },
  {
    id: 6,
    image: './Tailwind.png',
    title: 'Tailwind',
    description: 'Efficient in using Tailwind CSS to build responsive, utility-first designs with minimal custom CSS.'
  },
  {
    id: 7,
    image: './Bootstrap.png',
    title: 'Bootstrap',
    description: 'Comfortable using Bootstrap components and grid system to build mobile-first, responsive layouts quickly.'
  }
]
const SkilBox= ({image,title,description}) =>(
    <article className='bg-gray-700 md:w-60 md:h-80 h-70 w-60 p-7 rounded-lg shadow-lg text-center hover:bg-purple-800 transition-all duration-300 flex-shrink-0 mb-4'>
       <figure className='flex justify-center mb-4'>
        <img src={image} alt="error" className='w-18 h-18 md:w-20 md:h-20' />
        </figure> 
        <h3 className='md:text-2xl text-xl font-semibold mb-2'>{title}</h3>
        <p className='text-gray-400 text-sm sm:text-base'>{description}</p>
    </article>
)

const Skills = () => {

  return (
    <div id='skills' className='min-h-[600px] relative pt-15'>
    <section className='realtive'>
     <div className='absolute w-40 h-36 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 z-0 lg:left-110 md:left-80 sm:left-50 left-23'></div>

       <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center pb-15 text-white leading-15' data-aos='fade-down' data-aos-delay='200'>My Experience
       <br/> and <span className='text-[#801b9c]'>Skills</span></h1>
       <p className='absolute text-white text-5xl top-24 left-3' data-aos='fade-right' data-aos-delay='200'><img className="transform h-25 scale-x-[-1]" src="./Robot.png" alt="" /></p>
      <p className='absolute text-white text-5xl top-24 right-3' data-aos='fade-up' data-aos-delay='200'><img className='h-25' src="./Robot.png" alt="" /></p>
      </section>
       

      <section className='cursor-pointer flex flex-row mx-10 gap-5 overflow-hidden overflow-x-auto scrollbar-custom ' data-aos='fade-down' data-aos-delay='300'>
      {skillList.map((skill)=>(
        <SkilBox key={skill.id} image={skill.image} title={skill.title} description={skill.description} />
      ))}
    </section>
      <p className='absolute text-white text-4xl sm:text-5xl top-90 left-5 '>{'<'}</p>
      <p className='absolute text-white text-4xl sm:text-5xl top-90 right-5'>{'>'}</p>
    </div>
  )
}

export default Skills
