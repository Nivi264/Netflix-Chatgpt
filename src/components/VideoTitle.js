import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-36 px-12 '> 
        <h1 className='font-bold text-3xl  '>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div >
            <button className='bg-gray-700  text-white p-4 px-12   text-xl bg-opacity-60 rounded-md'>▶️Play</button>
            <button className='bg-gray-700  text-white p-4 px-12 mx-2  text-xl bg-opacity-60 rounded-md'>❗More Info</button>
        </div>

    </div>
  )
}

export default VideoTitle;