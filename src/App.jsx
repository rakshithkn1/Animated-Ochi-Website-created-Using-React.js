// import React from 'react'
import About from './Components/About'
import Landing from './Components/Landing'
import Marquee from './Components/Marquee'
import Navbar from './Components/Navbar'
import Eyes from './Components/Eyes'
import Featured from './Components/Featured'
import Cards from './Components/Cards'
import Footer from './Components/Footer'

import LocomotiveScroll from 'locomotive-scroll';


function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen text-white'>
    <Navbar/>
    <Landing/>
    <Marquee/>
    <About/>
    <Eyes/>
    <Featured/>
    <Cards/>
    <Footer/>
    </div>
  )
}

export default App