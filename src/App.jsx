import './App.css'
import {React, useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'


function App() {
   useEffect(()=>{
    AOS.init({
      duration:1000,
    })
   },[])

  return (
 <main className='bg-gray-900'>
  <Hero />
  <About/>
  <Skills/>
  <Projects/>
  <Contact/>
 </main>
  )
}

export default App
