// import React from 'react'
// import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowUpLong } from "react-icons/fa6";

import {motion} from 'framer-motion'
import Navbar from "./Navbar";
function Landing() {
motion

  return (
    
    <div data-scroll data-scroll-section data-scroll-speed='-.3' className='w-full h-screen bg-zinc-900 pt-1'>
        <Navbar/>
        <div className='textstructure mt-52 px-20 '>
            
            <div className='font-bold maskers overflow-hidden '>
                <h1 className='text-8xl uppercase leading-[6vw] tracking-tighter font-light'>We Create</h1>
                <div className='w-fit flex '>
                    <motion.div initial={{width:0}} animate={{width:'9vw'}} transition={{ease:[0.76,0,0.24,1],duration:1.5 }}
                    
                    className='w-[9vw] h-[6vw] relative top-1 rounded-sm bg-red-500'></motion.div>
                    
                <h1 className='text-8xl uppercase leading-[6vw] tracking-tighter mt-1 font-light'>Eye opening </h1>

                </div>
                <h1 className='text-8xl uppercase leading-[5.5vw] tracking-tighter mt-1  font-light'>presentations</h1>
                </div>
                </div>
                <div className='border-t-2 border-zinx-700 mt-28 flex justify-between items-center py-4 px-20'>

                    {['For Public and Private Companies','From the first pitch to IPO ',].map((item,index)=>{
                        return <p key={index} className='text-md font-light tracking-tight leading-none'>{item}</p>
                    })}
                                            <div className='start'>
                                                <div className='px-5 py-2 border-2 rounded-full border-zinc-500 font-light text-md capitalize'>start the project</div>
                                                <div className='w-5 h-7 flex items-center justify-center rounded-full'>
                                                    <span className='rotate-[45deg]'><FaArrowUpLong/>
</span>
                                                    
                                                    </div>
                                            </div>

                </div>
                </div>
  )
}

export default Landing