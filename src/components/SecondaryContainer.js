import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies);
  return (
    <div>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/> 
      
      {/*
        above nowplaying movies is from movieslice.js
        -Movielist-popular
          -Moviecards*n
        Movielist -Nowplaying
        Movielist-Trending
        Movielit-horror
       */ }
    </div>
  )
}

export default SecondaryContainer