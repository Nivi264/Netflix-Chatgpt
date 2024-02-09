import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { SRC_URL } from '../utils/constant'

const GptSearch = () => {
  return (
    <div>
      <div className='fixed -z-10'> 
        <img src={SRC_URL}
        alt='logo'/>
            
        </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>

    </div> 
  )
}

export default GptSearch