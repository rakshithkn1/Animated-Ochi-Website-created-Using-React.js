import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#cdea68] rounded-tr-6xl text-black'>
        <h1 className='font-light text-6xl leading-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nam quae, libero vitae neque dicta. Voluptatum harum delectus quasi officiis libero. Aliquid, expedita non. Ratione laudantium porro aspernatur quasi a?</h1>
        <div className='w-full border-t-[2px] border-[#91a549e1] mt-20 pt-20 flex '>
          <div className='w-1/2 '>
            <h1 className='text-5xl font-semibold'>Our Approach:</h1>
            <button className='px-10 uppercase py-6 bg-zinc-500 rounded-full text-white mt-10 flex items-center gap-10'>Read More
            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div></button>
          </div>
          <div className='w-1/2 h-[70vh] rounded-3xl bg-red-500'>
            <img className='object-cover h-full w-full rounded-3xl'  src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80" alt="" />
          </div>
        </div>
    </div>
  )
}

export default About