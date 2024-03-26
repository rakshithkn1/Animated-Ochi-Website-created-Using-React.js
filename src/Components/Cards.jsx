import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen flex items-center px-32  gap-5  bg-zinc-100'>
       <div className='cardscontainer  h-[50vh]  w-1/2'>
        <div className='card relative w-full h-full rounded-xl bg-cover flex justify-center items-center bg-green-900'>
            <img className='w-32' src="https://media.istockphoto.com/id/857403148/photo/less-is-more-text-on-paper-word-less-is-more-on-torn-paper-concept-image.jpg?s=612x612&w=0&k=20&c=T0K5R6LYZlCoUzs3vEhTcI7Jb1ozAFTHwI3Uq8cYy_I=" alt="" />
        <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full border-2 '>hey</button>
        </div>
       </div>
       <div className='cardscontainer w-1/2 flex gap-5 h-[50vh]'>
       <div className='card w-1/2 h-full rounded-xl  bg-gray-600 flex items-center justify-center'>
       <img className='w-32' src="https://media.istockphoto.com/id/1503159013/vector/less-is-more-speech-bubble.jpg?s=612x612&w=0&k=20&c=sYySsv_ozsKDUb6eHFeoJlXZJ6XRCmKU0Upe2saq6EM=" alt="" />
        {/* <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full border-2 '>hey</button> */}
       </div>
       <div className='card w-1/2 h-full rounded-xl flex items-center justify-center bg-blue-800'>
       <img className='w-32' src="https://media.istockphoto.com/id/1503159013/vector/less-is-more-speech-bubble.jpg?s=612x612&w=0&k=20&c=sYySsv_ozsKDUb6eHFeoJlXZJ6XRCmKU0Upe2saq6EM=" alt="" />
        {/* <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full border-1 z-[9]'>hey</button> */}
       </div>

       </div>
    </div>
  )
}

export default Cards