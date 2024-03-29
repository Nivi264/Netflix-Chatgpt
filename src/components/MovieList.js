import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    
    if(!movies) return;
  return (
    <div className='px-6 '>
      <h1 className='text-lg font-bold md:text-3xl text-white py-4'>{title}</h1>
        <div className='flex overflow-x-scroll scrollbar-hide '>
            
            <div className='flex'>
              {movies?.map((movie)=><MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
                
            </div>
        </div>
        
    </div>
  )
}

export default MovieList