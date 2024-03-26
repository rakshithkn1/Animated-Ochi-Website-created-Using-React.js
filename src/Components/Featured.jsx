import  { useState } from 'react'
import {motion} from 'framer-motion'
import {Power4} from 'gsap/all'



function Featured() {

const[isHovering,setHovering]=useState(false)

    const handleover=()=>{
        setHovering(true)
    }
    // motion  
  return (
    <div className='w-full py-10 bg-black '>
    <div className='w-full px-10' >
        <h1 className='text-8xl text-white font-semibold tracking-tight px-10 py-20 border-b-[1px] border-zinc-700 pb-20 '>Featured Projects
       </h1>
<div className='px-20'>
       <div className="cards flex gap-10 mt-10">  
       
            <div onMouseEnter={()=>handleover()}  onMouseLeave={()=>{setHovering(false)}} className="cardcontainer relative  w-1/2 h-[75vh] ">
            <h1 className='absolute text-[#CDEA68] left-full translate-x-1/2 top-1/2 translate-y-1/2  z-[9] text-6xl leading-none font-semibold '>
            {/* <h1 className='absolute text-[#CDEA68] right-full overflow-hidden translate-x-1/2 top-1/2 translate-y-1/2  z-[9] text-6xl leading-none font-semibold '>{"FYDE".split("").map((item,index)=>{
                return(<motion.span initial={{y:'100%'}} animate={isHovering ? {y:'0'} : ({y:'100%'})} transition={{ease: Power4.easeInOut,delay:index*.1}}  className='inline-block ' key={index}>{item}</motion.span>)
            })}</h1> */}
            </h1>
               <div className='card w-full h-full rounded-xl  overflow-hidden bg-white'>
             
               <h1 className='absolute text-[#CDEA68] left-full overflow-hidden -translate-x-1/2 top-1/2 translate-y-1/2  z-[9] text-6xl leading-none font-semibold '><motion.span initial={{y:'100%'}} animate={isHovering ? {y:'0'} : ({y:'100%'})} transition={{ease: Power4.easeInOut,delay:""*.1}}  className='inline-block '>FYDE</motion.span></h1>
{/* <h1 className='text-black flex flex-col items-center justify-center '>
    <a href="#google.com">Google</a>
    <a href="#google.com">Google</a>

</h1> */}
                <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" className='w-full h-full bg-cover ' alt="" />
                </div> 
            </div>
            <div className="cardcontainer relative w-1/2 h-[75vh]">
            <h1 className='absolute text-[#CDEA68] flex overflow-hidden  right-full translate-x-1/2 top-1/2 translate-y-1/2  z-[9] text-6xl leading-none font-semibold '>
            <h1 className='absolute text-[#CDEA68] right-full translate-x-1/2 top-1/2 translate-y-1/2  z-[9] text-6xl leading-none font-semibold '>{"VISE".split('').map((item,index)=>{
                return(<motion.span initial={{y:'100%'}} animate={isHovering ? {y:'0'} : ({y:'100%'})} transition={{ease: Power4.easeInOut,delay:""*.1}}  className='inline-block ' key={index}>{item}</motion.span>)
            })}</h1>
            </h1>
            <div className='card w-full h-full rounded-xl   overflow-hidden'>
            

            <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" className='w-full h-full bg-cover ' alt="" />

                </div> 

            </div>
</div>
</div>
        </div>
        </div>
  )
}

export default Featured