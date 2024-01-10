import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'> 
        <h1 className='font-bold text-3xl  '>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div >
            <button className=' p-4 px-12  font-semibold  text-xl  rounded-md text-black bg-white hover:bg-opacity-70 '>▶️Play</button>
            <button className='bg-gray-500 font-semibold  text-white p-4 px-12 mx-2  text-xl bg-opacity-60 rounded-md hover:bg-opacity-20'>More Info</button>
        </div>

    </div>
  )
}

export default VideoTitle;