import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { SRC_URL } from '../utils/constant'

const GptSearch = () => {
  return (
    <><div className='fixed -z-10'> 
    <img className='h-screen object-cover' src={SRC_URL}
    alt='logo'/>
        
    </div>
    <div className=''>
    
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div> 
    </>
    
  )
}

export default GptSearch