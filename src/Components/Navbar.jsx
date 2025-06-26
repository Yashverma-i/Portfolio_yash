import React, {useState} from 'react'
import {FiMenu,FiX} from 'react-icons/fi'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const NavbarLinks = [
        {id:1,name:'Home',link:'#home'},
        {id:2,name:'About',link:'#about'},
        {id:3,name:'Skills',link:'#skills'},
        {id:4,name:'My Projects',link:'#projects'}
    ]
  return (                        
    <div className='fixed top-0 left-0 w-full z-20 text-white'
    data-aos='fade-up' data-aos-delays='300'>
        <div className="container mx-auto flex items-center justify-between p-5">
            <a href="#home" className='text-4xl font-bold italic text-white'>Portfolio</a>
                                                   
            <button className='md:hidden cursor-pointer focus:outline-none' onClick={()=>setIsOpen(!isOpen)}> 
              <FiMenu className='w-8 h-8 text-white'/>
            </button>

 
            <nav className='hidden md:flex items-center space-x-7'>
            {NavbarLinks.map((link)=>(
                <a href={link.link} key={link.id} className='hover:text-gray-300 text-lg'>
                    {link.name}
                </a>
            ))}
            <button className='inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded-full text-lg cursor-pointer'>
             <a href="#contact">Contact</a>
             </button>
           </nav>
       </div> 

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-[#801b9c] absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 pt-12 z-50`}>
        <button className='absolute top-5 right-5 text-white  cursor-pointer' onClick={()=>setIsOpen(false)}>
            <FiX className='w-8 h-8'/>
        </button>
         {NavbarLinks.map((link)=>(
                <a href={link.link} key={link.id} className='hover:text-gray-300 text-white text-lg' onClick={()=>setIsOpen(false)}>
                    {link.name}
           </a>
            ))}
         <button className='inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded-full text-lg cursor-pointer'><a href="#contact" onClick={()=>setIsOpen(false)}>Contact</a>
        </button>
      </div>

      </div>
  )
}

export default Navbar
