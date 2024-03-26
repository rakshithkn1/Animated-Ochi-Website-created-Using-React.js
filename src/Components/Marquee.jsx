// import React from 'react'
import {motion} from 'framer-motion'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.2'  className='w-full min-h-screen py-20 rounded-sm bg-green-500'>
        <div className='text border-t-2  border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden gap-10'>
            <motion.h1 initial={{x:'0'}} animate={{x:'-100%'}} transition={{ease:'linear',duration:10,repeat:Infinity }} className='text-[15vw] leading-none font-semibold uppercase   '>We are ochi</motion.h1>
            <motion.h1  initial={{x:'0'}} animate={{x:'-100%'}} transition={{ease:'linear',duration:10,repeat:Infinity }} className='text-[15vw] leading-none font-semibold uppercase  '>We are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee