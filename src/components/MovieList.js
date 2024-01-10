import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    console.log(movies);
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <div>
                <MovieCard posterPath/>
            </div>
        </div>
        <MovieCard/>
    </div>
  )
}

export default MovieList