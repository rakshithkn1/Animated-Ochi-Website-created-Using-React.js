import  { useEffect, useState } from 'react'

function Eyes() {
const[rotate,setrotate]=useState(0)

    useEffect(()=>{
        window.addEventListener('mousemove',(e)=>{
          let mouseX= e.clientX
          let mouseY=e.clientY


          let deltaX=mouseX-window.innerWidth/2;
          let deltaY=mouseY-window.innerHeight/2;

          var angle=Math.atan2(deltaY,deltaX)*(180/Math.PI)
          setrotate(angle-180)
        })
    })
  return (
    <div className='eyes h-screen  w-full overflow-hidden'>Eyes
    <div data-scroll data-scroll-speed='-.7' className=' relative w-full h-full bg-cover bg-center  bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className='absolute   top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] gap-10 flex bg-green-00 '> 
        <div className=' w-[15vw] h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full'>
            <div className=' relative w-2/3 h-2/3  items-center justify-center rounded-full bg-zinc-900 '>
                <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full rotate h-10  '>
            <div  className='w-10 h-10 rounded-full bg-zinc-100'></div>
            </div>
            </div>
        </div>
        <div className=' w-[15vw] h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full'>
        <div className='w-2/3 h-2/3 rounded-full relative bg-zinc-900  items-center justify-center'>  
        <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] rotate h-10 '>     
            <div className='w-10 h-10   rounded-full bg-zinc-100'></div>
            </div> 
</div>

        </div>
        </div>
    </div>
    </div>
  )
}

export default Eyes